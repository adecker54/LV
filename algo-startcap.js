/* ==========================================================
   algo-startcap.js gemini
========================================================== */
// 1. A FŐ SZÁMÍTÁSI FÜGGVÉNY, AMIT A HTML GOMB MEGHÍV
function szamolKezdotoke() {
    // Értékek beolvasása a HTML mezőkből
    const kivetVal = document.getElementById('startcap-kivet') ? parseFloat(document.getElementById('startcap-kivet').value) : 1000;
    const kamatVal = document.getElementById('startcap-kamat') ? parseFloat(document.getElementById('startcap-kamat').value) : 15;
    const honapVal = document.getElementById('startcap-honap') ? parseInt(document.getElementById('startcap-honap').value) : 24;
    const kiveszVal = document.getElementById('startcap-kivesz') ? document.getElementById('startcap-kivesz').value : 'NEM';

    // Egyszerűsített matematikai becslés a szükséges kezdőtőkére
    const szuksegesToke = kivetVal / (kamatVal / 100);
    const kerekKezdoToke = Math.ceil(szuksegesToke / 100) * 100;

    // Megjelenítjük a szöveges eredményjelző zónát
    const eredmenyZona = document.getElementById('startcap-eredmeny');
    if (eredmenyZona) {
        eredmenyZona.style.display = 'block';
    }

    const resSzuksegesErtek = document.getElementById('resSzuksegesErtek');
    if (resSzuksegesErtek) resSzuksegesErtek.innerText = szuksegesToke.toFixed(2) + " $";

    const resKerekitettErtek = document.getElementById('resKerekitettErtek');
    if (resKerekitettErtek) resKerekitettErtek.innerText = kerekKezdoToke.toFixed(2) + " $";

    // Nyelvi címkék frissítése
    if (typeof getAktualisSzovegek === 'function') {
        const sz = getAktualisSzovegek();
        if (document.getElementById('resSzuksegesLabel')) document.getElementById('resSzuksegesLabel').innerText = sz.lblSzukseges || "Szükséges tőke:";
        if (document.getElementById('resKerekitettLabel')) document.getElementById('resKerekitettLabel').innerText = sz.lblKerekitett || "Kerekített kezdőtőke:";
    }

    // Átadjuk a stafétát a szimulációnak és a grafikonnak
    futtatValodiSzimulacio(kerekKezdoToke, kamatVal, honapVal, kiveszVal, kivetVal);
}

// 2. A SZIMULÁCIÓS ÉS GRAFIKONRAJZOLÓ FÜGGVÉNY
function futtatValodiSzimulacio(inditoToke, alapKamat, vegHonap, kiveszTokeAkar, celOsszeg) {
    let szovegek = window.szovegek;
    if (!szovegek && typeof getAktualisSzovegek === 'function') {
        szovegek = getAktualisSzovegek();
    }
    if (!szovegek) {
        szovegek = { lblGrafikonHo: ". hónap", lblGrafikonHo: ". hó" };
    }
    
    let toke = inditoToke;
    let tokeKiveve = false;
    
    // --- 0. HÓNAP SZÁMÍTÁSA ÉS GENERÁLÁSA ---
    let nyitoToke0 = toke;
    // A 0. hónapra is generálunk egy alap véletlenszerű kamatot, mint a ciklusban
    let randomSzorzo0 = 0.8 + Math.random() * 0.4;
    let aktualisHaviKamatLab0 = (alapKamat / 100) * randomSzorzo0;
    let haviKamatErtek0 = nyitoToke0 * aktualisHaviKamatLab0;
    
    // A tőke növekszik a 0. hónap kamatával
    toke += haviKamatErtek0;
    let zaroToke0 = toke;

    // Grafikon kezdőpontjai (0. hónap záró értékei)
    let chartLabels = ["0" + szovegek.lblGrafikonHo];
    let chartData = [zaroToke0];
    let chartKamatData = [haviKamatErtek0]; 

    let tisztaSorokHtml = "";

    // A 0. hónap sora most már teljesen ki van számolva bolddal és fehérrel!
    tisztaSorokHtml += `<tr style="border-bottom:1px solid #333; font-weight:bold; color:#fff;">
        <td style="padding:8px; text-align:center;">0.</td>
        <td style="padding:8px;">${nyitoToke0.toFixed(2)}</td>
        <td style="padding:8px;">${haviKamatErtek0.toFixed(2)} $ (${(aktualisHaviKamatLab0 * 100).toFixed(2)}%)</td>
        <td style="padding:8px; color:#d4af37;">${zaroToke0.toFixed(2)}</td>
    </tr>`;

    // --- SZIMULÁCIÓS CIKLUS AZ 1. HÓNAPTÓL ---
    for (let i = 1; i <= vegHonap; i++) {
        let nyitoToke = toke; // Ez megegyezik az előző hónap (akár a 0.) záró tőkéjével
        
        let randomSzorzo = 0.8 + Math.random() * 0.4; 
        let aktualisHaviKamatLáb = (alapKamat / 100) * randomSzorzo;
        let haviKamatErtek = nyitoToke * aktualisHaviKamatLáb;
        
        toke += haviKamatErtek;
        let megjegyzesSzoveg = "";

        if (kiveszTokeAkar === "IGEN" && !tokeKiveve && toke >= (inditoToke * 2)) {
            toke -= inditoToke;
            tokeKiveve = true;
            
            let lbl1 = "Kezdőtőke";
            let lbl2 = "kivéve!";
            if (typeof szotar !== 'undefined' && szotar[aktualisNyelv]) {
                lbl1 = szotar[aktualisNyelv].lblListabeszur1 || lbl1;
                lbl2 = szotar[aktualisNyelv].lblListabeszur2 || lbl2;
            }
            megjegyzesSzoveg = ` <br><span style="color:#ff4d4d; font-weight:bold;">${lbl1} (${inditoToke} $) ${lbl2}</span>`;
        }

        let zaroToke = toke;

        let hoToldalek = ". hó";
        if (typeof szotar !== 'undefined' && szotar[aktualisNyelv]) {
            hoToldalek = szotar[aktualisNyelv].lblGrafikonHo || hoToldalek;
        }
        chartLabels.push(i + hoToldalek);
        chartData.push(zaroToke);
        chartKamatData.push(haviKamatErtek);

        tisztaSorokHtml += `<tr style="border-bottom:1px solid #222;">
            <td style="padding:8px; text-align:center; color:#888;">${i}.</td>
            <td style="padding:8px;">${nyitoToke.toFixed(2)}</td>
            <td style="padding:8px;">${haviKamatErtek.toFixed(2)} $ (${(aktualisHaviKamatLáb * 100).toFixed(2)}%)${megjegyzesSzoveg}</td>
            <td style="padding:8px; font-weight:bold; color:#d4af37;">${zaroToke.toFixed(2)}</td>
        </tr>`;
    }

    // --- MEGJELENÍTÉS (Változatlanul hagyva a működő logikát) ---
    const tBody = document.getElementById('tableBody');
    if (tBody) {
        tBody.innerHTML = tisztaSorokHtml;
    }

    const tContainer = document.getElementById('tableContainer');
    if (tContainer) {
        tContainer.style.display = 'none';
    }

    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
        toggleBtn.style.display = 'block';
        if (typeof getAktualisSzovegek === 'function') {
            toggleBtn.innerText = getAktualisSzovegek().btnTablamutat || "Részletes táblázat megtekintése";
        }
    }

    const chartWrapper = document.getElementById('chartWrapper');
    if (chartWrapper) {
        chartWrapper.style.display = 'block';
    }

    if (typeof frissitDiagram === "function") {
        frissitDiagram(chartLabels, chartData, chartKamatData);
    }
}
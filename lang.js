/* ==========================================================
   lang.js gemini
========================================================== */
const szotar = {
    hu: {
        mainTitle: "AurumX Profit Szimuláció",
        subTitle: `Az AurumX Liquidity Vault szimulációjának segítségével kiszámíthatod, hogy
            <br><br>
            • mikorra érhető el számodra a beírt kezdőtőkéd befizetése esetén a kívánt fix havi jövedelmed,
            <br>
            • illetve mekkora kezdőtőkére van szükséged az adott a havi jövedelmed eléréséhez.`,
        lblKezdotoke: "Kezdőtőke ($)",
        lblHavikamat: "Havi kamat / hozam (%)",
        lblKivet: "Megkívánt havi kivét ($)",
        lblGrafikonHo: ". hó",
	lblListabeszur1: "Kezdőtőke",
	lblListabeszur2: "visszavéve!",
        btnSzamolas: "Számítás futtatása",
        btnTablamutat: "Részletes táblázat megtekintése",
        btnTablaelrejt: "Táblázat elrejtése",
        chartToke: "Záró Tőke ($)",
        chartKamat: "Havi Kamat ($)",
        lblKezdotokekivet: "Először a kiveszed a kezdőtőkédet?",
	lblHiba100: "Hiba: A kezdőtőke összege csak 100 többszöröse lehet! pl. 400, 500, 600...",
	lblHibapercent: "Hiba: A havi kamat mértéke 8% és 25% között kell, hogy legyen!",
	lblHibakivet: "Hiba: A megkívánt havi kivét összege nem lehet kisebb 1$-nál!",
        optNem: "Nem",
        optIgen: "Igen",
        cimIdo: "Hónap",
        cimNytoke: "Nyitó tőke ($)",
	cimZtoke: "Záró tőke ($)",
	cimHkamat: "Havi kamat ($)",
        resText: "A kezdőtőkéd segítségével az AurumX",
        // Stratégia szövegek
        stratIgen: "úgy, hogy közben a kezdőtőkét már biztonságosan kivontad,",
        stratNem: "",
        // Időtartam kiegészítő
        mulva: " múlva", // <-- ÚJ SOR (szóközzel az elején!)
        // Eredmény szöveg függvényként (dinamikus adatokkal) és a ${mulva} változót az ${idotartam} mögé tesszük)
        resElerte: (idotartam, mulva, strategia, kivet, toke) => 
        `A kezdőtőkéd segítségével az AurumX <strong>${idotartam}${mulva}</strong> ${strategia} lehetővé teszi minden hónapban az általad kívánt összeg (<strong>${kivet}</strong>) kivételét. <br><small style="color: #b3b3b3;">Ekkorra a tőkéd eléri a ${toke} összeget.</small>`,
        resNemElerte: (toke) => 
        `A megadott paraméterekkel a tőke nem érte el a kívánt szintet 50 év (600 hónap) alatt sem. <br><small style="color: #b3b3b3;">A tőkéd jelenleg ${toke} értéken áll.</small>`,
        // Időegységek formázása magyarul (mindig egyes szám)
        formazEvek: (evek) => `${evek} év`,
        formazHonapok: (honapok) => `${honapok} hónap`,
        esKotoszo: " és ",
        tabMonth: "Havi Kivét Tervező",
        tabStartCap: "Kezdőtőke Tervező",
        btnHelp: "Súgó / Info",
        helpTitle: "Útmutató az algoritmusokhoz",
        helpText: `Az <span style="color:#d4af37; font-weight:bold;">AurumX</span> Liquidity Vault (LV) nyereségszimulációja és számításai kizárólag tájékoztató jellegűek. A pénzügyi termékek és a kriptovaluta-eszközök befektetési kockázatokkal járnak. A múltbeli teljesítmény <em>nem garantálja</em> a jövőbeli eredményeket. 
Az <span style="color:#d4af37; font-weight:bold;">AurumX és az AUR Labs</span> rendelkezik a hongkongi <span style="font-weight:bold;">SFC*</span> 4. és 9. típusú engedélyeivel, valamint az USA-beli <span style="font-weight:bold;">FinCEN**</span> hatóság <span style="font-weight:bold;">MSB***</span> regisztrációjával.

Az LV nyereségszimuláció segítségével számszerű támpontot kaphat arról, hogy 
i) mikor érheti el a kívánt havi fix jövedelmet a megadott kezdőtőke befizetése után,
ii) mennyi kezdőtőkére van szüksége a kívánt havi jövedelem eléréséhez?
A számítás során alkalmazott feltevések:
- A kamatjutalmak valódi értéke a valóságban bármikor eltérhet a feltételezettől, tehát itt is - látható módon - ingadozik.
- Ezt az ingadozást a program itt úgy szimulálja, hogy az aktuális havi konkrét érték a program indításánál beállított értéktől ± irányban max. 20%-kal eltér.
- A kezdőtőke, az LV-be befizetett összeg kizárólag a 100$ többszöröse lehet (100, 200, ..., 1000, ...)
- A havi kamatjutalom 180 napos lekötés esetén 8% és 15%, míg 360 napos lekötésnél  15% és 25% között ingadozhat az <span style="color:#d4af37; font-weight:bold;">AurumX</span> üzletmenetétől függően. 
- Az LV kamatai itt a szimulációban havonta újbóli lekötésre kerülnek, tehát ez kamatos kamat.
- Az éles LV applikációban bármelyik nap le lehet állítani a kamat napi lekötését. Ennek az a következménye, hogy a tőke ettől kezdve jóval lassabban növekszik.

<em>Mj: Helyezze a kurzort a grafikon görbéjére és meglátja annak koordinátáit</em>

*   Securities and Futures Commission
**  Financial Crimes Enforcement Network
*** Money Services Business`,

	disclaimerText: `Ezek a nyereségszimulációk és számítások kizárólag tájékoztató jellegűek és nem minősülnek hivatalos tanácsadásnak. A tartalom felhasználása saját felelősségre történik.`,
        btnOk: "Vissza a számoláshoz",
        lblKivantKivet: "Megkívánt havi kivét ($)",
        lblCelHonap: "Ettől a hónaptól szeretném elérni",
    	lblKiveszToke: "Először kiveszed a kezdőtőkédet?",
    	lblBtnSzamol: "Számítás indítása",
        lblSzuksegesToke: "Szükséges kezdőtőke:",
        lblKerekitettToke: "Felfelé kerekített kezdőtőke (indítási tőke):",	
        // Új hibaüzenet
	lblHibaKivetStart: "Hiba: A megkívánt kivétnek 0-nál nagyobbnak kell lennie!",
	lblHibaKamatStart: "A kamatnak 8% és 25% között kell lennie!",
        lblHibaHonapStart: "Hiba: A célhónapnak 0-nál nagyobbnak kell lennie!"
    },
    en: {
	mainTitle: "AurumX Profit Simulation",
        subTitle: `Using the AurumX Liquidity Vault Profit Simulation, you can calculate
            <br><br>
            • when will you be able to earn your desired fixed monthly income after depositing your specified initial capital,
            <br>
            • how much initial capital do you need to achieve your desired monthly income?`,
        lblKezdotoke: "Initial capital ($)",
        lblHavikamat: "Monthly interest / yield (%)",
        lblKivet: "Desired Monthly Withdrawal ($)",
        lblGrafikonHo: ". month",
	lblListabeszur1: "Initial capital",
	lblListabeszur2: "withdrawn!",
        btnSzamolas: "Run calculation",
        btnTablamutat: "View the detailed table",
        btnTablaelrejt: "Hide table",        
        chartToke: "Closing capital ($)",
        chartKamat: "Monthly interest ($)",
        lblKezdotokekivet: "Take out 1st the starting capital?",
	lblHiba100: "Error: The initial capital value must be a multiple of 100! e.g., 400, 500, 600...", 
        lblHibapercent: "Error: The monthly interest rate must be between 8% and 25%!",
	lblHibakivet: "Error: The required monthly withdrawal amount cannot be less than $1!",
	optNem: "No",
        optIgen: "Yes",
        cimIdo: "Month",
        cimNytoke: "Initial capital ($)",
	cimZtoke: "Closing capital ($)",
	cimHkamat: "Monthly interest ($)",
        resText: "With your initial investment, AurumX will allow you to withdraw the amount of your choice",
        // Stratégia szövegek angolul
        stratIgen: "while your initial capital has already been safely withdrawn,",
        stratNem: "",
        // Időtartam kiegészítő angolul (üres, mert a 'within' már szerepel a mondatban)
        mulva: "", // <-- ÚJ SOR
        // Eredmény szöveg angolul, itt nincs ${mulva}, mert a within már az adat elején ott van
        resElerte: (idotartam, mulva, strategia, kivet, toke) => 
        `With your initial investment, AurumX will allow you to withdraw your desired monthly amount (<strong>${kivet}</strong>) within <strong>${idotartam}</strong> ${strategia}. <br><small style="color: #b3b3b3;">By this time, your capital will reach ${toke}.</small>`,
        resNemElerte: (toke) => 
        `With the specified parameters, the capital did not reach the desired level even within 50 years (600 months). <br><small style="color: #b3b3b3;">Your capital currently stands at ${toke}.</small>`,
	// Időegységek formázása angolul (többes szám kezelésével)
	formazEvek: (evek) => evek === 1 ? "1 year" : `${evek} years`,
        formazHonapok: (honapok) => honapok === 1 ? "1 month" : `${honapok} months`,
        esKotoszo: " and ",
        tabMonth: "Monthly Withdrawal Planner",
	tabStartCap: "Initial Capital Planner",
        btnHelp: "Help / Info",
        helpTitle: "Guide to the algorithms",
        helpText: `The <span style="color:#d4af37; font-weight:bold;">AurumX</span> Liquidity Vault (LV) profit simulations and calculations are for informational purposes only. Financial products and cryptocurrency assets involve investment risks. Past performance <em>does not guarantee</em> future results. 
<span style="color:#d4af37; font-weight:bold;">AurumX and AUR Labs</span> hold Type 4 and Type 9 licenses from the Hong Kong <span style="font-weight:bold;" >SFC*</span>, as well as <span style="font-weight:bold;">FinCEN**</span> authority <span style="font-weight:bold;">MSB***</span> registration in the U.S.

Using the LV profit simulator, you can get experience the power of compound interest as applied by LV and get numerical estimate of 
i) when you can achieve your desired fixed monthly income after depositing the specified initial capital,
ii) how much initial capital you need to achieve your desired monthly income.
Assumptions used in the calculation:
- The actual value of interest payments may differ from the assumed value at any time; therefore, as shown here, it fluctuates.
- The program simulates this fluctuation such that the specific monthly value may deviate by a maximum of ±20% from the value set when the program is launched.
- The initial capital —the amount deposited into the LV— must be a multiple of $100 (100, 200, ..., 1000, ...)
- The monthly interest rate for a 180-day term ranges from 8% to 15%, while for a 360-day term, it can fluctuate between 15% and 25%, depending on the business practices of <span style="color:#d4af37; font-weight:bold;">AurumX</span>. 
- In this simulation, LV interest is reinvested monthly, so this is compound interest.
- In the live LV application, you can stop the daily reinvestment of interest on any given day. As a result, the principal will grow much more slowly from that point on.

<em>Note: Hover your cursor over the curve on the graph to see its coordinates</em>

*   Securities and Futures Commission
**  Financial Crimes Enforcement Network
*** Money Services Business`,

        disclaimerText: `These profit simulations and calculations are for informational purposes only and do not constitute official advice. Use of this content is at your own risk.`,
        btnOk: "Back to the calculation",
        lblKivantKivet: "Desired Monthly Withdrawal ($)",
        lblCelHonap: "Target Month to Achieve From",
    	lblKiveszToke: "Withdraw Initial Capital First?",
    	lblBtnSzamol: "Start Calculation",
        lblSzuksegesToke: "Required Initial Capital:",
        lblKerekitettToke: "Rounded Up Initial Capital (Starting Capital):",
    // New error messages
    	lblHibaKivetStart: "Desired withdrawal must be greater than 0!",
    	lblHibaKamatStart: "Interest must be between 8% and 25%!",
        lblHibaHonapStart: "Target month must be greater than 0!"
    }
};
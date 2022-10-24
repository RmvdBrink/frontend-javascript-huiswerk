
// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om het geen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.


//const grades is een array met  14 nummer die je door lopen moet omdat die in de buitenste scoop staat is die door alle
// functions bereikbaar dus hoef je hem niet elke keer te kopiëren.


const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// let gradesCount hier onder, is een overschrijfbare variable die de getallen die je terug krijgt, opvangt buiten de scope van de for loop zo dat je hem later in het script weer kan gebruiken bij het if statement ( als je deze onder de loop in de scoop zou zetten zet die hem elke keer op 0 dus niet doen kijk uit !!!!!)
//iedere keer als

let gradesCount = 0

//hier onder is de forloop die itereert de array hier boven hij kijkt bij ieder nummer 0 kleiner is dan grades.length dat is 14 dan stopt die dus als je grades.length log nu krijg je 14 omdat er 14 cijfers in de array zitten
for (let i = 0; i < grades.length; i++) {

    //met het if statement wat je gebruikt als er minder dan 3 statements worden gebruikt (anders switche) geeft je aan wat er moet gebeuren als grades[i] (dus alle getallen de je ge itereet hebt met de forloop) groter zijn dan of gelijk aan 8. als het getal true is sla je het getal op in de let gradesCount (die je dan overschrijft en opslaat buiten de scoop) en doe je plus 1 dus in dit geval is er 6 keer geplust om dat er 6 cijfers >= gelijk zijn aan 8

    if (grades[i] >= 8) {
    gradesCount = gradesCount + 1
    }
}
// hier onder doe je de uitkomst op slaan in een nieuwen variable om die vervolgens terug te geven in de terminal.
const totalGrades = gradesCount

console.log(totalGrades)




/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

//hier beneden gaan we van het script een formule maken die ook gebruikt kan worden voor een nieuwe stukken script zo
// dat we hem niet elke keer op nieuw hoeven te schrijven.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// // const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// we roepen een functie aan en geven hem een naam die je zelf bedenkt maar wel goed aan geeft wat er mee bedoeld word
// en in het engels. Achter de variable function name staan haken waar in je de parameters kan zetten
// dat kunnen er meerdere zijn (zie dit als place holder) ook deze mag je zelf verzinnen maar moet wel goed de waardes
// aanduiden die er verwacht worden.
function cumLaude( array, val) {

    //hier benden maken we weer een let variable buiten de scoop van de for loop die begint op null (daarom ook de null
    // in de terminal als je er een 0 van maakt, komt die er in te staan) om het waarde op te vangen die we willen
    //gebruiken onder het if statement. hij begint op null en wordt later overschreven onder het if statment en dat
    // slaat die weer op om later te returnen buiten de scoop van de forloop.
    let counter = null;

    //   de forloop geeft hier aan dat die op 0 begint en dan de hele rij door gaat tot het einde van de array.lenght
    //   iedere keer als de iteratie langs een index nummer gaat en de waarde gelijk of hoger is dan 8 slaat die een 1
    //   in de let counter op dus overschrijft hij de waarde met + 1 .
    // de parameter array heeft hier nog geen waarde omdat deze function herbruikbaar moet zijn dus wordt die pas aan geroepen onder aan de
    //function. in dit voorbeeld staat (val) als 2e para meter ingesteld om ook deze waarde variabel te houden zodat je er
    //nog meer opties mee hebt je zou er ook gewoon een 8 of 7 in kunnen zetten maar dan staat die waarde vast.


    for (let i = 0; i < array.length; i++) {
        if (array[i] >= val ) {
            counter = counter + 1;
        }
        // if statement geeft aan dat alle waardes binnen de array parameter (die nu nog steeds geen waarde heeft) groter zijn
        // dan val (val is 8 in dit geval) let counter moeten overschrijven met +1 en die opslaan er zijn in de array 6 cijfers
        // die hier aan voldoen dus hij doet 6 keer plus 1 en komt dus uit op 6.
    }

//de 6 moet je ook weer terug krijgen uit de scope van het if statement dus doe je hem buiten de scoop een return geven zodat
    //je hier onder weer veder kan gebruiken in een nieuwe const variable.
    return counter;
//hou de return wel binnen de scope van de function.
}
const outputGrades = cumLaude(grades, 8 );
console.log(outputGrades)

const newGrades = cumLaude([6, 4, 5,], 8);
console.log(newGrades)

const newGrades2 = cumLaude([8, 9, 4, 6, 10], 8);
console.log(newGrades2)

//je hebt hier een losstaande formule gemaakt waar je alle number arrays in kan die je aan roept met countGradesAbove
// (dus de function name) dan de haken() en hier doe je dan de array variable in zetten (dus in dat geval de array met
//naam grades) tussen de haakjes. Bij dit voor beeld staat ook een 2 e parameter (val) zo kan je hem nog dinamicheer
//maken omdat dan je getal (in dit geval 8) niet vast staat in je forloop en zo nog makkelijker kaan aanpssen naar een andere waard.


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
// ...................................................

//ook hier een script schrijven die niet multifunctional inzetbaar is omdat alle waardes vast zijn en het nog geen
// function is.

//je maakt een (let) variable die je weer kan over schrijven later in het script. Die begint op 0 zo dat je er later weer
//een andere waarde in kan opslaan als die over schreven word in de forloop scope.

let sum = 0;

//de loop gaat weer door alle nummer van de const variable grades helemaal boven aan de pagina (const grades = [9, 8, 5, 7, 7,
// 4, 9, 8, 8, 3, 6, 8, 5, 6]); en overschrijft de let sum = 0 met sum + grades[i] dat telt alle cijfers in de array op
// en maakt van sum = 0 sum = 93 op de achtergrond.

for (let i = 0; i <grades.length ; i++) {
    sum = sum + grades[i]

}

//de waarde van sum komt buiten de forloop scope omdat de let variable er boven gedeclareerd is en de waarde 93 daar nu in staat
//verborgen. Die doe je hier onder weer gebruiken in een const variable en deel je door grades.length (de lengte van de
//array die dus 14 is) dus eigenlijk staat hier 93 / 14 = const average en dat geeft 6.642857142857143.

const average = sum / grades.length;

console.log(average);
    // ............................................

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143 (6.64)
// averageGrade([6, 4, 5]) geeft 5.00
// averageGrade([8, 9, 4, 6, 10]) 7.40
// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
function averageGrade(grades) {

    let counter = 0;

    //forloop gaat weer door variable grades heen van index 0 tot 14 let counter wordt overschreven door counter + counter[i] (dat
    //zijn alle 14 cijfers bij elkaar in dit geval 93.

    for (let i = 0; i < grades.length; i++) {
        counter = counter + grades[i];

    }
    // 93 uit counter + counter[i] deel je door grades.length (=14) en sla je op in variable average
    const average = counter / grades.length
    return average.toFixed(2)
//average return je en gebruik je gelijk methode toFixed om het getal weer tegen met 2 decimaal.
}

//beden log je de function naam met daar in de const variable met nubers array zodat die door de function heen kan
// gehaald worden.
console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]))
console.log(averageGrade([8, 9, 4, 6, 10]))

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!





/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6, ];
// Huiswerkbegeleiding frontend (online) 19 oktober 2022 op 1: 11 min uit leg over dit vaak terug kijken.!!!!!!!
let high = 0;

for (let i = 0; i < grades.length; i++) {
    if ( grades[i] > high) {
        high = grades[i];
    }

}

console.log(high);
/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6, ];
function highestGrade(array) {

    let high = 0;


for (let i = 0; i < array.length ; i++) {
    if (array[i] > high) {
        high = array[i];
    }
    return high
}
}

console.log(highestGrade(grades))
console.log(highestGrade([6, 4, 5]))
console.log(highestGrade([8, 9, 4, 6, 10]))
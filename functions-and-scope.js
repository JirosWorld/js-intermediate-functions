// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

console.log("* Opdracht 1a:");

let highCount = 0;
//highCount moet op nul voordat de loop begint

for (let i = 0; i < grades.length; i++) {
    // TEST LOGS
    //iedere waarde van de array checken op deze conditie: grades[i] >= 8

    if (grades[i] >= 8) {
        highCount = highCount+=1;
        // 'i' is BINNEN de loop op nul gezet; highCount niet.
        console.log("iterator:",i);
        console.log("\'n grade die hoger is dan 8, met waarde:" , grades[i]);
        // TEST LOGS
        // blijft tellen binnen in de loop: console.log(highCount);
    }
}
console.log(highCount);
//VRAAG van JIRO: nadat de loop is uitgevoerd, heeft highCount een nieuwe waarde?
//zelfs al staat die BUITEN de loop ZONDER return?
///antwoord; de variable staat BUITEN de loop dus heeft daar bínnen ook/WEL scope!


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log("\n* Opdracht 1b:");

function cumLaude(grades) {
    let highCount = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            highCount = highCount+=1
        }
    }
    return highCount;
//    return binnen de functie, maar buiten de loop
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorg ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

console.log("\n* Opdracht 2a:");
// gemiddelde = totaal waarden opgeteld / total aantal indexen
// totaal waarden is array[value 0 + value 1 + value 2 + ...]
// total indexen =  array.length
// alle waardes langslopen via iteratie loop

let totalValue = 0;
for (let i = 0; i < grades.length; i++) {
    // console.log("i= " + grades[i]);
    totalValue = totalValue + grades[i];
    // return totalValue; <-- kan nie want is geen functie
    console.log(totalValue);
}
console.log("totalValue buiten de loop: " + totalValue);
average  = totalValue / grades.length;
console.log(average);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// gradesArray = grades;

function averageGrade(gradesArray) {
    let totalValue = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        totalValue = totalValue + gradesArray[i];
        // return totalValue; <-- niet doen.
    }
    console.log("totalValue buiten de functieloop: " + totalValue);
    const average  = totalValue / gradesArray.length;
    // console.log(average);
    return average;
}
const result = averageGrade([8, 9, 4, 6, 10]);
console.log("Gemiddelde uit functie is: " + result);

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log("\n* Opdracht 2c:");

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log("Math round:" + (Math.round(average * 100) / 100));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10


//denkproces:
// als de huidige waarde van grades (grades[i]) hoger is dan mijn huidige opgeslagen waarde
// sla dan dat nieuwe cijfer op als hoogste waarde!
// dat is iets dat in een loop kan, binnen nog een loop


function highestGrade(arrayAllGrades) {
    let highest = 0;

    for (let i = 0; i < arrayAllGrades.length; i++) {
        console.log("i= " + i );
        if (arrayAllGrades[i] > highest) {
            //als de value van de array groter is dan highest, verhoog dan de teller
            console.log("de value van arrayAllGrades binnen de loop is nu" + arrayAllGrades[i]);
            console.log("de value van highest binnen de loop is nu" + highest);
            highest = arrayAllGrades[i];
        }
    }
    console.log("de value van highest BUITEN de loop is nu" + highest);
    return highest;
}

console.log(highestGrade([8, 9, 4, 6, 10]));
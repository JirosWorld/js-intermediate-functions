// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// TESTWAARDEN:
// let emailAddress1 = "n.eeken@novi-education.nl";
// let emailAddress1 = "a.wiersma@outlook.com";
console.log("Opdracht  1:");

function getEmailDomain(emailAddress1) {
    const domainCut = emailAddress1.indexOf('@');
    const domainName = emailAddress1.substring(domainCut + 1);
    // TEST LOG: console.log(domainName);
    return domainName;
}
console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// TEST LOG
// let emailaddress2 = "t.mellink@novi.nl";
console.log("\nOpdracht  2:");

function typeOfEmail(emailaddress2) {
    // eigenlijk willen we niet het hele emailadres, maar alleen het stuk erna/domein checken:
    // dus: de oude functie uit opdracht 1 hergebruiken
    getEmailDomain(emailaddress2);

    // TEST LOG: console.log("de functie is gestart:" + emailaddress2);

    if (getEmailDomain(emailaddress2).includes("novi.nl")) {
        return "Deze persoon met maildomein '" + getEmailDomain(emailaddress2) + "' is een: 'Medewerker'";
    }
    if (getEmailDomain(emailaddress2).includes("novi-education.nl")) {
        return "Deze persoon met maildomein '" + getEmailDomain(emailaddress2) + "' is een: 'Student'";
    }
    if (getEmailDomain(emailaddress2).includes("outlook.com")) {
        return "Deze persoon met maildomein '" + getEmailDomain(emailaddress2) + "' is: 'Extern'";
    }
}

console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

console.log("\nOpdracht  3:");

function checkEmailValidity(emailaddress3) {
    // nu willen we weer het hele emailadres checken, dus incl. domein

    // TEST LOG: console.log("de functie is gestart:" + emailaddress3);

    if (!(emailaddress3.includes("@"))) {
        console.log("Dit adres: '" + emailaddress3 + "' mist een apenstaartje.");
        return false;
    }
    if (emailaddress3.includes(",")) {
        console.log("Dit adres: '" + emailaddress3 + "' is fout want er zit een komma in.");
        return false;
    }
    //checken of de punt op het eind staat
    let checkEmailaddress3 = emailaddress3.charAt(emailaddress3.length-1);

    if (checkEmailaddress3 == ".") {
        console.log("Dit adres: '" + emailaddress3 + "' is fout want er staat een punt op het eind.");
        return false;
    }
    //    de returns stoppen de functie dus: de correcte statement moet helemaal op het eind
    if ((emailaddress3.includes("@"))) {
        console.log("Dit adres: '" + emailaddress3 + "' is correct.");
        return true;
    }
}
console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));
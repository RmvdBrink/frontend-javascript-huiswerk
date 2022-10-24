
// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

//function aangeroepen en parameter emailAdres mee gegeven.
// Const variable aan maken om email in op te slaan met .lastIndexOf hier doe je het index nummer mee opslaan van
// het laatst voorkomende teken wat je zoekt in de string in dit geval @.
//Dan return je die uitkomst + nog een keer emailAdres.substring(place) in die place zit nog ent index nummer van @
// en met substring zeg je dan alles wat na @ komt moet terug geven worden.
// dan logt die allen de domeinnamen in terminal

function getEmailDomain(emailAdres) {
    const place = emailAdres.lastIndexOf("@");
    return emailAdres.substring(place)

}
//Mijn eigen manier die een array in een keer logt.
// const domein = [
//     getEmailDomain("n.eeken@novi-education.nl"),
//     getEmailDomain("t.mellink@novi.nl"),
//     getEmailDomain("a.wiersma@outlook.com"),
// ]
// console.log(domein)


console.log(getEmailDomain("n.eeken@novi-education.nl"))
console.log(getEmailDomain("t.mellink@novi.nl"))
console.log(getEmailDomain("a.wiersma@outlook.com"))




/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// function typeOfMail(email) {
//     return email
// }
// const typeOfMailArray = [
// typeOfMail("n.eeken@novi-education.nl"),
// typeOfMail("t.mellink@novi.nl"),
// typeOfMail("novi.nlaapjesk@outlook.com"),
// typeOfMail("a.wiersma@outlook.com"),
// ]
// if (typeOfMailArray.includes("education"))  {
//     console.log("student")
// }
// if (typeOfMailArray.includes("Novi")) {
//     console.log("")
// } else {
//     console.log("Extern")
// }

function typeOfMail(email) {

    if (email.includes("education.nl")){

        return "student";
    } else if (email.includes("novi.nl")) {
        return  "Medewerker";

    } else {
       return  "Extern";
    }
}
// const employees = typeOfMail()
// console.log(employees)


console.log(typeOfMail("n.eeken@novi-education.nl"));
console.log(typeOfMail("t.mellink@novi.nl"));
console.log(typeOfMail("novi.nlaapjesk@outlook.com"));
console.log(typeOfMail("a.wiersma@outlook.com"))
console.log(typeOfMail("rmb1312@outlook.com"))
console.log(typeOfMail("rick.vanbrink@novi-education.nl"))

// console.log(typeOfMail())
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

function checkEmailValidity(email) {
    return !!(email.includes("@") && (email.charAt(email.length - 1) !== '.') && !(email.includes(",")));
}

console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"))
console.log(checkEmailValidity("n.eekenanovi.nl"))
console.log(checkEmailValidity("n.eeken@novinl."))
console.log(checkEmailValidity("tessmellink@novi,nl"))


console.log("2e manier")
function checkEmailValidity2(email) {
    const emailIncludesA = email.includes("@");
    const emailIncludesB = email.lastIndexOf( ".");
    const emailIncludesD = email.includes(",");
    switch (true) {
        case (emailIncludesA === false):
    return false;
        case (emailIncludesD === true):
            return false;
        case (emailIncludesB === email.length -1):
            return false;
        default:
                return true;
    }
}

console.log(checkEmailValidity2("n.eeken@novi.nl"));
console.log(checkEmailValidity2("tessmellink@novi.nl"));
console.log(checkEmailValidity2("n.eekenanovi.nl"));
console.log(checkEmailValidity2("n.eeken@novinl."));
console.log(checkEmailValidity2("tessmellink@novi,nl"));
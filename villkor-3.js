var theTimeRightNow = new Date();
var timmar = theTimeRightNow.getHours();

/* Det här är ett litet trick. Switch-case kan inte hantera range,
dvs ett värde mellan två olika tal.
Knepet är att låta switch-satsen få ett true-värde, vilket gör att den alltid kör, och sedan lägger vi in det riktiga villkoret i varje case.
Eftersom en switch-case stannar på första träffen, så skriver vi dem i ordning.
*/

switch (true) {
    case (timmar < 6):
        console.log("Natt");
        break;
    case (timmar < 12):
        console.log("Morgon/förmiddag");
        break;
    case (timmar < 18):
        console.log("Eftermiddag");
        break;
    case (timmar < 24):
        console.log("Kväll");
        break;
    default:
        console.log("Något annat");
}
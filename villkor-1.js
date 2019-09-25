var weapons = ["Sten", "Sax", "Påse"];

var weapon = weapons.slice(Math.floor(Math.random() * weapons.length), 1);

if (weapon == "Sten") {
    console.log("Sten");
} else if (weapon == "Sax") {
    console.log("Sax");
} else { // Behöver inte kolla något villkor, eftersom vi bara har tre föremål i "weapons", och vi har redan kollat två.
    console.log("Påse");
}
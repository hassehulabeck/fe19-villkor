var weapons = ["Sten", "Sax", "Påse"];

var yourWeapon = weapons[Math.floor(Math.random() * weapons.length)];
var yourEnemysWeapon = weapons[Math.floor(Math.random() * weapons.length)];

// Skriv ut vad som spelats.
console.log("Du: " + yourWeapon);
console.log("Din fiende: " + yourEnemysWeapon);

if (yourWeapon == yourEnemysWeapon) { // Lika
    console.log("Oavgjort");
} else if (yourWeapon != yourEnemysWeapon) {
    if (yourWeapon == "Sten") {
        if (yourEnemysWeapon == "Sax") {
            console.log("Du vinner");
        } else {
            console.log("Din fiende vinner");
        }
    }
    if (yourWeapon == "Sax") {
        if (yourEnemysWeapon == "Påse") {
            console.log("Du vinner");
        } else {
            console.log("Din fiende vinner");
        }
    }
    if (yourWeapon == "Påse") {
        if (yourEnemysWeapon == "Sten") {
            console.log("Du vinner");
        } else {
            console.log("Din fiende vinner");
        }
    }
}
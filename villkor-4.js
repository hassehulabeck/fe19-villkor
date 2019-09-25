var olga = {
    sunlight: 40,
    minTemp: 16,
    windStrength: 38,
    bathAcceptance: null
}
var ibrahim = {
    sunlight: 60,
    minTemp: 20,
    windStrength: 74,
    bathAcceptance: null
}
var actualConditions = {
    sunlight: 49,
    temperature: 18,
    windStrength: 35
}

// Kolla om någon av dem vill bada. Först loopar vi igenom olgas egenskaper och jämför med actualConditions.
// Det räcker med att vädret inte stämmer på en punkt för att någon av dem ska vägra bada.
if ((actualConditions.sunlight < olga.sunlight) || (actualConditions.temperature < olga.minTemp) || (actualConditions.windStrength > olga.windStrength)) {
    olga.bathAcceptance = false;
} else {
    olga.bathAcceptance = true;
}

if ((actualConditions.sunlight < ibrahim.sunlight) || (actualConditions.temperature < ibrahim.minTemp) || (actualConditions.windStrength > ibrahim.windStrength)) {
    ibrahim.bathAcceptance = false;
} else {
    ibrahim.bathAcceptance = true;
}

// Nedan ser du den s k ternary operator. Först testar den ett villkor (olga.bathAcceptance, därefter ett frågetecken och sedan vad som händer om true resp vad som händer om falskt, dessa båda avskiljda av ett kolon.)
var olgaBath = olga.bathAcceptance ? "att bada" : "absolut inte att bada.";
console.log("Olga kommer " + olgaBath);

var ibrahimBath = ibrahim.bathAcceptance ? "att bada" : "verkligen inte att bada. Usch!";
console.log("Ibrahim kommer " + ibrahimBath);
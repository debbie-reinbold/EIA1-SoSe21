namespace Aufgabe_5 {
var continentAfrica: string = "Afrika";
var continentSouthamerica: string = "Südamerika";
var continentEurope: string = "Europa";
var continentNorthamerica: string = "Nordamerika";
var continentAsia: string = "Asien";
var continentAustralia: string = "Australien";

var Africa2008: number = 1028;
var Africa2018: number = 1235.5;
var Southamerica2008: number = 1132.6
var Southamerica2018: number = 1261.5;
var Europe2008: number = 4965.7;
var Europe2018: number = 4902.3;
var Northamerica2008: number = 6600.4;
var Northamerica2018: number = 6035.6;
var Asia2008: number = 12954.7; 
var Asia2018: number = 16274.1;
var Australia2008: number = 1993;
var Australia2018: number = 2100.5;

var entireWorld2018: number = Africa2018 + Southamerica2018 + Europe2018 + Northamerica2018 + Asia2018 + Australia2018 ;


console.log("Die Emission von " + continentAfrica + " ist: " + Africa2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + continentAfrica + " damit " + Math.round(Africa2018/entireWorld2018 * 100) + "%");
console.log("Für " + continentAfrica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Africa2018-Africa2008)/Africa2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(Africa2018-Africa2008) + "kg CO2");

console.log("Die Emission von " + continentSouthamerica + " ist: " + Southamerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + continentSouthamerica + " damit " + Math.round(Southamerica2018/entireWorld2018 * 100) + "%");
console.log("Für " + continentSouthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Southamerica2018-Southamerica2008)/Southamerica2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(Southamerica2018-Southamerica2008) + "kg CO2");

console.log("Die Emission von " + continentEurope + " ist: " + Europe2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + continentEurope + " damit " + Math.round(Europe2018/entireWorld2018 * 100) + "%");
console.log("Für " + continentEurope + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Europe2018-Europe2008)/Europe2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(Europe2018-Europe2008) + "kg CO2");

console.log("Die Emission von " + continentNorthamerica + " ist: " + Northamerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + continentNorthamerica + " damit " + Math.round(Northamerica2018/entireWorld2018 * 100) + "%");
console.log("Für " + continentNorthamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Northamerica2018-Northamerica2008)/Northamerica2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(Northamerica2018-Northamerica2008) + "kg CO2");

console.log("Die Emission von " + continentAsia + " ist: " + Asia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + continentAsia + " damit " + Math.round(Asia2018/entireWorld2018 * 100) + "%");
console.log("Für " + continentAsia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Asia2018-Asia2008)/Asia2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(Asia2018-Asia2008) + "kg CO2");

console.log("Die Emission von " + continentAustralia + " ist: " + Australia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + continentAustralia  + " damit " + Math.round(Australia2018/entireWorld2018 * 100) + "%");
console.log("Für " + continentAfrica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((Australia2018-Australia2008)/Australia2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(Australia2018-Australia2008) + "kg CO2");







}

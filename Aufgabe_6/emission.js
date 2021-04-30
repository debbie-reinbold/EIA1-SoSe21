var Aufgabe_6;
(function (Aufgabe_6) {
    var continentAfrica = "Afrika";
    var continentSouthamerica = "Südamerika";
    var continentEurope = "Europa";
    var continentNorthamerica = "Nordamerika";
    var continentAsia = "Asien";
    var continentAustralia = "Australien";
    var Africa2008 = 1028;
    var Africa2018 = 1235.5;
    var Southamerica2008 = 1132.6;
    var Southamerica2018 = 1261.5;
    var Europe2008 = 4965.7;
    var Europe2018 = 4902.3;
    var Northamerica2008 = 6600.4;
    var Northamerica2018 = 6035.6;
    var Asia2008 = 12954.7;
    var Asia2018 = 16274.1;
    var Australia2008 = 1993;
    var Australia2018 = 2100.5;
    var entireWorld2018 = Africa2018 + Southamerica2018 + Europe2018 + Northamerica2018 + Asia2018 + Australia2018;
    window.addEventListener('load', function () {
        document.querySelector(".africa").addEventListener("click", function () {
            emissionFunction(continentAfrica, Africa2018, Africa2008);
        });
    });
    window.addEventListener('load', function () {
        document.querySelector(".southamerica").addEventListener("click", function () {
            emissionFunction(continentSouthamerica, Southamerica2018, Southamerica2008);
        });
    });
    window.addEventListener('load', function () {
        document.querySelector(".europe").addEventListener("click", function () {
            emissionFunction(continentEurope, Europe2018, Europe2008);
        });
    });
    window.addEventListener('load', function () {
        document.querySelector(".northamerica").addEventListener("click", function () {
            emissionFunction(continentNorthamerica, Northamerica2018, Northamerica2008);
        });
    });
    window.addEventListener('load', function () {
        document.querySelector(".asia").addEventListener("click", function () {
            emissionFunction(continentAsia, Asia2018, Asia2008);
        });
    });
    window.addEventListener('load', function () {
        document.querySelector(".australia").addEventListener("click", function () {
            emissionFunction(continentAustralia, Australia2018, Australia2008);
        });
    });
    function emissionFunction(continent, continent2018, continent2008) {
        document.querySelector("#continentAbsolute").innerHTML = continent2018.toString();
        document.querySelector("#titleContinent").innerHTML = continent;
        document.querySelector("#continentRelative").innerHTML = Math.round(continent2018 / entireWorld2018 * 100) / 100 + "%";
        document.querySelector("#growthRate").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100) / 100 + "%";
        document.querySelector("#growthRateAbsolute").innerHTML = Math.round(((continent2018 - continent2008) * 100) / 100).toString();
        document.querySelector('.chartFunction').setAttribute("style", "height:" + (continent2018 / entireWorld2018) * 100 + "%");
    }
    ;
})(Aufgabe_6 || (Aufgabe_6 = {}));
//# sourceMappingURL=emission.js.map
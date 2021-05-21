window.addEventListener("load", function () {
    var input = document.getElementById("inputFeld");
    var index = 0;
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            createToDo();
            clearInput();
        }
    });
    function counter() {
        document.querySelector("#doCounter").innerHTML = String(index);
    }
    function clearInput() {
        input.value = "";
    }
    function createToDo() {
        index++;
        counter();
        var wrapper = document.getElementById("wrapIt");
        var placeHolder = document.createElement("div");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var trashButton = document.createElement("i");
        placeHolder.className = "placeHolder";
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        label.innerHTML = input.value;
        label.className = "divLabel";
        wrapper.appendChild(placeHolder);
        placeHolder.appendChild(checkbox);
        placeHolder.appendChild(label);
        trashButton.className = "fas fa-trash-alt";
        placeHolder.appendChild(trashButton);
        trashButton.addEventListener("click", function () {
            wrapper.removeChild(placeHolder);
            index--;
            counter();
        });
    }
});
//# sourceMappingURL=toDo.js.map
window.addEventListener("load", function (): void {

const input: HTMLInputElement = (document.getElementById("inputFeld") as HTMLInputElement);
let index: number = 0;

document.addEventListener("keydown", function (event: KeyboardEvent): void { 
    if (event.keyCode == 13) {
        createToDo();
        clearInput();
    }
});


function counter(): void {
    document.querySelector("#doCounter").innerHTML = String(index);
}


function clearInput(): void {
    input.value = "";
}


function createToDo(): void {
    index++;
    counter();

    let wrapper: HTMLElement = document.getElementById("wrapIt");
    let placeHolder: HTMLDivElement = document.createElement("div");
    let checkbox: HTMLInputElement = document.createElement("input");
    let label: HTMLElement = document.createElement("label");
    let trashButton: HTMLElement = document.createElement("i");
  

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


    trashButton.addEventListener("click", function (): void {
        wrapper.removeChild(placeHolder);
        index--;
        counter();
    });

}

});
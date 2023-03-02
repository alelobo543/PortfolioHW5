let alertBtn = document.getElementById("alertBtn");
let alertDialog = document.getElementById("alert");
let confirmDialog = document.getElementById("confirm");
let promptDialog = document.getElementById("prompt");
let okBtn = document.getElementById("ok");
let confirmBtn = document.getElementById("confirmBtn")
let confirmBtn1 = document.getElementById("confirmBtn1")
let confirmBtn2 = document.getElementById("confirmBtn2")
let cancelBtn1 =document.getElementById("cancel1")
let cancelBtn2 =document.getElementById("cancel2")
let promptBtn =document.getElementById("promptBtn")
let output= document.getElementById("output");
let input = document.getElementById("fname")

// "Show the dialog" button opens the <dialog> modally
alertBtn.addEventListener("click", () => {
    alertDialog.showModal();
});
okBtn.addEventListener("click", () => {
    alertDialog.close();
});
confirmBtn.addEventListener("click", () => {
    confirmDialog.showModal();
});
confirmBtn1.addEventListener("click", () => {

    confirmDialog.close();
    output.innerHTML = "The value returned by the confirm method is : true";
});
cancelBtn1.addEventListener("click", () => {
    output.innerHTML="User didn't enter anything";
});
promptBtn.addEventListener("click", () => {

    promptDialog.showModal();
});
confirmBtn2.addEventListener("click", () => {
    promptDialog.close();
    let clean = DOMPurify.sanitize(input.value);
    output.innerHTML = `Your name is ${clean}`;
});
cancelBtn2.addEventListener("click", () => {
    promptDialog.close();
    output.innerHTML="User didn't enter anything";
});

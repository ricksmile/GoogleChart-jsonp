function collapsibleDiv(divNameInput) {
    var divInput = document.getElementById(divNameInput);
    if (divInput.style.display == 'none') {
        divInput.style.display = "";
    }
    else {
        divInput.style.display = "none";
    }
   
}

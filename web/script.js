function buttonPressed(event) {
    event.preventDefault(); // This will prevent the form from submitting and refreshing the page
    var number1 = document.getElementById("numberInput1").value;
    var number2 = document.getElementById("numberInput2").value;
    fetch('/sum?n=' + number1 + '&n2=' + number2) // Corrected '&' to separate parameters
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").value = data["sum"];
        });
}
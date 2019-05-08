var number1 = +prompt("Enter number1");
        var number2 = +prompt("Enter number2");
        var number3 = +prompt("Enter number3");
        var number4 = +prompt("Enter number4");
        var result = Math.max(Math.min(number1,number2),Math.min(number3,number4))
        document.getElementById("maxNumber").innerHTML = result;
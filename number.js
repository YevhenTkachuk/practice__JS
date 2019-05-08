var number = prompt("Enter your number");
        var result = '';
        if(number > 0)
            result = `${number} is positve`
        else if(number<0)
            result = `${number} is negative`
        else result = `${number} is zero`
        document.getElementById("number").innerHTML = result;
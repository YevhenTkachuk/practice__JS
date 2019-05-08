var inputValue = prompt("Enter your string");
        document.getElementById("reverse").innerHTML = `${inputValue.split("").reverse().join("")}`;
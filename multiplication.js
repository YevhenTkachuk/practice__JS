var result = "";
        for (let index = 0; index < 10; index++) {
            result +=`<li> 6 * ${index} = ${6*index} </li>`;
        }
        document.getElementById("multi").innerHTML = result;
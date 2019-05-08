var array = [12,-4,6,-9,1];
        var sum = 0;
        for (let i = 0; i < array.length; i++) {
            if(array[i] < 0)
                sum +=Math.pow(array[i],2);
        }
        document.getElementById("arr").innerHTML = `<p> 
                                                квадрат третього числа ${array[2]*array[2]}
                                                суму першого і останнього елемента ${array[0]+array[array.length-1]}
                                                суму квадратів від’ємних елементів ${sum} 
                                                </p>                                      
                                                `
var day = prompt("Enter a number of day");
var result = '';
switch (day) {
    case 1:
        result ="Понеділок" ;
        break;
    case 2:
        result ="Вівторок";
        break;
    case 3:
        result ="Середа" ;
        break;
    case 4:
        result ="Четверг" ;
        break;
    case 5:
        result ="Пятниця" ;
        break;
    case 6:
        result ="Субота" ;
        break;
    case 7:
        result ="Неділя" ;
        break;
    default:
    result ="Wrong input";
        break;
}
document.getElementById("day").innerHTML = day;
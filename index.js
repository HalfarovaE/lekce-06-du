
const datum = prompt("Jaké je datum? Napiš ve formátu dd.mm.yyyy.")

console.log(datum)

const den = datum.slice(0,2)
console.log(den)
const mesic = datum.slice(3,5)
console.log(mesic)
const rok = datum.slice(-4)
console.log(rok)

document.body.innerHTML = "den: " + den + "." + " měsíc: " + mesic + "." + " rok " + " " + rok
const parseDate =(datum) =>{

return {
    den: datum.slice(0,2),
    mesic: datum.slice(3,5),
    rok: datum.slice(-4),
}

}

console.log(parseDate("12.03.2013"))


//document.body.innerHTML= "<p>datum:" + den1 + mesic + rok + "</p>"
//console.log(parseDate)

/*const number = Math.round(2.5)
console.log(number)

let x = Math.trunc(8.76)
console.log(x)

let a = Math.max(1,2,3)
console.log(a)*/

/*const a = 2;
const b = 6;
const c = 10;

if (a > b && a > c)
{return a;}
 else if (b > a && b >c)
 {return b;}
else if (c > b && c > a)
{return c;}

console.log(a,b,c)*/




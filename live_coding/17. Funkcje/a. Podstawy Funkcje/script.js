function simpleFunction() {
    console.log('Przykładowa prosta funkcja')

}

function showIt(text) {
    console.log('Otrzymany tekst to: ' + text);
}

showIt('Jakiś tekst')

function sumOfTwo(a, b) {
    var sum = a + b;
    console.log('Suma dodawania to: ' + sum);
}

sumOfTwo(2, 3);

function returnText() {
    return 'Jakiś tekst2';
}

var text = returnText();
console.log(text)

function f(p1) {
    console.log('Jeden parametr: '+p1);
}

function f(p1,p2) {
    console.log('Jeden parametr: '+p1+', drugi: '+p2);
}

f(5)
f(1,2)

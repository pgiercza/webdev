/*1)  Napisz funkcje która przyjmuje jeden parametr który jest liczbą.
    Funkcja niech wypisuję na konsolę "Liczba nieparzysta" w przypadku gdy przy wywołaniu funkcji została
podana liczba nieparzysta lub "Liczba parzysta" w przypadku gdy przy wywołaniu funkcji została podana liczba parzysta.
    Zadanie wykonaj z wykorzystaniem konstrukcji IF*/


/*function showText(a) {
    this.a = a;
    if (this.a % 2 == 0) {
        this.showDetails = function () {
            console.log('Liczba: ' + this.a + ' jest parzysta!');
        }
    } else {
        this.showDetails = function () {
            console.log('Liczba: ' + this.a + ' jest nieparzysta!');
        }
    }

}

var newNumber = new showText(8);
newNumber.showDetails();*/


/*
2)  Napisz funkcję która wypisze na konsole liczby od 1 do 100 podzielne przez 3.*/

function range() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}


range();
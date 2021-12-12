function fun1() {
    console.log('Przycisk 1 klik');
}

function fun2() {
    console.log('Przycisk 2 klik')
}

function fun3() {
    console.log('Przycisk 3 klik')
}

window.onload = function () {
    document.getElementById('przycisk2').onclick = fun2;
    document.getElementById('przycisk3').addEventListener('click', fun3);

    let clickCounter = 0;
    let dblClickCounter = 0;
    let keyDownCounter = 0;

    document.addEventListener('click', function () {
        document.getElementById('click-counter').textContent = ++clickCounter;

    });

    document.addEventListener('dblclick', function () {
        document.getElementById('double-click-counter').textContent = ++dblClickCounter;
    });

    document.addEventListener('keydown', function () {
        document.getElementById('key-down-counter').textContent = ++keyDownCounter;
    });
    /*------------------------------------------------------*/
    let boxCounter = 0;
    document.getElementById('add-element').addEventListener('click', function () {
        boxCounter++;
        let newElement = document.createElement('div');
        newElement.textContent = boxCounter;
        newElement.classList.add('box');
        document.getElementById('container').appendChild(newElement);

    });

    document.getElementById('container').addEventListener('click', function (e) {
        if (e.target.className.includes('box')) {
            this.removeChild(e.target);
        }
    });

    document.addEventListener('click',function (e){
        let newElement=document.createElement('div');
        newElement.style.width='5px';
        newElement.style.height='5px';
        newElement.style.backgroundColor='red';
        newElement.style.position='absolute';
        newElement.style.top=e.clientY + 'px';
        newElement.style.left=e.clientX+'px';
        document.body.appendChild(newElement);
    });

}
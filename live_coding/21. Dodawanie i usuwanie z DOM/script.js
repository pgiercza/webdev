window.onload = function () {
    setTimeout(function () {

        let newElement = document.createElement('div');
        newElement.textContent = '7';
        newElement.classList.add('box');
        document.getElementById('container').appendChild(newElement);
    }, 2000);

    setTimeout(function (){

        let element=document.getElementById('special');
        let parent=document.getElementById('container');
        parent.removeChild(element);
    },4000)
};
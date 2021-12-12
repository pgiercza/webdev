window.onload = function () {
    /*    document.getElementById('container').style.border = '5px solid blue';
        document.querySelector('#container').style.border = '5px solid black';


        var arr = document.getElementsByClassName('box');
        for(let i=0;i<arr.length;i++){
            arr[i].style.border='5px solid orange';
        }

        for(let element of arr){
            element.style.border='5px solid pink';
        }*/

    /*let arr=document.getElementsByTagName('div');
    for(let element of arr{
        element.style.border='5px solid blue';
    }*/


    /*
        document.getElementById('special').previousElementSibling.style.border = '5px solid orange';
    */

    document.getElementById('container').lastElementChild.style.border = '5px solid orange';


}
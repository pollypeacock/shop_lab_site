/**
 * Created by Клиент on 12.07.2016.
 */

var images = ["images/hand1.jpg", "images/hand2.jpg", "images/sec1.jpg", "images/sec2.jpg", "images/money1.jpg", "images/money2.jpg"];






window.onload = function(){

    var pic = document.getElementsByClassName("myImg");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var mySliderImg = document.getElementById("mySliderImage");

    var index = 1;


    for (var i = 0; i < pic.length; i++){
        setImageFunctions(pic[i], i);
    }


    left.onclick = function(){
        if (index == 1)
            index = 3;
        else index--;


        changeImg(index);
    }

    right.onclick = function(){
        if (index == 3)
            index = 1;
        else index++;

        changeImg(index);
    }




    function changeImg(index){

        //var timeout = setTimeout("changeImg(index)", 100);
        //
        //mySliderImg.style.opacity--;

       // if (mySliderImg.opacity == 1) {
            mySliderImg.src = "images/i" + index + ".jpg";
           // alert("popa");
          //  clearTimeout(timeout);
      //  }
    }
}





function setImageFunctions(image, i){
    image.onmouseover = function(){
        image.src = images[i*2+1];
    }
    image.onmouseout = function(){
        image.src = images[i*2];
    }
}

function changeImage(){




}

(function(){
    'use strict';
    console.log('readingjs');

    const img1 = document.getElementById("one");
    const img2 = document.getElementById("two");
    const img3 = document.getElementById("three");
    const img4 = document.getElementById("four");

        img1.addEventListener("mouseover", function() {
            img1.src = "images/one.png";
        });

        img1.addEventListener("mouseout", function() {
            img1.src = "images/circle1.png"; 
        });

        img2.addEventListener("mouseover", function() {
            img2.src = "images/two.png";
        });

        img2.addEventListener("mouseout", function() {
            img2.src = "images/circle2.png"; 
        });

        img3.addEventListener("mouseover", function() {
            img3.src = "images/three.png";
        });

        img3.addEventListener("mouseout", function() {
            img3.src = "images/circle3.png"; 
        });

        img4.addEventListener("mouseover", function() {
            img4.src = "images/four.png";
        });

        img4.addEventListener("mouseout", function() {
            img4.src = "images/circle4.png"; 
        });

}());
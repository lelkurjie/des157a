(function (){
    'use strict';
    console.log('readingjs');

    const musicNotes = document.querySelector('#musicnotes');
    const blackOverlay = document.querySelector('#overlay');
    const blackOverlay2 = document.querySelector('#overlay2');
    const blackOverlay3 = document.querySelector('#overlay3');
    const blackOverlay4 = document.querySelector('#overlay4');
    const title = document.querySelector('#title');
    const body = document.querySelector('#body');
    const icon = document.getElementById('icon');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const icon4 = document.getElementById('icon4');
    const audio2014 = new Audio("audio/audio2014.mp3");
    const audio2018 = new Audio("audio/audio2018.mp3");
    const audio2023 = new Audio("audio/audio2023.mp4");
    const audio2024 = new Audio("audio/audio2024.mp3");
    

//pressing note 1
    document.getElementById('note1').onclick = function(event){
        console.log('clicked');
        blackOverlay.style.display = "block";
        musicNotes.style.display = "none";
        title.style.display = "none";
        body.style.backgroundImage = "url('images/dimmed.png')";   
    }

    document.getElementById('button').onclick = function(event){
        console.log('clicked button');
        blackOverlay.style.display = "none";
        musicNotes.style.display = "block";
        title.style.display = "block";
        body.style.backgroundImage = "url('images/sheet.png')";
    }

    document.getElementById('icon').onclick = function(event) {
        console.log('audio clicked');
        if (audio2014.paused) {
            audio2014.play();
            icon.src = 'images/pause.png'; 
        } else {
            audio2014.pause();
            icon.src = 'images/icon.png';
        }
    }

//pressing note 2
    document.getElementById('note2').onclick = function(event){
            console.log('clicked');
            blackOverlay2.style.display = "block";
            musicNotes.style.display = "none";
            title.style.display = "none";
            body.style.backgroundImage = "url('images/dimmed.png')";   
        }

        document.getElementById('button2').onclick = function(event){
            console.log('clicked button');
            blackOverlay2.style.display = "none";
            musicNotes.style.display = "block";
            title.style.display = "block";
            body.style.backgroundImage = "url('images/sheet.png')";
        }

        document.getElementById('icon2').onclick = function(event) {
            console.log('audio clicked');
            if (audio2018.paused) {
                audio2018.play();
                icon2.src = 'images/pause2.png'; 
            } else {
                audio2018.pause();
                icon2.src = 'images/icon2.png';
            }
        }
    
//pressing note 3
    document.getElementById('note3').onclick = function(event){
        console.log('clicked');
        blackOverlay3.style.display = "block";
        musicNotes.style.display = "none";
        title.style.display = "none";
        body.style.backgroundImage = "url('images/dimmed.png')";   
    }

    document.getElementById('button3').onclick = function(event){
        console.log('clicked button');
        blackOverlay3.style.display = "none";
        musicNotes.style.display = "block";
        title.style.display = "block";
        body.style.backgroundImage = "url('images/sheet.png')";
    }

    document.getElementById('icon3').onclick = function(event) {
        console.log('audio clicked');
        if (audio2023.paused) {
            audio2023.play();
            icon3.src = 'images/pause3.png'; 
        } else {
            audio2023.pause();
            icon3.src = 'images/icon3.png';
        }
    }
    
//pressing note 4
    document.getElementById('note4').onclick = function(event){
        console.log('clicked');
        blackOverlay4.style.display = "block";
        musicNotes.style.display = "none";
        title.style.display = "none";
        body.style.backgroundImage = "url('images/dimmed.png')";   
    }

    document.getElementById('button4').onclick = function(event){
        console.log('clicked button');
        blackOverlay4.style.display = "none";
        musicNotes.style.display = "block";
        title.style.display = "block";
        body.style.backgroundImage = "url('images/sheet.png')";
    }

    document.getElementById('icon4').onclick = function(event) {
        console.log('audio clicked');
        if (audio2024.paused) {
            audio2024.play();
            icon4.src = 'images/pause4.png'; 
        } else {
            audio2024.pause();
            icon4.src = 'images/icon4.png';
        }
    }
}());
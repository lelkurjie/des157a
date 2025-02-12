(function(){
    'use strict';
    console.log('readingjs');

    const form = document.querySelector('form');
    const madlibOverlay = document.querySelector('#madlib-overlay');
    const madlib = document.querySelector('#madlib');
    const ad1input = document.querySelector('#ad1');

    console.log(ad1input.value);

    const cityinput = document.querySelector('#city');
    const verbinput = document.querySelector('#verb');
    const ad2input = document.querySelector('#ad2');
    const numberinput = document.querySelector('#num');
    const nouninput = document.querySelector('#noun');

    console.log(document.querySelector('#ad1').value);

    // document.querySelector("#submit").addEventListener("click", function() {
    //     document.querySelector("#madlibOverlay").style.display = "block";
    // });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        console.log('submitted form');
        console.log(ad1input);

        const ad1 = document.querySelector('#ad1').value;
        console.log(document.querySelector('#ad1').value);

        const city = document.querySelector('#city').value;
        const verb = document.querySelector('#verb').value;
        const ad2= document.querySelector('#ad2').value;
        const number = document.querySelector('#num').value;
        const noun= document.querySelector('#noun').value;

        if (ad1 === ''){
            madlib.innerHTML = 'To get your menu, enter an adjective!';
            ad1input.focus();

        } else if (city === '') {
            madlib.innerHTML = 'To get your menu, enter a city!';
            cityinput.focus();

        } else if (verb === '') {
            madlib.innerHTML = 'To get your menu, enter a verb!';
            verbinput.focus();
        
        }if (ad2 === ''){
            madlib.innerHTML = 'To get your menu, enter an adjective!';
            ad2input.focus();

        }if (number === ''){
            madlib.innerHTML = 'To get your menu, enter a number!';
            numberinput.focus();

        }if (noun === ''){
            madlib.innerHTML = 'To get your menu, enter a noun!';
            nouninput.focus();

        } else {

            // window.location.href = "results.html";

            madlibOverlay.style.display = "block";


            // document.querySelector("#madlib-overlay").style.display = "block";
            // document.querySelector("#cafeimg").style.display = "none";


            madlib.innerHTML = `It was a <span>${ad1}</span> morning when college student Rose walked into a cafe, located in a quaint corner of  <span>${city}</span>.  The cafe was beautiful and had a calm atmosphere, and the scent of coffee filled the air. The barista, Claire, was busy <span>${verb}</span> behind the counter. “Good morning!” she says, with a bright smile. “What can I get for you?”. Rose replies, “hmm, I will take a <span>${ad2}</span> latte please!”. “Of course. That will be <span>${number}</span> please.” Rose pays and her drink is made. She sits by the window and sees a cute <span>${noun}</span> outside, playing fetch. Rose giggles. It’s a beautiful morning, one that she will always remember.`;

            //  = myText;

            document.querySelector('#ad1').value = '';
            document.querySelector('#city').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#ad2').value = '';
            document.querySelector('#num').value = '';
            document.querySelector('#noun').value = '';
        }

    })
})();
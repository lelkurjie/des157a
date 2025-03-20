(function(){
    'use strict';
    console.log('readingjs');

    const form = document.querySelector('form');
    const madlibOverlay = document.querySelector('#madlib-overlay');
    const madlib = document.querySelector('#madlib');
    const pageheader = document.querySelector('#page-header');
    const errorMessageContainer = document.querySelector('.error-message-container');

    const ad1input = document.querySelector('#ad1');
    const cityinput = document.querySelector('#city');
    const verbinput = document.querySelector('#verb');
    const ad2input = document.querySelector('#ad2');
    const numberinput = document.querySelector('#num');
    const nouninput = document.querySelector('#noun');



    // document.querySelector("#submit").addEventListener("click", function() {
    //     document.querySelector("#madlibOverlay").style.display = "block";
    // });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        console.log('submitted form');
        const ad1 = ad1input.value;
        const city = cityinput.value;
        const verb = verbinput.value;
        const ad2 = ad2input.value;
        const num = numberinput.value;
        const noun = nouninput.value;

        errorMessageContainer.style.display = 'none'; 

        // const city = document.querySelector('#city').value;
        // const verb = document.querySelector('#verb').value;
        // const ad2= document.querySelector('#ad2').value;
        // const number = document.querySelector('#num').value;
        // const noun= document.querySelector('#noun').value;

        if (ad1 === ''){
            errorMessageContainer.innerHTML = 'To get your menu, enter an adjective!';
            errorMessageContainer.style.display = 'block';
            ad1input.focus();

        } else if (city === '') {
            errorMessageContainer.innerHTML = 'To get your menu, enter a city!';
            errorMessageContainer.style.display = 'block';
            cityinput.focus();

        } else if (verb === '') {
            errorMessageContainer.innerHTML = 'To get your menu, enter a verb!';
            errorMessageContainer.style.display = 'block';
            verbinput.focus();
        
        }else if (ad2 === ''){
            errorMessageContainer.innerHTML = 'To get your menu, enter an adjective!';
            errorMessageContainer.style.display = 'block';
            ad2input.focus();

        }else if (num === ''){
            errorMessageContainer.innerHTML = 'To get your menu, enter a number!';
            errorMessageContainer.style.display = 'block';
            numberinput.focus();

        }else if (noun === ''){
            errorMessageContainer.innerHTML = 'To get your menu, enter a noun!';
            errorMessageContainer.style.display = 'block';
            nouninput.focus();

        } else {

            // window.location.href = "results.html";

            madlibOverlay.style.display = "block";
            document.querySelector('.container').style.display = "none";
            document.querySelector('#page-header').style.display = "none";
            
            
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundImage = "url('images/table.png')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.height = "100vh";
            // document.body.style.backgroundPosition = "center";
            
            // document.querySelector("#madlib-overlay").style.display = "block";
            // document.querySelector("#cafeimg").style.display = "none";

            // madlib.innerHTML = `It was a <span>${ad1}</span> morning when college student Rose walked into a cafe, located in a quaint corner `;


            madlib.innerHTML = `It was a <span>${ad1}</span> morning when college student Rose walked into a cafe, located in a quaint corner of  <span>${city}</span>.  The cafe was beautiful and had a calm atmosphere, and the scent of coffee filled the air. The barista, Claire, was busy <span>${verb}</span> behind the counter. “Good morning!” she says, with a bright smile. “What can I get for you?”. Rose replies, “hmm, I will take a <span>${ad2}</span> latte please!”. “Of course. That will be <span>${num}</span> dollars please.” Rose pays and her drink is made. She sits by the window and sees a cute <span>${noun}</span> outside, running. Rose giggles. It’s a beautiful morning, one that she will always remember.`;

            //  = myText;

            document.querySelector('#ad1').value = '';
            document.querySelector('#city').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#ad2').value = '';
            document.querySelector('#num').value = '';
            document.querySelector('#noun').value = '';

            // form.reset();
        }

    })
})();
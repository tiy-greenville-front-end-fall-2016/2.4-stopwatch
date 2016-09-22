// alert('Hey Dan!');


// Start every file like this
(function(){
  "use strict";


  /*
  Multi-line
  comments
  are cool
  */

  var startButton = document.getElementById('start-button');

  var hours = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  console.log(seconds);

  var startTime;
  var currentText;


  function startButtonHandler(){
    console.log('You clicked the button');
    startTime = new Date();
    toggleButton();

    console.log(startTime);

    window.setInterval(logElapsedTime, 1000);
  }

  function logElapsedTime(){
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elasped = millisecondsToInterval(elapsedTime);

    displayInterval(elasped);
  }

  function millisecondsToInterval(ms){
    var msLeft = ms;

    var msInHour = 60000 * 60;
    var msInMinute = 60000;
    var msInSecond = 1000;

    // We can devide two numbers using a forward slash
    // We can use Math.floor() to chop off decimal values after doing math
    var hourCount = Math.floor(msLeft / msInHour);

    /*
    Besides regular division we can do modulo division which returns the remainder
    */
    msLeft = msLeft % msInHour;

    var minuteCount = Math.floor(msLeft / msInMinute);
    msLeft = msLeft % msInMinute;

    var secondCount = Math.floor(msLeft / msInSecond);

    return [hourCount, minuteCount, secondCount];
  }

  function displayInterval(interval){
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  function toggleButton(){
    currentText = startButton.textContent;

    if(currentText == 'Start'){
      startButton.textContent = 'Stop';
    }else{
      startButton.textContent = 'Start';
    }
  }

  startButton.addEventListener('click', startButtonHandler);



}());

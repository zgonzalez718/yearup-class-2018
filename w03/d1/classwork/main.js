function adjustTime(){
  // I selected the span
  let timeElement = document.getElementById('time');

  //I set up the time
  let currentTimeAndDate = new Date();
  let currentTime = currentTimeAndDate.toLocaleTimeString();

  //sanity checks because i'm cautious
  console.log(time);
  console.log(currentTimeAndDate);
  console.log(currentTime);

  // replace the text in the time element with the currentTime
  timeElement.textContent = currentTime;
}

adjustTime();

//save interval id for stopping the clock
let intervalId = setInterval(adjustTime, 1000);

//selected the button
let buttonElement = document.querySelector('#button');

// use this to keep track of if the clock is running
let running = true;

// starts and stops the clock
function toggleClock(){
	alert('Why did you do that?! 🤦‍♂️');
	if (running){
		
		clearInterval(intervalId);
		running = false;
	} else {
		intervalId = setInterval(adjustTime, 1000);
		running = true;
	}

}

buttonElement.addEventListener('click', toggleClock);

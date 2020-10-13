//  Source page 377 Pro html with Css, js, and multimedia.pdf 

/* Tip - You must remove the controls attribute, in the html audio tag element before implementing that code */ 

/* 1. Set up the play button and perform configuration control */
"use strict";
var audio = document.getElementById("audio");

/* Event handler for duration value */
/* 2. the setupSeek() method is called in response to the durationchange event on the audio element.*/
function setupSeek() {
  var seek = document.getElementById("audioSeek");
  seek.min = 0;
  seek.max = Math.round(audio.duration);
  seek.value = 0;
  var duration = document.getElementById("duration");
  duration.innerHTML = "0/" + Math.round(audio.duration);
}

/* 3.TogglePlay method is called when the user clicks the play button - Event handler state play, pause or ended. */
function togglePlay() {
  if (audio.paused || audio.ended) {
      audio.play();
  }
  else {
      audio.pause();
	}  
}

/* 4.The updatePlayPause() method is registered on the audio element for both the play and pause events. */
function updatePlayPause() {
  var play = document.getElementById("play");
  if (audio.paused || audio.ended) {
      play.value = "Play";
  }
  else {
      play.value = "Pause";
	} 
}

/* 5.The endAudio() function is registered with the audio element in response to the ended event
when the audio has finshed playing. */
function endAudio() {
  document.getElementById("play").value = "Play";
  document.getElementById("audioSeek").value = 0;
  document.getElementById("duration").innerHTML = "0/" + Math.round
  (audio.duration);
}

/* 6.Now you need to register the event handlers using the following code */
// Wire-up the event handlers with listerners
audio.addEventListener("durationchange", setupSeek, false);
document.getElementById("play").addEventListener("click", togglePlay, false);
audio.addEventListener("play", updatePlayPause, false);
audio.addEventListener("pause", updatePlayPause, false);
audio.addEventListener("ended", endAudio, false);

// Supporting Progress and seek 

/* 1.There's one event handler, seekAudio function responds to the input element and a 
separate event handler, updateSeek function */
function seekAudio() {
  var seek = document.getElementById("audioSeek");
  audio.currentTime = seek.value;
}

/* 2.The updateSeek() function is called when the ontimeupdate event is raised by the audio element. 
this updates the range control to reflect the current position within the file. */
function updateSeek() {
   var seek = document.getElementById("audioSeek");
   seek.value = Math.round(audio.currentTime);
   var duration = document.getElementById("duration");
   duration.innerHTML = Math.round(audio.currentTime) + "/" +
   Math.round(audio.duration);
}

/* 3.Register the event handlers using the following code */
document.getElementById("audioSeek").addEventListener
("change", seekAudio, false);
audio.addEventListener("timeupdate", updateSeek, false);

// Controlling the Volume 

/* 1.The toggleMute() function toggles the muted property of the audio element */
function toggleMute() {
     audio.muted = !audio.muted;
}

/* 2.the updateMute() function responds to the volumechange event and sets the button label 
according to the current value of the muted property. again, doing it this way ensures the button label is correct.*/
function updateMute() {
   var mute = document.getElementById("mute");
   if (audio.muted) {
      mute.value = "Unmute";
   }
   else {
   	mute.value = "Mute";
	} 
}

/* 3.Finally, the setVolume() function is called when the user moves the slider on 
the second range control. it sets the volume property of the audio element to whatever 
was selected on the range control.*/
function setVolume() {
	var volume = document.getElementById("volume");
    audio.volume = volume.value;
}

// register the event handlers 
document.getElementById("mute").addEventListener("click",
toggleMute, false);
audio.addEventListener("volumechange", updateMute, false);
document.getElementById("volume").addEventListener("change",
setVolume, false);

// Changing the audio source event handler
function nextFile() {
  audio.src = "multimedia/WeWishUaMerryChristmas.mp3";
  //audio.load(); needed if there are multiple sources
  audio.play();
}

// Register the event handler with the next button
document.getElementById("next").addEventListener("click",
	nextFile, false);

/* ** File searcher v1.0 ** 
(https://developer.mozilla.org/) */

// Accessing the first selected file 
const selectedFile = document.getElementById('searcher').files[0];

/* It is also possible (but not mandatory) to access the FileList through the change event.
You need to use EventTarget.addEventListener() to add the change event listener. */
const inputElement = document.getElementById("searcher");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}

// Implementing video controls

var video = document.getElementById("video");

function setupSeekVideo() {
  var seek = document.getElementById("videoSeek");
  seek.min = 0;
  seek.max = Math.round(video.duration);
  seek.value = 0;
  var duration = document.getElementById("durationVideo");
  duration.innerHTML = "0/" + Math.round(video.duration);
}
function togglePlayVideo() {
  if (video.paused || video.ended) {
      video.play();
  }
  else {
      video.pause();
  } 
}

function updatePlayPauseVideo() {
  var play = document.getElementById("playVideo");
  if (video.paused || video.ended) {
      play.value = "Play";
  }
  else {
      play.value = "Pause";
  } 
}

function endVideo() {
  document.getElementById("playVideo").value = "Play";
  document.getElementById("videoSeek").value = 0;
  document.getElementById("durationVideo").innerHTML = "0/"
      + Math.round(video.duration);
}

// Wire-up the event handlers listeners
video.addEventListener("durationchange", setupSeekVideo, false);
document.getElementById("playVideo").addEventListener("click", togglePlayVideo, false);
video.addEventListener("play", updatePlayPauseVideo, false);
video.addEventListener("pause", updatePlayPauseVideo, false);
video.addEventListener("ended", endVideo, false);

// Support progress and seek
function seekVideo() {
  var seek = document.getElementById("videoSeek");
  video.currentTime = seek.value;
}

function updateSeekVideo() {
  var seek = document.getElementById("videoSeek");
  seek.value = Math.round(video.currentTime);
  var duration = document.getElementById("durationVideo");
  duration.innerHTML = Math.round(video.currentTime) + "/"
      + Math.round(video.duration);
}

document.getElementById("videoSeek").addEventListener("change", seekVideo, false);
video.addEventListener("timeupdate", updateSeekVideo, false);

// Support volume and mute
function toggleMuteVideo() {
  video.muted = !video.muted;
}

function updateMuteVideo() {
  var mute = document.getElementById("muteVideo");
  if (video.muted) {
      mute.value = "Unmute";
  }
  else {
        mute.value = "Mute";
  } 
}

function setVolumeVideo() {
  var volume = document.getElementById("volumeVideo");
  video.volume = volume.value;
}

// Wire-up the event handlers listeners
document.getElementById("muteVideo").addEventListener("click", toggleMuteVideo, false);
video.addEventListener("volumechange", updateMuteVideo, false);
document.getElementById("volumeVideo").addEventListener("change", setVolumeVideo, false);

/*
  In javascript just how important events are.
  In this chapter, the event handlers were used to primarily sync the UI elements with the audio or video elements
  they were controlling. The current state of the audio or video is available through properties such as duration,
  currentTime, and volume. Some of these properties, including currentTime and volume can be set as well, allowing 
  you to adjust them based on user input. To create your own custom controls, you just need to wire up the necessary 
  event handlers so changes in the state of the audio or video are reflected in the UI elements, and vice versa.
*/

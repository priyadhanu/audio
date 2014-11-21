document.addEventListener("deviceready", onDeviceReady, false);
$(document).ready(function() {
alert("Document ready!");
  window.isphone = false;
    if(document.URL.indexOf("http://") === -1 
        && document.URL.indexOf("https://") === -1) {
        window.isphone = true;
		alert("Setting window.isphone true!");
    }

    if( window.isphone ) {
	alert("Adding event listener!");
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }
});

function onDeviceReady() {
alert("Inside onDeviceReady().");
    playAudio();
}	

function playAudio() {
    // Play the audio file at url
    var my_media = new Media('/android_asset/www/testaudio.mp3',
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio */
    my_media.play();
} 

/* document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    playAudio();
}

function playAudio() {
    // Play the audio file at url
    var my_media = new Media('/android_asset/www/testaudio.mp3',
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio */
/*     my_media.play();
} */
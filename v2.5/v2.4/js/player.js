// TODO les boutons ne fonctionne pas malgré le retrait de la fonction 'controls' en html !!
// Revoir le code et les différents mot clés (erreurs potentielles )...

// Une fois le document chargé, initialisation du player en callback
document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

// Variables pour stocker et piloter les éléments du player
var mediaPlayer;
var playPauseBtn;
var muteBtn;
var progressBar;

// Fonction d'initialisation du player
function initialiseMediaPlayer() {

	// Elements
	// Récupération de l'objet vidéo
	mediaPlayer = document.getElementById("media-video");
	// Récupération des objets à contrôler et modifier (boutons et progress bar)
	playPauseBtn = document.getElementById("play-pause-button");
	muteBtn = document.getElementById("mute-button");
	progressBar = document.getElementById("progress-bar");

	// Masquer le contrôleur natif du navigateur
	mediaPlayer.controls = false;

	// Ecouteurs
	// Ecoute de l'événement timeupdate pour mettre à jour la progress bar
	mediaPlayer.addEventListener("timeupdate", updateProgressBar, false);
	// Ecoute de l'événemeent play et modification de l'état de bouton
	mediaPlayer.addEventListener("play", function() {changeButtonView(playPauseBtn, "pause");}, false);
	// Ecoute de l'événemeent pause et modification de l'état de bouton
	mediaPlayer.addEventListener("pause", function() {changeButtonView(playPauseBtn, "play");}, false);

	// Ecoute de l'événement volumechange et gestion de l'état de bouton mute, muted
	mediaPlayer.addEventListener("volumechange", function(e) {
		if (mediaPlayer.muted) {
			changeButtonView(muteBtn, "unmute");
		} else {
			changeButtonView(muteBtn, "mute");
		}
	}, false);
	// Ecoute de l'événement ended lance un événement pause
	mediaPlayer.addEventListener("ended", function() { this.pause(); }, false);
}

// Switch entre play et pause (vice-versa) avec mise à jour du bouton
function basculePlayPause() {
	if (mediaPlayer.paused || mediaPlayer.ended) {
		changeButtonView(playPauseBtn, "pause");
		mediaPlayer.play();
	} else {
		changeButtonView(playPauseBtn, "play");
		mediaPlayer.pause();
	}
}

// Arrêt du média et retour au début
function stopPlayer() {
	mediaPlayer.pause();
	mediaPlayer.currentTime = 0;
}

// Change le volume du média par incrémentation de 0.1 
function changeVolume(sens) {
	if (sens === "+") {
		mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
	} else {
		mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
	}
	mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}

// Switch le mute du player par interrogation de la propriété muted
function basculeMute() {
	IF (mediaPlayer.muted) {
		changeButtonView(muteBtn, "mute");
		mediaPlayer.muted = false;
	} else {
		changeButtonView(muteBtn, "unmute");
		mediaPlayer.muted = true;
	}
}

// relance le média dans le player
function replayMedia() {
	resetPlayer();
	mediaPlayer.play();
}

// fonction générique de changement de bouton
function changeButtonView(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}

// Fonction générique de remise à zéro du player, progress bar et médias
// avec affichage du bouton play
function resetPlayer() {
	progressBar.value = 0;
	mediaPlayer.currentTime = 0;
	changeButtonView(playPauseBtn, "play");
}

// Fonction générique de mise à jour de la progress bar
function updateProgressBar() {
	// Calcul du pourcentage entre les paramètres duration et currentTime
	var percentage = Math.floor((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
	// Mise à jour de la valeur de la progress bar
	progressBar.value = percentage;
}


















/* 

Pour infos pour récupérer les éléments du DOM à l'aide de javascript !!

var v = document.getElementsByTagName("video")[0];
v.play();
v.pause();
v.loadstart();
v.suspend();
v.ended();
v.volumechange();
v.error();


*/

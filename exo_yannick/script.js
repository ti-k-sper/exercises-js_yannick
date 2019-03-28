var afficherScore = document.getElementById("affichage");
var score = 0;
var multiplicateur = 1;

function cliquer(){
	if(multiplicateur >= 2){
		score += multiplicateur;
	}
	else {
		score++;
	}
	//if((multiplicateur >= 2) && (score > 50)){
	//	score += multiplicateur;
	//}
	//else {
	//	score++;
	//}
	//console.log(score + " scoreclick");
	afficherScore.innerHTML = score;
}

function augmenterMultiplicateur(){
	multiplicateur++;
	//console.log("multiplicateur " + multiplicateur);
	//var prixMultiplicateur = 50;
	//score -= prixMultiplicateur;
	score -= 50;
	//console.log(score + " scoremulti");
	afficherScore.innerHTML = score;
}

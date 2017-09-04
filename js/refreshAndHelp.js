//refreshAndHelp.js has the functions for reloading the page and displaying explanation/help
//for the statistics being displayed. 
//When the bottom-left corner refresh button is pressed, it refreshes the page and 
//moves to the beginning of the survey. The function Restart() accomplishes this task
//so that the user can look at the prediction/stats for another team matchup.
function Restart() {
    location.reload();
	//Goes back to to the div, predictGameDiv
    window.location.hash = '#predictGameDiv';
}

//displayExplanation() inserts a text node into the tap target that 
//pops up in the bottom right-hand corner of the web page each time 
//a button to show a graph is clicked.
function displayExplanation(questionNum) {
    document.getElementById("helpInfo").innerHTML = "";
    var headerAnswer = document.createElement("h3");
	var headerVal;
	if (questionNum!=4){
		headerVal = document.createTextNode("Why display this information?\n");
	}else{
		headerVal = document.createTextNode("You're done!\n");	
	}
    headerAnswer.appendChild(headerVal);
    if (questionNum == 1) {
        var newPar = document.createTextNode("If you want to have a strong understanding of how teams are doing, always look at their most recent games.");
    } else if (questionNum == 2) {
        var newPar = document.createTextNode("You do not only want to look at recent history, because short-term injuries or simple losing streaks can cause anomalies. Thus, these season statistics are very useful for comparison. PPG = Points per Game, OPPG = Opponent Points per Game, RPG = Rebounds per Game, and APG = Assists per Game");
    } else if (questionNum == 3) {
        var newPar = document.createTextNode("Field Goal Percentages (FG PCT) are important, because they show how efficient teams are. If a team has a low field goal percentage, they are wasting a lot of energy running up and down the court without successful shots");
    }else if (questionNum == 4) {
        var newPar = document.createTextNode("Weights were put on certain values to develop this algorithm. Points scored in most recent games, PPG, OPP PPG, RPG, and APG were also taken into account. Finally, teams' overall rankings in the NBA were given more weight. If you would like to predict other games, click the refresh button on the left");
    }
    document.getElementById("helpInfo").appendChild(headerAnswer);
    document.getElementById("helpInfo").appendChild(newPar);
	//Opens up the tag target in the bottom right corner
    $('.tap-target').tapTarget('open');

}
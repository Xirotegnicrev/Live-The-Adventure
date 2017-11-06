//BASE
$( document ).ready(function() {
    console.log( "ready!" );
    init();
});

function init(){
    console.log( "init" );
    initEvents();

    //GAME DIV HIDDEN BY DEFAULT
    $("#game").hide();
    createAdventurer();
    newNode(0);
}

function initEvents(){
    console.log( "initEvent" );
    $("#startButton").attr("onClick", "startGame()");
}






//START GAME
function startGame(){
    $("#home").fadeOut(1000, function(){
        $("#game").show();
        /*$("body").css("background-image", "url(./ressources/img/bg-game.jpg)")*/
    });
}








//START
function adventurer(){
    this.mentalPoint = 10;
    this.name = "Player1";

    this.modifyMP = function(mpLost){ if((this.mentalPoint += mpLost) <= 0) gameOver(); };
    this.setName = function(name) { this.name = name };
}

function updateNav(){
    $("#name").text = adventurer.name;
    $("#MP").text = adventurer.mentalPoint;
}

var adventurer;

function createAdventurer(){
    adventurer = new adventurer();

    var name = window.location.href.split("?prenom=")[1];
    adventurer.setName(name);
}

function gameOver(){
    alert("GAME OVER");
}

function newNode(nodeNumber){
    $("#choix").empty();

    adventurer.modifyMP(nodes[nodeNumber].sante);
    updateNav();
console.log(adventurer);

    var urlPicture = nodes[nodeNumber].src;
    var text = nodes[nodeNumber].text;
    var choix = nodes[nodeNumber].choix;

    $("#picture").attr("src", urlPicture);
    $("#text").text(text);
    for(var i=0; i<choix.length; i++){
        var button = $("<button>").text(choix[i].txt).click(
            newNode.bind(this, choix[i].node )
        );
        $("#choix").append(button)
    }
}
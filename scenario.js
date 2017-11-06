'use strict';   
//  
/*[ , "Vous étiez entrain de programmer un jeu extraordinaire afin de gagner le W3Ackathon.\nPris d'une envie pressante, vous êtes partis vous soulager.\nVous vous réveiller 3 heures plus tard dans les toilettes, vous ignorez ce qu'il s'est passé.", "Désirez-vous vous laver les mains ?", 1, "Désirez-vous sortir ?", 2],
[, "voulez-vous aller tout droit?",3,"voulez-vous aller à gauche ?",4,"voulez-vous aller à droite ?",5,]*/
var nodes = [
	{// 0 début du jeu extraordinaire
		src:"img/images.jpg",
		text:"Au 6eme étage d'un batiment,vous étiez entrain de programmer un jeu extraordinaire afin de gagner le W3Ackathon.\nPris d'une envie pressante, vous êtes partis vous soulager.\nVous vous réveiller 3 heures plus tard dans les toilettes, vous ignorez ce qu'il s'est passé.",
		choix:[
			{txt:"Désirez-vous vous laver les mains ?", node: 1},
			{txt:"Désirez-vous sortir ?", node: 2}
		],
		sante: 0
	},
	{ // 1 Laver les mains
		src:"img/hand.jpg",
		text:"Vous commencez à vous laver les mains,vous sentez une odeur de fer et vous constatez que vos mains sont recouvert de sang",
		choix:[
			{txt:"Désirez-vous sortir ?", node: 2}
		],
		sante: -2
	},
	{// 2 Couloir sombre
		src:"img/couloir.jpg",
		text:"Vous arrivez dans un couloir sombre, vous entendez des hurlements. ",
		choix:[
			{txt:"voulez-vous aller tout droit?", node: 3},
			{txt:"voulez-vous aller à gauche ?", node: 4},
			{txt:"voulez-vous aller à droite ?", node: 5}
		],
		sante: 0
	},
	{// 3 le chemin tout droit
		src:"img/spider.jpg",
		text:"Vous entrez dans une piece pleine d'araignées.",
		choix:[
			{txt:"Désirez-vous sortir ?", node: 2}
		],
		sante: 0
	},
	{// 4 le chemin a gauche
		src:"img/biere.jpg ",
		text:"Vous prenez l'escalier.Vous trouvez une biere au niveau 4,vous regagnez trois points de vie.",
		choix:[
			{txt:"voulez-vous continuer à descendre les escaliers?", node: 6},
			{txt:"voulez-vous reprendre l'ascenseur ?", node: 2},
			{txt:"voulez-vous aller tout droit ?", node: 3}
		],
		sante: 3
	},
	{// 5 La chemin a droite
		src:"img/dark-room.jpg ",
		text:"Vous entrez dans la salle de réunion,votre veste se trouve à gauche et votre sac se trouve à droite",
		choix:[
			{txt:"voulez-vous continuer à descendre les escaliers?", node: 6},
			{txt:"voulez-vous reprendre l'ascenseur ?", node: 2},
			{txt:"voulez-vous chercher à gauche?", node: 9},
			{txt:"voulez-vous chercher à droite?", node: 10}
		],
		sante: 3
	},
	{// 6 descente dans l'escalier
		src:"img/hallway.jpg",
		text:"Vous êtes au niveau 3,Une femme crie à l'aide au bout du couloir. ",
		choix:[
			{txt:"voulez-vous aller l'aider?", node: 7},
			{txt:"voulez-vous continuer à descendre par l'escalier?", node: 8},
			{txt:"voulez-vous reprendre l'ascenseur ?", node: 2}
		],
		sante: 0
	},
	{// 7
		src:"img/yael.jpg",
		text:"Vous allez secourir cette femme,elle vous parait de plus en plus étrange.Elle vous mord au visage.Vous perdez deux points de vie",
		choix:[
			{txt:"voulez-vous continuer à descendre par l'escalier?", node: 8},
			{txt:"voulez-vous reprendre l'ascenseur ?", node: 2},	
		],
		sante: -2
	},
	{// 8 Descente de l'escalier
		src:"img/sortie.jpg",
		text:"Vous arrivez tout en bas du batiment, vous apercevez une sortie. ",
		choix:[
			{txt:"voulez-vous sortir?", node: 11},
			{txt:"voulez-vous remonter les escaliers ?", node: 6},
			{txt:"voulez-vous reprendre l'ascenseur ?", node: 2}
		],
		sante: 0
	},
	{// 9 La veste
		src:"img/jacket.jpg ",
		text:"Vous recuperez votre veste avec vos affaires personnelles.",
		choix:[
			{txt:"voulez-vous reprendre l'ascenseur ?", node: 2},
		],
		sante: 0
	},
	{// 10 Le Sac
		src:"img/pass.png ",
		text:"Vous recuperez votre sac avec la carte de l'ascenseur.",
		choix:[
			{txt:"voulez-vous reprendre l'ascenseur ?", node: 2},
			{txt:"voulez-vous chercher à gauche?", node: 9}
		],
		sante: 0
	},
	{	// 11
		src:"img/horreur.jpg",
		text:"Vous avez trouve la sortie.le jeu est termine ",
		choix:[
			
		],
		sante: 0
	}

];
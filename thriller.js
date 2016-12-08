verseOne();
chorus(1);
verseTwo();
chorus(2);
bridge();
verseThree();
chorus(3);
Outro();

function verseOne()  {
console.log("It's close to midnight and something evil's lurking in the dark \nUnder the moonlight you see a sight that almost stops your heart \nYou try to scream but terror takes the sound before you make it \nYou start to freeze as horror looks you right between the eyes, \nYou're paralyzed\n")
}

function chorus(chorusNo) {
chorusLine1();
chorusLine2(chorusNo);
chorusEnd();
}

function chorusLine1() {
console.log("\nCause this is thriller, thriller night")
}

function chorusLine2(chorusNo) {
	switch(true){
		case(chorusNo === 1): 
		console.log("And no one's gonna save you from the beast about to strike");
		break
		case(chorusNo > 1): 
		console.log("There ain't no second chance against the thing with forty eyes");
		break
	}
}

function chorusEnd() {
	console.log("You know it's thriller, thriller night\nYou're fighting for your life inside a killer, thriller tonight")
}

function verseTwo() {
console.log("\nYou hear the door slam and realize there's nowhere left to run\nYou feel the cold hand and wonder if you'll ever see the sun\nYou close your eyes and hope that this is just imagination\nBut all the while you hear the creature creepin'up behind\nYou're out of time");
}

function bridge() {
console.log("\nNight creatures call\nAnd the dead start to walk in their masquerade\nThere's no escapin' the jaws of the alien this time (they're open wide)\nThis is the end of your life")
}

function verseThree() {
console.log("\nThey're out to get you, there's demons closing in on every side\nThey will possess you unless you change the number on your dial\nNow is the time for you and I to cuddle close together\nAll thru the night I'll save you from the terrors on the screen,\nI'll make you see")
}

function Outro() {
console.log("\nDarkness falls across the land\nThe midnite hour is close at hand\nCreatures crawl in search of blood\nTo terrorize y'awl's neighbourhood\nAnd whosoever shall be found\nWithout the soul for getting down\nMust stand and face the hounds of hell\nAnd rot inside a corpse's shell\nThe foulest stench is in the air\nThe funk of forty thousand years\nAnd grizzly ghouls from every tomb\nAre closing in to seal your doom\nAnd though you fight to stay alive\nYour body starts to shiver\nFor no mere mortal can resist\nThe evil of the thriller\nCan you dig it?!")
}
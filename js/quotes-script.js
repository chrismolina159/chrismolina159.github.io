let quotes = [
"If you want a happy ending, that depends of course on where you stop your story.",
"Ave, Imperator, morituri te salutant",
"All hope abandon, ye who enter here",
"May you live in interesting times. May you be recognized by people in high places.  May you find what you're looking for.",
"Perception without comprehension is a dangerous combination.",
"The reason for time is so that everything doesn't happen at once",
"We feel free when we escape, even if it be but from the frying pan into the fire",
"Fate has a way of putting in front of us, that which we most try to leave behind",
"Don’t cry because it’s over; Smile because it happened",
"Be yourself; everyone else is already taken",
"When you tear out a man’s tongue, you are not proving him a liar, you’re only telling the world that you fear what he might say",
"The saints are the sinners who keep on trying",
"Do not by any means destroy yourself, for if you live you may yet have good fortune.  But all the dead are dead alike",
"A wise man does not waste so good a commodity as lying for naught",
"I learned that courage was not the absence of fear but the triumph over it.  The brave man is not he who does not feel afraid, but he who conquers that fear",
"Many that live deserve death.  And some that die deserve life.  Can you give it to them Frodo?  Do not be too eager to deal out death and judgement.  Even the very wise cannot see all ends.",
"It is not true that people stop pursuing dreams because they grow old; they grow old because they stop pursuing dreams."
];
let authors = [
"Orson Welles",
"Suetonius, De Vita Caesarum",
"Dante's Inferno",
"Unknown",
"Lutece twins(Bioshock Infinite)",
"Albert Einstein",
"Eric Hoffer",
"Mozzie(White Collar)",
"Dr.Seuss",
"Oscar Wilde",
"Tyrion Lannister(Game Of Thrones)",
"Robert Louis Stevenson",
"CS Lewis",
"Mark Twain",
"Nelson Mandela",
"Gandalf(LoTR: The Fellowship of the Ring)",
"Gabriel Garcia Marquez"
];

let numOfQuo = quotes.length;
let quoteText = document.getElementById("quote-text");
let quoteAuthor  = document.getElementById("quote-author");

$(document).ready(function(){
	$("#random-btn").hover(
		function(){
			$(this).css("background-color", "rgba(40,100,255,1)");
		},
		function(){
			$(this).css("background-color", "rgba(0,180,255,1)");
		}
	);
	$("#random-btn").click(function(){
		document.getElementById("random-btn").style.pointerEvents = "none";
		var rand = Math.floor(Math.random() * numOfQuo);
		quoteText.style.opacity = "0";
		quoteAuthor.style.opacity = "0";
		setTimeout(function(){
			quoteText.innerHTML = '"'+quotes[rand]+'"';
			quoteText.style.opacity = "1";
		}, 1000);
		setTimeout(function(){
			quoteAuthor.innerHTML = "-"+authors[rand];
			quoteAuthor.style.opacity = "1";
		}, 1300);
		setTimeout(function(){
			document.getElementById("random-btn").style.pointerEvents = "auto";
		}, 1900);
	});
})
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var s1 = document.querySelector("#S1");
var s2 = document.querySelector("#S2");
var img = document.querySelector("#img1");
var sc1=0;
var sc2=0;
var win = 0;
var reset = document.querySelector("#text");
text.addEventListener
player1.addEventListener("click",function(){
	if(sc1<5&&win==0)
	sc1++;
	
	s1.textContent = sc1;
	if(sc1==5){
		win=1;
		s1.classList.add("winner");
		img.src="1.jpg";
		}
	
})
player2.addEventListener("click",function(){
	if(sc2<5&&win==0)
	sc2++;

	s2.textContent = sc2;
	if(sc2==5){
		win=1;
	
	s2.classList.add("winner");
		img.src="winner.gif";
	}
	
})
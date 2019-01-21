function init()
{
	 var obj = document.getElementById("data");
	 var data = JSON.parse(obj.innerHTML);
	 var home = document.querySelector("#home");
	 var about = document.querySelector("#about");
	 var contact = document.querySelector("#contact");
	 var recent = document.querySelector("#recent");
	 document.getElementById("main").innerHTML=data.home.content;
	 home.onclick = function(){
	 	document.getElementById("main").innerHTML=data.home.content;

	 } 
	 about.onclick = function(){
	 	document.getElementById("main").innerHTML=data.about.content;

	 } 
	 contact.onclick = function(){
	 	document.getElementById("main").innerHTML=data.contact.content;

	 } 
	 recent.onclick = function(){
	 	document.getElementById("main").innerHTML=data.recent.newsArray[0].news+" "+data.recent.newsArray[1].news;

	 } 
 
}
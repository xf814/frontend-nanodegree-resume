/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Feng Xiong");

/*
 var awesomeThoughts = "I am Feng Xiong and I am AWESOME!";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 $("#main").append(funThoughts);
 */

var name = "Feng Xiong";
var role = "Web Developer";
var email = "xfxf820@163.com";
var bioPic = "images/self-image.png";
var welcomeMsg = "Welcome to my homepage!";
var skills = ["Programming"];

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
var formattedEmail = HTMLemail.replace("%data%",email);
var formattedBioPic = HTMLbioPic.replace("%data%",bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%",skills);

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"email" : formattedEmail,
	"bioPic" : formattedBioPic,
	"welcomeMsg" : formattedWelcomeMsg,
	"skills" : formattedSkills
}

$("#header").prepend(bio.skills);
$("#header").prepend(bio.welcomeMsg);
$("#header").prepend(bio.bioPic);
$("#header").prepend(bio.email);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);



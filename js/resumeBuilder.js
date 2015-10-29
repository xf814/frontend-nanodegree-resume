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

/*
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
*/

var bio = {
	"name" : "Feng Xiong",
	"role" : "College student" ,
	"contact" : {
		"mobile" : "(+86)18811463708",
		"email" : "xfxf820@163.com",
		"github" : "xf814",
		"location" : "Beijing, China"
	},
	"welcomeMessage" : "Welcome to my homepage",
	"skills" : [
		"Programming"
	],
	"bioPic":"images/self-image.png"
};

var education = {
	"schools" : [
		{
			"name" : "Peking University",
			"location" : "Beijing, China",
			"degree" : "BA",
			"majors" : ["Biology"],
			"dates" : "2012-2016",
			"url" : "www.pku.edu.cn"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
};

var work = {

};

var project = {

};


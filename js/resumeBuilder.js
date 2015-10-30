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
	"jobs" : [
		{
			"employer" : "CBI Laboratory",
			"title" : "Research Intern",
			"dates" : "2015.7-2016.6",
			"location" : "Beijing, China",
			"description" : "..."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Cas9 off-target site searching tool",
			"dates" : 2015,
			"description" : "..."
		}
	]
};

if(bio.skills.length != 0){
	$("#header").append(HTMLheaderName.replace("%data%","Feng Xiong"));
	$("#header").append(HTMLskillsStart);
	$("#header").append(HTMLskills.replace("%data%",bio.skills.join(" ")));
}

for(index in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[index].title);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[index].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[index].location);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[index].description);
	
	var formattedWorkInfo = formattedEmployer + formattedTitle + 
		formattedDates + formattedLocation + formattedDescription;
	$(".work-entry:last").append(formattedWorkInfo);
}

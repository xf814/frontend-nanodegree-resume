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
	"role" : "College Student" ,
	"contacts" : {
		"mobile" : "(+86)18811463708",
		"email" : "xfxf820@163.com",
		"github" : "xf814",
		"twitter" : "none",
		"location" : "Shenzhen, China"
	},
	"welcomeMessage" : "Welcome to my homepage",
	"skills" : [
		"Skill-1","Skill-2","Skill-3","Skill-4"
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
			"dates" : 2016,
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
			"url" : "http://www.udacity.com/course/ud555"
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

/*
if(bio.skills.length != 0){
	$("#header").append(HTMLheaderName.replace("%data%","Feng Xiong"));
	$("#header").append(HTMLskillsStart);
	$("#header").append(HTMLskills.replace("%data%",bio.skills.join(" ")));
}
*/

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	//var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	//var formattedSkills = HTMLskills.replace("%data%",bio.skills.join(" "));
	
	$("#header").prepend(HTMLskillsStart);
	var formattedSkills = "";
	for(index in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[index]));
	}

	//$("#header").prepend(HTMLskillsStart);
	//$("#skills").text(formattedSkills);
	//console.log($("#skills").text(formattedSkills));
	$("#header").prepend(formattedWelcomeMsg);
	$("#header").prepend(formattedBioPic);
	//$("#header").prepend(formattedEmail);
	var formattedContacts = "";
	var contactWays = ['mobile','email','github','twitter','location'];
	for(index in contactWays){
		formattedContacts += bio.contacts[contactWays[index]]
	}
;
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);	

}

work.display = function(){
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
}

projects.display = function(){
	for(index in projects.projects){
		//console.log(index);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[index].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[index].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[index].description);
		var formattedProjectInfo = formattedTitle + formattedDates + formattedDescription;

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectInfo);
	}
}

/*
$("#main").append(internationalizeButton);
var inName = function(){
	var names = bio.name.split(" ");
	var newName = names[0] + " " + names[1].toUpperCase();
	return newName;
}
*/
bio.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
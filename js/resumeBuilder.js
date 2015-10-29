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
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

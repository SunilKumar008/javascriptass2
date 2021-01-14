//chapter 21 to 25
// var first = "sunil ";
// var second = " kumar";
// var combine = first+second;
// document.write("My Full Name is:"+"<br/>"+combine);
// var user = prompt("Enter your favourite mobile :");
// document.write("<br/>");
// var len = user.length;
// document.write("Length of string is  "+len);

// document.write("<br/>");
// var pak = "pakistani";
// var chek = pak.indexOf("n");
// var chaat = pak.charAt(2);
// document.write("Index of pakistan is at: "+chek+"<br/>");
// document.write("character at index 3 in pakistan is: "+chaat);

// var uper = prompt("Enter a name or string");
// var chng = uper.toUpperCase();
// var lowe = uper.toLowerCase();
// document.write("Your string in upper case " + chng + "<br/>");
// document.write("Your string in lower case " + lowe);

// var theString = "the quick brown fox jumps over the lazydog";
// document.write("the quick brown fox jumps over the lazydog"+"<br/>");
// document.write("the word occure in above string  ")
// document.write(theString.split("the").length - 1+"  times");

// var hyd = "hyderabad";
// document.write("City is "+hyd+"br/>");
// var rep = hyd.replace("hyder","Islam");
// document.write("city after replace "+rep);

// var str = "Lorem ipsum dolor and  sit amet consectetur and adipisicing elit and Recusandae velit";
// var rep = str.replace(/and/g, "&");
// document.write("document before replace" +"<br/>"+str+"<br/>");
// document.write("after replace with and"+"<br/>"+rep);

// var first ="555";
// var second = parseInt(first);
// var y = typeof second;
// document.write(y);

// var num = 25.46;
// var stt= num.toString();
// var replc = stt.replace(".","");
// document.write("value in float "+num+"<br/>")
// document.write(replc+"<br/>");
// document.write( "type of value "+typeof replc );

// var percentage = 30 / 45 * 100;
// var set = percentage.toFixed(2);
// document.write("percentage is  "+set);

//chapter 26 to 3

// var nam = +prompt("ENTER A VALUE IN FLOAT");
// var flot = parseFloat(nam);
// var roun = Math.round(flot);
// var flor = Math.floor(flot);
// var cei = Math.ceil(flot);

// document.write("number is :" + flot + "<br/>");
// document.write(" Round off value is :" + roun + "<br/>");
// document.write("floor value is:" + flor + "<br/>");
// document.write("ceil value is:" + cei + "<br/>");


// document.write("<br/>");
// document.write("<br/>");
// var nam = +prompt("ENTER A VALUE IN NEGATIVE FLOAT");
// var flot = parseFloat(nam);
// var roun = Math.round(flot);
// var flor = Math.floor(flot);
// var cei = Math.ceil(flot);
// var ab = Math.abs(flot);
// document.write("negative number is :" + flot + "<br/>");
// document.write(" negative Round off value is :" + roun + "<br/>");
// document.write(" negative floor value is:" + flor + "<br/>");
// document.write(" negative ceil value is:" + cei + "<br/>");
// document.write("Absolute value is"+ab+"<br/>");


// var x = Math.random();
// var y = Math.round(x);
// document.write("Random dice value is"+y+"<br/>");


// var a = Math.random()*100;
// var b = Math.round(a);
// document.write("Random value between 1 and 100 is:"+b);


// var m = 5;
// var me = +prompt("Enter a number for secret number check");
// if (m==me) {
//     alert("hurra!your number is matched ");
// }
// else {
//     alert("your number not matched with secret number ");
// }
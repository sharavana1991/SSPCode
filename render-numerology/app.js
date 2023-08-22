const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type("html").send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Numerology</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet">
		<style>
			table, th, td {
			  border: 1px solid black;
			}
			</style>
	</head>
	
	<body>
		<h1 style="text-align: center; margin: 0;">
			Numerology
		</h1>
		<br>
		<form id="form">
			<h3>Enter the name :   <input type="text" name="typedname" size="50" required="" autofocus></h3>
<br>
			<input type="submit" name="calculate" value="Calculate" id="calculate">
		</form>	
		<br>
		<h3 id="resultAnswer">The result of "<span id="name"></span>" is : <span id="result"></span></h3>
		<!--Explanations-->
		<br>
		<hr>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7872994112078482"
     crossorigin="anonymous"></script>
<!-- Horizontal1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7872994112078482"
     data-ad-slot="5796201632"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
		<hr>
		<br>
		<h3 style="text-align: center; margin: 0; text-decoration: underline;">Explanations</h3>
		<h2 class="small1 center"><span id="chart"></span>Numerology Number Chart</h2>
		<table class="center full-width tby w80"style="width:90%">
			<tbody>
				<tr class="big bold"><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr>				
				<tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>U</td><td>O</td><td>F</td></tr>
				<tr><td>I</td><td>K</td><td>G</td><td>M</td><td>H</td><td>V</td><td>Z</td><td>P</td></tr>
				<tr><td>J</td><td>R</td><td>L</td><td>T</td><td>N</td><td>W</td><td></td><td></td></tr>
				<tr><td>Q</td><td></td><td>S</td><td></td><td>X</td><td></td><td></td><td></td></tr>
				<tr><td>Y</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
			</tbody>
		</table>
        		<br>

		<table class="center full-width tby w80"style="width:90%">
			<tbody>
				<tr>
			
				<td>
					<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7872994112078482"
					crossorigin="anonymous"></script>
					<!-- TopRight1 -->
					<ins class="adsbygoogle"
					style="display:block"
					data-ad-client="ca-pub-7872994112078482"
					data-ad-slot="6458546612"
					data-ad-format="auto"
					data-full-width-responsive="true"></ins>
					<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
				</td>
				</tr>
			</tbody>
		</table>
		
		<script type="text/javascript">
		
/*FUNCTION THAT gets the number*/
function findnumer(typedname){
	var value = 0;
	var output = typedname.split('');
	output.forEach(function (output,i) {
	switch(output)
                {
                    case "A":
                        value = value + 1;
                        break;
                    case 'I':
                        value = value + 1;
                        break;
                    case 'J':
                        value = value + 1;
                        break;
                    case 'Q':
                        value = value + 1;
                        break;
                    case 'Y':
                        value = value + 1;
                        break;
                    case 'B':
                        value = value + 2;
                        break;
                    case 'K':
                        value = value + 2;
                        break;
                    case 'R':
                        value = value + 2;
                        break;
                    case 'C':
                        value = value + 3;
                        break;
                    case 'G':
                        value = value + 3;
                        break;
                    case 'L':
                        value = value + 3;
                        break;
                    case 'S':
                        value = value + 3;
                        break;
                    case 'D':
                        value = value + 4;
                        break;
                    case 'M':
                        value = value + 4;
                        break;
                    case 'T':
                        value = value + 4;
                        break;
                    case 'E':
                        value = value + 5;
                        break;
                    case 'H':
                        value = value + 5;
                        break;
                    case 'N':
                        value = value + 5;
                        break;
                    case 'X':
                        value = value + 5;
                        break;
                    case 'U':
                        value = value + 6;
                        break;
                    case 'V':
                        value = value + 6;
                        break;
                    case 'W':
                        value = value + 6;
                        break;
                    case 'O':
                        value = value + 7;
                        break;
                    case 'Z':
                        value = value + 7;
                        break;
                    case 'F':
                        value = value + 8;
                        break;
                    case 'P':
                        value = value + 8;
                        break;
                    case "a":
                        value = value + 1;
                        break;
                    case 'i':
                        value = value + 1;
                        break;
                    case 'j':
                        value = value + 1;
                        break;
                    case 'q':
                        value = value + 1;
                        break;
                    case 'y':
                        value = value + 1;
                        break;
                    case 'b':
                        value = value + 2;
                        break;
                    case 'k':
                        value = value + 2;
                        break;
                    case 'r':
                        value = value + 2;
                        break;
                    case 'c':
                        value = value + 3;
                        break;
                    case 'g':
                        value = value + 3;
                        break;
                    case 'l':
                        value = value + 3;
                        break;
                    case 's':
                        value = value + 3;
                        break;
                    case 'd':
                        value = value + 4;
                        break;
                    case 'm':
                        value = value + 4;
                        break;
                    case 't':
                        value = value + 4;
                        break;
                    case 'e':
                        value = value + 5;
                        break;
                    case 'h':
                        value = value + 5;
                        break;
                    case 'n':
                        value = value + 5;
                        break;
                    case 'x':
                        value = value + 5;
                        break;
                    case 'u':
                        value = value + 6;
                        break;
                    case 'v':
                        value = value + 6;
                        break;
                    case 'w':
                        value = value + 6;
                        break;
                    case 'o':
                        value = value + 7;
                        break;
                    case 'z':
                        value = value + 7;
                        break;
                    case 'f':
                        value = value + 8;
                        break;
                    case 'p':
                        value = value + 8;
                        break;
			
                    case '1':
                        value = value + 1;
                        break;
                    case '2':
                        value = value + 2;
                        break;
                    case '3':
                        value = value + 3;
                        break;
                    case '4':
                        value = value + 4;
                        break;
                    case '5':
                        value = value + 5;
                        break;
                    case '6':
                        value = value + 6;
                        break;
                    case '7':
                        value = value + 7;
                        break;
                    case '8':
                        value = value + 8;
                        break;
                    case '9':
                        value = value + 9;
                        break;
                    default:
                        value = value + 0;
                        break;
                }
});
	return value;
}
/*FUNCTION THAT gets the number*/
function roundoff(value){
	var m;
	var sum=0;
	while (value > 0) {
		m = value % 10;
		sum = sum + m;
		value = value / 10;	  }
	return sum;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------HTML PART----------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------*/
var form = document.getElementById("form");
var result;
form.addEventListener("submit",function(e){
	e.preventDefault(); 
	
	var name = form.elements.typedname.value;
	result = findnumer(name);
	//result = roundoff(result);
	//result = 5;
	
	//var number = form.elements.number.value;
	//var order = form.elements.order.value;
	//result = nthRoot(number, order);
	//result = refineRoot(result, order, number);
	
	document.getElementById("name").textContent = name;
	document.getElementById("result").textContent = result;
	document.getElementById("resultAnswer").style.display = "block";
	
});
		</script>
	
	</body>
</html>
`;

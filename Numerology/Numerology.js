/*-----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------MATH PART----------------------------------------------------------*/
/*------------------------------------------------- ---FUNCTIONS DEFINITION----------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------*/

/*FUNCTION THAT gets the number*/
function findnumer(typedname){
	var value = 0;
	var output = typedname.split('');
	output.forEach(function (output,i) {
	switch(output)
                {
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
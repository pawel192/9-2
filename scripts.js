var femaleNames = ["Joanna", "Katarzyna", "Marta", "Olga", "Klaudia", "Kamila"];
var maleNames = ["Paweł", "Krzysztof", "Maciej", "Patryk", "Michał"];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = "Joanna";
if(allNames.indexOf(newName) === -1){
	allNames.push(newName);
	console.log(allNames)
}else{
	console.log("Podane imię istnieje w tablicy");
};

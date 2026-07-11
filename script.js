const C_MAJOR = ["C","D","E","F","G","A","H","C","D"];

let aktualis = 0;
let kerdesSzam = 0;
let pont = 0;

let feladatok = [];
let valaszok = [];


function ujJatek() {
	
	kerdesSzam = 0;
	pont = 0;
	
	feladatok = [];
	valaszok = [];
			
	ujFeladat();
}


function ujFeladat() {

	aktualis = Math.floor(Math.random() * 6);
	
	feladatok.push(aktualis);
	
	document.getElementById("allapot").innerHTML = 
		(kerdesSzam + 1) + " / 10";
		
	document.getElementById("kerdes").innerHTML = 
		C_MAJOR[aktualis];
		
	document.getElementById("valasz").value = "";
}



function hangok(hang) {

	document.getElementById("valasz").value = hang;
	
	if (hang === C_MAJOR[aktualis+2]) {
		pont++;
	}
	
	kerdesSzam++;
	
	if (kerdesSzam < 10) {
		ujFeladat(); 
	}
	else {
		document.getElementById("eredmeny").innerHTML = 
			"Vége! Pontszám: " + pont + "/10";
	}
}
	
function megszakit() {
	document.getElementById("eredmeny").innerHTML = 
		"Megszakittva.<br>Pontszám: " + pont + "/" + kerdesSzam;
}


	


function canviaNom(){
    let nombre = document.getElementById("name").value;
    document.getElementById("nom").innerHTML= nombre;
}

function canviaColor(){
    let color = document.getElementById("color").value;
    document.body.style.color = color;
}

function canviaFons(){
    let fons = document.getElementById("fons").value;
    document.body.style.backgroundColor = fons;
}

function canviaFoto(){
    let img = document.getElementById("foto").value;
    alert(img)
    document.getElementById("f").src = img;
}

function canviaTot(){
    let nombre = document.getElementById("name").value;
    document.getElementById("nom").innerHTML= nombre;
    let color = document.getElementById("color").value;
    document.body.style.color = color;
    let fons = document.getElementById("fons").value;
    document.body.style.backgroundColor = fons;
    let img = document.getElementById("foto").value;
    alert(img)
    document.getElementById("f").src = img;

}
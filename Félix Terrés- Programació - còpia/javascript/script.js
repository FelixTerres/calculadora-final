let n1, n2, operacio;
let resultat;

function  suma(){
n1 = parseFloat(document.getElementById("pantalla").value)
operacio = "+"
document.getElementById("pantalla").value = ""
document.getElementById("pantalla").focus();
}

function calcula(){

    n2 = parseFloat(document.getElementById("pantalla").value)
    if(operacio=="+"){
        resultat = n1+n2
  
    }
    else if(operacio=="-"){
            resultat = n1-n2
          
    }
    else if(operacio=="*"){
        resultat = n1*n2
      
}
    else if(operacio=="/"){
    resultat = n1/n2

}
    else if(operacio=="√"){
    resultat = Math.sqrt(n1);
    
}
else if(operacio=="cos"){
    resultat = Math.cos(n1);
    
}
else if(operacio=="sin"){
    resultat = Math.sin(n1);
    
}
else if(operacio=="tan"){
    resultat = Math.tan(n1);
    
}
else if(operacio=="log"){
    resultat = Math.log10(n1);
    
}
else if(operacio=="ln"){
    resultat = Math.log(n1);
    
}
else if(operacio=="^"){
    resultat = Math.pow(n1,n2);
    
}
else if(operacio=="π"){
    resultat = Math.PI*(n1);
    
}



document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
    
}

function  resta(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "-"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus();
    }

    function  multiplicar(){
        n1 = parseFloat(document.getElementById("pantalla").value)
        operacio = "*"
        document.getElementById("pantalla").value = ""
        document.getElementById("pantalla").focus();
        }
            
        function  dividir(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "/"
            document.getElementById("pantalla").value = ""
            document.getElementById("pantalla").focus();
           
        }
       
        function  arrel(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "√"
            document.getElementById("pantalla").focus();
        }

        function  cos(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "cos"
            document.getElementById("pantalla").focus();
        }
        function  sin(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "sin"
            document.getElementById("pantalla").focus();
        }
        function  tan(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "tan"
            document.getElementById("pantalla").focus();
        }
        function  parentesisobert(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+"("
            document.getElementById("pantalla").focus();
        }
        function  parentesistancat(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+")"
            document.getElementById("pantalla").focus();
        }
        function  log(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "log"
            document.getElementById("pantalla").focus();
        }
        function  ln(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "ln"
            document.getElementById("pantalla").focus();
        }
        function  un(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+1
            document.getElementById("pantalla").focus();
        }
        function  dos(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+2
            document.getElementById("pantalla").focus();
        }
        function  tres(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+3
            document.getElementById("pantalla").focus();
        }
        function  quatre(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+4
            document.getElementById("pantalla").focus();
        }
        function  menos(){
            document.getElementById("pantalla").value = "-"
                     document.getElementById("pantalla").focus();
        }
        function  cinc(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+5
            document.getElementById("pantalla").focus();
        }
        function  sis(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+6
            document.getElementById("pantalla").focus();
        }
        function  set(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+7
            document.getElementById("pantalla").focus();
        }
        function  vuit(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+8
            document.getElementById("pantalla").focus();
        }
        function  nou(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+9
            document.getElementById("pantalla").focus();
        }
        function  zero(){
            document.getElementById("pantalla").value = document.getElementById("pantalla").value+0
            document.getElementById("pantalla").focus();
        }
        function  ce(){
            let p = document.getElementById("pantalla").value
            let res = p.substring(0,p.length-1)
            document.getElementById("pantalla").value = res
            document.getElementById("pantalla").focus();
        }
        function  ac(){
            document.getElementById("pantalla").value = ""
            document.getElementById("pantalla").focus();
        }
        function  ans(){
           console.log(resultat)
            document.getElementById("pantalla").value = resultat
            document.getElementById("pantalla").focus();
        }
        function  exponent(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "^"
            document.getElementById("pantalla").value = ""
            document.getElementById("pantalla").focus();

        }
        function  pi(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "π"
            document.getElementById("pantalla").value = ""
            document.getElementById("pantalla").focus();

        }
        
        
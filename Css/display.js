function showAlert(){
    alert ("Iniciá sesión desde la página de inicio para poder comprar")
}
function showConfirm(){
    confirm ("Redirigiendo a una página externa")
} 
function Inicio(){
    Usuario = prompt ("Ingresa tu Usuario");
    contador = 0;
    do{
       Clave=prompt("Ingresa tu clave");
       if (Clave == "789456123") break;
       contador++;
        if(contador ==1) alert ("Te quedan dos intentos");
        if (contador ==2) alert ("Te queda un intento");
        } while(contador<3);
        if (contador ==3){
            document.write ("cuenta bloqueada");
        }
        else{
            document.write ("Bienvenido a su cuenta");
        }}
function Regis(){
    alert ("Contactate con nosotros para que te creemos un Usuario")
}  
function ver(n) {
    document.getElementById("subseccion"+n).style.display="block"
    }
function ocultar(n) {
    document.getElementById("subseccion"+n).style.display="none"
    }

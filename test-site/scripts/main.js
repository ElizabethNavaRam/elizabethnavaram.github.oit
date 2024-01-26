/*const nombre = document.querySelector("h1");
nombre.textContent = "Hola mundo" ;


 let helado = "Chocolate" ;
if (helado === "Chocolate") {
    alert("!Si amo el helado de chocolate!");
} else {
    alert("Awww, pero mi favorito es el de choclate...");
}
function multipLy(num1, num2) {
    let result = num1 * num2 ;
    return result;
}

multiply (4, 7);
alert("result") 



const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

*/
// C A M B I O   D E  I M A G E N //
                                              //  Puedes usar 'funcion() {}'  o '() => {}' 

let miImage = document.querySelector("img");  //Se almacena referencia del elemento img en variable miImage
miImage.onclick = () => {                     // Le das una propiedad al manejador del evento 'onclick' y                                                     haces que sea igual a una funcion (esta es anonima)
  let miSrc = miImage.getAttribute("src");     //Creas variable para recuperar el valor del atributo 'src'                                                   de la imagen
  if (miSrc === "images/firefox-icon.jpg") {   //Se usa condicional para comrpobar si el valor 'src' es                                                     igual a la de la ruta de la imagen original  
    miImage.setAttribute("src", "images/firefox2.png");  //Si es el mismo, entonces cambia la ruta del                                                              atributo y carga la otra ruta del elemento img
  } else {
    miImage.setAttribute("src", "images/firefox-icon.jpg");  //Si no es es asi, la ruta fue modificada y                                                            regresas a la ruta de la primera imagen 
  } 
};

 //''A N A D I R   M E N S A J E   D E   B I E N V E N I D A''//

let miBoton = document.querySelector ("button")   //Almacenas referencia selector button en variable
let miTitulo = document.querySelector ("h1")


function estableceNombreUsuario() {                       //Creas una funcion
    let miNombre = prompt("Por favor, ingresa tu nombre");//contiene funcion 'promp' que sirve para crear                                                           cuadro de dialogo y lo almacenas
    if(!miNombre) {estableceNombreUsuario();    //Para evitar 'null'  pongo una condicional, si no me dan                                                  el valor en la funcion, entonces vuelve a ejecutar                                                       funcion y cuando te la den, entonces lo guardas
     } else {
         
    
    localStorage.setItem("nombre", miNombre);      /*Usamos API localStorage para alamcenar datos y                                                         recuperarlos despues. Luego usamos una funcion de                                                       SetItem para crear y almacenar un dato llamado 'nombre,                                                 y colocas el valor (la variable)*/
    miTitulo.innerHTML = "Mozilla es genial," + miNombre;  //Llamo a variable y estableces el valor de la                                                           propiedad "tC" de la variable, o sea, le digo                                                           que cambie el contenido del texto 
     }
     };


if(!localStorage.getItem("nombre")){
    estableceNombreUsuario();
} else{
    let nombreAlmacenado= localStorage.getItem("nombre");
    miTitulo.textContent = "Mozila es una hostia," + nombreAlmacenado;
}
                                                    //En la primera linea se usa el operador de negacion para comprobar si existe el elemento 'nombre'. Sino exite entonces inicia funcion 'estableceNom()...'. Pero si existe entonces, recupera el dato usando 'getItem()' y fija meidante'text content' del titulo mas el nombre de usuarioalmacenado. 

miBoton.onclick = function(){                //Creas un evento para que cada que le hagas click, se inicie                                                la funcion de 'Establec...'
    estableceNombreUsuario();
};










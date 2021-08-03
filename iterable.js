function crearIterador(arreglo){
    var siguienteIndice = 0;
    return{
        next : function(){
            return siguienteIndice < arreglo.length ?
            { value: arreglo[siguienteIndice++], done: false} : 
            {done: true};
        }
    }
}
var it = crearIterador(['yo', 'ya']);
let valor = it.next();
while(!valor.done)
{
    console.log(valor.value);
    valor = it.next();
}

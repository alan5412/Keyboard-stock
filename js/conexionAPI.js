//Crear la conexion con la api

async function listarElementos (){
    const conexion = await fetch ("http://localhost:3001/MechanicalKeyboards");
    const conexionConverida= conexion.json();
    return conexionConverida
}

async function enviarElemento(name, price, image,id){
    const conexion = await fetch ("http://localhost:3001/MechanicalKeyboards",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:name,
            price:price,
            image:image,
            id:id
        })
    })
    const conexionConverida= conexion.json();
    return conexionConverida;
}


async function eliminarElemento (id) {
    return await fetch(`http://localhost:3001/MechanicalKeyboards/${id}`,{
        method:"DELETE"
    })
}


export const conexionAPI={
    listarElementos, enviarElemento, eliminarElemento
}

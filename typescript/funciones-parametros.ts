function activar(quien:string, objeto:string = "batiseñal", momento?:string ) {
    let mensaje:string;

    if ( momento ) {
        mensaje = `${quien} activo la ${objeto} en la ${momento}`;
    }
    else{
        mensaje = `${quien} activo la ${objeto}`;
    }

    console.log(mensaje);
}

activar("gordon", "batiseñal", "tarde");
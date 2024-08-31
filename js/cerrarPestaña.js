function abrirPestaña(styleID){

    const modalConfirmacion = document.getElementById(styleID);
    modalConfirmacion.style.display = 'block';
}

function cerrarPestaña(styleID){

    const modalConfirmacion = document.getElementById(styleID);
    modalConfirmacion.style.display = 'none';
}
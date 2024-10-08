function cargarConfiguracion(productos, productoGeneral) {

    let template = ``;

    productos.forEach(producto => {
        if (producto.codigoUnico === productoGeneral.codigoUnico) {
            template = `
            <div id="modalConfiguration" class="modal">
                <div class="modal-content">
                    <form action="">
                        <label for="">Nuevo stock Minimo:</label>
                        <input type="text" id="cantidadMinima" placeholder="Stock mínimo...">
                        <label for="">Precio deseado:</label>
                        <input type="text" id="precioDeseado" placeholder="Precio deseado...">
                        <label for="">Cantidad a comprar:</label>
                        <input type="text" id="cantAcomprar" placeholder="Cantidad a comprar...">
                        <button id="btnActualizarStock" type="button" onclick="actualizarProducto()">Actualizar</button>
                        <a href="#" onclick="cerrarPestaña('modalConfiguration')">Cancelar</a>
                    </form>
                </div>
             </div>`;
        }
    })
    document.getElementById("configuracionContainer").innerHTML = template;
}

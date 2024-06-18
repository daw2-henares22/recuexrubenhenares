import { bd } from "../components/bd";
import { footer } from "../components/footer";

export const home = {
    template: `
    <!-- Tu código HTML aquí -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Admin Panel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Usuarios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pedidos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Contenido principal -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-4">
          <div class="card" style="width: 18rem;">
            <img src="https://m.media-amazon.com/images/I/71Y0BH5cFXL._AC_UF894,1000_QL80_.jpg" class="card-img-top" alt="Zapatos Deportivos">
            <div class="card-body">
                <h5 class="card-title">Zapatos Deportivos</h5>
                <p class="card-text">Zapatos deportivos cómodos y ligeros, ideales para correr.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio: $49.99</li>
                <li class="list-group-item">Categoría: Calzado</li>
            </ul>
            
        </div>
      </div>
        <div class="col-8">
          <div class="row">
            <div class="col-lg-12">
                <h1 class="mb-4">Administrar Productos</h1>
                <!-- Botón para abrir el formulario modal -->
                <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#ProductModal">
                    Añadir Producto
                </button>
                <!-- Tabla de productos -->
                <table class="table table-striped">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Categoría</th>
                          <th>Descripción</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody id="tablaProductos">
                  </tbody>
              </table>
            </div>
        </div>
        </div>
      </div>
      
  </div>
    

    <!-- Modal para añadir productos -->
    <div class="modal fade" id="ProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addProductModalLabel">Añadir / Editar Producto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="datosModal" class="modal-body">
                    <form id="productForm">
                        <div class="mb-3">
                            <label for="productName" class="form-label">Nombre del Producto</label>
                            <input type="text" class="form-control" id="productName">
                        </div>
                        <div class="mb-3">
                            <label for="productPrice" class="form-label">Precio</label>
                            <input type="number" class="form-control" id="productPrice">
                        </div>
                        <div class="mb-3">
                            <label for="productCategory" class="form-label">Categoría</label>
                            <input type="text" class="form-control" id="productCategory">
                        </div>
                        <div class="mb-3">
                            <label for="productDescription" class="form-label">Descripción</label>
                            <textarea class="form-control" id="productDescription"></textarea>
                        </div>
                        <input type="hidden" id="productId">
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div>Home</div>
    <footer>Etiqueta footer del script del Home</footer>
    <div id="footer">Id footer del script del Home</div>
    `,
    script: () => {

        
       

        let html = '';
        bd.forEach(datos => {
            html += `
                <tr id="mostrarImagen" >
                    <td  data-id=${datos.id}>${datos.id}</td>
                    <td>${datos.nombre}</td>
                    <td>${datos.precio}</td>
                    <td>${datos.categoria}</td>
                    <td>${datos.descripcion}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <button class="editar btn btn-primary btn-sm">Editar</button>
                            <button class="borrar btn btn-danger btn-sm">Borrar</button>
                        </div>
                    </td>
                </tr>
            `;
        });
        document.querySelector('#tablaProductos').innerHTML = html;
        console.log('hola')
        
        

        document.querySelector('#mostrarImagen').addEventListener("click", (e)=>{
        console.log(e.target)
            
         })

         function mostrarInfoProducto (id) {
            //  const producto = bd.find(p => p.id == id);
            //  if (producto) {
            //      console.log(`ID: ${producto.id}`);
            //      console.log(`Nombre: ${producto.nombre}`);
            //      console.log(`Precio: ${producto.precio}`);
            //      console.log(`Categoría: ${producto.categoria}`);
            //      console.log(`Descripción: ${producto.descripcion}`);
          
          
            //  }
            console.log('hola info')
         };

        mostrarInfoProducto()
        
     }
};
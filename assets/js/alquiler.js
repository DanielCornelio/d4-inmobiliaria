import {propiedades_alquiler} from './data/propiedades.js'

const propiedadAlquiler = document.querySelector('#alquiler .row')

let html = ''
for(let propiedad of propiedades_alquiler){
    html += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="${propiedad.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.banios}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                ${propiedad.smoke?`
                    <p class="text-success">
                        <i class="fas fa-smoking"></i> 
                        Permitido fumar
                    </p>`
                    :`
                    <p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> 
                        No se permite fumar
                    </p>`
                }
                ${propiedad.pets?`
                    <p class="text-success">
                        <i class="fas fa-paw"></i> 
                        Mascotas permitidas
                    </p>`
                    :`
                    <p class="text-danger">
                        <i class="fa-solid fa-ban"></i> 
                        No se permiten mascotas
                    </p>`
                }
                
              </div>
            </div>
          </div>
    `

}

propiedadAlquiler.innerHTML += html;


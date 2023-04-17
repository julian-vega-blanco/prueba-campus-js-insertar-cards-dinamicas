// script llenado dinamico
document.addEventListener('DOMContentLoaded', ()=>{
    dinamicMenu(lugares);
} )

const modal = document.querySelector('#modal')

function dinamicMenu(lugares){
    const tarjetasContainer = document.getElementById('tarjetas');

    lugares.forEach((menus) => {

        const menuHTML = document.createElement('div');
        menuHTML.classList.add('card');
        menuHTML.innerHTML = ` 
            <p> ${menus.names} </p>
            <img src="/images/${menus.img}" alt="" width="400pxd">

            <button class="boton">Ver datos</button>
            <dialog class="modal">

                <h3>
                
                 ${menus.names}
                
                </h3>

                <p>
                   ${menus.detalle}
                </p>
                <p>
                    ${menus.disp}
                </p>
                <button class="boton2">Cerrar</button>
            </dialog>
        `;

        tarjetasContainer.appendChild(menuHTML)
    })

    const botones = document.querySelectorAll('.boton');
    const botonesCerrar = document.querySelectorAll('.boton2');
    botones.forEach((boton, index) => {
        const modal = tarjetasContainer.querySelectorAll('.modal')[index];
        boton.addEventListener('click', () => {
            modal.showModal();
        })
    })
    botonesCerrar.forEach((botonCerrar, index) => {
        const modal = tarjetasContainer.querySelectorAll('.modal')[index];
        botonCerrar.addEventListener('click', () => {
            modal.close();
        })
    })
}

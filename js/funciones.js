function mostrarHabilidades(){
    habilidades.forEach((habilidad)=>{
        const conteiner = document.getElementById("habilidades")
        const hab = document.createElement("div");
            hab.setAttribute("class", `habilidad`)
            hab.setAttribute("style", `background-color: ${habilidad.color};`)
            
            hab.innerHTML=` <span>${habilidad.nombre}</span>
                            <span>${habilidad.logo}</span>`
        
        conteiner.appendChild(hab);})
}

function mostrarInformacion(){
    const habsBtn = document.getElementById("boton--habs")
    const datosBtn = document.getElementById("boton--datos")
    const cursosBtn = document.getElementById("boton--cursos")
    
    const habs = document.getElementById("habs")
    const datos = document.getElementById("datos")
    const cursos = document.getElementById("cursos")

    habsBtn.addEventListener("click", ()=>{
        habs.classList.add("show")
        datos.classList.remove("show")
        cursos.classList.remove("show")
    })

    datosBtn.addEventListener("click", ()=>{
        datos.classList.add("show")
        habs.classList.remove("show")
        cursos.classList.remove("show")
    })

    cursosBtn.addEventListener("click", ()=>{
        cursos.classList.add("show")
        habs.classList.remove("show")
        datos.classList.remove("show")
    })
}



function mostrarTrabajos(){
    trabajos.forEach((trabajo)=>{
        const conteiner = document.getElementById("trabajos")
        const trbj = document.createElement("div");
            trbj.setAttribute("class", `trabajo`)
            trbj.setAttribute("id", `trabajo--${trabajo.nombre}`)
            trbj.innerHTML=`<div class="portada" style="color: ${trabajo.color}; background-color: ${trabajo.colorfondo}; font-family: ${trabajo.fuente};">
                                <span>${trabajo.nombre}</span>
                            </div>
                            <div class="detalles" id="detalles--${trabajo.nombre}" style="color: ${trabajo.colorfondo}; background-color: ${trabajo.color}; font-family: ${trabajo.fuente};">

                            </div>`
        
        conteiner.append(trbj);
    
        const trabaj = document.getElementById(`trabajo--${trabajo.nombre}`)
        const detal= document.getElementById(`detalles--${trabajo.nombre}`)

        trabaj.addEventListener("mouseover", ()=>{
            detal.classList.add("show")
        })

        trabaj.addEventListener("mouseout", ()=>{
            detal.classList.remove("show")
        })
    })

        
}

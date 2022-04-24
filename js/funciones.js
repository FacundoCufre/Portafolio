function mostrarHabilidades(){
    habilidades.forEach((habilidad)=>{
        const conteiner = document.getElementById("habilidades")
        const hab = document.createElement("div");
            hab.setAttribute("class", `habilidad`)
            hab.setAttribute("style", `background-color: ${habilidad.color};`)
            
            hab.innerHTML=` ${habilidad.habilidad}
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
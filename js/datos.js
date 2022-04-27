/*const habilidades = [
    {habilidad: "HTML5", logo: `<i class="fa-brands fa-html5"></i>`, color:"#F06529"},
    {habilidad: "CSS3", logo: `<i class="fa-brands fa-css3"></i>`, color:"#264DE4"},
    {habilidad: "SASS", logo: `<i class="fa-brands fa-sass"></i>`, color:"#CD6799"},
    {habilidad: "Git", logo: `<i class="fa-brands fa-git-alt"></i>`, color:"#F1502F"},
    {habilidad: "GitHub", logo: `<i class="fa-brands fa-github"></i>`, color:"#6CC644"},
    {habilidad: "JavaScript", logo: `<i class="fa-brands fa-js-square"></i>`, color:"#F0DB4F"},
    {habilidad: "Bootstrap", logo: `<i class="fa-brands fa-bootstrap"></i>`, color:"#563d7c"},
    {habilidad: "Responsive Design", logo: `<i class="fa-solid fa-at"></i>`, color:"#EF241C"},
]*/

const html5 = {nombre: "HTML5", logo:`<i class="fa-brands fa-html5"></i>`, color:"#F06529"}
const css3 = {nombre: "CSS3", logo: `<i class="fa-brands fa-css3"></i>`, color:"#264DE4"}
const sass = {nombre: "SASS", logo: `<i class="fa-brands fa-sass"></i>`, color:"#CD6799"}
const git = {nombre: "Git", logo: `<i class="fa-brands fa-git-alt"></i>`, color:"#F1502F"}
const github = {nombre: "GitHub", logo: `<i class="fa-brands fa-github"></i>`, color:"#6CC644"}
const javascript = {nombre: "JavaScript", logo: `<i class="fa-brands fa-js-square"></i>`, color:"#F0DB4F"}
const bootstrap = {nombre: "Bootstrap", logo: `<i class="fa-brands fa-bootstrap"></i>`, color:"#563d7c"}
const responsive = {nombre: "Responsive Design", logo: `<i class="fa-solid fa-at"></i>`, color:"#EF241C"}


const habilidades = [html5, css3, sass, git, github, javascript, bootstrap, responsive]



const trabajos = [
    {
    nombre: "ValoTipz",
    tipo: "Proyecto final de curso Desarrollo Web",
    fecha: "Enero de 2022",
    lenguajes: [html5, css3, responsive, sass],
    colorfondo: "#981914",
    color: "black",
    fuente: " 'Inconsolata', monospace",
    }
,
    {
    nombre: "Zeta Propiedades",
    tipo: "Proyecto final de curso JavaScript",
    fecha: "Mayo de 2022",
    lenguajes: [html5, css3, javascript, sass],
    colorfondo: "#d7d7d7",
    color: "#a27116",
    fuente: " 'Updock', cursive",
    }
,
    {
    nombre: "Portafolio",
    tipo: "Mi portafolio / trabajo personal",
    fecha: "Junio de 2022",
    lenguajes: [html5, css3, javascript, sass, responsive, git, github],
    colorfondo: "#36363a",
    color: "#179CBC",
    fuente: " 'Bebas Neue', cursive",
    }
,
    {
    nombre: "Pasiflora",
    tipo: "Trabajo real",
    fecha: "Junio de 2022",
    lenguajes: [html5, css3, javascript, sass, responsive, git, github],
    colorfondo: "#36561a",
    color: "#100C2C",
    fuente: " 'Bebas Neue', cursive",
    }
]
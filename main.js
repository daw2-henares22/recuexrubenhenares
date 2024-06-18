import { header } from "./src/components/header";
import { home } from "./src/views/home";
import "./src/scss/index.scss"

document.querySelector('header').innerHTML= header.template
header.script()
document.querySelector('main').innerHTML= home.template
home.script()

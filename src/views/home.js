import { footer } from "../components/footer"

export const home ={
    template:`
    <div>Home</div>
    <footer>Etiqueta footer del script del Home</footer>
    <div id="footer">Id footer del script del Home</div>
    `,
    script: ()=>{
        document.querySelector('footer').innerHTML=footer.template
        footer.script()

        document.querySelector('#footer').innerHTML=footer.template
        footer.script()
    }
}
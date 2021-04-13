import "./style.css"
import Image from "./asset/image.jpg"


function component(){
    const $element = document.querySelector(".result")
    $element.innerHTML = 'Hello Webpack!!'
    $element.classList.add('hello')

    let image = document.createElement("IMG")
    image.src = Image
    $element.appendChild(image)

    return $element
}

document.body.appendChild(component())
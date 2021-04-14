import Image from "./asset/image.jpg"
import Input from "./component/input.js"

export default function app () {
    const $element = document.querySelector(".result")
    $element.innerHTML = 'Hello Webpack!!'
    $element.classList.add('hello')

    let image = document.createElement("IMG")
    image.src = Image
    $element.appendChild(image)

    this.input = new Input({
        $input : document.querySelector(".name-input")
    })

    return $element
}
export default function Input(params) {
    this.$input = params.$input

    this.$input.addEventListener('keydown', (event) => {
        console.log(event.target)
    })
}
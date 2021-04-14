export default function Input(params) {
    this.$input = params.$input
 
    this.$input.addEventListener('keydown', (event) => {
        if (event.key === "Enter") console.log(this.$input.value)
    })
}
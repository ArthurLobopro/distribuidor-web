import { result_wrapper } from "./constants.js"
import { make_div } from "./main.js"

export const escreve = (content) => {
    result_wrapper.appendChild(make_div(content))
}
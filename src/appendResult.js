import { result_wrapper } from "./domElements.js"

export const appendResult = (content) => {
    result_wrapper.appendChild(make_div(content))
}

const make_div = str => {
    const div = document.createElement("div")
    div.className = "res"
    div.innerHTML = str

    const first_child = div.querySelector(":first-child")

    div.insertBefore(make_close_div(div), first_child)

    return div
}

/** @param {HTMLDivElement} div */
const make_close_div = (div) => {
    const circle = document.createElement("div")
    circle.className = "circle"
    circle.innerHTML = `<img src="./public/midia/close-icon.png">`
    circle.onclick = () => div.remove()

    return circle
}
import {
    clean_eletronic_distribuition_button,
    clear_results_button,
    distribuition_charge_input,
    find_by_atomic_number_button,
    find_by_atomic_number_charge_input,
    find_by_atomic_number_input,
    find_by_eletronic_distribuition_button,
    find_by_name_button,
    find_by_symbol_button,
    name_input,
    result_wrapper,
    symbol_input
} from "./constants.js"

import { findByAtomicNumber } from "./find/findByAtomicNumber.js"
import { findByEletronicDistribution } from "./find/findByEletronicDistribution.js"
import { findByName } from "./find/findByName.js"
import { findBySymbol } from "./find/findBySymbol.js"
import { range } from "./util.js"

const subcamadas = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"]
const get = id => document.getElementById(id)

function doIfEnter(callback) {
    return event => event.key === "Enter" && callback()
}

// Troca de pesquisa
const input_type = get("input-type")

input_type.onchange = (event) => {
    if (input_type.value == "all") {
        input_type.value = "dist"
        showAllAtoms()
    } else {
        const divs = [get("dist"), get("numat"), get("name")]
        for (let i of divs) { i.style.display = 'none' }
        get(input_type.value).style.display = ''
    }
}

//Detecção de enventos
const subcamadas_inputs = document.querySelectorAll('#sub-inputs input')

const sub_functions = event => {
    const id = String(event.target.id)
    const key = event.key
    if (key === 'Enter') {
        event.target.id !== "7p" ?
            get(subcamadas[subcamadas.indexOf(id) + 1]).focus() : distribuition_charge_input.focus()
    }
    if (key === 'c' || key === 'C') {
        for (let i of subcamadas) {
            if (i !== id) { get(i).value = get(i).max }
            else { break }
        }
    }
    if (key === 'm' || key === 'M') { get(id).value = get(id).max }
}

distribuition_charge_input.onkeydown = doIfEnter(findByEletronicDistribution)
find_by_eletronic_distribuition_button.onclick = findByEletronicDistribution
clean_eletronic_distribuition_button.onclick = () => { for (let i of subcamadas_inputs) { i.value = i.min } }
for (let i of subcamadas_inputs) { i.onkeydown = sub_functions }

//Busca por número atômico
find_by_atomic_number_input.onkeydown = doIfEnter(findByAtomicNumber)
find_by_atomic_number_charge_input.onkeydown = doIfEnter(findByAtomicNumber)
find_by_atomic_number_button.onclick = findByAtomicNumber

//Busca por símbolo
symbol_input.onkeydown = doIfEnter(findBySymbol)
find_by_symbol_button.onclick = findBySymbol

//Busca por nome
name_input.onkeydown = doIfEnter(findByName)
find_by_name_button.onclick = findByName

clear_results_button.onclick = () => {
    result_wrapper.querySelectorAll(".res").forEach(el => el.remove())
}

// Mostrar todos
const showAllAtoms = () => {
    get("loading").style.display = 'block'
    result_wrapper.classList.add('invisible')

    clear_results_button.click()
    setTimeout(() => {
        result_wrapper.classList.add('invisible')
        for (let valor of range(1, 119)) {
            find_by_atomic_number_input.value = valor
            find_by_atomic_number_button.click()
        }
        result_wrapper.classList.remove('invisible')
        get("loading").style.display = 'none'
    }, 1000)
}

const results_observer = new MutationObserver(() => {
    const res_divs = result_wrapper.querySelectorAll(".res")

    if (res_divs.length === 0) {
        result_wrapper.style.display = "none"
        return
    }

    result_wrapper.style.display = "flex"
})

results_observer.observe(result_wrapper, { childList: true })
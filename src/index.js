import {
    action_type_input,
    atomic_number_screen,
    clean_eletronic_distribuition_button,
    clear_results_button,
    distribuition_charge_input,
    distribuition_screen,
    find_by_atomic_number_button,
    find_by_atomic_number_charge_input,
    find_by_atomic_number_input,
    find_by_eletronic_distribuition_button,
    find_by_name_button,
    find_by_symbol_button,
    loading_div,
    name_input,
    name_or_symbol_screen,
    result_wrapper,
    symbol_input
} from "./domElements.js"

import { atomsData } from "./atomsData.js"
import { findByAtomicNumber } from "./find/findByAtomicNumber.js"
import { findByEletronicDistribution } from "./find/findByEletronicDistribution.js"
import { findByName } from "./find/findByName.js"
import { findBySymbol } from "./find/findBySymbol.js"
import { getById, sorted_sublayers } from "./util.js"

function doIfEnter(callback) {
    return event => { event.key === "Enter" && callback() }
}

action_type_input.onchange = () => {
    if (action_type_input.value == "all") {
        action_type_input.value = action_type_input.dataset.oldValue
        showAllAtoms()
    } else {
        const screens = [
            distribuition_screen,
            atomic_number_screen,
            name_or_symbol_screen
        ]

        action_type_input.dataset.oldValue = action_type_input.value

        screens.forEach(screen => {
            screen.style.display = screen.id.includes(action_type_input.value) ? "" : "none"
        })
    }
}

const maxfyInput = input => {
    input.value = input.max
}

const minifyInput = input => {
    input.value = input.min
}

//Detecção de enventos
/** @type {HTMLInputElement[]} */
const subcamadas_inputs = Array.from(document.querySelectorAll("#sub-inputs input"))

const handleSubInput = (event) => {
    const { key, target: { id } } = event

    if (key === "Enter") {
        id !== "7p"
            ? subcamadas_inputs[subcamadas_inputs.findIndex(input => input.id === id) + 1].focus()
            : distribuition_charge_input.focus()
    }

    if (key.toLowerCase() === "c") {
        sorted_sublayers.some(sublayerId => {
            maxfyInput(getById(sublayerId))

            return sublayerId === id
        })
    }

    if (key.toLowerCase() === "m") {
        maxfyInput(subcamadas_inputs.find(input => input.id === id))
    }
}

distribuition_charge_input.onkeydown = doIfEnter(findByEletronicDistribution)
find_by_eletronic_distribuition_button.onclick = findByEletronicDistribution
clean_eletronic_distribuition_button.onclick = () => subcamadas_inputs.forEach(minifyInput)

subcamadas_inputs.forEach(input => input.onkeydown = handleSubInput)

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
    loading_div.style.display = "block"
    result_wrapper.classList.add("invisible")

    clear_results_button.click()
    setTimeout(() => {
        result_wrapper.classList.add("invisible")

        atomsData.names.forEach(name => {
            name_input.value = name
            find_by_name_button.click()
        })

        result_wrapper.classList.remove("invisible")
        loading_div.style.display = "none"
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
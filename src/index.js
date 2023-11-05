import { find_by_name_button, find_by_symbol_button, name_input, symbol_input } from "./constants.js"
import { findByAtomicNumber } from "./find/findByAtomicNumber.js"
import { findByEletronicDistribution } from "./find/findByEletronicDistribution.js"
import { findByName } from "./find/findByName.js"
import { findBySymbol } from "./find/findBySymbol.js"
import { range } from "./util.js"

const res = document.getElementById("res")
const subcamadas = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"]
const get = id => document.getElementById(id)

// Troca de pesquisa
const input_type = get("input-type")
input_type.onchange = () => {
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
const dist_carga = get("dist-carga")
const clean_button = get("clean-btn")
const bpde_button = get("bpde-btn")
const sub_functions = event => {
    const id = String(event.target.id)
    const key = event.key
    if (key === 'Enter') {
        event.target.id !== "7p" ?
            get(subcamadas[subcamadas.indexOf(id) + 1]).focus() : dist_carga.focus()
    }
    if (key === 'c' || key === 'C') {
        for (let i of subcamadas) {
            if (i !== id) { get(i).value = get(i).max }
            else { break }
        }
    }
    if (key === 'm' || key === 'M') { get(id).value = get(id).max }
}

dist_carga.onkeydown = event => { if (event.key === "Enter") { findByEletronicDistribution() } }
bpde_button.onclick = findByEletronicDistribution
clean_button.onclick = () => { for (let i of subcamadas_inputs) { i.value = i.min } }
for (let i of subcamadas_inputs) { i.onkeydown = sub_functions }

//Busca por número atômico
const bpna_input = get('num')
const bpna_buttom = get('bpna')
const bpna_carga = get('bpna-carga')
bpna_input.onkeydown = (event) => {
    if (event.key == 'Enter') { findByAtomicNumber() }
}
bpna_carga.onkeydown = (event) => {
    if (event.key == 'Enter') { findByAtomicNumber() }
}
bpna_buttom.onclick = findByAtomicNumber

//Busca por símbolo

symbol_input.onkeydown = (event) => {
    if (event.key === 'Enter') { findBySymbol() }
}
find_by_symbol_button.onclick = findBySymbol

//Busca por nome
name_input.onkeydown = (event) => {
    if (event.key == 'Enter') { findByName() }
}
find_by_name_button.onclick = findByName

// Mostrar todos
const showAllAtoms = () => {
    get("loading").style.display = 'block'
    res.classList.add('invisible')
    const removeAll = document.getElementById("remove-All")
    removeAll.click()
    setTimeout(() => {
        res.classList.add('invisible')
        for (let valor of range(1, 119)) {
            bpna_input.value = valor
            bpna_buttom.click()
        }
        res.classList.remove('invisible')
        get("loading").style.display = 'none'
    }, 1000)
}
import { appendResult } from "../appendResult.js"
import { Atom } from "../Atom.js"
import { symbol_input } from "../constants.js"
import { formatData, formatInput } from "../formatter.js"
import atomos_info from "../info.js"

const { simbolos } = atomos_info

export function findBySymbol() {
    const symbol = String(symbol_input.value).replace(/ /g, "")

    if (!symbol) {
        alert("Forneça um símbolo para pesquisar.")
    }

    const index = simbolos.findIndex(value => value.toLowerCase() === symbol.toLowerCase())

    if (index === -1) {
        return alert(`"${symbol}" não foi reconhecido encontrado , verifique se digitou corretamente.`)
    }

    const atomo = new Atom(index + 1)

    const content = [
        formatInput(`Símbolo: ${symbol}<br><br>`),
        formatData(atomo),

    ].join("")

    appendResult(content)

    symbol_input.value = ""
}
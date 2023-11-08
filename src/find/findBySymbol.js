import { appendResult } from "../appendResult.js"
import { Atom } from "../Atom.js"
import { symbol_input } from "../domElements.js"
import { formatData, formatInput } from "../formatter.js"
import { atomsData } from "../info.js"


export function findBySymbol() {
    const symbol = String(symbol_input.value).replace(/ /g, "")

    if (!symbol) {
        alert("Forneça um símbolo para pesquisar.")
    }

    const index = atomsData.symbols.
        findIndex(atomSymbol => atomSymbol.toLowerCase() === symbol.toLowerCase())

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
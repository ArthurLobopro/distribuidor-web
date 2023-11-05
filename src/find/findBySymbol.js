import Atomo from "../atomo.js"
import { symbol_input } from "../constants.js"
import { ecdv, ede, escrevacamadas, escreve } from "../escreve.js"
import { formatData, formatInput } from "../formata.js"
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

    const atomo = new Atomo(num)

    const content = [
        formatInput(`Símbolo: ${symbol}<br><br>`),
        formatData(atomo),
        ede(atomo.distribuicao),
        escrevacamadas(atomo.camadas),
        ecdv(atomo.camadaValencia, atomo.distribuicao)
    ].join("")

    escreve(content)

    symbol_input.value = ""
}
import Atomo from "../atomo.js"
import { ecdv, ede, escrevacamadas, escreve } from "../escreve.js"
import { formataDados, formataInput } from "../formata.js"
import atomos_info from "../info.js"
import { get } from "../util.js"

const bps_input = get('simbolo')
const simbolos = atomos_info.simbolos

export function findBySymbol() {
    const symbol = String(bps_input.value).replace(/ /g, "")

    if (!symbol) {
        alert("Forneça um símbolo para pesquisar.")
    }

    const index = simbolos.findIndex(value => value.toLowerCase() === symbol.toLowerCase())

    if (index === -1) {
        return alert(`"${symbol}" não foi reconhecido encontrado , verifique se digitou corretamente.`)
    }

    const atomo = new Atomo(num)

    const content = [
        formataInput(`Símbolo: ${symbol}<br><br>`),
        formataDados(atomo),
        ede(atomo.distribuicao),
        escrevacamadas(atomo.camadas),
        ecdv(atomo.camadaValencia, atomo.distribuicao)
    ].join("")

    escreve(content)

    bps_input.value = ""
}
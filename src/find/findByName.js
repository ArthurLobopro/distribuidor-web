import Atomo from "../atomo.js"
import { ecdv, ede, escrevacamadas, escreve } from "../escreve.js"
import { formataDados, formataInput } from "../formata.js"
import atomos_info from "../info.js"
import { get } from "../util.js"

const bpn_input = get("nome")
const nomes = atomos_info.nomes

export function findByName() {
    const name = String(bpn_input.value).replace(/ /g, "")

    if (!name) {
        alert("Forneça um nome para pesquisar")
    }

    const index = nomes.findIndex(nome => nome.toLowerCase() === name.toLowerCase())

    if (index === -1) {
        return alert(`"${name}" não foi reconhecido como nome de um átomo, verifique se escreveu corretamente.`)
    }

    const atomo = new Atomo(index + 1, 0)

    const content = [
        formataInput(`Nome: ${name}<br><br>`),
        formataDados(atomo),
        ede(atomo.distribuicao),
        escrevacamadas(atomo.camadas),
        ecdv(atomo.camadaValencia, atomo.distribuicao)
    ].join("")

    escreve(content)

    bpn_input.value = ""
}
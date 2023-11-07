import { appendResult } from "../appendResult.js"
import { Atom } from "../Atom.js"
import { name_input } from "../constants.js"
import { formatData, formatEletronicDistribuition, formatInput, formatLayers, formatValencyLayer } from "../formatter.js"
import atomos_info from "../info.js"

const { nomes } = atomos_info

export function findByName() {
    const name = String(name_input.value).replace(/ /g, "")

    if (!name) {
        alert("Forneça um nome para pesquisar")
    }

    const index = nomes.findIndex(nome => nome.toLowerCase() === name.toLowerCase())

    if (index === -1) {
        return alert(`"${name}" não foi reconhecido como nome de um átomo, verifique se escreveu corretamente.`)
    }

    const atomo = new Atom(index + 1)

    const content = [
        formatInput(`Nome: ${name}<br><br>`),
        formatData(atomo),
        formatEletronicDistribuition(atomo.distribuicao),
        formatLayers(atomo.layers),
        formatValencyLayer(atomo.valencyLayer, atomo.distribuicao)
    ].join("")

    appendResult(content)

    name_input.value = ""
}
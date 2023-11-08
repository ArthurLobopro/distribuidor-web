import { Atom } from "../Atom.js"
import { appendResult } from "../appendResult.js"
import { atomsData } from "../atomsData.js"
import { name_input } from "../domElements.js"
import { formatData, formatInput } from "../formatter.js"

export function findByName() {
    const name = String(name_input.value).replace(/ /g, "")

    if (!name) {
        alert("Forneça um nome para pesquisar")
    }

    const index = atomsData.names
        .findIndex(atomName => atomName.toLowerCase() === name.toLowerCase())

    if (index === -1) {
        return alert(`"${name}" não foi reconhecido como nome de um átomo, verifique se escreveu corretamente.`)
    }

    const atom = new Atom(index + 1)

    const content = [
        formatInput(`Nome: ${name}<br><br>`),
        formatData(atom),
    ].join("")

    appendResult(content)

    name_input.value = ""
}
import { appendResult } from "../appendResult.js"
import { Atom } from "../Atom.js"
import { find_by_atomic_number_charge_input, find_by_atomic_number_input } from "../domElements.js"
import { formatData, formatInput } from "../formatter.js"

export function findByAtomicNumber() {
    const atomicNumber = Number(find_by_atomic_number_input.value)

    if (atomicNumber <= 0 || atomicNumber > 118) {
        return alert(`Não existe um átomo de número atômico ${atomicNumber}, por favor informe um valor entre 1 e 118`)
    }

    const charge = Number(find_by_atomic_number_charge_input.value)

    const atomo = new Atom(atomicNumber, charge)

    const content = [
        formatInput(`Número Atômico: ${atomicNumber}<br>Carga: ${charge}<br><br>`),
        formatData(atomo),
    ].join("")

    appendResult(content)

    find_by_atomic_number_input.value = ""
    find_by_atomic_number_charge_input.value = ""
}
import { appendResult } from "../appendResult.js"
import { Atom } from "../Atom.js"
import { find_by_atomic_number_charge_input, find_by_atomic_number_input } from "../domElements.js"
import { formatData, formatInput } from "../formatter.js"

export function findByAtomicNumber() {
    const num = Number(find_by_atomic_number_input.value)

    if (num <= 0 || num > 118) {
        return alert(`Não existe um átomo de número atômico ${num}, por favor informe um valor entre 1 e 118`)
    }

    const carga = Number(find_by_atomic_number_charge_input.value)

    const atomo = new Atom(num, carga)

    const content = [
        formatInput(`Número Atômico: ${atomo.num}<br>Carga: ${carga}<br><br>`),
        formatData(atomo),
    ].join("")

    appendResult(content)

    find_by_atomic_number_input.value = ""
    find_by_atomic_number_charge_input.value = ""
}
import Atomo from "../atomo.js"
import { ecdv, ede, escrevacamadas, escreve } from "../escreve.js"
import { formataDados, formataInput } from "../formata.js"
import { get } from "../util.js"

const bpna_input = get('num')
const bpna_carga = get('bpna-carga')

export function findByAtomicNumber() {
    const num = Number(bpna_input.value)

    if (num <= 0 || num > 118) {
        return alert(`Não existe um átomo de número atômico ${num}, por favor informe um valor entre 1 e 118`)
    }

    const carga = Number(bpna_carga.value)
    const atomo = new Atomo(num, carga)

    const content = [
        formataInput(`Número Atômico: ${atomo.num}<br>Carga: ${atomo.carga}<br><br>`),
        formataDados(atomo),
        ede(atomo.distribuicao),
        escrevacamadas(atomo.camadas),
        ecdv(atomo.camadaValencia, atomo.distribuicao)
    ].join("")

    escreve(content)

    bpna_input.value = ""
    bpna_carga.value = ""
}
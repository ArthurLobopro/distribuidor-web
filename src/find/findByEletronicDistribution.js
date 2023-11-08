import { Atom } from "../Atom.js"
import { formatData, formatInput } from "../formatter.js"

import { appendResult } from "../appendResult.js"
import {
    clean_eletronic_distribuition_button,
    d3_input, d4_input, d5_input,
    d6_input, distribuition_charge_input,
    f4_input, f5_input, p2_input, p3_input,
    p4_input, p5_input, p6_input, p7_input,
    s1_input, s2_input, s3_input, s4_input,
    s5_input, s6_input, s7_input
} from "../domElements.js"

const getEnd = (distArray) => {
    const subcamadas = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"]

    let f = distArray.indexOf(0)

    f = f === -1 ? subcamadas.length : f

    return `${subcamadas[f - 1] + distArray[f - 1]}`
}

function getDistribution() {
    return {
        s1: Number(s1_input.value),

        s2: Number(s2_input.value),
        p2: Number(p2_input.value),

        s3: Number(s3_input.value),
        p3: Number(p3_input.value),

        s4: Number(s4_input.value),
        d3: Number(d3_input.value),
        p4: Number(p4_input.value),

        s5: Number(s5_input.value),
        d4: Number(d4_input.value),
        p5: Number(p5_input.value),

        s6: Number(s6_input.value),
        f4: Number(f4_input.value),
        d5: Number(d5_input.value),
        p6: Number(p6_input.value),

        s7: Number(s7_input.value),
        f5: Number(f5_input.value),
        d6: Number(d6_input.value),
        p7: Number(p7_input.value)
    }
}

export function findByEletronicDistribution() {
    const distribuition = getDistribution()

    const distArray = Object.entries(distribuition).map(([key, value]) => value)

    const carga = Number(distribuition_charge_input.value)

    const num = distArray.reduce((prev, current) => prev + current, 0) + carga

    if (!(num > 0 && num <= 118)) {
        return alert("Você informou algum número inválido, confira as informações e tente novamente")
    }

    const atomo = new Atom(num, carga)

    const content = [
        formatInput(`Destribuição: ...${getEnd(distArray)}<br>Carga: ${carga}<br><br>`),
        formatData(atomo),
    ].join("")

    appendResult(content)

    clean_eletronic_distribuition_button.click()
}
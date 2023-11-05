import Atomo from "../atomo.js"
import { ecdv, ede, escrevacamadas, escreve } from "../escreve.js"
import { formatData, formatInput } from "../formata.js"
import { get } from "../util.js"

const getEnd = (distArray) => {
    const subcamadas = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"]

    const f = distArray.indexOf(0)

    return `${subcamadas[f - 1] + distArray[f - 1]}`
}

function getDistribution() {
    return {
        s1: Number(get("1s").value),

        s2: Number(get("2s").value),
        p2: Number(get("2p").value),

        s3: Number(get("3s").value),
        p3: Number(get("3p").value),
        d3: Number(get("3d").value),

        s4: Number(get("4s").value),
        p4: Number(get("4p").value),
        d4: Number(get("4d").value),
        f4: Number(get("4f").value),

        s5: Number(get("5s").value),
        p5: Number(get("5p").value),
        d5: Number(get("5d").value),
        f5: Number(get("5f").value),

        s6: Number(get("6s").value),
        p6: Number(get("6p").value),
        d6: Number(get("6d").value),

        s7: Number(get("7s").value),
        p7: Number(get("7p").value)
    }
}

const clean_button = get("clean-btn")

export function findByEletronicDistribution() {
    const distribuition = getDistribution()

    const distArray = Object.entries(distribuition).map(([key, value]) => value)

    const carga = Number(get("dist-carga").value)

    const num = distArray.reduce((prev, current) => prev + current, 0) + carga

    if (!(num > 0 && num <= 118)) {
        return alert("Você informou algum número inválido, confira as informações e tente novamente")
    }

    const atomo = new Atomo(num, carga)

    const content = [
        formatInput(`Destribuição: ...${getEnd(distArray)}<br>Carga: ${carga}<br><br>`),
        formatData(atomo),
        ede(atomo.distribuicao),
        escrevacamadas(atomo.camadas),
        ecdv(atomo.camadaValencia, atomo.distribuicao)
    ].join("")

    escreve(content)

    clean_button.click()
}
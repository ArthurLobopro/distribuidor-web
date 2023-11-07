import { Atom } from "./Atom.js"

const formatName = ({ name, charge }) => (
    charge !== 0
        ? `Nome: ${name} <sup>${charge > 0 ? "+" : ""}${charge}</sup>`
        : `Nome: ${name}`
)

const formatSymbol = ({ symbol, charge }) => {
    return charge !== 0
        ? `Símbolo: ${symbol} <sup>${charge > 0 ? "+" : ""}${charge}</sup>`
        : `Símbolo: ${symbol}`
}

const formatLocation = ({ group, period, family }) => (
    [
        `Grupo: ${group}`,
        `Período: ${period}`,
        `Família: ${family}<br>`
    ].join("<br>")
)

export const formatInput = input => (
    `<em>Dados Fornecidos:</em><br><br>${input}<em>Resultado:</em><br><br>`
)

/** @param {Atom} atom */
export const formatData = (atom) => (
    [
        formatName(atom),
        formatSymbol(atom),
        `Número atômico: ${atom.num}<br>`,
        formatLocation(atom),
        formatEletronicDistribuition(atom.distribuition),
        formatLayers(atom.layers),
        formatValencyLayer(atom)
    ].join("<br>") + "<br>"
)

const formatLayers = (layers) => (
    [
        `<br>Elétrons nas camadas:`,
        `Camada K: ${layers[0]}`,
        `Camada L: ${layers[1]}`,
        `Camada M: ${layers[2]}`,
        `Camada N: ${layers[3]}`,
        `Camada O: ${layers[4]}`,
        `Camada P: ${layers[5]}`,
        `Camada Q: ${layers[6]}`
    ].join("<br>")
)

const formatEletronicDistribuition = ({
    s1,
    s2, p2,
    s3, p3, d3,
    s4, p4, d4, f4,
    s5, p5, d5, f5,
    s6, p6, d6,
    s7, p7
}) => (
    [
        "Distribuição Eletrônica:",
        `1s${s1}`,
        `2s${s2} 2p${p2}`,
        `3s${s3} 3p${p3} 3d${d3}`,
        `4s${s4} 4p${p4} 4d${d4} 4f${f4}`,
        `5s${s5} 5p${p5} 5d${d5} 5f${f5}`,
        `6s${s6} 6p${p6} 6d${d6}`,
        `7s${s7} 2p${p7}`
    ].join("<br>")
)

export function formatValencyLayer({
    valencyLayer,
    distribuition: { s1, s2, p2, s3, p3, s4, p4, s5, p5, s6, p6, s7, p7 }
}) {
    const getValencyLayerText = ({ s, p }) => [
        "<br>A camada de valência é: ",
        `${valencyLayer}s${s}`,
        p > 0 ? ` ${valencyLayer}p${p}` : "",
        "<br>"
    ].join("")

    const getEletronsOnValencyLayerText = str => `Elétrons na camada de valência: ${str}`

    switch (valencyLayer) {
        case 1:
            return [
                getValencyLayerText({ s: s1, p: 0 }),
                getEletronsOnValencyLayerText(s1)
            ].join("")
        case 2:
            return [
                getValencyLayerText({ s: s2, p: p2 }),
                getEletronsOnValencyLayerText(s2 + p2)
            ].join("")
        case 3:
            return [
                getValencyLayerText({ s: s3, p: p3 }),
                getEletronsOnValencyLayerText(s3 + p3)
            ].join("")
        case 4:
            return [
                getValencyLayerText({ s: s4, p: p4 }),
                getEletronsOnValencyLayerText(s4 + p4)
            ].join("")
        case 5:
            return [
                getValencyLayerText({ s: s5, p: p5 }),
                getEletronsOnValencyLayerText(s5 + p5)
            ].join("")
        case 6:
            return [
                getValencyLayerText({ s: s6, p: p6 }),
                getEletronsOnValencyLayerText(s6 + p6)
            ].join("")
        case 7:
            return [
                getValencyLayerText({ s: s7, p: p7 }),
                getEletronsOnValencyLayerText(s7 + p7)
            ].join("")
    }
}

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
    `<br>Elétrons nas camadas:
     <br>Camada K: ${layers[0]}
     <br>Camada L: ${layers[1]}
     <br>Camada M: ${layers[2]}
     <br>Camada N: ${layers[3]}
     <br>Camada O: ${layers[4]}
     <br>Camada P: ${layers[5]}
     <br>Camada Q: ${layers[6]}`
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
    const getValencyLayerText = str => `<br>A camada de valência é: ${str}<br>`
    const getEletronsOnValencyLayerText = str => `Elétrons na camada de valência: ${str}`

    switch (valencyLayer) {
        case 1:
            return [
                getValencyLayerText(`1s${s1}`),
                getEletronsOnValencyLayerText(s1)
            ].join("")
        case 2:
            return [
                p2 > 2 ? getValencyLayerText(`2s${s2} 2p${p2}`) : getValencyLayerText(`2s${s2}`),
                getEletronsOnValencyLayerText(s2 + p2)
            ].join("")
        case 3:
            return [
                p3 > 0 ? getValencyLayerText(`3s${s3} 3p${p3}`) : getValencyLayerText(`3s${s3}`),
                getEletronsOnValencyLayerText(s3 + p3)
            ].join("")
        case 4:
            return [
                p4 > 0 ? getValencyLayerText(`4s${s4} 4p${p4}`) : getValencyLayerText(`4s${s4}`),
                getEletronsOnValencyLayerText(s4 + p4)
            ].join("")
        case 5:
            return [
                p5 > 0 ? getValencyLayerText(`5s${s5} 5p${p5}`) : getValencyLayerText(`5s${s5}`),
                getEletronsOnValencyLayerText(s5 + p5)
            ].join("")
        case 6:
            return [
                p6 > 0 ? getValencyLayerText(`6s${s6} 6p${p6}`) : getValencyLayerText(`6s${s6}`),
                getEletronsOnValencyLayerText(s6 + p6)
            ].join("")
        case 7:
            return [
                p7 > 0 ? getValencyLayerText(`7s${s7} 7p${p7}`) : getValencyLayerText(`7s${s7}`),
                getEletronsOnValencyLayerText(s7 + p7)
            ].join("")
    }
}

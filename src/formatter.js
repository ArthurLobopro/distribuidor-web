export const formatAtom = ({ nome, carga }) => (
    carga !== 0
        ? `Elemento: ${nome} <sup>${carga > 0 ? "+" : ""}${carga}</sup><br>`
        : `Elemento: ${nome}<br>`
)

export const formatSymbom = ({ simbolo, carga }) => {
    return carga !== 0
        ? `Símbolo: ${simbolo} <sup>${carga > 0 ? "+" : ""}${carga}</sup><br><br>`
        : `Símbolo: ${simbolo}<br>`
}

export const formatInput = input => (
    `<em>Dados Fornecidos:</em><br><br>${input}<em>Resultado:</em><br><br>`
)

export const formatData = ({ nome, simbolo, num, familia, grupo, periodo, carga }) => (
    `${formatAtom({ carga, nome })}${formatSymbom({ simbolo, carga })}Número atômico: ${num}<br><br>Família: ${familia}<br>
    Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
)

export const formatLayers = (layers) => (
    `<br>Elétrons nas camadas:
     <br>Camada K: ${layers[0]}
     <br>Camada L: ${layers[1]}
     <br>Camada M: ${layers[2]}
     <br>Camada N: ${layers[3]}
     <br>Camada O: ${layers[4]}
     <br>Camada P: ${layers[5]}
     <br>Camada Q: ${layers[6]}`
)

export const formatEletronicDistribuition = ({
    s1,
    s2, p2,
    s3, p3, d3,
    s4, p4, d4, f4,
    s5, p5, d5, f5,
    s6, p6, d6,
    s7, p7
}) => (
    [
        `1s${s1}`,
        `2s${s2} 2p${p2}`,
        `3s${s3} 3p${p3} 3d${d3}`,
        `4s${s4} 4p${p4} 4d${d4} 4f${f4}`,
        `5s${s5} 5p${p5} 5d${d5} 5f${f5}`,
        `6s${s6} 6p${p6} 6d${d6}`,
        `7s${s7} 2p${p7}`
    ].join("<br>") + "<br>"
)

export function formatValencyLayer(
    camadaValencia,
    { s1, s2, p2, s3, p3, s4, p4, s5, p5, s6, p6, s7, p7 }
) {
    const getValencyLayerText = str => `<br>A camada de valência é: ${str}<br>`
    const getEletronsOnValencyLayerText = str => `Elétrons na camada de valência: ${str}`

    switch (camadaValencia) {
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
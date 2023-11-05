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
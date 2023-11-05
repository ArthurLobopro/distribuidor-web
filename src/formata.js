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

export const formatLayers = (layer) => (
    `<br>Elétrons nas camadas:
     <br>Camada K: ${layer[0]}
     <br>Camada L: ${layer[1]}
     <br>Camada M: ${layer[2]}
     <br>Camada N: ${layer[3]}
     <br>Camada O: ${layer[4]}
     <br>Camada P: ${layer[5]}
     <br>Camada Q: ${layer[6]}`
)
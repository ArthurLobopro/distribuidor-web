export const formataAtomo = ({ nome, carga }) => (
    carga !== 0
        ? `Elemento: ${nome} <sup>${carga > 0 ? "+" : ""}${carga}</sup><br>`
        : `Elemento: ${nome}<br>`
)

export const formataSimbolo = ({ simbolo, carga }) => {
    return carga !== 0
        ? `Símbolo: ${simbolo} <sup>${carga > 0 ? "+" : ""}${carga}</sup><br><br>`
        : `Símbolo: ${simbolo}<br>`
}

export const formataInput = input => (
    `<em>Dados Fornecidos:</em><br><br>${input}<em>Resultado:</em><br><br>`
)

export const formataDados = ({ nome, simbolo, num, familia, grupo, periodo, carga }) => (
    `${formataAtomo({ carga, nome })}${formataSimbolo({ simbolo, carga })}Número atômico: ${num}<br><br>Família: ${familia}<br>
    Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
)
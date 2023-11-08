import { atomsData } from "./info.js"

export const getAtomName = num => atomsData.names[num - 1]
export const getAtomSymbol = num => atomsData.symbols[num - 1]

export function getGroup(num) {
    if ((num >= 57 && num <= 71) || (num >= 89 && num <= 103)) { return 3 }

    const grupos = [
        [1, 3, 11, 19, 37, 55, 87], //1
        [4, 12, 20, 38, 56, 88],    //2
        [21, 39],                   //3
        [22, 40, 72, 104],          //4
        [23, 41, 73, 105],          //5
        [24, 42, 74, 106],          //6
        [25, 43, 75, 107],          //7
        [26, 44, 76, 108],          //8
        [27, 45, 77, 109],          //9
        [28, 46, 78, 110],          //10
        [29, 47, 79, 111],          //11
        [30, 48, 80, 112],          //12
        [5, 13, 31, 49, 81, 113],   //13
        [6, 14, 32, 50, 82, 114],   //14
        [7, 15, 33, 51, 83, 115],   //15
        [8, 16, 34, 52, 84, 116],   //16
        [9, 17, 35, 53, 85]         //17
    ]

    const groupIndex = grupos.findIndex(group => group.includes(num))

    return groupIndex === -1 ? 18 : groupIndex + 1
}

export const getFamily = (num, grupo) => (
    num == 1 ? "<br> Não possiu uma família específica." :
        num != 1 && grupo == 1 ? "Metais Alcalinos" :
            grupo == 2 ? "Metais Alcalinos Terrosos" :
                grupo == 3 && num < 40 ? "Metais de transição" :
                    num >= 57 && num <= 71 ? "Lantanídeos" :
                        num >= 89 && num <= 103 ? "Actnideos" :
                            grupo >= 4 && grupo <= 12 ? "Metais de transição" :
                                grupo == 13 ? "Grupo do Boro" :
                                    grupo == 14 ? "Grupo do Carbono" :
                                        grupo == 15 ? "Grupo do Nitrogênio" :
                                            grupo == 16 ? "Calcogênios" :
                                                grupo == 17 ? "Halogênios" : "Gases Nobres"
)

export const getPeriod = (num) => (
    num == 1 || num == 2 ? 1 :
        num >= 3 && num <= 10 ? 2 :
            num >= 11 && num <= 18 ? 3 :
                num >= 19 && num <= 36 ? 4 :
                    num >= 37 && num <= 54 ? 5 :
                        num >= 55 && num <= 86 ? 6 : 7
)

export const getLayersSum = ({
    s1, s2, p2, s3, p3, d3, s4, p4, d4, f4, s5, p5, d5, f5, s6, p6, d6, s7, p7
}) => ([
    s1,
    s2 + p2,
    s3 + p3 + d3,
    s4 + p4 + d4 + f4,
    s5 + p5 + d5 + f5,
    s6 + p6 + d6,
    s7 + p7
])

/** @param {number[]} layerEletronsAmount */
export const getValencyLayer = layerEletronsAmount => (
    layerEletronsAmount.reduce((prevLayer, eletronsAmount, currentLayerIndex) => {
        return eletronsAmount > 0 ? currentLayerIndex + 1 : prevLayer
    }, 1)
)

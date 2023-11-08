import { atomsData } from "./atomsData.js"

export const getAtomName = atomicNumber => atomsData.names[atomicNumber - 1]
export const getAtomSymbol = atomicNumber => atomsData.symbols[atomicNumber - 1]

export function getGroup(atomicNumber) {
    if (
        atomicNumber >= 57 && atomicNumber <= 71 ||
        atomicNumber >= 89 && atomicNumber <= 103
    ) {
        return 3
    }

    const groups = [
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

    const groupIndex = groups.findIndex(group => group.includes(atomicNumber))

    return groupIndex === -1 ? 18 : groupIndex + 1
}

export const getFamily = (atomicNumber, group) => (
    atomicNumber == 1 ? "<br> Não possiu uma família específica." :
        atomicNumber != 1 && group == 1 ? "Metais Alcalinos" :
            group == 2 ? "Metais Alcalinos Terrosos" :
                group == 3 && atomicNumber < 40 ? "Metais de transição" :
                    atomicNumber >= 57 && atomicNumber <= 71 ? "Lantanídeos" :
                        atomicNumber >= 89 && atomicNumber <= 103 ? "Actnideos" :
                            group >= 4 && group <= 12 ? "Metais de transição" :
                                group == 13 ? "Grupo do Boro" :
                                    group == 14 ? "Grupo do Carbono" :
                                        group == 15 ? "Grupo do Nitrogênio" :
                                            group == 16 ? "Calcogênios" :
                                                group == 17 ? "Halogênios" : "Gases Nobres"
)

export const getPeriod = (atomicNumber) => (
    atomicNumber == 1 || atomicNumber == 2 ? 1 :
        atomicNumber >= 3 && atomicNumber <= 10 ? 2 :
            atomicNumber >= 11 && atomicNumber <= 18 ? 3 :
                atomicNumber >= 19 && atomicNumber <= 36 ? 4 :
                    atomicNumber >= 37 && atomicNumber <= 54 ? 5 :
                        atomicNumber >= 55 && atomicNumber <= 86 ? 6 : 7
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

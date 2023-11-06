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

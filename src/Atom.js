import { getDistribuition } from "./distribuidor.js"
import { getAtomName, getAtomSymbol, getFamily, getGroup, getLayersSum, getPeriod, getValencyLayer } from "./infoGetters.js"

export class Atom {
    constructor(atomicNumber, atomCharge = 0) {
        this.num = atomicNumber
        this.charge = atomCharge
        this.eletronsAmount = atomicNumber + (-atomCharge)
        this.name = getAtomName(atomicNumber)
        this.symbol = getAtomSymbol(atomicNumber)
        this.group = getGroup(atomicNumber)
        this.period = getPeriod(atomicNumber)
        this.family = getFamily(atomicNumber, this.group)
        this.distribuicao = getDistribuition(this.eletronsAmount)
        this.layers = getLayersSum(this.distribuicao)
        this.valencyLayer = getValencyLayer(this.layers)
    }
}
import { getDistribuition } from "./distribuidor.js"
import { getAtomName, getAtomSymbol, getFamily, getGroup, getLayersSum, getPeriod, getValencyLayer } from "./infoGetters.js"

export class Atom {
    constructor(atomicNumber, atomCharge = 0) {
        this.num = atomicNumber
        this.carga = atomCharge
        this.eletrons = atomicNumber + (-atomCharge)
        this.name = getAtomName(atomicNumber)
        this.simbolo = getAtomSymbol(atomicNumber)
        this.grupo = getGroup(atomicNumber)
        this.periodo = getPeriod(atomicNumber)
        this.familia = getFamily(atomicNumber, this.grupo)
        this.distribuicao = getDistribuition(this.eletrons)
        this.camadas = getLayersSum(this.distribuicao)
        this.camadaValencia = getValencyLayer(this.camadas)
    }
}
import { getDistribuition } from "./distribuidor.js"
import { getAtomName, getAtomSymbol, getFamily, getGroup, getLayersSum, getPeriod, getValencyLayer } from "./get-info.js"

export class Atom {
    constructor(num, carga = 0) {
        this.num = num
        this.carga = carga
        this.eletrons = num + (-carga)
        this.nome = getAtomName(num)
        this.simbolo = getAtomSymbol(num)
        this.grupo = getGroup(num)
        this.periodo = getPeriod(num)
        this.familia = getFamily(num, this.grupo)
        this.distribuicao = getDistribuition(this.eletrons)
        this.camadas = getLayersSum(this.distribuicao)
        this.camadaValencia = getValencyLayer(this.camadas)
    }
}
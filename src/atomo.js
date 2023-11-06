import { getLayersSum as get_camada, getValencyLayer } from "./camadas.js"
import { getDistribuition } from "./distribuidor.js"
import { achafamilia, achagrupo, achaperiodo, getAtomName, getAtomSymbol } from "./get-info.js"

export class Atom {
    constructor(num, carga = 0) {
        this.num = num
        this.carga = carga
        this.eletrons = num + (-carga)
        this.nome = getAtomName(num)
        this.simbolo = getAtomSymbol(num)
        this.grupo = achagrupo(num)
        this.periodo = achaperiodo(num)
        this.familia = achafamilia(num, this.grupo)
        this.distribuicao = getDistribuition(this.eletrons)
        this.camadas = get_camada(this.distribuicao)
        this.camadaValencia = getValencyLayer(this.camadas)
    }
}
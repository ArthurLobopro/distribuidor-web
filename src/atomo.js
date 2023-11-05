import { camadas as get_camada, get_camadaValencia } from "./camadas.js"
import distribuidor from "./distribuidor.js"
import { achafamilia, achagrupo, achaperiodo, nomeatomo, simboloatomo } from "./get-info.js"
export class Atom {
    constructor(num, carga = 0) {
        this.num = num
        this.carga = carga
        this.eletrons = num + (-carga)
        this.nome = nomeatomo(num)
        this.simbolo = simboloatomo(num)
        this.grupo = achagrupo(num)
        this.periodo = achaperiodo(num)
        this.familia = achafamilia(num, this.grupo)
        this.distribuicao = distribuidor(this.eletrons)
        this.camadas = get_camada(this.distribuicao)
        this.camadaValencia = get_camadaValencia(this.camadas)
    }
}
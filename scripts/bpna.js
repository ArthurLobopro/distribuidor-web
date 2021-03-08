import distribuidor from "./distribuidor.js"
import getInfo from "./get-info.js"
import camadas from "./camadas.js"
import {formataInput,formataAtomo, formataSimbolo} from "./formata.js"
import {escrevacamadas, ede, ecdv,escreve} from "./escreva.js"
let camada, camadaValencia
let s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7
function bpna(){
    let num =Number(bpna_input.value)
    if(num == 0){
        alert('Não existe um átomo de número atômico 0, por favor informe um valor entre 1 e 118')
    }else{
        let carga=Number(bpna_carga.value)
        let content=""
        let nome, simbolo, grupo, familia, periodo
        ({nome, simbolo, grupo, familia, periodo} = getInfo(num))
        num+=(-carga)
        [s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7] = distribuidor(num)
        [camada,camadaValencia] = camadas()
        content+=formataInput(`Número Atômico: ${num}<br>Carga: ${carga}<br><br>`)
        content+=formataAtomo(nome,carga)
        content+=formataSimbolo(simbolo,carga)
        content+=`Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período: ${periodo}<br><br>Distribuição Eletrônica:<br>` 
        content+=ede()
        content+=escrevacamadas()
        content+=ecdv()
        escreve(content)
        bpna_input.value=""
        bpna_carga.value=""
    }
}
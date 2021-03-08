import {range, atomos} from "./scripts/main.js"
import bpna from "./scripts/main-functions/bpna.js"
import bpn from "./scripts/main-functions/bpn.js"
import bps from "./scripts/main-functions/bps.js"
var camadaValencia=0
var camada=[0,0,0,0,0,0,0]
const res = document.getElementById("res")
let s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7
const subcamadas = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"]

const get = id =>  document.getElementById(id)
//Acha o nome do átomo.
const nomeatomo =num => atomos.nomes[num-1]
//Acha o símbolo do átomo.
const simboloatomo = (num)=> atomos.simbolos[num-1] 


const formataAtomo = (nome,carga) => {
    return (carga>0) ? `Elemento: ${nome} <sup>+${carga}</sup><br>` :
        (carga<0) ? `Elemento: ${nome} <sup>${carga}</sup><br>` : `Elemento: ${nome}<br>`
}
const formataSimbolo = (simbolo, carga) => {
    return (carga>0) ? `Símbolo: ${simbolo} <sup>+${carga}</sup><br><br>` :
        (carga<0) ? `Símbolo: ${simbolo} <sup>${carga}</sup><br><br>` : `Símbolo: ${simbolo}<br>` 
}
const formataInput = input => {
    return `<em>Dados Fornecidos:</em><br><br>${input}<em>Resultado:</em><br><br>`
}
const getInfo = (num) => {
    let grupo = achagrupo(num)
    return { nome: nomeatomo(num), simbolo:simboloatomo(num) , grupo, familia:achafamilia(num,grupo), periodo:achaperiodo(num) }
}
//bpde= Busca por Distribuição eletrônica, busca o atomo pela distribuição eletrônica informada acima.
function bpde() {
    s1=Number(get("1s").value)
    s2=Number(get("2s").value), p2=Number(get("2p").value) 
    s3=Number(get("3s").value), p3=Number(get("3p").value), d3=Number(get("3d").value)
    s4=Number(get("4s").value), p4=Number(get("4p").value)
    d4=Number(get("4d").value), f4=Number(get("4f").value) 
    s5=Number(get("5s").value), p5=Number(get("5p").value)
    d5=Number(get("5d").value), f5=Number(get("5f").value)
    s6=Number(get("6s").value), p6=Number(get("6p").value), d6=Number(get("6d").value) 
    s7=Number(get("7s").value), p7=Number(get("7p").value)
    let carga=Number(get("dist-carga").value)
    let num=s1+s2+p2+s3+p3+d3+s4+p4+d4+f4+s5+p5+d5+f5+s6+p6+d6+s7+p7
	let content=""
    num+=carga
    if (num>0 && num<=118){
        let nome, simbolo, grupo, familia, periodo
        ({nome, simbolo, grupo, familia, periodo} = getInfo(num))
        camadas()
        content+=formataInput(`Destribuição:<br>${ede()}<br>Carga: ${carga}<br><br>`)
        content+=formataAtomo(nome,carga)
        content+=formataSimbolo(simbolo,carga)  
        content+=`Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período: ${periodo}<br>Distribuição Eletrônica:<br>`      
        content+=escrevacamadas()
        content+=ecdv()
        escreve(content)
        clean_button.click()
    }else{
        alert("Você informou algum número inválido, confira as informações e tente novamente")
    }
}
//Busca pelo nome

//Busca pelo símbolo



// Detecção de eventos

// Troca de pesquisa
const input_type = get("input-type")
input_type.onchange = () =>{
    if(input_type.value == "all"){
        input_type.value="dist"
        showAllAtoms()
    }else{
        const divs = [get("dist"),get("numat"),get("name")]
        for(let i of divs){ i.style.display='none' }
        get(input_type.value).style.display=''
    }
}

// Busca por distribuição eletrônica
const subcamadas_inputs = document.querySelectorAll('#sub-inputs input')
const dist_carga = get("dist-carga")
const clean_button = get("clean-btn")
const bpde_button = get("bpde-btn")
const sub_functions = event => {
    const id = String(event.target.id)
    const key = event.key
    if(key === 'Enter'){
        event.target.id !== "7p" ? 
            get(subcamadas[ subcamadas.indexOf(id) +1 ]).focus() : dist_carga.focus()
    }
    if(key === 'c' || key === 'C' ){
        for(let i of subcamadas){
            if(i !== id){ get(i).value = get(i).max }
            else{ break }
        }
    }
    if(key === 'm' || key ==='M'){ get(id).value = get(id).max }
}

dist_carga.onkeydown = event => { if(event.key === "Enter"){ bpde() } }
bpde_button.onclick = bpde
clean_button.onclick = () => { for(let i of subcamadas_inputs){ i.value = i.min } }
for(let i of subcamadas_inputs){ i.onkeydown = sub_functions }

//Busca por número atômico

const bpna_input = get('num')
const bpna_buttom = get('bpna')
const bpna_carga = get('bpna-carga')
bpna_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpna() }
}
bpna_carga.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpna() }
}
bpna_buttom.onclick = () => bpna()

//Busca por símbolo

const bps_input = get('simbolo')
const bps_buttom = get('bps') 
bps_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bps() }
}
bps_buttom.onclick=() => bps() 

//Busca por nome

const bpn_input = get('nome')
const bpn_buttom = get('bpn')
bpn_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpn() }
}
bpn_buttom.onclick=() => bpn() 

// Mostrar todos
const showAllAtoms = () => {
    get("loading").style.display='block'
    res.classList.add('invisible')
    res.innerHTML=`<span id="msg">Buscas feitas:</span><br>`
    setTimeout(() => {
        res.classList.add('invisible')
        for(let valor of range(1,119)){
            bpna_input.value=valor
            bpna_buttom.click()
        }
        res.classList.remove('invisible')
        get("loading").style.display='none'
    }, 1000);
}
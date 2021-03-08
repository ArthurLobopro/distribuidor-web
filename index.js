import {range, atomos} from "./scripts/main.js"
import bpna from "./scripts/main-functions/bpna.js"
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
const formataDados = (nome,simbolo,num,familia,grupo,periodo) => {
    return `Elemento: ${nome}<br>Símbolo: ${simbolo}<br>Número atômico: ${num}<br><br>Família: ${familia}<br>
    Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
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
function bpn(){
    let name = bpn_input.value
    name=name.replaceAll(' ','')
    let num=0
    let erro=true
    let content=""
    for(let i=0;i<118;i++){
        if(name.toUpperCase() == atomos.nomes[i].toUpperCase()){
           num=i+1
           erro=false
        }
        if(i==117 && num==0){
            alert(`"${name}" não foi reconhecido como nome de um átomo :( , verifique se não esqueceu algum acento ou colocou um espaço desnecessário.`)
        }
    }
    if (erro==false){
        distribuidor(num)
        let nome, simbolo, grupo, familia, periodo
        ({nome, simbolo, grupo, familia, periodo} = getInfo(num))
        camadas()
        content+=formataInput(`Nome: ${name}<br><br>`)
        content+=formataDados(nome,simbolo,num,familia,grupo,periodo)
        content+=ede()
        content+=escrevacamadas()
        content+=ecdv()
        escreve(content)
    }
    bpn_input.value=""
}
//Busca pelo símbolo
function bps(){
    let simbol = bps_input.value
    let num=0
    simbol=simbol.replace(' ','')
    let erro=true
    let content=""
    for(let i=0;i<118;i++){
        if(simbol.toUpperCase() == atomos.simbolos[i].toUpperCase()){
           num=i+1
           erro=false
        }
        if(i==117 && num==0){
            alert(`"${simbol}" não foi reconhecido como símbolo de um átomo :( , verifique se digitou corretamente e tente novamente.`)
        }
    }
    if (erro==false){
            distribuidor(num)
            let nome, simbolo, grupo, familia, periodo
            ({nome, simbolo, grupo, familia, periodo} = getInfo(num))
            camadas()
            content+=`${formataInput(`Símbolo: ${simbol}<br><br>`)}
            Nome: ${nome}<br>Símbolo: ${simbolo}<br>Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
            content+=ede()
            content+=escrevacamadas()
            content+=ecdv()
            escreve(content)
        }
        bps_input.value=""
}
//Faz a distribuição eletrônica de acordo o número de prótons
function distribuidor(num){
    if (num-2>=0){
        s1=2
        num-=2
    }else{
        s1=num
        num=0
    }
    if (num-2 >= 0){
        s2 = 2
        num-=2
    }else {
        s2 = num
        num = 0
    }
    if(num-6>=0){
        p2=6
        num=num-6
    }else{
        p2=num
        num=0
    }
    if (num - 2 >= 0){
        s3 = 2
        num-= 2
    }else {
        s3 = num
        num = 0
    }
    if(num-6>=0){
        p3=6
        num-=6
    }else{
        p3=num
        num=0
    }
    if (num - 2 >= 0){
        s4 = 2
        num-=2
    }else {
        s4 = num
        num = 0
    }
    if(num-10>=0){
        d3=10
        num-=10
    }else{
        d3=num
        num=0
    }
    if(num-6>=0){
        p4=6
        num-= 6
    }else{
        p4=num
        num=0
    }
    if (num - 2 >= 0){
        s5 = 2
        num-=2
    }else {
        s5 = num
        num = 0
    }
    if(num-10>=0){
        d4=10
        num-=10
    }else{
        d4=num
        num=0
    }
    if(num-6>=0){
        p5=6
        num-=6
    }else{
        p5=num
        num=0
    }
    if (num - 2 >= 0){
        s6 = 2
        num-=2
    }else {
        s6 = num
        num = 0
    }
    if(num-14>=0){
        f4=14
        num-=14
    }else{
        f4=num
        num=0
    }
    if(num-10>=0){
        d5=10
        num-=10
    }else{
        d5=num
        num=0
    }
    if(num-6>=0){
        p6=6
        num-=6
    }else{
        p6=num
        num=0
    }
    if (num - 2 >= 0){
        s7 = 2
        num-=2
    }else {
        s7 = num
        num = 0
    }
    if(num-14>=0){
        f5=14
        num-=14
    }else{
        f5=num
        num=0
    }
    if(num-10>=0){
        d6=10
        num-=10
    }else{
        d6=num
        num=0
    }
    if(num-6>=0){
        p7=6
        num-=6
    }else{
        p7=num
        num=0
    }
}
//Soma os elétrons das camadas e acha a camada de valência
function camadas(){
		camada [0] = s1 
        camada [1] = s2+p2
		camada [2] = s3+p3+d3
		camada [3] = s4+p4+d4+f4
		camada [4] = s5+p5+d5+f5
		camada [5] = s6+p6+d6
		camada [6] = s7+p7

        camadaValencia = 
        (camada[0]>0) ? 1 : 
            (camada[1]>0) ? 2 : 
                (camada[2]>0) ? 3 : 
                    (camada[3]>0) ? 4 :
                        (camada[4]>0) ? 5 :
                            (camada[5]>0) ? 6 : 7
}
function escrevacamadas(){
    return`<br>Elétrons nas camadas:
    <br>Camada K: ${camada[0]}
    <br>Camada L: ${camada[1]}
    <br>Camada M: ${camada[2]}
    <br>Camada N: ${camada[3]}
    <br>Camada O: ${camada[4]}
    <br>Camada P: ${camada[5]}
    <br>Camada Q: ${camada[6]}`	
}
//Escreve a distribuição eletrônica
function ede(){
    return`
        1s${s1} <br>
        2s${s2} 2p${p2}<br>
        3s${s3} 3p${p3} 3d${d3}<br>
        4s${s4} 4p${p4} 4d${d4} 4f${f4}<br>
        5s${s5} 5p${p5} 5d${d5} 5f${f5}<br>
        6s${s6} 6p${p6} 6d${d6}<br>
        7s${s7} 2p${p7}<br>`
}
//Acha a família do átomo
function achafamilia(num,grupo){
    console.log(`num ${num}, grupo ${grupo}`);
    return (
    (num==1) ? "<br> Não possiu uma família específica." : 
        (num != 1 && grupo==1) ? "Metais Alcalinos" :
            (grupo == 2) ? "Metais Alcalinos Terrosos" : 
                (grupo== 3 && num<40) ? "Metais de transição" :
                    (num>=57 && num<=71) ? "Lantanídeos" :
                        (num>=89 && num<=103) ? "Actnideos" : 
                            (grupo>=4 && grupo<=12) ? "Metais de transição" :
                                (grupo==13) ? "Grupo do Boro" :
                                    (grupo==14) ? "Grupo do Carbono" :
                                        (grupo==15) ? "Grupo do Nitrogênio" :
                                            (grupo==16) ? "Calcogênios" :
                                                (grupo==17) ? "Halogênios" : "Gases Nobres"
    )
}
//Acha o grupo do átomo na tabela periódica.
function achagrupo (num){
    if ((num>=57 && num<=71) || (num>=89 && num<=103)){ return 3 }
    const grupos = [
        [1, 3, 11, 19, 37, 55, 87], //1
        [4, 12, 20, 38, 56, 88],    //2
        [21, 39],                   //3
        [22,40,72,104],             //4
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
        [9,17,35,53,85]             //17
    ]
    for(let i in grupos){
        if(grupos[i].indexOf(num)!=-1){ return (Number(i) + 1) }
    }
    return 18
}
//Acha o período do atomo na tabela periódica
function achaperiodo(num){
    return(num==1 || num==2) ? 1 :
            (num>=3 && num<=10) ? 2 :
                (num>=11 && num<=18) ? 3 :
                    (num>=19 && num<=36) ? 4 :
                        (num>=37 && num<=54) ? 5 :
                            (num>=55 && num<=86) ? 6 : 7
}
//Escreve as camadas de valência
function ecdv(){
    let content=""
    const getString = str => `<br>A camada de valência é: ${str}<br>`
    switch(camadaValencia){
        case 1:
            content+=(`<br>A camada de valência é: 1s${s1}<br>Elétrons na camada de valência: ${s1}`) 
            break
        case 2:
            content+= (p2>2) ? getString(`2s${s2} 2p${p2}`): getString(`2s${s2}`)
            content+=`Elétrons na camada de valência: ${s2+p2}`
            break
        case 3:
            content+= (p3>0) ? getString(`3s${s3} 3p${p3}`) : getString(`3s${s3}`)
            content+= `Elétrons na camada de valência: ${s3+p3}`
            break
        case 4:
            content+= (p4>0) ? getString(`4s${s4} 4p${p4}`) : getString(`4s${s4}`)
            content+= `Elétrons na camada de valência: ${s4+p4}`
            break
        case 5:
            content+= (p5>0) ? getString(`5s${s5} 5p${p5}`) : getString(`5s${s5}`)
            content+= `Elétrons na camada de valência: ${s5+p5}`
            break
        case 6:
            content+= (p6>0) ? getString(`6s${s6} 6p${p6}`) : getString(`6s${s6}`)
            content+= `Elétrons na camada de valência: ${s6+p6}`
            break
        case 7:
            content+= (p7>0) ? getString(`7s${s7} 7p${p7}`) : getString(`7s${s7}`)
            content+= `Elétrons na camada de valência: ${s7+p7}`
        break
    }
    return content
}
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
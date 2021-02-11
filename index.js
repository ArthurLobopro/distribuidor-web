import atomos from "./modules/atomos.js"
var periodo,grupo
var camadaValencia=0
var camada=[0,0,0,0,0,0,0]
var res = document.getElementById("res")
var s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7
var subcamadas = {
    nomes: ['1s','2s','2p','3s','3p','3d','4s','4p','4d','4f','5s','5p','5d','5f','6s','6p','6d','7s','7p']
}
var id = 0

const reverse = (str)=>{
    let array = String(str).split('')
    array.reverse()
    array = String(array).replaceAll(',','')
    return array
}
var id = 0
// Detecção de eventos

//Busca por símbolo
const bps_input = document.getElementById('simbolo')
const bps_buttom = document.getElementById('bps') 
bps_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bps() }
}
bps_buttom.onclick=() => bps() 

//Busca por nome
const bpn_input = document.getElementById('nome')
const bpn_buttom = document.getElementById('bpn')
bpn_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpn() }
}
bpn_buttom.onclick=() => bpn() 

//Busca por número atômico
const bpna_input = document.getElementById('num')
const bpna_buttom = document.getElementById('bpna')
const bpna_carga = document.getElementById('bpna-carga')
bpna_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpna() }
}
bpna_carga.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpna() }
}
bpna_buttom.onclick = () => bpna()

// Busca por distribuição eletrônica
const sub_inputs = {
    get: id =>  document.getElementById(id)
    
}

//bpde= Busca por Distribuição eletrônica, busca o atomo pela distribuição eletrônica informada acima.
function bpde() {
    s1=Number(document.getElementById("1s").value)
    s2=Number(document.getElementById("2s").value), p2=Number(document.getElementById("2p").value) 
    s3=Number(document.getElementById("3s").value), p3=Number(document.getElementById("3p").value), d3=Number(document.getElementById("3d").value)
    s4=Number(document.getElementById("4s").value), p4=Number(document.getElementById("4p").value)
    d4=Number(document.getElementById("4d").value), f4=Number(document.getElementById("4f").value) 
    s5=Number(document.getElementById("5s").value), p5=Number(document.getElementById("5p").value)
    d5=Number(document.getElementById("5d").value), f5=Number(document.getElementById("5f").value)
    s6=Number(document.getElementById("6s").value), p6=Number(document.getElementById("6p").value), d6=Number(document.getElementById("6d").value) 
    s7=Number(document.getElementById("7s").value), p7=Number(document.getElementById("7p").value)
    let carga=Number(document.getElementById("carga").value)
    let num=s1+s2+p2+s3+p3+d3+s4+p4+d4+f4+s5+p5+d5+f5+s6+p6+d6+s7+p7
	let content=""
    num+=carga
    if (num>0 && num<=118){
        let nome=nomeatomo(num)
        let simbolo=simboloatomo(num)
        let grupo = achagrupo(num)
        achaperiodo(num)
        let familia = achafamilia(num)
        camadas()

        content+=`<div class='res' id="div${id}">Distribuição fornecida:
        <div class="circle" onclick="remove_div(${id})"><img src="midia/close-icon.png"></div><br>`
        content+=ede()
        content+=`Carga: ${carga}<br><br>`
        content+=
        (carga>0) ? `Átomo encontrado: ${nome} <sup>+${carga}</sup><br>` :
            (carga<0) ? `Átomo encontrado: ${nome} <sup>${carga}</sup><br>` : `Átomo encontrado: ${nome}<br>`
        content+=
        (carga>0) ? `Símbolo: ${simbolo} <sup>+${carga}</sup><br><br>` :
            (carga<0) ? `Símbolo: ${simbolo} <sup>${carga}</sup><br><br>` : `Símbolo: ${simbolo}<br>`  
        content+=`Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período: ${periodo}<br>`      
        content+=escrevacamadas()
        content+=ecdv()
        res.innerHTML+=content
        mostra_res()
        id++
    }else{
        alert("Você informou algum número inválido, confira as informações e tente novamente")
    }
}
//Busca por número atômico
function bpna(){
    let num =Number(bpna_input.value)
    let numbackup=num
    let carga=Number(bpna_carga.value)
    let content=""
    num+=(-carga)
        distribuidor(num)
        let nome=nomeatomo(numbackup)
        let simbolo=simboloatomo(numbackup)
        let grupo = achagrupo(numbackup)
        achaperiodo(numbackup)
        let familia = achafamilia(numbackup)
        camadas()
        content+=`<div class="res" id="div${id}">
        <div class="circle" onclick="remove_div(${id})"><img src="midia/close-icon.png"></div>
        Você informou: ${numbackup}<br>Carga: ${carga}<br><br>`
        content+=
        (carga>0) ? `Nome do átomo: ${nome} <sup>+${carga}</sup><br>` :
            (carga<0) ? `Nome do átomo: ${nome} <sup>${carga}</sup><br>` :`Nome do átomo: ${nome}<br>`
        content+=
        (carga>0) ? `Símbolo: ${simbolo} <sup>+${carga}</sup><br>` :
            (carga<0) ? `Símbolo: ${simbolo} <sup>${carga}</sup><br>` : `Símbolo: ${simbolo}<br>`
        content+=`Número atômico: ${numbackup}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período: ${periodo}<br><br>` 
        content+=ede()
        content+=escrevacamadas()
        content+=ecdv()
        res.innerHTML+=content
        mostra_res()
        id++
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
        let nome=nomeatomo(num)
        let simbolo=simboloatomo(num)
        let grupo = achagrupo(num)
        achaperiodo(num)
        let familia = achafamilia(num)
        camadas()
        content+=`<div class="res" id="div${id}">
        <div class="circle" onclick="remove_div(${id})"><img src="midia/close-icon.png"></div>
        Nome informado: ${name}<br><br>
        Nome: ${nome}<br>Símbolo: ${simbolo}<br>Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
        content+=ede()
        content+=escrevacamadas()
        content+=ecdv()
        res.innerHTML+=content
        mostra_res()
        id++
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
            let nome=nomeatomo(num)
            let simbolo=simboloatomo(num)
            let grupo = achagrupo(num)
            achaperiodo(num)
            let familia = achafamilia(num)
            camadas()
            content+=`<div class="res" id="div${id}">
            <div class="circle" onclick="remove_div(${id})"><img src="midia/close-icon.png"></div>
            Símbolo informado: ${simbol}<br><br>
            Nome: ${nome}<br>Símbolo: ${simbolo}<br>Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
            content+=ede()
            content+=escrevacamadas()
            content+=ecdv()
            res.innerHTML+=content
            mostra_res()
            id++
        }
        bps_input.value=""
}
//Acha o nome do átomo.
function nomeatomo(num){
    return atomos.nomes[num-1]
}
//Acha o símbolo do átomo.
function simboloatomo (num){
    return atomos.simbolos[num-1]
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
    <br>Camada P: ${camada [5]}
    <br>Camada Q: ${camada [6]}`	
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
function achafamilia(num){
    return (
    (num==1) ? "<br> Não possiu uma família específica,<br> algumas vezes é representado<br> separado de outros elementos." : 
        (num != 1 & grupo==1) ? "Metais Alcalinos" :
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
        [1, 3, 11, 19, 37, 55, 87],
        [4, 12, 20, 38, 56, 88],
        [21, 39],
        [22,40,72,104],
        [23, 41, 73, 105],
        [24, 42, 74, 106],
        [25, 43, 75, 107],
        [26, 44, 76, 108],
        [27, 45, 77, 109],
        [28, 46, 78, 110],
        [29, 47, 79, 111],
        [30, 48, 80, 112],
        [5, 13, 31, 49, 81, 113],
        [6, 14, 32, 50, 82, 114],
        [7, 15, 33, 51, 83, 115],
        [8, 16, 34, 52, 84, 116],
        [9,17,35,53,85]
    ]
    for(let i in grupos){
        if(grupos[i].indexOf(num)!=-1){ return Number(i+1) }
    }
    return 18
}
//Acha o período do atomo na tabela periódica
function achaperiodo(num){
    periodo =  
    (num==1 || num==2) ? 1 :
        (num>=3 && num<=10) ? 2 :
            (num>=11 && num<=18) ? 3 :
                (num>=19 && num<=36) ? 4 :
                    (num>=37 && num<=54) ? 5 :
                        (num>=55 && num<=86) ? 6 : 7
}
//Escreve as camadas de valência
function ecdv(){
    let content=""
    switch(camadaValencia){
        case 1:
            content+=(`<br>A camada de valência é: 1s${s1}<br>Elétrons na camada de valência: ${s1}</div>`) 
            break
        case 2:
            content+= (p2>2) ? `<br>A camada de valência é: 2s${s2} 2p${p2}<br>` : `<br>A camada de valência é: 2s${s2}<br>`
            content+=`Elétrons na camada de valência: ${s2+p2}</div>`
            break
        case 3:
            content+= (p3>0) ? `<br>A camada de valência é: 3s${s3} 3p${p3}<br>` : `<br>A camada de valência é: 3s${s3}<br>`
            content+= `Elétrons na camada de valência: ${s3+p3}</div>`
            break
        case 4:
            content+= (p4>0) ? `<br>A camada de valência é: 4s${s4} 4p${p4}<br>` : `<br>A camada de valência é: 4s${s4}<br>`
            content+= `Elétrons na camada de valência: ${s4+p4}</div>`
            break
        case 5:
            content+= (p5>0) ? `<br>A camada de valência é: 5s${s5} 5p${p5}<br>` : `<br>A camada de valência é: 5s${s5}<br>`
            content+= `Elétrons na camada de valência: ${s5+p5}</div>`
            break
        case 6:
            content+= (p6>0) ? `<br>A camada de valência é: 6s${s6} 6p${p6}<br>` : `<br>A camada de valência é: 6s${s6}<br>`
            content+= `Elétrons na camada de valência: ${s6+p6}</div>`
            break
        case 7:
            content+= (p7>0) ? `<br>A camada de valência é: 7s${s7} 7p${p7}<br>` : `<br>A camada de valência é: 7s${s7}<br>`
            content+= `Elétrons na camada de valência: ${s7+p7}</div>`
        break
    }
    return content
}
// function remove_div(num){
//     let element= document.getElementById(`div${num}`)
//     res.removeChild(element)
//     let string = res.innerHTML
//     let teste = string.indexOf("div")
//     if(teste==-1){
//         res.style.display="none"
//         id=0
//     }
// }
// function auto_submit(event,num){
//     let tecla = event.key
//     if(tecla=="Enter"){
//         switch(num){
//             case 0:
//                 bpde()
//                 break
//             case 1:
//                 bpna()
//                 break
//             case 2:
//                 bpn()
//                 break
//             case 3:
//                 bps()
//                 break
//         }
//     }
// }
function reseta_dist(){
    for(let i in subcamadas.nomes){
        document.getElementById(subcamadas.nomes[i]).value=""
    }
}
function prox(event, id){
    if(event.key=='Enter'){
        document.getElementById(id).focus()
    }
}
function mostra_res(){
    res.style.display="inline-block"
}
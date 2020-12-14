var nome,simbolo,familia,periodo,grupo
var camadaValencia=0
var camada=[0,0,0,0,0,0,0]
var res
var s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7
var atomos= ["Hidrogênio","Hélio","Lítio","Berílio","Boro","Carbono","Nitrogênio","Oxigênio","Flúor","Neônio","Sódio","Magnésio",
    "Alumínio","Silício","Fósforo","Enxofre","Cloro","Argônio","Potássio","Cálcio","Escândio","Titânio","Vanádio","Crômio","Manganês",
    "Ferro","Cobalto","Níquel","Cobre","Zinco","Gálio","Germânio","Arsênio","Selênio","Bromo","Criptônio","Rubídio","Estrôncio","Ítrio",
    "Zircônio","Nióbio","Molibdênio","Tecnécio","Rutênio","Ródio","Paládio","Prata","Cádmio","Índio","Estanho","Antimônio","Telúrio","Iodo",
    "Xenônio","Césio","Bário","Lantânio","Cério","Praseodímio","Neodímio","Promécio","Samário","Európio","Gadolínio","Térbio","Disprósio",
    "Hôlmio","Érbio","Túlio","Itérbio","Lutécio","Háfnio","Tântalo","Tungstênio","Rênio","Ósmio","Irídio","Platina","Ouro","Mercúrio",
    "Tálio","Chumbo","Bismuto","Polônio","Astato","Radônio","Frâncio","Rádio","Actínio","Tório","Protactínio","Urânio","Neptúnio","Plutônio",
    "Amerício","Cúrio","Berquélio","Califórnio","Enstênio","Férmio","Mendelévio","Nobélio","Laurêncio","Rutherfórdio","Dúbnio","Seabórgio",
    "Bóhrio","Hássio","Meitnério","Darmstádtio","Roentgênio","Copernício","Nihônio","Fleróvio","Moscóvio","Livermório","Tennesso","Oganessônio"]
    var simbolos = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr",
    "Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb",
    "Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt",
    "Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db",
    "Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]
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
	res=""
    if (carga<0){
    num+=carga
    }else{
    num-=carga
    }
    if (num>0 && num<=118){
    nome=nomeatomo(num)
    simbolo=simboloatomo(num)
    achagrupo(num)
    achaperiodo(num)
    achafamilia(num)
    camadas()

    res+=(`<div class='res'>Distribuição fornecida:<br>`)
                    ede()
    res+=(`Carga: ${carga}<br><br>`)
    if (carga>0){
        res+=(`Átomo encontrado: ${nome} <sup>+${carga}</sup><br>`)
    }else if(carga<0){
            res+=(`Átomo encontrado: ${nome} <sup>${carga}</sup><br>`)
    }else{
        res+=(`Átomo encontrado: ${nome}<br>`)
    }
    res+=(`Número atômico: ${num}<br>`)
    if (carga>0){
        res+=(`Símbolo: ${simbolo} <sup>+${carga}</sup><br><br>`)
    }else if(carga<0){
        res+=(`Símbolo: ${simbolo} <sup>${carga}</sup><br><br>`)
    }else{
        res+=(`Símbolo: ${simbolo}<br><br>`)
    }   
    res+=`Grupo: ${grupo}<br>Período: ${periodo}<br>Família: ${familia}<br>`      
    escrevacamadas()
    ecdv()
	document.getElementById("res").innerHTML+=(res)
    }else{
    alert("Você informou algum número inválido, confira as informações e tente novamente")
    }
}
//Busca por número atômico
function bpna(){
    let num =Number(document.getElementById("num").value)
    let numbackup=num
    let carga=Number(document.getElementById("carga2").value)
    res=""
    if (carga<0){
        num+=carga
        }else{
        num-=carga
        }
        distribuidor(num)
        nome=nomeatomo(numbackup)
        simbolo=simboloatomo(numbackup)
        achagrupo(numbackup)
        achaperiodo(numbackup)
        achafamilia(numbackup)
        camadas()
        res+=(`<div class="res">Você informou: ${numbackup}<br>Carga: ${carga}<br><br>`)
        if (carga>0){
            res+=(`Nome do átomo: ${nome} <sup>+${carga}</sup><br>`)
        }else if(carga<0){
                res+=(`Nome do átomo: ${nome} <sup>${carga}</sup><br>`)
        }else{
            res+=(`Nome do átomo: ${nome}<br>`)
        }
        if (carga>0){
            res+=(`Símbolo: ${simbolo} <sup>+${carga}</sup><br><br>`)
        }else if(carga<0){
            res+=(`Símbolo: ${simbolo} <sup>${carga}</sup><br><br>`)
        }else{
            res+=(`Símbolo: ${simbolo}<br><br>`)
        }  
        res+=`Grupo: ${grupo}<br>Período: ${periodo}<br>Família: ${familia}<br><br>` 
        ede()
        escrevacamadas()
        ecdv()
        document.getElementById("res").innerHTML+=res
}
//Busca pelo nome
function bpn(){
    let name=document.getElementById("nome").value
    let teste=0 //Enquanto tiver espaços irá ser diferente de -1
    do{
        name=name.replace(' ','')
        teste=name.indexOf(' ')
    }while(teste!=-1)
    let num=0
    let erro=true
    res=""
    for(let i=0;i<118;i++){
        if(name.toUpperCase() == atomos[i].toUpperCase()){
           num=i+1
           erro=false
        }
        if(i==117 && num==0){
            alert(`"${name}" não foi reconhecido como nome de um átomo :( , verifique se não esqueceu algum acento ou colocou um espaço desnecessário.`)
        }
    }
        
        if (erro==false){
        distribuidor(num)
        nome=nomeatomo(num)
        simbolo=simboloatomo(num)
        achagrupo(num)
        achaperiodo(num)
        achafamilia(num)
        camadas()
        res+=`<div class="res">Nome informado: ${name}<br><br>
        Nome: ${nome}<br>Símbolo: ${simbolo}<br>Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
        ede()
        escrevacamadas()
        ecdv()
        document.getElementById("res").innerHTML+=res
        }
        document.getElementById("nome").value=("")
}
function bps(){
    let simbol=document.getElementById("simbolo").value
    let num=0
    let teste=0 //Enquanto tiver espaços irá ser diferente de -1
    do{
        simbol=simbol.replace(' ','')
        teste=simbol.indexOf(' ')
    }while(teste!=-1)
    let erro=true
    res=""
    for(let i=0;i<118;i++){
        if(simbol.toUpperCase() == simbolos[i].toUpperCase()){
           num=i+1
           erro=false
        }
        if(i==117 && num==0){
            alert(`"${simbol}" não foi reconhecido como símbolo de um átomo :( , verifique se digitou corretamente e tente novamente.`)
        }
    }

    if (erro==false){
        distribuidor(num)
        nome=nomeatomo(num)
        simbolo=simboloatomo(num)
        achagrupo(num)
        achaperiodo(num)
        achafamilia(num)
        camadas()
        res+=`<div class="res">Símbolo informado: ${simbol}<br><br>
        Nome: ${nome}<br>Símbolo: ${simbolo}<br>Número atômico: ${num}<br><br>Família: ${familia}<br>Grupo: ${grupo}<br>Período ${periodo}<br><br>Distribuição Eletrônica:<br>`
        ede()
        escrevacamadas()
        ecdv()
        document.getElementById("res").innerHTML+=res
        }
        document.getElementById("simbolo").value=("")
}
//Acha o nome do átomo.
function nomeatomo(num){
    return atomos[num-1]
}
//Acha o símbolo do átomo.
function simboloatomo (num){
    return simbolos[num-1]
}
//Faz a distribuição eletrônica de acordo o número de prótons
function distribuidor(num){
    if (num-2>=0){
        s1=2
        num=num-2
    }else{
        s1=num
        num=0
    }
    if (num - 2 >= 0){
        s2 = 2
        num = num -2
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
        num = num -2
    }else {
        s3 = num
        num = 0
    }
    if(num-6>=0){
        p3=6
        num=num-6
    }else{
        p3=num
        num=0
    }
    if (num - 2 >= 0){
        s4 = 2
        num = num -2
    }else {
        s4 = num
        num = 0
    }
    if(num-10>=0){
        d3=10
        num=num-10
    }else{
        d3=num
        num=0
    }
    if(num-6>=0){
        p4=6
        num=num-6
    }else{
        p4=num
        num=0
    }
    if (num - 2 >= 0){
        s5 = 2
        num = num -2
    }else {
        s5 = num
        num = 0
    }
    if(num-10>=0){
        d4=10
        num=num-10
    }else{
        d4=num
        num=0
    }
    if(num-6>=0){
        p5=6
        num=num-6
    }else{
        p5=num
        num=0
    }
    if (num - 2 >= 0){
        s6 = 2
        num = num -2
    }else {
        s6 = num
        num = 0
    }
    if(num-14>=0){
        f4=14
        num=num-14
    }else{
        f4=num
        num=0
    }
    if(num-10>=0){
        d5=10
        num=num-10
    }else{
        d5=num
        num=0
    }
    if(num-6>=0){
        p6=6
        num=num-6
    }else{
        p6=num
        num=0
    }
    if (num - 2 >= 0){
        s7 = 2
        num = num -2
    }else {
        s7 = num
        num = 0
    }
    if(num-14>=0){
        f5=14
        num=num-14
    }else{
        f5=num
        num=0
    }
    if(num-10>=0){
        d6=10
        num=num-10
    }else{
        d6=num
        num=0
    }
    if(num-6>=0){
        p7=6
        num=num-6
    }else{
        p7=num
        num=0
    }
}
//Soma os elétrons das camadas e acha a camada de valência
function camadas(){
        
		camada [0] = s1 
        camada [1] = (s2+p2)
		camada [2] = (s3+p3+d3)
		camada [3] = (s4+p4+d4+f4)
		camada [4] = (s5+p5+d5+f5)
		camada [5] = (s6+p6+d6)
		camada [6] = (s7+p7)
       


		if (camada[0]>0){
		camadaValencia = 1	
		}
		if (camada[1]>0){
		camadaValencia = 2	
		}
		if (camada[2]>0){
		camadaValencia = 3	
		}
		if (camada[3]>0){
		camadaValencia = 4	
		}
		if (camada[4]>0){
		camadaValencia = 5	
		}
		if (camada[5]>0){
		camadaValencia = 6	
		}
		if (camada[6]>0){
		camadaValencia = 7	
		}
}
function escrevacamadas(){
    res+=(`<br>Elétrons nas camadas:
    <br>Camada K: ${camada[0]}
    <br>Camada L: ${camada[1]}
    <br>Camada M: ${camada[2]}
    <br>Camada N: ${camada[3]}
    <br>Camada O: ${camada[4]}
    <br>Camada P: ${camada [5]}
    <br>Camada Q: ${camada [6]}`)	
}
//Escreve a distribuição eletrônica
function ede(){
    res+=(`1s${s1} <br>
        2s${s2} 2p${p2}<br>
        3s${s3} 3p${p3} 3d${d3}<br>
        4s${s4} 4p${p4} 4d${d4} 4f${f4}<br>
        5s${s5} 5p${p5} 5d${d5} 5f${f5}<br>
        6s${s6} 6p${p6} 6d${d6}<br>
        7s${s7} 2p${p7}<br>`)
}
//Acha a família do átomo
function achafamilia(num){
    if (num==1){
        familia="O hidrogênio não possiu uma família específica,<br> em algumas tabelas ele é até representado separadamente"
    }else if (num != 1 & grupo==1){
        familia="Metais Alcalinos"
    }else if(grupo == 2){
        familia="Metais Alcalinos Terrosos"
    }else if (grupo== 3 & (num<40)){
        familia="Metais de transição"
    }else if (num>=57 & num<=71){
        familia="Lantanídeos"
    }else if(num>=89 & num<=103){
        familia="Actnideos"
    }else if(grupo==4){
        familia="Metais de transição"
    }else if(grupo==5){
        familia="Metais de transição"
    }else if(grupo==6){
        familia="Metais de transição"
    }else if(grupo==7){
        familia="Metais de transição"
    }else if(grupo==8){
        familia="Metais de transição"
    }else if(grupo==9){
        familia="Metais de transição"
    }else if(grupo==10){
        familia="Metais de transição"
    }else if(grupo==11){
        familia="Metais de transição"
    }else if(grupo==12){
        familia="Metais de transição"
    }else if(grupo==13){
        familia="Grupo do Boro"
    }else if (grupo==14){
        familia="Grupo do Carbono"  
    }else if (grupo==15){
        familia="Grupo do Nitrogênio"
    }else if(grupo==16){
        familia="Calcogênios"
    }else if (grupo==17){
        familia="Halogênios"
    }else if (grupo==18){
        familia="Gases Nobres"
    }
}
//Acha o grupo do átomo na tabela periódica.
function achagrupo (num){
    if (num==1 | num==3 | num==11 | num==19 | num==37 | num==55 | num==87){
        grupo=1
    }else if(num==4 | num==12 | num==20 | num==38 | num==56 | num==88){
        grupo=2
    }else if(num==21 | num==39 | (num>=57 & num<=71) | (num>=89 & num<=103)){
        grupo=3
    }else if(num==22 | num==40 | num==72 | num==104){
        grupo=4
    }else if(num==23 | num==41 | num==73 | num==105){
        grupo=5
    }else if(num==24 | num==42 | num==74 | num==106){
        grupo=6
    }else if(num==25 | num==43 | num==75 | num==107){
        grupo=7
    }else if(num==26 | num==44 | num==76 | num==108){
        grupo=8
    }else if(num==27 | num==45 | num==77 | num==109){
        grupo=9
    }else if(num==28 | num==46 | num==78 | num==110){
        grupo=10
    }else if(num==29 | num==47 | num==79 | num==111){
        grupo=11
    }else if(num==30 | num==48 | num==80 | num==112){
        grupo=12
    }else if(num==5 | num==13 | num==31 | num==49 | num==81 | num==113){
        grupo=13
    }else if(num==6 | num==14 | num==32 | num==50 | num==82 | num==114){
        grupo=14
    }else if(num==7 | num==15 | num==33 | num==51 | num==83 | num==115){
        grupo=15
    }else if(num==8 | num==16 | num==34 | num==52 | num==84 | num==116){
        grupo=16
    }else if(num==9 | num==17 | num==35 | num==53 | num==85 | num==117){
        grupo=17
    }else if(num==2 | num==10 | num==18 | num==36 | num==54 | num==86 | num==118){
        grupo=18
    }
    
}
//Acha o período do atomo na tabela periódica
function achaperiodo (num){
		
    if (num==1 | num==2){
        periodo=1
    }else if(num>=3 & num<=10){
        periodo = 2
    }else if(num>=11 & num<=18){
        periodo=3
    }else if(num>=19 & num<=36){
        periodo=4
    }else if(num>=37 & num<=54){
        periodo=5
    }else if(num>=55 & num<=86){
        periodo=6
    }else{
        periodo=7
    }
}
//Escreve as camadas de valência
function ecdv(){
    switch(camadaValencia){
    case 1:
        res+=(`<br>A camada de valência é: 1s${s1}<br>Elétrons na camada de valência: ${s1}</div>`) 
        break
    case 2:
    if (p2>0){
        res+=(`<br>A camada de valência é: 2s${s2} 2p${p2}<br>Elétrons na camada de valência: ${s2+p2}</div>`)
    }else{
        res+=(`<br>A camada de valência é: 2s${s2}<br>Elétrons na camada de valência: ${s2}</div>`)
    }break
    case 3:
    if (p3>0){
        res+=(`<br>A camada de valência é: 3s${s3} 3p${p3}<br>Elétrons na camada de valência: ${s3+p3}</div>`)
    }else{
        res+=(`<br>A camada de valência é: 3s${s3}<br>Elétrons na camada de valência: ${s3}</div>`)
    }break
    case 4:
    if(p4>0) {
        res+=(`<br>A camada de valência é: 4s${s4} 4p${p4}<br>Elétrons na camada de valência: ${s4+p4}</div>`)
    }else{
        res+=(`<br>A camada de valência é: 4s${s4}<br>Elétrons na camada de valência: ${s4}</div>`)
    }break
    case 5:
    if(p5>0) {
        res+=(`<br>A camada de valência é: 5s${s5} 5p${p5}<br>Elétrons na camada de valência: ${s5+p5}</div>`)
    }else{
        res+=(`<br>A camada de valência é: 5s${s5}<br>Elétrons na camada de valência: ${s5}</div>`)
    }break
    case 6:
    if(p6>0) {
        res+=(`<br>A camada de valência é: 6s${s6} 6p${p6}<br>Elétrons na camada de valência: ${s6+p6}</div>`)
    }else{
        res+=(`<br>A camada de valência é: 6s${s6}<br>Elétrons na camada de valência: ${s6}</div>`)
    }break
    case 7:
    if(p7>0) {
        res+=(`<br>A camada de valência é: 7s${s7} 7p${p7}<br>Elétrons na camada de valência: ${s7+p7}</div>`)
    }else{
        res+=(`<br>A camada de valência é: 7s${s7}<br>Elétrons na camada de valência: ${s7}</div>`)
    }break
    }
}
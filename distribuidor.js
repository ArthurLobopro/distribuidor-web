var num,numbackup
var s1=0,s2=[0,0],s3=[0,0,0],s4=[0,0,0,0],s5=[0,0,0,0],s6=[0,0,0],s7=[0,0]
var camada=[0,0,0,0,0,0,0]
var camadaValencia=0
var nome,simbolo,familia,periodo,grupo
let opcao="s"
inicio()

function inicio(){
while(opcao !="S" & opcao !="N"){
opcao=prompt("O átomo está em seu estado fundamental?S/N")
opcao=opcao.toUpperCase()
if(opcao !="S" & opcao !="N"){
	alert("Uma resposta inesperada foi encontrada,você digitou '"+opcao+"' ao invés das opções S/N")
}
}
if(opcao == "S"){
num= prompt("Informe o número de prótons ou o número atômico do átomo:")
numbackup=num
distribuidor(num)
camadas()
nome=nomeatomo(num)
simbolo=simboloatomo(num)
achaperiodo(num)
achagrupo(num)
achafamilia(num)
document.write("<div>")
document.write("Nome do átomo: "+nome)
document.write("<br>Símbolo: ",simbolo)
document.write("<br><br>Localização na tabela periódica:<br>Período: "+periodo)
document.write("<br>Grupo: "+grupo)
document.write("<br>Família: "+familia)
document.write("<br><br>")
ede()
escrevacamadas()
ecdv()
document.write("</div>")
}else{
	alert("Como o átomo não está em seu estado fundamental tudo que podemos fazer é a distribuição eletrônica.")
	num= prompt("Informe o número de elétrons do átomo:")
	distribuidor(num)
	camadas()
	document.write("<div>")
	ede()
	escrevacamadas()
	ecdv()
	document.write("</div>")
}
}
//Faz a distribuição eletrônica.
function distribuidor(num){
if (num-2>=0){
	s1=2
	num=num-2
}else{
	s1=num
	num=0
}
if (num - 2 >= 0){
	s2[0] = 2
	num = num -2
}else {
	s2[0] = num
	num = 0
}
if(num-6>=0){
	s2[1]=6
	num=num-6
}else{
	s2[1]=num
	num=0
}
if (num - 2 >= 0){
	s3[0] = 2
	num = num -2
}else {
	s3[0] = num
	num = 0
}
if(num-6>=0){
	s3[1]=6
	num=num-6
}else{
	s3[1]=num
	num=0
}
if (num - 2 >= 0){
	s4[0] = 2
	num = num -2
}else {
	s4[0] = num
	num = 0
}
if(num-10>=0){
	s3[2]=10
	num=num-10
}else{
	s3[2]=num
	num=0
}
if(num-6>=0){
	s4[1]=6
	num=num-6
}else{
	s4[1]=num
	num=0
}
if (num - 2 >= 0){
	s5[0] = 2
	num = num -2
}else {
	s5[0] = num
	num = 0
}
if(num-10>=0){
	s4[2]=10
	num=num-10
}else{
	s4[2]=num
	num=0
}
if(num-6>=0){
	s5[1]=6
	num=num-6
}else{
	s5[1]=num
	num=0
}
if (num - 2 >= 0){
	s6[0] = 2
	num = num -2
}else {
	s6[0] = num
	num = 0
}
if(num-14>=0){
	s4[3]=14
	num=num-14
}else{
	s4[3]=num
	num=0
}
if(num-10>=0){
	s5[2]=10
	num=num-10
}else{
	s5[2]=num
	num=0
}
if(num-6>=0){
	s6[1]=6
	num=num-6
}else{
	s6[1]=num
	num=0
}
if (num - 2 >= 0){
	s7[0] = 2
	num = num -2
}else {
	s7[0] = num
	num = 0
}
if(num-14>=0){
	s5[3]=14
	num=num-14
}else{
	s5[3]=num
	num=0
}
if(num-10>=0){
	s6[2]=10
	num=num-10
}else{
	s6[2]=num
	num=0
}
if(num-6>=0){
	s7[1]=6
	num=num-6
}else{
	s7[1]=num
	num=0
}
}
//Soma os elétrons nas camadas e faz a distribuição eletrônica.
function camadas(){
		camada [0] = s1 
        camada [1] = (s2[0]+s2[1])
		camada [2] = (s3[0]+s3[1]+s3[2])
		camada [3] = (s4[0]+s4[1]+s4[2]+s4[3])
		camada [4] = (s5[0]+s5[1]+s5[2]+s5[3])
		camada [5] = (s6[0]+s6[1]+s6[2])
		camada [6] = (s7[0]+s7[1])
		
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
//Escreve os eletróns nas camadas.
function escrevacamadas(){
	    document.write("<br><br>Elétrons nas camadas:")
		document.write("<br>Camada K: "+camada[0])
		document.write("<br>Camada L: "+camada[1])
		document.write("<br>Camada M: "+camada[2])
		document.write("<br>Camada N: "+camada[3])
		document.write("<br>Camada O: "+camada[4])
		document.write("<br>Camada P: "+camada [5])
		document.write("<br>Camada Q: "+camada [6])	
}
//Escreve a distribuição eletrônica.
function ede(){
document.write("Distribuição eletrônica:")
document.write("<br>1s"+s1)
document.write("<br>2s"+s2[0]+" 2p"+s2[1])
document.write("<br>3s"+s3[0]+" 3p"+s3[1]+" 3d"+s3[2])
document.write("<br>4s"+s4[0]+" 4p"+s4[1]+" 4d"+s4[2]+" 4F"+s4[3])
document.write("<br>5s"+s5[0]+" 5p"+s5[1]+" 5d"+s5[2]+" 5F"+s5[3])
document.write("<br>6s"+s6[0]+" 6p"+s6[1]+" 6d"+s6[2])
document.write("<br>7s"+s7[0]+" 7p"+s7[1])
}
//Escreve a camada de valência.
function ecdv(){
		switch(camadaValencia){
		case 1:
			document.write("<br>A camada de valência é: 1s"+s1) 
			break
		case 2:
		if (s2[1]>0){
			document.write("<br>A camada de valência é: 2s"+s2[0]+" 2p"+s2[1])
		}else{
			document.write("<br>A camada de valência é: 2s"+s2[0])
		}break
		case 3:
		if (s3[1]>0){
			document.write("<br>A camada de valência é: 3s"+s3[0]+" 3p"+s3[1])
		}else{
			document.write("<br>A camada de valência é: 3s"+s3[0])
		}break
		case 4:
		if(s4[1]>0) {
			document.write("<br>A camada de valência é: 4s"+s4[0]+" 4p"+s4[1])
		}else{
			document.write("<br>A camada de valência é: 4s"+s4[0])
		}break
		case 5:
		if(s5[1]>0) {
			document.write("<br>A camada de valência é: 5s"+s5[0]+" 5p"+s5[1])
		}else{
			document.write("<br>A camada de valência é: 5s"+s5[0])
		}break
		case 6:
		if(s6[1]>0) {
			document.write("<br>A camada de valência é: 6s"+s6[0]+" 6p"+s6[1])
		}else{
			document.write("<br>A camada de valência é: 6s"+s6[0])
		}break
		case 7:
		if(s7[1]>0) {
			document.write("<br>A camada de valência é: 7s"+s7[0]+" 7p"+s7[1])
		}else{
			document.write("<br>A camada de valência é: 7s"+s7[0])
		}break
		}
}
//Acha o nome do átomo.
function nomeatomo(num){
		var atomos= ["Hidrogênio","Hélio","Lítio","Berílio","Boro","Carbono","Nitrogênio","Oxigênio","Flúor","Neônio","Sódio","Magnésio",
		"Alumínio","Silício","Fósforo","Enxofre","Cloro","Argônio","Potássio","Cálcio","Escândio","Titânio","Vanádio","Crômio","Manganês",
		"Ferro","Cobalto","Níquel","Cobre","Zinco","Gálio","Germânio","Arsênio","Selênio","Bromo","Criptônio","Rubídio","Estrôncio","Ítrio",
		"Zircônio","Nióbio","Molibdênio","Tecnécio","Rutênio","Ródio","Paládio","Prata","Cádmio","Índio","Estanho","Antimônio","Telúrio","Iodo",
		"Xenônio","Césio","Bário","Lantânio","Cério","Praseodímio","Neodímio","Promécio","Samário","Európio","Gadolínio","Térbio","Disprósio",
		"Hôlmio","Érbio","Túlio","Itérbio","Lutécio","Háfnio","Tântalo","Tungstênio","Rênio","Ósmio","Irídio","Platina","Ouro","Mercúrio",
		"Tálio","Chumbo","Bismuto","Polônio","Astato","Radônio","Frâncio","Rádio","Actínio","Tório","Protactínio","Urânio","Neptúnio","Plutônio",
		"Amerício","Cúrio","Berquélio","Califórnio","Enstênio","Férmio","Mendelévio","Nobélio","Laurêncio","Rutherfórdio","Dúbnio","Seabórgio",
		"Bóhrio","Hássio","Meitnério","Darmstádtio","Roentgênio","Copernício","Nihônio","Fleróvio","Moscóvio","Livermório","Tennesso","Oganessônio"]

		return atomos[num-1]
	}
//Acha o símbolo do átomo.
function simboloatomo (num){
		var simbolo = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr",
		"Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb",
		"Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt",
		"Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db",
		"Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]

		return simbolo[num-1]
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
//Acha a família do átomo
function achafamilia(num){
		if (num==1){
			familia="O hidrogênio não possiu uma família específica, em algumas tabelas ele é até representado separadamente"
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
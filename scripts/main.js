//Declaração de classe utilizada
class ID {
    id = 0
    increase(){ this.id+=1 }
    reset(){ this.id=0 }
}
//Funções para export
const addEvent = () => {
    let div = document.querySelectorAll('.res .circle')
    for(let i of div){
        i.onclick = event =>{
           let element = document.getElementById(`div${event.target.dataset.id}`)
           res.removeChild(element)
           let a = res.innerHTML
            if(a.indexOf('</div>')==-1){ 
                id.reset()
                res.style.display='none'
            }
        }
    }
}
const circle = id => `<div class="circle" data-id="${id}"><img src="../midia/close-icon.png" data-id="${id}"></div>`
//Variáveis para export
const id = new ID()
const atomos = {
    nomes: [
        "Hidrogênio","Hélio","Lítio","Berílio","Boro","Carbono","Nitrogênio","Oxigênio","Flúor","Neônio","Sódio","Magnésio","Alumínio","Silício","Fósforo","Enxofre","Cloro","Argônio","Potássio","Cálcio","Escândio","Titânio","Vanádio","Crômio","Manganês","Ferro","Cobalto","Níquel","Cobre","Zinco","Gálio","Germânio","Arsênio","Selênio","Bromo","Criptônio","Rubídio","Estrôncio","Ítrio","Zircônio","Nióbio","Molibdênio","Tecnécio","Rutênio","Ródio","Paládio","Prata","Cádmio","Índio","Estanho","Antimônio","Telúrio","Iodo","Xenônio","Césio","Bário","Lantânio","Cério","Praseodímio","Neodímio","Promécio","Samário","Európio","Gadolínio","Térbio","Disprósio","Hôlmio","Érbio","Túlio","Itérbio","Lutécio","Háfnio","Tântalo","Tungstênio","Rênio","Ósmio","Irídio","Platina","Ouro","Mercúrio","Tálio","Chumbo","Bismuto","Polônio","Astato","Radônio","Frâncio","Rádio","Actínio","Tório","Protactínio","Urânio","Neptúnio","Plutônio","Amerício","Cúrio","Berquélio","Califórnio","Enstênio","Férmio","Mendelévio","Nobélio","Laurêncio","Rutherfórdio","Dúbnio","Seabórgio","Bóhrio","Hássio","Meitnério","Darmstádtio","Roentgênio","Copernício","Nihônio","Fleróvio","Moscóvio","Livermório","Tennesso","Oganessônio"
    ],
    simbolos: ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr",
    "Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb",
    "Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt",
    "Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db",
    "Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]
}
export { addEvent, circle, id, atomos }
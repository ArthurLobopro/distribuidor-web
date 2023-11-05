import { addEvent, make_div } from "./main.js"

export function ecdv(camadaValencia, { s1, s2, p2, s3, p3, s4, p4, s5, p5, s6, p6, s7, p7 }) {
    let content = ""
    const getString = str => `<br>A camada de valência é: ${str}<br>`
    switch (camadaValencia) {
        case 1:
            content += (`<br>A camada de valência é: 1s${s1}<br>Elétrons na camada de valência: ${s1}`)
            break
        case 2:
            content += (p2 > 2) ? getString(`2s${s2} 2p${p2}`) : getString(`2s${s2}`)
            content += `Elétrons na camada de valência: ${s2 + p2}`
            break
        case 3:
            content += (p3 > 0) ? getString(`3s${s3} 3p${p3}`) : getString(`3s${s3}`)
            content += `Elétrons na camada de valência: ${s3 + p3}`
            break
        case 4:
            content += (p4 > 0) ? getString(`4s${s4} 4p${p4}`) : getString(`4s${s4}`)
            content += `Elétrons na camada de valência: ${s4 + p4}`
            break
        case 5:
            content += (p5 > 0) ? getString(`5s${s5} 5p${p5}`) : getString(`5s${s5}`)
            content += `Elétrons na camada de valência: ${s5 + p5}`
            break
        case 6:
            content += (p6 > 0) ? getString(`6s${s6} 6p${p6}`) : getString(`6s${s6}`)
            content += `Elétrons na camada de valência: ${s6 + p6}`
            break
        case 7:
            content += (p7 > 0) ? getString(`7s${s7} 7p${p7}`) : getString(`7s${s7}`)
            content += `Elétrons na camada de valência: ${s7 + p7}`
            break
    }
    return content
}

export const escreve = (content) => {
    res.innerHTML += make_div(content)
    addEvent()
    res.style.display = "flex"
}
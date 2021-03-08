function camadas(){
    let camada = []
    camada [0] = s1 
    camada [1] = s2+p2
    camada [2] = s3+p3+d3
    camada [3] = s4+p4+d4+f4
    camada [4] = s5+p5+d5+f5
    camada [5] = s6+p6+d6
    camada [6] = s7+p7

    let camadaValencia = 
    (camada[0]>0) ? 1 : 
        (camada[1]>0) ? 2 : 
            (camada[2]>0) ? 3 : 
                (camada[3]>0) ? 4 :
                    (camada[4]>0) ? 5 :
                        (camada[5]>0) ? 6 : 7
    return [camada, camadaValencia]
}

export default camadas
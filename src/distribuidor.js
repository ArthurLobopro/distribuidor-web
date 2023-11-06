const S_MAX = 2
const P_MAX = 6
const D_MAX = 10
const F_MAX = 14

export function getDistribuition(eletronsAmount) {
    const distribute = max => {
        const ret = eletronsAmount - max >= 0 ? max : eletronsAmount
        eletronsAmount = eletronsAmount - max >= 0 ? eletronsAmount - max : 0
        return ret
    }

    return {
        s1: distribute(S_MAX),
        s2: distribute(S_MAX),
        p2: distribute(P_MAX),
        s3: distribute(S_MAX),
        p3: distribute(P_MAX),
        s4: distribute(S_MAX),
        d3: distribute(D_MAX),
        p4: distribute(P_MAX),
        s5: distribute(S_MAX),
        d4: distribute(D_MAX),
        p5: distribute(P_MAX),
        s6: distribute(S_MAX),
        f4: distribute(F_MAX),
        d5: distribute(D_MAX),
        p6: distribute(P_MAX),
        s7: distribute(S_MAX),
        f5: distribute(F_MAX),
        d6: distribute(D_MAX),
        p7: distribute(P_MAX)
    }
}
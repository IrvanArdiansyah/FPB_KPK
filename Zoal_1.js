function fpb_kpk(x, y) { 
    nampung = [];
    nampung1 = [];
    nampung2 = [];
    nampung3 = []; 
    nampung4 = [];
    nampung5 = [];
    nampung6 = [];
    nampungFpb = [];
    nampungKpk = [];
        for(i=1; i<=x; i++){
            if(x%i==0){
            nampung.push(i)
            }
        }
        // console.log(nampung)
        for(i=0; i<=y; i++){
            if(y%i == 0) {
            nampung1.push(i)
            }
        }
        // console.log(nampung1)
        for (i=0; i<=nampung.length; i++) {
            for (j=0; j<=nampung1.length; j++) {
                if (nampung[i]/nampung1[j] == 1) 
                    nampung2.push(nampung[i]);
                }
        }
        nampung2.reverse();
        nampungFpb.push(nampung2[0])
        // console.log(nampung2)
        // console.log(nampungFpb)
        for (i=1; i<=y; i++) {
            nampung3.push(x*i)
            }
        // console.log(nampung3)
        for (i=1; i<=y; i++) {
            nampung4.push(y*i)
            }
        // console.log(nampung4)
        for (i=1; i<=nampung3.length; i++) {
            for (j=1; j<=nampung4.length; j++) {
                if (nampung3[i]/nampung4[j] == 1) 
                nampung6.push(nampung3[i])
            }
        }
    // console.log(nampung6)
    nampungKpk.push(nampung6[0])
    // console.log(nampungKpk)
    console.log(`FPB ${x} & ${y} = ${nampungFpb}
KPK ${x} & ${y} = ${nampungKpk}`)
    }
    
    fpb_kpk(2,3)
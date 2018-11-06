function fpb_kpk(x, y) { 
    nampung = [];
    nampung1 = [];
    nampung2 = [];
    nampungFpb = [];
        for(i=1; i<=x; i++){
            if(x%i==0){
            nampung.push(i)
            }
        }
        console.log(nampung)
        for(i=0; i<=y; i++){
            if(y%i == 0) {
            nampung1.push(i)
            }
        }
        console.log(nampung1)
        for (i=0; i<=nampung.length; i++) {
            for (j=0; j<=nampung1.length; j++) {
                if (nampung[i]/nampung1[j] == 1) 
                    nampung2.push(nampung[i]);
                }
        }
        nampung2.reverse();
        nampungFpb.push(nampung2[0])
        console.log(nampung2)
        console.log(nampungFpb)
    }
    fpb_kpk(2,3)
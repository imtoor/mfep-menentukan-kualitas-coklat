const factorWeight = {
    'kadarAir': 0.5,
    'tekstur': 0.3,
    'aroma': 0.2
}

const subKriteriaAroma = {
    'busuk': 0.2,
    'tidakBerbau': 0.3,
    'harum': 0.5
}

const subKriteriaKadarAir = {
    'rendah': 0.2,
    'sedang': 0.3,
    'tinggi': 0.5
}

const subKriteriaTekstur = {
    'lembek': 0.2,
    'sedang': 0.3,
    'keras': 0.5
}

export const evaluation = (data = []) => {

    let dILength = data.length;
    if (dILength == 0) {
    return [];
    }

    let dataCoklat = [];
    let skKadarAir = null;
    let skTekstur = null;
    let skAroma = null;

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        switch (element.aroma) {
            case 'busuk':
            skAroma = subKriteriaAroma.busuk;
            break;
            case 'tidak berbau':
            skAroma = subKriteriaAroma.tidakBerbau;
            break;
            case 'harum':
            skAroma = subKriteriaAroma.harum;
            break;
        }

        switch (element.kadarAir) {
            case 'rendah':
            skKadarAir = subKriteriaKadarAir.rendah;
            break;
            case 'sedang':
            skKadarAir = subKriteriaKadarAir.sedang;
            break;
            case 'tinggi':
            skKadarAir = subKriteriaKadarAir.tinggi;
            break;
        }

        switch (element.tekstur) {
            case 'lembek':
            skTekstur = subKriteriaTekstur.lembek;
            break;
            case 'sedang':
            skTekstur = subKriteriaTekstur.sedang;
            break;
            case 'keras':
            skTekstur = subKriteriaTekstur.keras;
            break;
        }    

        dataCoklat.push({
            'title': element.title,
            'aroma': skAroma,
            'kadarAir': skKadarAir,
            'tekstur': skTekstur
        })

    }

    return dataCoklat;
}

export const weightedEvaluation = (data = []) => {
    
    let wELength = data.length;
    if (wELength == 0) {
    return [];
    }  

    let result = [];

    for (let index = 0; index < data.length; index++) {
    const element = data[index];

    let aroma = parseFloat(element.aroma * factorWeight.aroma).toFixed(2);
    let kadarAir = parseFloat(element.kadarAir * factorWeight.kadarAir).toFixed(2);
    let tekstur = parseFloat(element.tekstur * factorWeight.tekstur).toFixed(2);

    result.push({
        'title': element.title,
        'aroma': aroma,
        'kadarAir': kadarAir,
        'tekstur': tekstur      
    })

    }

    return result;
}

export const totalWeightEvaluation = (data = []) => {

    let tWELength = data.length;
    if (tWELength == 0) {
    return [];
    }  

    let result = [];

    for (let index = 0; index < data.length; index++) {
    
    const element = data[index];
    
    let total = parseFloat(element.aroma) + parseFloat(element.kadarAir) + parseFloat(element.tekstur);

    result.push({
        'title': element.title,
        'total': total
    });

    }
    
    return result;

}

export const totalWeightEvaluationSort = (data = []) => {

    let tWESLength = data.length;
    if (tWESLength == 0) {
    return [];
    }

    let result = [];

    result = data.sort((totalWeightA, totalWeightB) => {
        return totalWeightB.total - totalWeightA.total;
    });

    return result;

}
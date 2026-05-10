function extraerDominio(email){
    let domain = '';
    for(let value in email){
        if (email[Number(value)] === '@'){
            for (let i = Number(value) + 1; i < email.length; i++){
                domain += email[i];
            }
        }
    }
    return domain;
}

console.log(extraerDominio("ana@gmail.com")); // → "gmail.com"
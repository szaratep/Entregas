import { cuentasBancarias } from "./data.js";

//funciones principales
export function createAccount(idUser) {
    if (verifyAccountForUserId(idUser)){
        return 'tu cuenta ha sido creada correctamente'
    }
    return 'error al momento de crear tu cuenta'
};

export function consignment(amount, destinationAccount) {
    if (validateNumber(amount) && verifyAccount(destinationAccount)){
        let account = getAccount(destinationAccount);
        account.saldoActual += amount;
        return `La consignacion se hizo exitosamente por un valor de: ${amount}\nNumero de cuenta: ${account.numeroCuenta}\nTitular de la cuenta: ${account.titular}`
    }else{
        return `Error al hacer la consignacion, verifica el numero de cuenta de destino o que ingreses el monto correcto, recueda que no puede ser 0`
    }
};

export function withdraw(amount, sourceAccount) {
    if (verifyAccount(sourceAccount) && validateNumber(amount)) {
        let account = getAccount(sourceAccount);
        if (validateBalance(amount, account) && validateWhithdraw(account, amount)) {
            account.saldoActual -= amount;
            return `retiro exitoso: \nValor: ${amount}\nNumero de cuenta: ${account.numeroCuenta}\nTitular de la cuenta: ${account.titular}`;
        } else {
            return 'Monto ingresado no valido';
        }
    } else {
        return 'tu cuenta es invalida/Monto ingresado no valido';
    }
}

export function consult(idUser){
    if(verifyAccountForUserId(idUser)){
        for(let value of cuentasBancarias){
            if(value.documento == idUser){
                return value
            } 
        }
    }
    return 'la cuenta no existe';
}

export function pay(amount, numAccount, refence){
    if(verifyAccount(numAccount)){
        let account = getAccount(numAccount);
        if(validateNumber(amount) && validateBalance(amount, account) && validateWhithdraw(account, amount)){
            account.saldoActual -= amount;
            return `Pago efectuado exitosamente por un valor de ${amount + (amount * 0.05)} (Se cobra el 5%)\nReferencia de pago: ${refence}`
        }
        return `pago invalido` 
    }
}

export function transfer(sourceAccount, amount, destinationAccount){
    if (validateNumber(amount) && verifyAccount(destinationAccount) && verifyAccount(sourceAccount)){
        let accountSource = getAccount(sourceAccount);
        let accountDestination = getAccount(destinationAccount);

        if(validateBalance(amount, accountSource) && validateWhithdraw(accountSource, amount)){
            accountSource.saldoActual -= amount;
            accountDestination.saldoActual += amount;
            return `Transferencia exitosa: \nValor: ${amount + (amount * 0.01)} (se cobra un 1%) `
        }
    }

    return 'transferencia invalida'
}

//funciones de verificacion
function getAccount(numAccount) {
    for (let account of cuentasBancarias) {
        if(numAccount == account.numeroCuenta && account.activa){
            return account
        }
    }
    return null
};

function verifyAccount(numAcount) {
    for (let value of cuentasBancarias) {
        if (numAcount == value.numeroCuenta && value.activa) {
            return true;
        }
    }
    return false;
};

function verifyAccountForUserId(id){
    for (let value of cuentasBancarias){
        if(value.documento == id){
            return true;
        }
    }
    return false;
}

function validateNumber(num) {
    if (num <= 0){
        return false;
    }
    return true
};

function validateBalance(num, account) {
    if (num > account.saldoActual) {
        return false;
    }
    return true;
}

function validateWhithdraw(account, amount){
    if((account.saldoActual - amount) >= (account.saldoInicial * 0.10)){
        return true;
    }
    return false
}
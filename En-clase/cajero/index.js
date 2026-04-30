// simular un cajero automatico, el cual puede realizar diferentes tareas, crear la cuenta debe tener un saldo de 100us:
// 1. consignar dinero (no se pueden consignar valores negativos)
// 2. retirar: al retirar solo se puede dejando un saldo del 10% del saldo de la apertura de la cuenta
// 3. consultar
// 4. pagar: cobrar el 5%
// 5. transferir: cobra 1%
// 6. historial de movimientos ( lista )

import { cuentasBancarias } from "./data.js";



function consignment(amount, destinationAccount) {
    if (validateNumber(amount) && verifyDestinationAccount(destinationAccount)){
        let account = getAccount(destinationAccount);
        return `La consignacion se hizo exitosamente por un valor de: ${amount} \nCon un numero de cuenta: ${account.numeroCuenta} \nTitular de la cuenta: ${account.titular}`
    }else{
        return `Error al hacer la consignacion, verifica el numero de cuenta de destino o que ingreses el monto correcto, recueda que no puede ser 0`
    }
};

function withdraw (){

};

function createAccount() {

};

function getAccount(numAccount) {
    for (let account of cuentasBancarias) {
        if(numAccount === account.numeroCuenta && account.activa){
            return account
        }
    }
    return null
};


function verifySourceAccount(sourceAccount) {
    for (let value of cuentasBancarias) {
        if (sourceAccount === value.numeroCuenta && value.activa) {
            return true;
        }
    }
    return false;
};

function verifyDestinationAccount(destinationAccount) {
    for (let value of cuentasBancarias) {
        if (destinationAccount === value.numeroCuenta && value.activa) {
            return true;
        }
    }
    return false;
};

function validateNumber(num) {
    if (num < 0){
        return false;
    }
    return true
};

function validateBalance (num, account){
    if (num < account.saldoActual){
        return false;
    }

    return true;
}

console.log(consignment(100, "100000002"));
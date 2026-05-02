// simular un cajero automatico, el cual puede realizar diferentes tareas, crear la cuenta debe tener un saldo de 100us:
// 1. consignar dinero (no se pueden consignar valores negativos) 
// 2. retirar: al retirar solo se puede dejando un saldo del 10% del saldo de la apertura de la cuenta 
// 3. consultar 
// 4. pagar: cobrar el 5% 
// 5. transferir: cobra 1% 
// 6. historial de movimientos ( lista )
import { consignment, consult, pay, transfer, withdraw } from "./functions.js";

let numAccount = '';
let numDocument = '';
let option = null;

alert('Bienvenido al cajero');
numAccount = prompt('Dame Tu numero de cuenta');
numDocument = prompt('Dame tu numero de documento');
do {
    let amount = 0;
    let newNumAcount = '';
    let value = 0;
    let referenceNumber = '';
    let accoutn = undefined;
    option = Number(prompt('¿Que deseas hacer hoy?\n1. Consignar dinero a una cuenta\n2. Retirar dinero de tu cuenta\n3. Consultar Tu cuenta\n4. Pagar\n5. Transferir a otra cuenta\n6. Salir'));

    switch (option) {
        case 1:
            amount = Number(prompt('Dame el moto a consignar'));
            value = Number(prompt('¿Es a tu cuenta?\n1. Si\n2. No'))
            if (value === 1) {
                alert(consignment(amount, numAccount));
            } else {
                newNumAcount = prompt('Dame el numero de la cuenta')
                alert(consignment(amount, newNumAcount));
            }
            break;

        case 2:
            amount = Number(prompt('Dame el moto a retirar'));
            alert(withdraw(amount, numAccount));
            break;

        case 3: {
            let account = consult(numDocument);
            alert(`Titular: ${account.titular}\nNumero de cuenta: ${account.numeroCuenta}\nDocumento: ${account.documento}\nTipo de cuenta: ${account.tipoCuenta}\nMoneda: ${account.moneda}\nSaldo actual: ${account.saldoActual}\nFecha de apertura: ${account.fechaApertura}`);
            break;
        }

        case 4:
            amount = Number(prompt('Dame el moto a pagar'));
            referenceNumber = prompt('Dame la referencia de pago');
            alert(pay(amount, numAccount, referenceNumber));
            break;

        case 5:
            newNumAcount = '';
            amount = Number(prompt('Dame el moto a transferir'));
            newNumAcount = Number(prompt('Dame el numero de la cuenta'));
            alert(transfer(numAccount, amount, newNumAcount));
            break;

        case 6:
            alert('Hasta luego, gracias por visitarnos!');
            option = null;
            break;

        default:
            alert('Opcion invalida, vuelve a ingresar');
            option = null;
            break;

    }

} while (option !== null);
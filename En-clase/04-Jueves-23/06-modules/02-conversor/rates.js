export let tiposDeCambio = {
  USD: {
    COP: 3650 ,
    EUR: 0.86
  },
  EUR: {
    COP: 4220,
    USD: 1.17
  },
  COP: {
    USD: 1 / 3650,
    EUR: 1 / 4220
  }
};
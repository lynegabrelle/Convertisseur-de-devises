function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value)
    const fromCurrency = document.getElementById('fromCurrency').value
    const toCurrency = document.getElementById('toCurrency').value
    var resultDiv = document.getElementById('result')

    if (isNaN(amount)) {
       resultDiv.innerText = "veuillez entrer un montant valide" 
    }

    const exchangeRates = {
        USD:{
            USD:1,
            EUR: 0.85,
            XAF: 550
        },
        EUR:{
            USD:1.18,
            EUR:1,
            XAF: 650

        },
        XAF:{
            USD: 0.0018,
            EUR: 0.0015,
            XAF: 1
        }

    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency]
resultDiv.innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
}

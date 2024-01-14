
function converter (initialAmount, initialCurrency, convertionCurrency) {
    let exchangeRateUSD = 87.96;
    let exchangeRateEUR = 96.45;
    let exchangeRateTL = 2.95;
    if (initialCurrency === 'RUB' && convertionCurrency === 'USD') {
        return `${initialAmount / exchangeRateUSD} $`;    
    } else if (initialCurrency === 'RUB' && convertionCurrency === 'EUR') {
        return `${initialAmount / exchangeRateEUR} €`; 
    } else if (initialCurrency === 'RUB' && convertionCurrency === 'TL') {
        return `${initialAmount / exchangeRateTL} TL`;
    } return null;
}

  





console.log(converter(102, 'RUB', 'TL'));
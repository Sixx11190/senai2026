const rates = {
    USD: 5.65,
    EUR: 6.12,
    JPY: 0.037,
    BTC: 385420
};

function updatePPPMatrix() {
    const sourceType = document.getElementById('ppp-source-type').value;
    let amountBRL = financialData.net;

    if (sourceType === 'gross') amountBRL = financialData.gross;
    if (sourceType === 'expenses') amountBRL = financialData.expenses;

    const valUSD = amountBRL / rates.USD;
    const valEUR = amountBRL / rates.EUR;
    const valJPY = amountBRL / rates.JPY;
    const valBTC = amountBRL / rates.BTC;

    document.getElementById('ppp-val-usd').innerText = `$${valUSD.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('ppp-val-eur').innerText = `€${valEUR.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('ppp-val-jpy').innerText = `¥${Math.round(valJPY).toLocaleString('ja-JP')}`;
    document.getElementById('ppp-val-btc').innerText = `${valBTC.toFixed(4)} BTC`;

    document.getElementById('ppp-sats').innerText = `${Math.round(valBTC * 100000000).toLocaleString('pt-BR')} Sats`;
    document.getElementById('ppp-wage-usd').innerText = `${Math.round(valUSD / 1250)} salários`;
    document.getElementById('ppp-wage-eur').innerText = `${Math.round(valEUR / 1750)} salários`;
    document.getElementById('ppp-wage-jpy').innerText = `${Math.round(valJPY / 200000)} salários`;

    // Cálculo do Índice de Cesta de Bens
    document.getElementById('index-macbooks').innerText = `${Math.floor(valUSD / 2500)} Unidades`;
    document.getElementById('index-cloud').innerText = `${Math.floor(valUSD / 900)} Meses`;
    document.getElementById('index-bigmac').innerText = `${Math.floor(valUSD / 5.40).toLocaleString('pt-BR')} Lanches`;
}
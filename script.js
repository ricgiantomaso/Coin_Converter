const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor correto!');
        return;
    }
    else if (!selectedCurrency.value){
        alert('Escolha uma moeda');
        return;
    }
    Converter();
};

function Converter() {
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value / 5.29;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        AnimateResult();
    }
    else if (selectedCurrency.value === 'dol'){
        valueConverted = inputValue.value / 4.90;
        result.innerHTML = valueFormatter('es-US', 'USD');
        AnimateResult();
    }
    else if (selectedCurrency.value === 'ien') {
        valueConverted = inputValue.value / 0.033;
        result.innerHTML = valueFormatter('ja-JP', 'JPY');
        AnimateResult();
    }
    inputValue.value = '';
    selectedCurrency.value = '';
};


function valueFormatter(locale, currency){
    const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function AnimateResult(){
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(-0x)'},
    ],{duration: 300})
};
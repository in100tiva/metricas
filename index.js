const translations = {
    'pt': {
        'pageTitle': 'Calculadora de Instagram',
        'engagementLabel': 'Pessoas Engajadas:',
        'reachLabel': 'Pessoas Alcançadas:',
        'calculateEngagement': 'Calcular Engajamento',
        'conversionLabel': 'Clientes:',
        'leadsLabel': 'Cadastros ou Leads:',
        'calculateConversion': 'Calcular Conversão',
        'errorPositiveNumbers': 'Erro: Por favor, insira números positivos.',
        'errorNonZero': 'Erro: O valor deve ser maior que zero.',
        'engagementTipsLow': 'Considere melhorar seu conteúdo ou interagir mais com seu público.',
        'engagementTipsMedium': 'Bom trabalho! Você pode aumentar ainda mais o engajamento com promoções ou eventos ao vivo.',
        'engagementTipsHigh': 'Excelente! Mantenha as estratégias que estão funcionando bem para você.',
        'conversionTipsLow': 'Revise suas chamadas para ação ou melhore a qualidade das landing pages.',
        'conversionTipsMedium': 'Você está no caminho certo. Tente otimizar seus anúncios para melhorar ainda mais a conversão.',
        'conversionTipsHigh': 'Ótimo desempenho! Considere escalar suas campanhas mais bem-sucedidas.'
    },
    'en': {
        'pageTitle': 'Instagram Calculator',
        'engagementLabel': 'Engaged People:',
        'reachLabel': 'People Reached:',
        'calculateEngagement': 'Calculate Engagement',
        'conversionLabel': 'Customers:',
        'leadsLabel': 'Registrations or Leads:',
        'calculateConversion': 'Calculate Conversion',
        'errorPositiveNumbers': 'Error: Please enter positive numbers.',
        'errorNonZero': 'Error: The value must be greater than zero.',
        'engagementTipsLow': 'Consider improving your content or interacting more with your audience.',
        'engagementTipsMedium': 'Good job! You can further increase engagement with promotions or live events.',
        'engagementTipsHigh': 'Excellent! Keep up the strategies that are working well for you.',
        'conversionTipsLow': 'Review your calls to action or improve the quality of your landing pages.',
        'conversionTipsMedium': 'You are on the right track. Try to optimize your ads to further improve conversion.',
        'conversionTipsHigh': 'Great performance! Consider scaling up your most successful campaigns.'
    },
    'es': {
        'pageTitle': 'Calculadora de Instagram',
        'engagementLabel': 'Personas Comprometidas:',
        'reachLabel': 'Personas Alcanzadas:',
        'calculateEngagement': 'Calcular Compromiso',
        'conversionLabel': 'Clientes:',
        'leadsLabel': 'Registros o Leads:',
        'calculateConversion': 'Calcular Conversión',
        'errorPositiveNumbers': 'Error: Por favor, introduzca números positivos.',
        'errorNonZero': 'Error: El valor debe ser mayor que cero.',
        'engagementTipsLow': 'Considere mejorar su contenido o interactuar más con su audiencia.',
        'engagementTipsMedium': '¡Buen trabajo! Puede aumentar aún más el compromiso con promociones o eventos en vivo.',
        'engagementTipsHigh': '¡Excelente! Mantenga las estrategias que están funcionando bien para usted.',
        'conversionTipsLow': 'Revise sus llamadas a la acción o mejore la calidad de sus páginas de destino.',
        'conversionTipsMedium': 'Está en el buen camino. Trate de optimizar sus anuncios para mejorar aún más la conversión.',
        'conversionTipsHigh': '¡Gran rendimiento! Considere escalar sus campañas más exitosas.'
    }
};

function calculateEngagement() {
    var engaged = document.getElementById("engaged").value;
    var reached = document.getElementById("reached").value;

    if (!validateInput(engaged) || !validateInput(reached)) {
        document.getElementById("engagementResult").innerHTML = translations[currentLang].errorPositiveNumbers;
        return;
    }

    if (reached > 0) {
        var engagementRate = (engaged / reached) * 100;
        var statusMessage = getStatusMessage(engagementRate);
        document.getElementById("engagementResult").innerHTML = `Taxa de Engajamento: ${engagementRate.toFixed(2)}% - ${statusMessage}`;
        document.getElementById("engagementTips").innerHTML = getEngagementTips(engagementRate);
    } else {
        document.getElementById("engagementResult").innerHTML = translations[currentLang].errorNonZero;
    }
}

function calculateConversion() {
    var clients = document.getElementById("clients").value;
    var leads = document.getElementById("leads").value;

    if (!validateInput(clients) || !validateInput(leads)) {
        document.getElementById("conversionResult").innerHTML = translations[currentLang].errorPositiveNumbers;
        return;
    }

    if (leads > 0) {
        var conversionRate = (clients / leads) * 100;
        var statusMessage = getStatusMessage(conversionRate);
        document.getElementById("conversionResult").innerHTML = `Taxa de Conversão: ${conversionRate.toFixed(2)}% - ${statusMessage}`;
        document.getElementById("conversionTips").innerHTML = getConversionTips(conversionRate);
    } else {
        document.getElementById("conversionResult").innerHTML = translations[currentLang].errorNonZero;
    }
}

function validateInput(value) {
    return value > 0 && !isNaN(value);
}

function getStatusMessage(rate) {
    if (rate < 5) {
        return "Ruim";
    } else if (rate >= 5 && rate <= 10) {
        return "Bom";
    } else {
        return "Ótimo";
    }
}

function getEngagementTips(rate) {
    if (rate < 5) {
        return translations[currentLang].engagementTipsLow;
    } else if (rate >= 5 && rate <= 10) {
        return translations[currentLang].engagementTipsMedium;
    } else {
        return translations[currentLang].engagementTipsHigh;
    }
}

function getConversionTips(rate) {
    if (rate < 5) {
        return translations[currentLang].conversionTipsLow;
    } else if (rate >= 5 && rate <= 10) {
        return translations[currentLang].conversionTipsMedium;
    } else {
        return translations[currentLang].conversionTipsHigh;
    }
}

var currentLang = 'pt'; // Default language
function changeLanguage(lang) {
    currentLang = lang;
    document.title = translations[lang].pageTitle;
    document.getElementById('engagedLabel').innerText = translations[lang].engagementLabel;
    document.getElementById('reachedLabel').innerText = translations[lang].reachLabel;
    document.getElementById('calculateEngagementButton').innerText = translations[lang].calculateEngajment;
    document.getElementById('clientsLabel').innerText = translations[lang].conversionLabel;
    document.getElementById('leadsLabel').innerText = translations[lang].leadsLabel;
    document.getElementById('calculateConversionButton').innerText = translations[lang].calculateConversion;
}

window.onload = () => {
    changeLanguage('pt'); // Set default language
};

function changeSection(newSection) {
    const currentSection = document.querySelector('.current');
    const nextSection = document.querySelector(`#${newSection}`);

    currentSection.classList.add('fade-exit-active');
    currentSection.classList.remove('current');

    setTimeout(() => {
        currentSection.classList.remove('fade-exit-active');

        nextSection.classList.add('fade-enter-active', 'current');
        setTimeout(() => {
            nextSection.classList.remove('fade-enter-active');
        }, 500); // Match the transition time
    }, 500); // Match the transition time
}

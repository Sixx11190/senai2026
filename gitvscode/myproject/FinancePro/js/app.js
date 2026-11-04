// Controle de Modais (Abrir / Fechar)
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
}

// Alternar entre as Abas Principais (Painel, Mercado, Gestão)
function switchTab(tabName) {
    const tabs = ['painel', 'mercado', 'gestao'];

    tabs.forEach(tab => {
        const viewEl = document.getElementById(`view-${tab}`);
        const btnEl = document.getElementById(`tab-btn-${tab}`);

        if (tab === tabName) {
            if (viewEl) viewEl.classList.remove('hidden');
            if (btnEl) {
                btnEl.classList.add('text-binance-yellow', 'border-binance-yellow');
                btnEl.classList.remove('text-gray-400', 'border-transparent');
            }
        } else {
            if (viewEl) viewEl.classList.add('hidden');
            if (btnEl) {
                btnEl.classList.remove('text-binance-yellow', 'border-binance-yellow');
                btnEl.classList.add('text-gray-400', 'border-transparent');
            }
        }
    });
}

// Alternar entre Login e Cadastro no Modal
function switchAuthTab(type) {
    const loginForm = document.getElementById('form-login');
    const regForm = document.getElementById('form-register');
    const loginTab = document.getElementById('auth-tab-login');
    const regTab = document.getElementById('auth-tab-register');

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        loginTab.classList.add('text-binance-yellow', 'border-binance-yellow');
        loginTab.classList.remove('text-gray-400', 'border-transparent');
        regTab.classList.remove('text-binance-yellow', 'border-binance-yellow');
        regTab.classList.add('text-gray-400', 'border-transparent');
    } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        regTab.classList.add('text-binance-yellow', 'border-binance-yellow');
        regTab.classList.remove('text-gray-400', 'border-transparent');
        loginTab.classList.remove('text-binance-yellow', 'border-binance-yellow');
        loginTab.classList.add('text-gray-400', 'border-transparent');
    }
}

// Submissão dos Formulários
function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    alert('Login realizado com sucesso: ' + email);
    closeModal('auth-modal');
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    alert('Conta criada para: ' + name);
    closeModal('auth-modal');
}

function handleTransactionSubmit(e) {
    e.preventDefault();
    const type = document.getElementById('trans-type').value;
    const desc = document.getElementById('trans-desc').value;
    const value = document.getElementById('trans-value').value;

    alert(`Transação salva com sucesso!\nTipo: ${type.toUpperCase()}\nDescrição: ${desc}\nValor: R$ ${value}`);
    closeModal('transaction-modal');
}

// Inicialização dos Gráficos (Chart.js)
document.addEventListener('DOMContentLoaded', () => {
    // Gráfico de Linha (Faturamento)
    const ctxLine = document.getElementById('lineChart');
    if (ctxLine) {
        new Chart(ctxLine.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],
                datasets: [
                    {
                        label: 'Faturamento Bruto',
                        data: [320000, 340000, 390000, 370000, 420000, 410000, 450000, 440000, 470000, 460000, 485400],
                        borderColor: '#F0B90B',
                        backgroundColor: 'rgba(240, 185, 11, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Faturamento Líquido',
                        data: [210000, 220000, 260000, 240000, 280000, 270000, 295000, 290000, 310000, 300000, 312850],
                        borderColor: '#0ECB81',
                        backgroundColor: 'rgba(14, 203, 129, 0.1)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#848E9C' } }
                },
                scales: {
                    x: { grid: { color: '#2B313A' }, ticks: { color: '#848E9C' } },
                    y: { grid: { color: '#2B313A' }, ticks: { color: '#848E9C' } }
                }
            }
        });
    }

    // Gráfico Rosca (Distribuição)
    const ctxDoughnut = document.getElementById('doughnutChart');
    if (ctxDoughnut) {
        new Chart(ctxDoughnut.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Caixa BRL', 'Tesouraria BTC', 'FIIs', 'Stocks US'],
                datasets: [{
                    data: [45, 25, 15, 15],
                    backgroundColor: ['#F0B90B', '#3B82F6', '#A855F7', '#0ECB81'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#848E9C' } }
                }
            }
        });
    }
});
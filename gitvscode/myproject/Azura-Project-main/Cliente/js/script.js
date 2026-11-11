// 1. Selecionando os elementos no DOM
const authButtons = document.querySelectorAll('.btn-auth');
const modal = document.getElementById('auth-modal');
const closeBtn = document.getElementById('close-modal');
const tabSignin = document.getElementById('tab-signin');
const tabSignup = document.getElementById('tab-signup');
const formSignin = document.getElementById('form-signin');
const formSignup = document.getElementById('form-signup');

const openSidebar = document.getElementById('open-sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

const cardProdutos = document.querySelectorAll('.card-produto');
const link = document.getElementById('link-instagram');


// 2. Modal de login / cadastro (funciona no menu do topo e no menu lateral)
authButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (sidebar && sidebar.classList.contains('active')) toggleSidebar();
        modal.classList.remove('hidden');
    });
});

if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
}

if (tabSignin && tabSignup && formSignin && formSignup) {
    tabSignin.addEventListener('click', () => {
        tabSignin.classList.add('active');
        tabSignup.classList.remove('active');
        formSignin.classList.remove('hidden');
        formSignup.classList.add('hidden');
    });

    tabSignup.addEventListener('click', () => {
        tabSignup.classList.add('active');
        tabSignin.classList.remove('active');
        formSignup.classList.remove('hidden');
        formSignin.classList.add('hidden');
    });
}

// 3. Menu lateral
function toggleSidebar() {
    if (!sidebar || !sidebarOverlay) return;
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
}

if (openSidebar && closeSidebar && sidebarOverlay) {
    openSidebar.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
}

const btnTema = document.getElementById('btn-tema');
const btnConfig = document.getElementById('btn-config');

function mostrarIcone() {
    btnTema.textContent = document.documentElement.dataset.tema === 'escuro' ? '☀️' : '🌙';
    btnConfig.textContent = document.documentElement.dataset.config === 'true' ? '🔧' : '⚙️';
}

btnConfig.addEventListener('click', () => {
    const novo = document.documentElement.dataset.config === 'true' ? 'false' : 'true';
    document.documentElement.dataset.config = novo;
    localStorage.setItem('config', novo);

    
    mostrarIcone();
});

btnTema.addEventListener('click', () => {
    const novo = document.documentElement.dataset.tema === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.dataset.tema = novo;
    localStorage.setItem('tema', novo);

    
    mostrarIcone();
});

mostrarIcone();

if (formSignup) {
    formSignup.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita recarregar a página

        const nome = document.getElementById('signup-nome').value;
        const email = document.getElementById('signup-email').value;
        const senha = document.getElementById('signup-senha').value;

        try {
            const response = await fetch('http://localhost:3000/api/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, senha })
            });

            const resultado = await response.json();

            if (resultado.success) {
                alert('Conta criada com sucesso!');
                formSignup.reset();
                // Aqui você pode fechar o modal se quiser
            } else {
                alert('Erro: ' + resultado.message);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Não foi possível conectar ao servidor.');
        }
    });
}

if (formSignin) {
    formSignin.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita recarregar a página

        const email = document.getElementById('signin-email').value;
        const senha = document.getElementById('signin-senha').value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            const resultado = await response.json();

            if (resultado.success) {
                alert(`Bem-vindo de volta, ${resultado.usuario.nome}!`);
                
                // Salva os dados do usuário logado no navegador (opcional, para usar depois)
                localStorage.setItem('usuarioLogado', JSON.stringify(resultado.usuario));

                // Fecha o modal ou atualiza a interface
                const modal = document.getElementById('auth-modal');
                if (modal) modal.classList.add('hidden');

                formSignin.reset();
                // Opcional: recarregar a página ou mudar o botão de "Entrar" para o nome do usuário
                location.reload(); 
            } else {
                alert('Erro: ' + resultado.message);
            }
        } catch (error) {
            console.error('Erro na requisição de login:', error);
            alert('Não foi possível conectar ao servidor.');
        }
    });
}

// Função para verificar se o usuário já está logado ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const authLink = document.getElementById('auth-link');

    if (usuarioLogado && authLink) {
        // Pega as iniciais do nome para criar um avatar bonito (ex: "Pedro Takeo" -> "PT")
        const iniciais = usuarioLogado.nome
            .split(' ')
            .map(n => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();

        // Substitui o botão de "Entrar" pelo bloco de perfil do usuário
        authLink.outerHTML = `
            <div class="user-profile-menu" id="user-menu">
                <div class="user-avatar">${iniciais}</div>
                <span class="user-name">${usuarioLogado.nome.split(' ')[0]}</span>
                <button id="btn-logout" class="btn-logout" title="Sair da conta">🚪 Sair</button>
            </div>
        `;

        // Configura o botão de sair (logout)
        document.getElementById('btn-logout').addEventListener('click', () => {
            localStorage.removeItem('usuarioLogado');
            location.reload(); // Recarrega a página para voltar ao estado original
        });
    }
});
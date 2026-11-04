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



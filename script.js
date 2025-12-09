console.log("Sistema Carregado - Padrão Apple");

// 1. DADOS DOS PROJETOS (Mantive seus dados)
const projectsData = [
    {
        id: 0,
        title: "Skedou",
        icon: "assets/imagens/icons/skedouIcon.svg",
        desc: "Transforme a forma como você gerencia seus agendamentos. Com o Skedou, você economiza tempo: agenda serviços, acompanha seus ganhos e gerencia tudo em um só lugar.",
        challenge: "Organização das camadas de dados com SwiftData para separar lógica da View, garantindo escalabilidade.",
        tags: ["iOS", "Swift", "SwiftData", "SwiftUI", "CloudKit"],
        codeLink: "#",
        storeLink: "https://apps.apple.com/br/app/skedou/id6754465958",
        screenshots: [
            "assets/imagens/imageApps/skedou/skedou1.svg",
            "assets/imagens/imageApps/skedou/skedou2.svg",
            "assets/imagens/imageApps/skedou/skedou3.svg",
            "assets/imagens/imageApps/skedou/skedou4.svg"
        ]
    },
    {
        id: 1,
        title: "CyberREM",
        icon: "assets/imagens/icons/CyberREM.png",
        desc: "CyberREM é um jogo de corrida infinita ambientado em um mundo cyberpunk com estética de fliperama.",
        challenge: "Otimização de threads em UIKit e SpriteKit para evitar travamentos na UI durante o ciclo de vida do jogo.",
        tags: ["iOS", "SpriteKit", "UIKit", "GameDev"],
        codeLink: "#",
        storeLink: "https://apps.apple.com/br/app/cyberrem/id6745801484",
        screenshots: [
            "assets/imagens/imageApps/cyberrem/1.png",
            "assets/imagens/imageApps/cyberrem/2.png",
            "assets/imagens/imageApps/cyberrem/3.png",
            "assets/imagens/imageApps/cyberrem/4.png"
        ]
    },
    {
        id: 2,
        title: "DocDrop",
        icon: "assets/imagens/icons/DocDrop.png",
        desc: "Gerenciador de documentos inteligente focado em automação de escaneamento e organização.",
        challenge: "Implementação de VisionKit para detecção de bordas e integração suave com CoreML.",
        tags: ["CoreML", "VisionKit", "SwiftUI", "UIKit"],
        codeLink: "#",
        storeLink: "https://apps.apple.com/br/app/docdrop/id6737059424",
        screenshots: [
            "assets/imagens/imageApps/docdrop/1.jpg",
            "assets/imagens/imageApps/docdrop/2.png",
            "assets/imagens/imageApps/docdrop/3.png",
            "assets/imagens/imageApps/docdrop/4.png",
            "assets/imagens/imageApps/docdrop/5.png"
        ]
    },
    {
        id: 3,
        title: "Spacetime",
        icon: "assets/imagens/icons/SpaceTimeIcon.svg",
        desc: "ToDo list gamificado onde você viaja pelo espaço ao completar tarefas diárias.",
        challenge: "Gerenciamento de permissões FamilyControls e animações complexas com Rive.",
        tags: ["iOS", "Rive", "FamilyControls", "Gamification"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/spacetime/spacetime1.svg",
            "assets/imagens/imageApps/spacetime/spacetime2.png",
            "assets/imagens/imageApps/spacetime/spacetime3.png",
            "assets/imagens/imageApps/spacetime/spacetime4.png"
        ]
    },
    {
        id: 4,
        title: "Relatórios TRT",
        icon: "assets/imagens/icons/sigla.png",
        desc: "Dashboards estatísticos e automação de relatórios judiciários utilizando R e PowerBI.",
        challenge: "Consultas complexas em banco de dados SQL e visualização de dados acessível.",
        tags: ["R", "PowerBI", "SQL", "Data Science"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/TRT/1.png",
            "assets/imagens/imageApps/TRT/2.png"
        ]
    },
    {
        id: 5,
        title: "Saporo",
        icon: "assets/imagens/icons/SaporoIcon.svg",
        desc: "Aplicativo de culinária para iPad com foco em acessibilidade e controle por voz via Siri.",
        challenge: "Integração de AppIntents para comandos de voz naturais.",
        tags: ["iPadOS", "SiriKit", "AppIntents", "SwiftUI"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/saporo/saporo1.svg",
            "assets/imagens/imageApps/saporo/saporo2.svg"
        ]
    }
];

// 2. FUNÇÕES DE RENDERIZAÇÃO

// Cria a lista lateral de projetos (Sidebar)
function createSidebarMenu() {
    const menuContainer = document.getElementById('bento-menu');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';

    projectsData.forEach((project, index) => {
        const btn = document.createElement('button');
        btn.className = `sidebar-item ${index === 0 ? 'active' : ''}`;
        btn.onclick = () => updateProjectView(index);

        const img = document.createElement('img');
        img.src = project.icon;
        img.onerror = function() { this.src = 'https://via.placeholder.com/50'; };
        
        const span = document.createElement('span');
        span.innerText = project.title;

        btn.appendChild(img);
        btn.appendChild(span);
        menuContainer.appendChild(btn);
    });
}

// Atualiza a View Principal
function updateProjectView(index) {
    const project = projectsData[index];
    
    // Atualiza Sidebar (classe active)
    document.querySelectorAll('.sidebar-item').forEach((btn, idx) => {
        if(idx === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Elementos do DOM
    document.getElementById('p-icon').src = project.icon;
    document.getElementById('p-title').innerText = project.title;
    document.getElementById('p-desc').innerText = project.desc;
    document.getElementById('p-challenge').innerText = project.challenge;

    // Tags
    const tagContainer = document.getElementById('p-tags');
    tagContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'tag-pill';
        t.innerText = tag;
        tagContainer.appendChild(t);
    });

    // Botões
    const btnStore = document.getElementById('btn-link');
    const btnCode = document.getElementById('btn-code');

    if(project.storeLink && project.storeLink !== '#') {
        btnStore.style.display = 'flex';
        btnStore.href = project.storeLink;
    } else {
        btnStore.style.display = 'none';
    }

    if(project.codeLink && project.codeLink !== '#') {
        btnCode.style.display = 'flex';
        btnCode.href = project.codeLink;
    } else {
        btnCode.style.display = 'none';
    }

    // Screenshots
    const gallery = document.getElementById('gallery-container');
    gallery.innerHTML = '';
    
    if(project.screenshots && project.screenshots.length > 0) {
        project.screenshots.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'screen-img';
            img.onclick = () => openModal(src); // Adiciona zoom
            gallery.appendChild(img);
        });
    }
}

// Renderiza Destaques (Featured)
function renderFeatured() {
    const container = document.getElementById('featured-container');
    if(!container) return;

    // Pega os 3 primeiros projetos como destaque
    const featured = [projectsData[0], projectsData[1], projectsData[2]]; 

    container.innerHTML = '';

    featured.forEach(proj => {
        if(!proj) return;
        
        const coverImg = (proj.screenshots && proj.screenshots[0]) ? proj.screenshots[0] : proj.icon;
        
        const html = `
            <div class="featured-card">
                <div class="feat-header">
                    <img src="${proj.icon}" class="feat-icon">
                    <div class="feat-title-group">
                        <h3>${proj.title}</h3>
                        <div class="feat-tags">
                            ${proj.tags.slice(0,2).map(t => `<span class="tag-mini">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="feat-image-box">
                    <img src="${coverImg}" onclick="openModal('${coverImg}')">
                </div>
                <p class="feat-desc">${proj.desc.substring(0, 80)}...</p>
                <div class="feat-footer">
                    <button class="btn-feat" onclick="goToProject(${proj.id})">Ver Detalhes</button>
                    ${proj.storeLink !== '#' ? `<a href="${proj.storeLink}" target="_blank" class="btn-feat-link">Baixar</a>` : ''}
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function goToProject(id) {
    document.getElementById('projetos').scrollIntoView({behavior: 'smooth'});
    // Encontra o index real no array principal
    const index = projectsData.findIndex(p => p.id === id);
    if(index >= 0) updateProjectView(index);
}

// 3. ZOOM (MODAL)
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-modal');

function openModal(src) {
    modal.style.display = 'flex';
    modalImg.src = src;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.onclick = closeModal;
modal.onclick = (e) => { if(e.target === modal) closeModal(); }

// 4. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    createSidebarMenu();
    renderFeatured();
    updateProjectView(0); // Inicia com o primeiro projeto
});

/* ========================================== */
/* 5. FUNDO INTERATIVO (MOUSE FOLLOWER)       */
/* ========================================== */

const blob = document.getElementById("blob");

if (blob) {
    window.onpointermove = event => { 
        const { clientX, clientY } = event;
        
        // Animação suave usando a API nativa do browser
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 300, fill: "forwards" });
    }
}
document.addEventListener("DOMContentLoaded", function () { let progress = 0; 
    // Seleção de elementos 
    const progressBar = document.getElementById("progress-bar"); const progressText = document.getElementById("progress-text"); const loadingScreen = document.querySelector(".loading-screen"); const mainContent = document.getElementById("main-content"); const icons = document.querySelectorAll(".app-icon"); 
    // Função para animar os ícones do app 
    function animateIcons() { icons.forEach((icon, index) => { setTimeout(() => { icon.style.opacity = 1; icon.style.transform = "scale(1)"; }, index * 1000); }); } 
    // Função de carregamento da barra de progresso 
    const loadingInterval = setInterval(() => { progress += 1; 
        // Incrementa 1% no progresso 
        progressBar.style.width = progress + "%"; 
        // Atualiza a largura da barra de progresso 
        progressText.textContent = progress + "%"; 
        // Atualiza o texto de progresso 
        // Quando o progresso atinge 20%, anima os ícones 
        if (progress === 20) { animateIcons(); } 
        // Quando o progresso atinge 100%, finaliza o carregamento 
        if (progress >= 100) { clearInterval(loadingInterval); 
            // Adiciona transição de opacidade para sair da tela de carregamento 
            loadingScreen.style.transition = "opacity 0.5s ease"; loadingScreen.style.opacity = "0"; setTimeout(() => { loadingScreen.style.display = "none"; 
            // Esconde a tela de carregamento 
            mainContent.style.display = "block"; 
            // Exibe o conteúdo principal 
            mainContent.style.opacity = "1"; 
            // Aplica a transição de opacidade 
        }, 500); 
        // Aguarda 500ms para a transição de opacidade acontecer 
    
    } }, 50); 
    // Atualiza o progresso a cada 50ms 
});

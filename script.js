document.addEventListener("DOMContentLoaded", function () { let progress = 0; const progressBar = document.getElementById("progress-bar"); const progressText = document.getElementById("progress-text"); const loadingScreen = document.getElementById("loading-screen"); const mainContent = document.getElementById("main-content"); 
// Função de carregamento da barra de progresso 
const loadingInterval = setInterval(() => { progress += 1; 
    // Incrementa 1% no progresso 
    progressBar.style.width = progress + "%"; 
    // Atualiza a largura da barra de progresso 
    progressText.textContent = progress + "%"; 
    // Atualiza a porcentagem na tela 
    // Quando o progresso atinge 100%, finaliza e mostra o conteúdo 
    if (progress >= 100) { clearInterval(loadingInterval); 
        // Para o intervalo de carregamento 
        setTimeout(() => { loadingScreen.style.display = "none"; 
        // Remove a tela de carregamento 
        mainContent.style.display = "block"; 
        // Exibe o conteúdo principal 
    }, 500); 
    // Meio segundo para uma transição suave 
} }, 100); 
// Atualiza a cada 100ms 
});


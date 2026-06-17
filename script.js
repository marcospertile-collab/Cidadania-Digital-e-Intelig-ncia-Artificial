document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ALTERNADOR DINÂMICO DE MODO ESCURO ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggleBtn.textContent = "🌓 Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });

    // --- 2. VALIDADOR DINÂMICO DO QUIZ COM MEDALHAS ---
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o recarregamento da tela

        const q1 = document.querySelector('input[name="q1"]:checked').value;
        const q2 = document.querySelector('input[name="q2"]:checked').value;
        
        let acertos = 0;
        if (q1 === "correto") acertos++;
        if (q2 === "correto") acertos++;

        quizResult.classList.remove("hidden", "sucesso", "erro");

        if (acertos === 2) {
            quizResult.classList.add("sucesso");
            quizResult.innerHTML = `🥇 Parabéns! Você acertou ${acertos}/2 e conquistou a Medalha de Cidadão Vigilante!`;
        } else {
            quizResult.classList.add("erro");
            quizResult.innerHTML = `🧐 Você acertou ${acertos}/2. Quase lá! Estude os cards acima e tente novamente para ganhar sua insígnia.`;
        }
    });

    // --- 3. FEEDBACK DO FORMULÁRIO DE DENÚNCIA ---
    const reportForm = document.getElementById("report-form");
    reportForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("🚨 Alerta enviado com sucesso! Nosso algoritmo comunitário registrou seu relato para análise.");
        reportForm.reset();
    });
});

// --- 4. MECÂNICA EXCLUSIVA: SIMULADOR DETETIVE IA ---
function verificarCaso(escolhaUsuario) {
    const feedback = document.getElementById("simulador-feedback");
    feedback.classList.remove("hidden", "sucesso", "erro");

    if (escolhaUsuario === 'fake') {
        feedback.classList.add("sucesso");
        feedback.innerHTML = "🎯 Resposta Correta! Voz trêmula, fundo borrado e promessas de pânico financeiro sem fontes secundárias oficiais são assinaturas clássicas de uma Deepfake maliciosa feita para gerar caos social.";
    } else {
        feedback.classList.add("erro");
        feedback.innerHTML = "❌ Atenção! Você caiu no golpe da IA. Esse conteúdo possui fortes indícios de manipulação digital e dados falsos. Sempre cheque os sinais visuais antes de confiar.";
    }
}

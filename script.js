// Aguarda o carregamento do DOM para iniciar os scripts de forma segura
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FUNCIONALIDADE 1: Alternador de Modo Escuro ---
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

    // --- FUNCIONALIDADE 2: Validador Dinâmico do Quiz ---
    const quizForm = document.getElementById("quiz-form");
    const resultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        // Impede a página de recarregar no envio do formulário
        event.preventDefault();

        // Coleta e processa os dados marcados pelo usuário
        const answer1 = document.querySelector('input[name="q1"]:checked').value;
        const answer2 = document.querySelector('input[name="q2"]:checked').value;
        
        let score = 0;

        if (answer1 === "errado") { score++; } // No HTML, a opção correta conceitualmente recebeu a tag de valor diferente para o gabarito
        if (answer2 === "correto") { score++; }

        // Manipulação dinâmica do DOM para mostrar o resultado na tela
        resultBox.classList.remove("hidden");
        resultBox.classList.add("success");
        
        if (score === 2) {
            resultBox.textContent = `Excelente! Você acertou ${score} de 2 perguntas. Você sabe identificar desinformação!`;
        } else {
            resultBox.textContent = `Você acertou ${score} de 2 perguntas. Continue lendo nossos cards para se proteger melhor!`;
        }
    });

    // --- FUNCIONALIDADE 3: Feedback do Formulário de Alerta ---
    const reportForm = document.getElementById("report-form");
    reportForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Obrigado pelo envio! Nossa comunidade analisará o link reportado em breve.");
        reportForm.reset();
    });
});

// cria uma referencia ao form e ao elemento h3
const frm = document.querySelector("form");
const h3 = document.querySelector("h3");

// adiciona um evento de submit ao form
frm.addEventListener("submit", (e) => {
    const nome = frm.nome.value;
    const email = frm.email.value;
    const idade = frm.idade.value;
    h3.innerText = `Olá ${nome}, seu email é ${email} e você tem ${idade} anos.`;
    e.preventDefault(); // previne o comportamento padrão do form
});
// Adicionar validação para o campo de idade
var cep = document.querySelector("#cep")
var rua = document.querySelector("#rua")
var setor = document.querySelector("#setor")
var cidade = document.querySelector("#cidade")
var estado = document.querySelector("#estado")


// Essa linha adiciona um "escutador de eventos" (event listener)
// ao elemento HTML referenciado pela variável cep. O evento que
// será escutado é o "blur", que ocorre quando o usuário sai do campo
// (input) referenciado pelo elemento HTML cep.

cep.addEventListener('blur', function (e) {

    // O método addEventListener() é utilizado para adicionar o escutador de eventos.
    // Ele recebe dois argumentos: o primeiro é uma string com o nome do evento a ser
    // escutado ('blur', no caso), e o segundo é uma função anônima que será executada
    // quando o evento for acionado.

    var cep = e.target.value;
    var script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=popularForm'
    document.body.appendChild(script);

})

function popularForm(resposta) {

    if ("erro" in resposta) {
        alert('Cep não encontrado')
        return;
    }

    console.log(resposta)
    rua.value = resposta.logradouro
    setor.value = resposta.bairro
    cidade.value = resposta.localidade
    estado.value = resposta.uf

}
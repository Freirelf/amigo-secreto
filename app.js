
let amigos = [];
let sorteados = [];
let sorteiosCont = 0;
let limiteAmigos = 10;

function adicionarAmigo(){
    let inserirNome = document.querySelector('input').value;
    console.log(amigos)

    if(!inserirNome || !isNaN(inserirNome)){
        alert('Por favor, insira um nome válido.');
    } else if (amigos.some(nome => nome.toLowerCase() === inserirNome.toLowerCase())){
        alert('Este nome já foi adicionado à lista.');
    } else if(amigos.length >= limiteAmigos){
        alert(`O limite de ${limiteAmigos} amigos foi atingido. Não é possível adicionar mais amigos.`);
    } else{
        amigos.push(inserirNome);
        exibirListaAmigos();
    }
    limparCampo();
}

function exibirListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i].toUpperCase();
        listaAmigos.appendChild(li);
    }

}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Não há amigos para sortear.');
        return;
    } 
    if(sorteiosCont < 3){
        let amigoSorteado;
        do {
            amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        } while (sorteados.includes(amigoSorteado));

        sorteados.push(amigoSorteado);
        console.log(sorteados)
        document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${amigoSorteado.toUpperCase()}<br>Parabéns! 🏆`;
        document.getElementById('listaAmigos').style.display = 'none';
        sorteiosCont++;

        if(sorteiosCont === 3){
            setTimeout(() => {
                alert('Já sorteamos 3 amigos! Sorteio encerrado.');
                document.getElementById('resultado').innerHTML = ''; 
                encerrarSorteio(); 
            }, 2000);
        }
        
    } 
    
}

function encerrarSorteio() {
    amigos = [];
    sorteados = [];
    sorteiosCont = 0;
    document.getElementById('listaAmigos').style.display = 'block';
    exibirListaAmigos();

}

function limparCampo(){
    inserirNome = document.querySelector('input');
    inserirNome.value = '';

}

document.querySelector('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  
        adicionarAmigo();         
    }
});
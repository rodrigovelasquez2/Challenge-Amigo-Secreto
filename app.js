// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let list_amigos = [];

function agregarAmigo() {
    amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Debe ingresar un nombre');
        return;
    } else if (list_amigos.includes(amigo)) {
        alert('El amigo ya fue ingresado');
    } else {
        list_amigos.push(amigo);
        document.getElementById('amigo').value = '';
        console.log(list_amigos);
    }

    let listaHTML = document.querySelector('ul', list_amigos);
    listaHTML.innerHTML = '';
    for (let i = 0; i < list_amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = list_amigos[i];
        listaHTML.appendChild(li);
    }

}

function sortearAmigo() {
    //Se evalia si en la lista no esta vacia, al validar que se necesitan dos amigos para sortear
    if (list_amigos.length < 2) {
        alert('Debe ingresar al menos 2 amigos');
        return;
    }

    indice = Math.floor(Math.random() * list_amigos.length);
    amigoSorteado = list_amigos[indice];
    console.log(amigoSorteado);

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `El amigo sorteado es: ${amigoSorteado} 🎉 `;



}
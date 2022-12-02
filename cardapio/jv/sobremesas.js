 //initialising a variable name data
 var data = 0;
  
 //printing default value of data that is 0 in h2 tag
 document.getElementById("counting").innerText = data;

 //creation of increment function
 function increment() {
     data = data + 1;
     document.getElementById("counting").innerText = data;
 }
 //creation of decrement function
 function decrement() {
     data = data - 1;
     if(data < 0){data = 0}
     document.getElementById("counting").innerText = data;
 }

  const corpoSite = document.querySelector('.site-content');
  document.body.onload = PegarDados;

  function PegarDados() {
    const url = 'http://10.0.0.107:1313/listar-sobremesas'

    fetch(url, {
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        method: 'GET'
    }).then((resultado) => {
        return resultado.json();
    })
    .then((dados) => {
        corpoSite.innerHTML = ''
        for (var num = 0; num < dados.length; num++) {
            const card = document.querySelector('.mainContainer');
            const criaCard = document.createElement(card);

            criaCard.innerHTML = `

            <div class="container" id="container">

            <div class="standardImg">
               <img src="img/sorvete.png" width="75px"> 
            </div>
            
            <div class="textosContainer" id="comida">
                <h6 id="nome">${dados[num].nomeProduto}</h6>
                    <p id="desc">${dados[num].descricao}</p>
            </div>

            <div class="mainContador zindex" id="contador">
                <div class="contador ">            
                    <button  class = "counter" onclick="increment()">+</button>  
                    <h3 id="counting">0</h3>
                    <button class = "counter" onclick="decrement()">-</button>         
                </div>
            </div>

        </div>`                 
            corpoSite.appendChild(criaCard);

            console.log(dados[num]);
        }
    });
}

//contador
function contador(dados) {
    const url = 'http://10.0.0.107:1313/listar-sobremesas'

console.log(dados)

    var todosProdutos = document.querySelectorAll('.comida');
    var todosContador = document.querySelectorAll('.contador');
    var idProduto1 = todosDados[dados].idProduto;

   var comida = todosProdutos[dados].textContent;
   var contador = todosContador[dados].textContent;

   console.log(produto)
    var meusDados = {
        comida,
        contador,
        idProduto1
    }
    console.log(meusDados);
    fetch(url, {
        method: 'Post',
        body: JSON.stringify(meusDados),
        headers: {
            "Content-type": "application/json"

        },
    }).then((resultado) => {
        return resultado.json();
    })

}
//  interface poderá ser feita no css



//carregar arquivo .csv

const fs = require('fs');
const csv = require('csvtojson');
const { Parser } = require('json2csv');


(async ()=>{
  const pedidos = await csv().fromFile('Vendas-Dez22.csv');

  console.log(pedidos);

  pedidos[0].CódigoVenda = document.getElementById('pedido').innerHTML = pedidos;

  const pedidosInCsv = new Parser({ fields: ['CódigoVenda','Quantidade','Produto','Valor Unitário','Valor Final'] }).parse(pedidos);
  fs.writeFileSync('Vendas-Dez22.csv', pedidosInCsv);

})();  
//comunicar com firebase
(function(){
            // Your web app's Firebase configuration
  var firebaseConfig = {
  apiKey: "AIzaSyDtp4-yELITcmM-VuhyiSaRrE8rGzVm700",
  authDomain: "meuprojeto-b71bd.firebaseapp.com",
  projectId: "meuprojeto-b71bd",
  storageBucket: "meuprojeto-b71bd.appspot.com",
  messagingSenderId: "684658170195",
  appId: "1:684658170195:web:06f3edf0f059faa0c6a9a6"
            };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
           
})


    
// salvar no arquivo .csv
  
// filtro de lista por item / status 
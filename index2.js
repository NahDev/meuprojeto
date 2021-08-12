function   cadPedido(Pedido, Status, comentario){
    var tb = document.getElementById('tbProdutos'); 
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellProduto = linha.insertCell(0);
    var cellStatus = linha.insertCell(1);
    var cellComentario = linha.insertCell(2);

    cellProduto.innerHTML = qtdLinhas;
    cellStatus.innerHTML = Status;
    cellComentario.innerHTML = comentario; 


}

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
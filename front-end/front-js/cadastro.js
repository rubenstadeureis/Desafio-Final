function cad(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var senha2 = document.getElementById('senha2').value;

    if(email == email && senha == senha2){
      alert('Sucesso');
        location.href = "/front-end/pagelist.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}


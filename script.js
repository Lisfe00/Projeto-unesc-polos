function search(){
    var input,filtro,menu,menuitens,h3;

    input = document.getElementById("search");

    filtro = input.value.toUppercase();

    menu = document.getElementsByClassName("container");

    menuitens = menu.getElementsByTagName("div");

    for(var i=0;i<menuitens.length;i++){

        h3 = menuitens[i].getElementsByTagName("h3")[0];
        
        if(h3.innerHTML.toUppercase().indexOf(filtro)>-1){
            menuitens[i].style.display="";
        }else{
            menuitens[i].style.display="none";
        }
    }
}

$('#pesquisar').keyup(function(){
    var value = $(this).val().toLowerCase();
    $('.border div').each(function(){
        var search = $(this).text().toLowerCase();
        if(pesquisar.indexOf(value)>-1){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
});

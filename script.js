function corrigir(){
    let acertos = 0;

    let resumo = document.querySelector("#res");
    resumo.classList.remove('hide');
    resumo.classList.add('show');

    
    let nome = document.querySelector("#noome").value;
    document.querySelector("#nome").innerHTML = "Nome: "+nome;

    Questão 1
    let opcao = document.querySelector("#Q01").value;
    if(opcao == "informatica"){
        acertos++
    }

    
    let texto = document.querySelector("#Q02").value;
    if(texto == "Administração, Informática, Enfermagem"){
        acertos++
    }

    //Qustão 3
    let checkbox_octal = document.querySelector("#check1");
    let checkbox_bi = document.querySelector("#check2");
    let checkbox_deci = document.querySelector("#check3");
    let checkbox_hexa = document.querySelector("#check4");

    if(checkbox_bi.checked){
        if(checkbox_hexa.checked){
            acertos++
        }
    }if(checkbox_octal.checked){
        if(checkbox_deci.checked){
            acertos--
        }
    }

    
    let radio2 = document.querySelector("#con");

    if(radio2.checked){
        acertos++;
    }

    
    let certa = document.querySelector("#ver");
    let errada = document.querySelector("#fal");

    if(certa.checked){
        acertos++;
    }






    document.querySelector("#corretas").innerHTML = acertos+" de 5";

    let percentual = (acertos*100)/5

    document.querySelector("#percentual").innerHTML = "Percentual: "+percentual+"%";
}
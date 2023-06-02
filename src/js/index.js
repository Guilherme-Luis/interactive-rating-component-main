const ChangeElement = document.querySelectorAll(".Point");
const SendRequest = document.getElementById("Submit");
const MainBody = document.getElementById("MainBody");
var selecao = null;

ChangeElement.forEach(function(element) {
    element.addEventListener("click", function(){
        ChangeElement.forEach(function(element){
            element.classList.remove('ChangeColor');
        });
        element.classList.add('ChangeColor');
    });
    for(var i = 0; i < ChangeElement.length; i++){
        ChangeElement[i].addEventListener("click", function() {
            selecao = this.textContent;
        });
    }
});

SendRequest.addEventListener("click", function() {
    while(MainBody.firstChild){
        MainBody.firstChild.remove();
    }
    var imagem = document.createElement("img");
    imagem.src = "src/image/illustration-thank-you.svg"
    imagem.className = "ResultImage";
    MainBody.appendChild(imagem);

    var Result = document.createElement("p");
    Result.textContent = `You selected ${selecao} out of 5`
    Result.className = "ResultContent";
    MainBody.appendChild(Result);

    var Titulo = document.createElement("h1");
    Titulo.textContent = "Thank you!";
    Titulo.className = "Feedback"
    MainBody.appendChild(Titulo);

    var FinalDescription = document.createElement("p");
    FinalDescription.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    FinalDescription.className = "FinalDescription"
    MainBody.appendChild(FinalDescription);
});








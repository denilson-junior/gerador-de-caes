const dogsImg = document.querySelector(".dogs-img");
const doggos = document.querySelector(".doggos");
const loadingDog = document.querySelector(".dog-load");
const selecionarRacas = document.getElementById("selecionar-raca");

loadingDog.style.display = "none";

const addNewDoggo = () => {
    loadingDog.style.display = "block";
    DOG_URL = `https://dog.ceo/api/breed/${selecionarRacas.value}/images/random`;
    fetch(DOG_URL)
        .then((response) => {
            loadingDog.style.display = "none";
            const processingPromise = response.json();
            return processingPromise;
        })
        .then((processedResponse) => {
            dogsImg.src = processedResponse.message;
            dogsImg.alt = "Cute doggo";
        });
}

const obterRacaCachorros = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then((processedResponse) => {
            Object.keys(processedResponse.message).forEach(cao => {
                const criarTagOption = document.createElement("option");
                criarTagOption.textContent = cao;
                criarTagOption.value = cao;
                selecionarRacas.appendChild(criarTagOption);
            }) 
        })
}

obterRacaCachorros();

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
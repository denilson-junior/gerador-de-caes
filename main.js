let DOG_URL = `https://dog.ceo/api/breeds/image/random`;

const ALL_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const dogsImg = document.querySelector(".dogs-img");

const doggos = document.querySelector(".doggos");

const loadingDog = document.querySelector(".dog-load");

const selecionarRacas = document.getElementById("selecionar-raca");

let racas = [];
let criarTagOption;

loadingDog.style.display = "none";

const addNewDoggo = () => {
    loadingDog.style.display = "block";
    opcoesRaca = selecionarRacas.options;
    indexRaca = selecionarRacas.selectedIndex;
    DOG_URL = `https://dog.ceo/api/breed/${opcoesRaca[indexRaca].text}/images/random`;
    const promise = fetch(DOG_URL);
    promise
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
    const promise = fetch(ALL_BREEDS_URL);
    promise
        .then((response) => {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then((processedResponse) => {
            racas = Object.keys(processedResponse.message);
            for (let i = 0; i < racas.length; i++) {
                criarTagOption = document.createElement("option");
                criarTagOption.textContent = racas[i];
                criarTagOption.value = racas[i];
                selecionarRacas.appendChild(criarTagOption);
            }
        })
}

obterRacaCachorros();

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
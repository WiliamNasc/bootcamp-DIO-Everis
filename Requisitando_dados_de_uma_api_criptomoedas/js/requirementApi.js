// API key
const apiKey = {
    key: '4bd21d65-cabb-419d-84f7-4954121eb3c3'
};
// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
        if (!response.ok)
            throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        let texto = '';
        //GET 10 firt coins and symbols
        for (let i = 0; i < 10; i++) {
            texto +=
                ` 
            <div class="card">
                <img class="card-img-top" src="./img/coin.png" alt="Imagem de capa do card">
                <div class="card-body">
                    <h4 class='card-title'>Rank#${api.data[i].rank}</h4>
                    <h5 class="card-tittle">Coin: ${api.data[i].name}</h5>
                    <h6 class="card-text">Symbol: ${api.data[i].symbol}</h6>
                    <p class="card-text">First historical data: ${api.data[i].first_historical_data}</p>
                    <p class="card-text">Last historical data: ${api.data[i].last_historical_data}</p>
                </div>
            </div>
                `;
            document.getElementById("coins").innerHTML = texto;
        }
    })
    .catch((error) => {
        console.log(error.message);
    });
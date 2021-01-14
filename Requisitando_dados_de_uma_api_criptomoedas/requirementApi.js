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
            <div class="media">
            <div class="media-body">
                    <img src="coin.png" class="align-self-center mr-3" alt="coin" width="100" height="60">
                    <h5 class="mt-2">Coin: ${api.data[i].name}</h5>
                    <p>Symbol: ${api.data[i].symbol}</p>
                    <p>First historical data: ${api.data[i].first_historical_data}</p>
                </div>
            </div>
                `;
            document.getElementById("coins").innerHTML = texto;
        }
        console.log(api);
    })
    .catch((error) => {
        console.log(error.message);
    });
const Quandl1_api_url = 'https://www.quandl.com/api/v3/datasets/EOD/DIS?api_key=-ZLHxSyKy1s2urPTnG44'



async function getQuandl1_api_url() {
    const response = await fetch(Quandl1_api_url);
    const data = await response.json();
    console.log(data);

    $("#entry").append("<p>" + data.dataset.column_names[0] + ": " + data.dataset.data[0][0] + "</p>");
    $("#entry").append(" ");
    $("#entry").append(" ");
    $("#entry").append("<p>" + data.dataset.column_names[11] + ": " + data.dataset.data[0][11] + "</p>");
    $("#entry").append(" ");
    $("#entry").append("<p>" + data.dataset.column_names[12] + ": " + data.dataset.data[0][12] + "</p>");
    
}

getQuandl1_api_url();

const Quandl2_api_url = 'https://www.quandl.com/api/v3/datasets/EOD/MSFT?api_key=-ZLHxSyKy1s2urPTnG44'

async function getQuandl2_api_url() {
    const response = await fetch(Quandl2_api_url);
    const data = await response.json();

    $("#entry1").append("<p>" + data.dataset.column_names[0] + ": " + data.dataset.data[0][0] + "</p>");
    $("#entry1").append(" ");
    $("#entry1").append(" ");
    $("#entry1").append("<p>" + data.dataset.column_names[11] + ": " + data.dataset.data[0][11] + "</p>");
    $("#entry1").append(" ");
    $("#entry1").append("<p>" + data.dataset.column_names[12] + ": " + data.dataset.data[0][12] + "</p>");
}
getQuandl2_api_url();

const Quandl3_api_url = 'https://www.quandl.com/api/v3/datasets/EOD/BA?api_key=-ZLHxSyKy1s2urPTnG44'

async function getQuandl3_api_url() {
    const response = await fetch(Quandl3_api_url);
    const data = await response.json();

    $("#entry2").append("<p>" + data.dataset.column_names[0] + ": " + data.dataset.data[0][0] + "</p>");
    $("#entry2").append(" ");
    $("#entry2").append(" ");
    $("#entry2").append("<p>" + data.dataset.column_names[11] + ": " + data.dataset.data[0][11] + "</p>");
    $("#entry2").append(" ");
    $("#entry2").append("<p>" + data.dataset.column_names[12] + ": " + data.dataset.data[0][12] + "</p>");
}
getQuandl3_api_url();

const Quandl4_api_url = 'https://www.quandl.com/api/v3/datasets/EOD/NKE?api_key=-ZLHxSyKy1s2urPTnG44'

async function getQuandl4_api_url() {
    const response = await fetch(Quandl4_api_url);
    const data = await response.json();

    $("#entry3").append("<p>" + data.dataset.column_names[0] + ": " + data.dataset.data[0][0] + "</p>");
    $("#entry3").append(" ");
    $("#entry3").append(" ");
    $("#entry3").append("<p>" + data.dataset.column_names[11] + ": " + data.dataset.data[0][11] + "</p>");
    $("#entry3").append(" ");
    $("#entry3").append("<p>" + data.dataset.column_names[12] + ": " + data.dataset.data[0][12] + "</p>");
}
getQuandl4_api_url();

const Quandl5_api_url = 'https://www.quandl.com/api/v3/datasets/EOD/MCD?api_key=-ZLHxSyKy1s2urPTnG44'


async function getQuandl5_api_url() {
    const response = await fetch(Quandl5_api_url);
    const data = await response.json();

    $("#entry4").append("<p>" + data.dataset.column_names[0] + ": " + data.dataset.data[0][0] + "</p>");
    $("#entry4").append(" ");
    $("#entry4").append(" ");
    $("#entry4").append("<p>" + data.dataset.column_names[11] + ": " + data.dataset.data[0][11] + "</p>");
    $("#entry4").append(" ");
    $("#entry4").append("<p>" + data.dataset.column_names[12] + ": " + data.dataset.data[0][12] + "</p>");
}
getQuandl5_api_url();


const crypto_api_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,EUR&api_key={aa0888efdbbb911e79e296c6f674d5fc440217860b85af736b9df6853bab8746}'

async function getcrypto_api_url() {
    const response = await fetch(crypto_api_url);
    const data = await response.json();
    document.getElementById('prc').textContent=data.BTC.USD;
    
}
getcrypto_api_url();

const crypto1_api_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD,EUR&api_key={aa0888efdbbb911e79e296c6f674d5fc440217860b85af736b9df6853bab8746}'


async function getcrypto1_api_url() {
    const response = await fetch(crypto1_api_url);
    const data = await response.json();
    document.getElementById('eth').textContent=data.ETH.USD;

}
getcrypto1_api_url();

const crypt2_api_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=AVAX&tsyms=USD,EUR&api_key={aa0888efdbbb911e79e296c6f674d5fc440217860b85af736b9df6853bab8746}'

async function getcrypt2_api_url() {
    const response = await fetch(crypt2_api_url);
    const data = await response.json();
    document.getElementById('avx').textContent=data.AVAX.USD;

}
getcrypt2_api_url();

const crypt3_api_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=LINK&tsyms=USD,EUR&api_key={aa0888efdbbb911e79e296c6f674d5fc440217860b85af736b9df6853bab8746}'

async function getcrypt3_api_url() {
    const response = await fetch(crypt3_api_url);
    const data = await response.json();
    document.getElementById('lnk').textContent=data.LINK.USD;
}
getcrypt3_api_url();

const crypt4_api_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BSV&tsyms=USD,EUR&api_key={aa0888efdbbb911e79e296c6f674d5fc440217860b85af736b9df6853bab8746}'

async function getcrypt4_api_url() {
    const response = await fetch(crypt4_api_url);
    const data = await response.json();
    document.getElementById('bsv').textContent=data.BSV.USD;
}
getcrypt4_api_url();




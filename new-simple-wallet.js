const ethers = require('ethers');

function createRandomWallet() {
    return new ethers.Wallet.createRandom();
}

console.log(createRandomWallet());



const ethers = require('ethers');

function recoverWalletFromPrivateKey(privateKey) {
    return new ethers.Wallet(privateKey);
}

async function saveWalletToJSON(wallet, password) {
    return wallet.encrypt(password);
}

let privateKey = '0x495d5c34c912291807c25d5e8300d20b749f6be44a178d5c50f167d495f3315a';

let wallet = recoverWalletFromPrivateKey(privateKey);
let password = 'p@$$w0rd~3';

(async () => {
    const encryptWallet = await saveWalletToJSON(wallet, password);
    console.log(encryptWallet);
})();


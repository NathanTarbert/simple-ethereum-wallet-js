const ethers = require('ethers');

async function signTransaction(wallet, toAddress, value) {
    let transaction = {
        nonce: 0,
        gasLimit: 21000,
        gasPrice: ethers.BigNumber.from('2000000000'),
        to: toAddress,
        value: ethers.utils.parseEther(value),
        data: '0x',
    };
    return wallet.signTransaction(transaction);
} 

function recoverWalletFromPrivateKey(privateKey) {
    return new ethers.Wallet(privateKey);
}

const privateKey = '0x495d5c34c912291807c25d5e8300d20b749f6be44a178d5c50f167d495f3315a';
const wallet = recoverWalletFromPrivateKey(privateKey);
const toAddress = '0x7725f560672A512e0d6aDFE7a761F0DbD8336aA7';
const etherValue = '10';

(async () => {
    const signedTx = await signTransaction(wallet, toAddress, etherValue);
    console.log(`Signed Transaction: ${signedTx}`);
})();
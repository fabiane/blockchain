/**
 * test the functions seting the parameters
 */

const BlockChain = require('./blockchain.js');
const bitcoin = new BlockChain();


const previusBlockHash = 'NDSA02010X00';
const currentBlockData = [
    {
        amount: 10,
        sender: 'NDAOO0X101010',
        recipient: '00X90SEND000101'
    },
    {
        amount: 40,
        sender: 'CINDYGOGOGOGO',
        recipient: '00NX1010101202'
    },
    {
        amount: 1000,
        sender: 'SENDGOGOGOGO',
        recipient: '0XX0101YESN90'
    }
];

/**
 * @desc mine work until find the nonce number 0000 on init of the hash
 
console.log(bitcoin.proofOfWork(previusBlockHash,currentBlockData));  */

/**
 * @desc show the current block and your informations*/

console.log(bitcoin);


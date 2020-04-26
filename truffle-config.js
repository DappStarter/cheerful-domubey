require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain mistake hope prison off version'; 
let testAccounts = [
"0xdfbeb003cd2414b84c11605ff4e99941d6e821214b6f05ac2cc3b0e5ce2a5ae0",
"0xd8dc63b266e15b625d83263a61defe45f133395249e527ddfa6b7bc0db01affa",
"0xd4fe5e2db423ec5d94c87cc9fd248580052d8991bc61e8ba515b3629b7382baf",
"0x3760fbeaddbb6487f771f8a7a9082fe97c06616efa6bd24b86dafc204018746d",
"0x03d3988864baa47bc40976fb4a48660807e1f33c047feeddbc88e594f3848351",
"0xc4622eb9759fabbfac9a4b09325d36dd9cdb60d5ccaa6c8b4df73d114959732d",
"0xc063656883bff3a4fcd3f182b90a0c979d2100ddcbf714898624412b8dcc948f",
"0x71c05d6a5b607c0f8d8181efe5794eae3373dcb10cd95ade0d67f63cf14e13fe",
"0xa3fc1c5e8d99d958d483fa3ecf2eb9a17345b4fc2e82f99d0bae9306120078e1",
"0xfd8e4058cd218f25c3e902b932b4171de7d041de05c86fb0c4e5308f9d14f03a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

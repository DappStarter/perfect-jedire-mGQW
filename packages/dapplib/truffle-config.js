require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth praise prosper harvest nasty equal gift'; 
let testAccounts = [
"0xfda96352f875be81c2df38b879ed66537de1f70b098b474289e59ab475269434",
"0x074d8e9bba169ad86ef173564b8daa02b1e87b7302b1392a015803f969b47081",
"0x922232a0b1f50417386376090e8b204c486eb8cc139eccd01810047222cfb0b5",
"0xd63041deee2916ac5bf367f834a6671767c0db007203fd8438518388e9a20f63",
"0x217c6444a5394ea06ed7919ad008860a5c5985582226290b7aad97163656c4f8",
"0xb8e12f99340f695a93204842233962302d8a6737a2052eec3f7dc095e66ba0ca",
"0xe069f5d30d74e62431e7639402a7960f6a0d1123004bd76b2f79d6d306e3c84c",
"0x3dc1f92a5db0138486e597ef061d1852682c0818c355d27fa40423d3102e9215",
"0x7b0e2ccd5a36deeac0f7f60ed3c1607352fb420d03ff133b48034aabb8cd23c7",
"0x984cb3cbb9c131b18a726b7f5a2cfc3efcd4fdc1865e616661810fe39fb199b5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


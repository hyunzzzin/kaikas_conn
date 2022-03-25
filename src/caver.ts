const fs = require('fs')
const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')

async function testFunction() {
    // Read keystore json file
    const keystore = fs.readFileSync('./keystore.json', 'utf8')

    // Decrypt keystore
    const keyring = caver.wallet.keyring.decrypt(keystore, 'password')
    console.log(keyring)

    // Add to caver.wallet
    caver.wallet.add(keyring)

    // Create value transfer transaction
    const vt = new caver.transaction.valueTransfer({
        from: keyring.address,
        to: '0xb4c25d57583bc3103d01459105a94d53c6f62393',
        value: caver.utils.toPeb(1, 'KLAY'),
        gas: 25000,
    })

    // Sign to the transaction
    const signed = await caver.wallet.sign(keyring.address, vt)

    // Send transaction to the Klaytn blockchain platform (Klaytn)
    const receipt = await caver.rpc.klay.sendRawTransaction(signed)
    console.log(receipt)
}

export default testFunction()
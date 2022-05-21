const main = async () => {
    const nftContractFactory = await ethers.getContractFactory('EternalNFT')
    const nftContract = await nftContractFactory.deploy()
    await nftContract.deployed()
    console.log('Contract deployed to:', nftContract.address)
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()


// deployed to : 0x80eEEeadab4F3921b503D4206DdDC856Ef2Eac31
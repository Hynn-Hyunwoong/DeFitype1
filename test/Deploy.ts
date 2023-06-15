import {ethers} from "hardhat";

describe("test", () => {
    let deploy : any;
    let deployer : any;
    before(async () => {
        const [_deployer] = await ethers.getSigners();
        deployer = _deployer;
        deploy = await ethers.getContractAt("Deploy", "0x289a34d6de47ffeab5682bec081d4de2dfcb1841" );
    })

    it.skip("SetStateValue", async() => {
        await deploy.setStateValue(60);
    })
    it("getStateValue", async()=>{
        console.log(await deploy.getStateValue());
    })
})
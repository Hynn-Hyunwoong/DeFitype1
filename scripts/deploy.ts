import { ethers } from "hardhat";

const main = async () => {
  const stateValue = 30;
  const Deploy = await ethers.getContractFactory("Deploy");
  const deploy = await Deploy.deploy(stateValue);
  const receipt = await deploy.deploymentTransaction();

  console.log(`StateValue :" ${stateValue} , Address : ${deploy.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

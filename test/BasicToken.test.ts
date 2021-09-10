import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import { BasicToken } from "@/typechain";

describe("BasicToken", () => {
    const wallet_initial_balance = 1000;
    const other_initial_balance = 0;
    const transfer_value = 1;
    
    let token: BasicToken;

    let wallet: Signer;
    let other: Signer;

    let wallet_address: any;
    let other_address: any


    beforeEach( async () => {
        
        [wallet, other] = await ethers.getSigners();

        const token_factory = await ethers.getContractFactory("BasicToken");
        token = await token_factory.deploy(wallet_initial_balance);
        await token.deployed();

        wallet_address = await wallet.getAddress();
        other_address = await other.getAddress();

    });


    it("Assigns initial balance", async () => {
        expect(await token.balanceOf(wallet_address)).to.be.equal(wallet_initial_balance);
    });


    it("Transfer adds amount to destination account", async () => {
        
        await token.transfer(other_address, transfer_value);

        expect( await token.balanceOf(wallet_address) )
        .to.equal( wallet_initial_balance - transfer_value );

        expect( await token.balanceOf(other_address) )
        .to.equal( other_initial_balance + transfer_value );

    });


    it("Transfer emits event", async () => {
        
        await expect(token.transfer(other_address, transfer_value))
                    .to.emit(token, "Transfer")
                    .withArgs(wallet_address, other_address, transfer_value);

    });


    it("Can not transfer above the amount", async () => {

        await expect( token.transfer(other_address, wallet_initial_balance + 1) )
                .to.be.reverted;

    });


    it("Can not transfer from empty account", async () => {
        
        const token_from_other_wallet = await token.connect(other_address);
        await expect( token_from_other_wallet.transfer(wallet_address, transfer_value) )
        .to.be.reverted;

    });

});

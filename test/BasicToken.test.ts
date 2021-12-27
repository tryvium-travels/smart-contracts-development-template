import { ethers, waffle } from "hardhat";
import { expect } from "chai";
import { BasicToken, BasicToken__factory } from "@/typechain-types";

const { provider: mock_provider } = waffle;

describe("BasicToken", () => {
    const wallet_initial_balance = 1000;
    const other_initial_balance = 0;
    const transfer_value = 1;

    let token: BasicToken;

    const [
        wallet,
        other,
    ] = mock_provider.getWallets();

    beforeEach(async () => {
        const token_factory = await ethers.getContractFactory("BasicToken") as BasicToken__factory;
        token = await token_factory.deploy(wallet_initial_balance);
        await token.deployed();
    });

    it("Assigns initial balance", async () => {
        expect(await token.balanceOf(wallet.address)).to.be.equal(wallet_initial_balance);
    });

    it("Transfer adds amount to destination account", async () => {
        await (await token.transfer(other.address, transfer_value));

        expect(await token.balanceOf(wallet.address))
            .to.equal(wallet_initial_balance - transfer_value);

        expect(await token.balanceOf(other.address))
            .to.equal(other_initial_balance + transfer_value);
    });

    it("Transfer emits event", async () => {
        await expect(token.transfer(other.address, transfer_value))
            .to.emit(token, "Transfer")
            .withArgs(wallet.address, other.address, transfer_value);
    });

    it("Can not transfer above the amount", async () => {
        await expect(token.transfer(other.address, wallet_initial_balance + 1))
            .to.be.reverted;
    });

    it("Can not transfer from empty account", async () => {
        const token_from_other_wallet = await token.connect(other.address);
        await expect(token_from_other_wallet.transfer(wallet.address, transfer_value))
            .to.be.reverted;
    });
});

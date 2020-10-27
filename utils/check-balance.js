const StellarSdk = require("stellar-sdk");
const dotenv = require("dotenv");

dotenv.config();
const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

const checkBalance = async () => {
  //Cargamos la cuenta a traves de sdk de Stellar
  const account = await server.loadAccount(process.env.PUBLIC_KEY);
  console.log("Balances for account " + process.env.PUBLIC_KEY);

  // CHECAMOS CADA UNA DE LAS CUENTAS Y SU BALANCE
  account.balances.forEach((balance) => {
    console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
  });
};

checkBalance();

const StellarSdk = require("stellar-sdk");
const dotenv = require("dotenv");

dotenv.config();
const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

const checkRecipientBalance = async () => {
  //Cargamos la cuenta a traves de sdk de Stellar
  const account = await server.loadAccount(
    "GBGC44YKDEEWTDYBWMENTA6ACO3AW76ZGSSQSAJ6TJVBZOYIXMQ47F55"
  );
  console.log(
    "Balances for account " +
      "GBGC44YKDEEWTDYBWMENTA6ACO3AW76ZGSSQSAJ6TJVBZOYIXMQ47F55"
  );

  // CHECAMOS CADA UNA DE LAS CUENTAS Y SU BALANCE
  account.balances.forEach((balance) => {
    console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
  });
};

checkRecipientBalance();

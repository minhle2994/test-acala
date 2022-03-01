import { options } from "@acala-network/api";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { createTestPairs } from "@polkadot/keyring/testingPairs";

async function main() {
  const provider = new WsProvider("wss://node-6870830370282213376.rz.onfinality.io/ws?apikey=0f273197-e4d5-45e2-b23e-03b015cb7000");
  // const provider = new WsProvider("wss://acala-polkadot.api.onfinality.io/public-ws");
  const api = new ApiPromise(options({ provider }));
  await api.isReadyOrError;

  const testingPair = createTestPairs();
  // console.log(testingPair);

  // const fromAddress = testingPair.bob_stash.address;
  const toAddress = "5FhGVTrsw6ufJFGABtHd8efNbq4AQx99aCCK4MvfcdcfRQ9n";

  // const beforeAccountData = await api.query.system.account(fromAddress);
  // console.log(beforeAccountData.toHuman());

  // const hash = await api.tx.currencies
  //   .transfer(
  //     toAddress,
  //     {
  //       Token: "KSM",
  //     },
  //     "1000000000000"
  //   )
  //   .signAndSend(testingPair.bob);

  // const hash = await api.tx.balances
  //   .transfer(
  //     toAddress,
  //     "99000000000000"
  //   )
  //   .signAndSend(testingPair.bob_stash);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
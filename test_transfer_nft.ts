import { options } from "@acala-network/api";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from '@polkadot/keyring';

const test1Mnemonic = 'start print thing cart puppy virus crystal hire level bottom gap garbage'
const test2Mnemonic = 'nephew ten camera assist six apology fix shuffle keen century ugly sweet'

async function main() {
  const provider = new WsProvider("wss://node-6870830370282213376.rz.onfinality.io/ws?apikey=0f273197-e4d5-45e2-b23e-03b015cb7000");
  const api = new ApiPromise(options({ provider }));
  await api.isReadyOrError;

  const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
  const pair1 = keyring.addFromUri(test1Mnemonic, { name: 'test1' }, 'sr25519');
  const pair2 = keyring.addFromUri(test2Mnemonic, { name: 'test2' }, 'sr25519');

  console.log('test1 address:', pair1.address)
  console.log('test1 address nft:')
  const test1Assets = await api.query.ormlNFT.tokensByOwner.keys(pair1.address);
  for (const key of test1Assets) {
    const data = key.toHuman() as string[];
    console.log(data)
  }

  console.log('test2 address:', pair2.address)
  console.log('test2 address nft:')
  const test2Assets = await api.query.ormlNFT.tokensByOwner.keys(pair2.address);
  for (const key of test2Assets) {
    const data = key.toHuman() as string[];
    console.log(data)
  }

  // const hash = await api.tx.nft
  //   .transfer(
  //     pair2.address,
  //     [1, 1]
  //   )
  //   .signAndSend(pair1);

  // console.log("Transfer sent with hash", hash.toHex());
}


main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
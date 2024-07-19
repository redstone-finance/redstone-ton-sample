import { TonPricesContractConnector, BlueprintTonNetwork, config } from "@redstone-finance/ton-connector";
import { ContractParamsProvider } from "@redstone-finance/sdk";

import { NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
  const contract = await new TonPricesContractConnector(
    new BlueprintTonNetwork(provider, config),
    "EQBP4yZgqut-1JsfRB8PNZqFnr5VzvWXBqX2BppTnS6IAHkk"
  ).getAdapter();

  const paramsProvider = new ContractParamsProvider({
    dataServiceId: "redstone-avalanche-prod",
    uniqueSignersCount: 1,
    dataPackagesIds: ["ETH", "BTC", "USDT"],
  });

  console.log(await contract.getPricesFromPayload(paramsProvider));
}

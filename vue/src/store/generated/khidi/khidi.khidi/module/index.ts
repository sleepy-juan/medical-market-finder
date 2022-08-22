// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgHyAddExport } from "./types/khidi/tx";
import { MsgHyAddImport } from "./types/khidi/tx";
import { MsgHyAddMarketsize } from "./types/khidi/tx";
import { MsgHyAddPartner } from "./types/khidi/tx";


const types = [
  ["/khidi.khidi.MsgHyAddExport", MsgHyAddExport],
  ["/khidi.khidi.MsgHyAddImport", MsgHyAddImport],
  ["/khidi.khidi.MsgHyAddMarketsize", MsgHyAddMarketsize],
  ["/khidi.khidi.MsgHyAddPartner", MsgHyAddPartner],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgHyAddExport: (data: MsgHyAddExport): EncodeObject => ({ typeUrl: "/khidi.khidi.MsgHyAddExport", value: MsgHyAddExport.fromPartial( data ) }),
    msgHyAddImport: (data: MsgHyAddImport): EncodeObject => ({ typeUrl: "/khidi.khidi.MsgHyAddImport", value: MsgHyAddImport.fromPartial( data ) }),
    msgHyAddMarketsize: (data: MsgHyAddMarketsize): EncodeObject => ({ typeUrl: "/khidi.khidi.MsgHyAddMarketsize", value: MsgHyAddMarketsize.fromPartial( data ) }),
    msgHyAddPartner: (data: MsgHyAddPartner): EncodeObject => ({ typeUrl: "/khidi.khidi.MsgHyAddPartner", value: MsgHyAddPartner.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};

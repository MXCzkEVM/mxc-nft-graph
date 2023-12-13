import {Address, BigInt, Bytes} from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent
} from "../generated/MEP1002/MEP1002"
import { MXCMarketplace } from "../generated/MXCMarketplace/MXCMarketplace"
import {NftAsset} from "../generated/schema"

const ContractAddress = '0x91fd2e13379dF87f752c82E8C16a1aE72601a9B2'
const Mep1002Address = '0xad5a1855A383732f311241c1A4F9510da0Ad0743'

export function handleTransfer(event: TransferEvent): void {
  let key = `${Mep1002Address}-${event.params.tokenId}`
  let entity = NftAsset.load(key)
  if(entity === null) {
    entity = new NftAsset(key)
    entity.expiredAt = BigInt.zero()
  }
  entity.tokenId = event.params.tokenId
  entity.nftAddress = Address.fromString(Mep1002Address)
  entity.orderCreated = false
  entity.seller = event.params.to
  entity.save()
}

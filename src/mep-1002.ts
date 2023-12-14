import {Address, BigInt, Bytes} from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent
} from "../generated/MEP1002/MEP1002"
import { MXCMarketplace } from "../generated/MXCMarketplace/MXCMarketplace"
import {NftAsset} from "../generated/schema"

const ContractAddress = '0xe031013A7B7Caf05FC20Bdc49B731E3F2f0cAfFd'
const Mep1002Address = '0x7407459464741c17F8341D7EAFED5a4A5d9303b4'

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

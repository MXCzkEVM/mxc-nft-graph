import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent,
} from "../generated/MEP1002Name/MEP1002Name"
import {NftAsset } from "../generated/schema"

const Mep1002Address = '0x1964F08f56b79051fB3AE9a2C4d8D92A059b1237'

export function handleTransfer(event: TransferEvent): void {
  let key = `${Mep1002Address}-${event.params.tokenId}`
  let entity = NftAsset.load(key)
  if (entity === null) {
    entity = new NftAsset(key)
    entity.expiredAt = BigInt.zero()
  }
  entity.tokenId = event.params.tokenId
  entity.nftAddress = Address.fromString(Mep1002Address)
  entity.price = BigInt.zero()
  entity.seller = event.params.to
  entity.save()
}


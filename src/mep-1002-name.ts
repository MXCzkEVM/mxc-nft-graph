import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent,
} from "../generated/MEP1002Name/MEP1002Name"
import {NftAsset } from "../generated/schema"

const Mep1002Address = '0x1964f08f56b79051fb3ae9a2c4d8d92a059b1237'

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


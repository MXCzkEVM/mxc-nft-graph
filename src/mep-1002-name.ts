import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent,
} from "../generated/MEP1002Name/MEP1002Name"
import {NftAsset } from "../generated/schema"

const Mep1002Address = '0xad5a1855A383732f311241c1A4F9510da0Ad0743'

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


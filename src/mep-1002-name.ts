import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent,
} from "../generated/MEP1002Name/MEP1002Name"
import {NftAsset } from "../generated/schema"

const Mep1002Address = '0x7407459464741c17F8341D7EAFED5a4A5d9303b4'

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


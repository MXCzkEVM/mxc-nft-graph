import { Address } from "@graphprotocol/graph-ts";
import {
  MXCMarketplace,
  OrderCancelled as OrderCancelledEvent,
  OrderCreated as OrderCreatedEvent,
  OrderSuccessful as OrderSuccessfulEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/MXCMarketplace/MXCMarketplace"
import {
  OrderCancelled,
  OrderCreated,
  OrderSuccessful,
  OwnershipTransferred
} from "../generated/schema"

const ContractAddress = "0x8Ff08F39B1F4Ad7dc42E6D63fd25AeE47EA801Ce";
const mxcMarketplace = MXCMarketplace.bind(Address.fromString(ContractAddress));

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MXCMarketplace_id = event.params.id
  entity.assetId = event.params.assetId
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity = new OrderCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MXCMarketplace_id = event.params.id
  entity.assetId = event.params.assetId
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.priceInWei = event.params.priceInWei
  entity.expiresAt = event.params.expiresAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderSuccessful(event: OrderSuccessfulEvent): void {
  let entity = new OrderSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MXCMarketplace_id = event.params.id
  entity.assetId = event.params.assetId
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.totalPrice = event.params.totalPrice
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

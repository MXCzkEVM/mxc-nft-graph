import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import {
  MXCMarketplace,
  OrderCancelled as OrderCancelledEvent,
  OrderCreated as OrderCreatedEvent,
  OrderSuccessful as OrderSuccessfulEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/MXCMarketplace/MXCMarketplace"
import {
  MarketplaceOrderInfo,
  OwnershipTransferred
} from "../generated/schema"

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  const info = new MarketplaceOrderInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  info.event = 'cancelled'
  info.assetId = event.params.assetId
  info.seller = event.params.seller
  info.nftAddress = event.params.nftAddress

  info.blockNumber = event.block.number
  info.blockTimestamp = event.block.timestamp
  info.transactionHash = event.transaction.hash

  info.save()
}

export function handleOrderCreated(event: OrderCreatedEvent): void {
  const info = new MarketplaceOrderInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  
  info.event = 'created'
  info.assetId = event.params.assetId
  info.seller = event.params.seller
  info.nftAddress = event.params.nftAddress

  info.blockNumber = event.block.number
  info.blockTimestamp = event.block.timestamp
  info.transactionHash = event.transaction.hash

  info.save()
}

export function handleOrderSuccessful(event: OrderSuccessfulEvent): void {
  const info = new MarketplaceOrderInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  
  info.event = 'successful'
  info.assetId = event.params.assetId
  info.seller = event.params.seller
  info.nftAddress = event.params.nftAddress
  info.totalPrice = event.params.totalPrice
  info.buyer = event.params.buyer

  info.blockNumber = event.block.number
  info.blockTimestamp = event.block.timestamp
  info.transactionHash = event.transaction.hash

  info.save()
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

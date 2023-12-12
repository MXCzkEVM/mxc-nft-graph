import { Address } from "@graphprotocol/graph-ts";
import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  Initialized as InitializedEvent,
  OrderCancelled as OrderCancelledEvent,
  OrderCreated as OrderCreatedEvent,
  OrderSuccessful as OrderSuccessfulEvent,
  Upgraded as UpgradedEvent
} from "../generated/MXCMarketplace/MXCMarketplace"
import {
  AdminChanged,
  BeaconUpgraded,
  Initialized,
  MarketplaceOrderInfo,
  Upgraded
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version
  
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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
  info.priceInWei = event.params.priceInWei
  info.expiresAt = event.params.expiresAt

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

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.implementation = event.params.implementation
  event.address
  event.receipt
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  Initialized,
  OrderCancelled,
  OrderCreated,
  OrderSuccessful,
  Upgraded
} from "../generated/MXCMarketplace/MXCMarketplace"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOrderCancelledEvent(
  id: Bytes,
  assetId: BigInt,
  seller: Address,
  nftAddress: Address
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "assetId",
      ethereum.Value.fromUnsignedBigInt(assetId)
    )
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )

  return orderCancelledEvent
}

export function createOrderCreatedEvent(
  id: Bytes,
  assetId: BigInt,
  seller: Address,
  nftAddress: Address,
  priceInWei: BigInt,
  expiresAt: BigInt
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetId",
      ethereum.Value.fromUnsignedBigInt(assetId)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "priceInWei",
      ethereum.Value.fromUnsignedBigInt(priceInWei)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "expiresAt",
      ethereum.Value.fromUnsignedBigInt(expiresAt)
    )
  )

  return orderCreatedEvent
}

export function createOrderSuccessfulEvent(
  id: Bytes,
  assetId: BigInt,
  seller: Address,
  nftAddress: Address,
  totalPrice: BigInt,
  buyer: Address
): OrderSuccessful {
  let orderSuccessfulEvent = changetype<OrderSuccessful>(newMockEvent())

  orderSuccessfulEvent.parameters = new Array()

  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "assetId",
      ethereum.Value.fromUnsignedBigInt(assetId)
    )
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "totalPrice",
      ethereum.Value.fromUnsignedBigInt(totalPrice)
    )
  )
  orderSuccessfulEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return orderSuccessfulEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

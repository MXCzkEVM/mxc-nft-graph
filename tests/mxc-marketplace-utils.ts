import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  OrderCancelled,
  OrderCreated,
  OrderSuccessful,
  OwnershipTransferred
} from "../generated/MXCMarketplace/MXCMarketplace"

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

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

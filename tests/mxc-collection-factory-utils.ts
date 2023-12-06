import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  delCollectionEvent,
  editCollectionEvent,
  newCollectionEvent
} from "../generated/MXCCollectionFactory/MXCCollectionFactory"

export function createdelCollectionEventEvent(
  collectionAddress: Address,
  owner: Address
): delCollectionEvent {
  let delCollectionEventEvent = changetype<delCollectionEvent>(newMockEvent())

  delCollectionEventEvent.parameters = new Array()

  delCollectionEventEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  delCollectionEventEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return delCollectionEventEvent
}

export function createeditCollectionEventEvent(
  collectionAddress: Address,
  owner: Address
): editCollectionEvent {
  let editCollectionEventEvent = changetype<editCollectionEvent>(newMockEvent())

  editCollectionEventEvent.parameters = new Array()

  editCollectionEventEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  editCollectionEventEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return editCollectionEventEvent
}

export function createnewCollectionEventEvent(
  collectionAddress: Address,
  owner: Address
): newCollectionEvent {
  let newCollectionEventEvent = changetype<newCollectionEvent>(newMockEvent())

  newCollectionEventEvent.parameters = new Array()

  newCollectionEventEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  newCollectionEventEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return newCollectionEventEvent
}

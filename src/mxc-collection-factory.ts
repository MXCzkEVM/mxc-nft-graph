import {
  delCollectionEvent as delCollectionEventEvent,
  editCollectionEvent as editCollectionEventEvent,
  newCollectionEvent as newCollectionEventEvent
} from "../generated/MXCCollectionFactory/MXCCollectionFactory"
import {
  delCollectionEvent,
  editCollectionEvent,
  newCollectionEvent
} from "../generated/schema"

export function handledelCollectionEvent(event: delCollectionEventEvent): void {
  let entity = new delCollectionEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleeditCollectionEvent(
  event: editCollectionEventEvent
): void {
  let entity = new editCollectionEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenewCollectionEvent(event: newCollectionEventEvent): void {
  let entity = new newCollectionEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

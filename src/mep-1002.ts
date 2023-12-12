import { Address } from "@graphprotocol/graph-ts"
import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  Upgraded as UpgradedEvent,
  AllChildrenRejected as AllChildrenRejectedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ChildAccepted as ChildAcceptedEvent,
  ChildProposed as ChildProposedEvent,
  ChildTransferred as ChildTransferredEvent,
  ControllerChanged as ControllerChangedEvent,
  Initialized as InitializedEvent,
  MEP1002TokenUpdateName as MEP1002TokenUpdateNameEvent,
  NestTransfer as NestTransferEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/MEP1002/MEP1002"
import { MXCMarketplace } from "../generated/MXCMarketplace/MXCMarketplace"
import {
  AdminChanged,
  BeaconUpgraded,
  Upgraded,
  AllChildrenRejected,
  Approval,
  ApprovalForAll,
  ChildAccepted,
  ChildProposed,
  ChildTransferred,
  ControllerChanged,
  Initialized,
  MEP1002TokenUpdateName,
  NestTransfer,
  OwnershipTransferred,
  Transfer
} from "../generated/schema"

const ContractAddress = '0x91fd2e13379dF87f752c82E8C16a1aE72601a9B2'
const Mep1002Address = '0xad5a1855A383732f311241c1A4F9510da0Ad0743'
const MarketContract = MXCMarketplace.bind(Address.fromString(ContractAddress))

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

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAllChildrenRejected(
  event: AllChildrenRejectedEvent
): void {
  let entity = new AllChildrenRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChildAccepted(event: ChildAcceptedEvent): void {
  let entity = new ChildAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.childIndex = event.params.childIndex
  entity.childAddress = event.params.childAddress
  entity.childId = event.params.childId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChildProposed(event: ChildProposedEvent): void {
  let entity = new ChildProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.childIndex = event.params.childIndex
  entity.childAddress = event.params.childAddress
  entity.childId = event.params.childId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChildTransferred(event: ChildTransferredEvent): void {
  let entity = new ChildTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.childIndex = event.params.childIndex
  entity.childAddress = event.params.childAddress
  entity.childId = event.params.childId
  entity.fromPending = event.params.fromPending

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleControllerChanged(event: ControllerChangedEvent): void {
  let entity = new ControllerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.controller = event.params.controller
  entity.enabled = event.params.enabled

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

export function handleMEP1002TokenUpdateName(
  event: MEP1002TokenUpdateNameEvent
): void {
  let entity = new MEP1002TokenUpdateName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNestTransfer(event: NestTransferEvent): void {
  let entity = new NestTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.tokenId = event.params.tokenId

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

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  
  const price = MarketContract.orderByAssetId(Address.fromString(Mep1002Address), event.params.tokenId).getPrice()
  entity.markPrice = price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  

  entity.save()
}

import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/MEP1002/MEP1002"

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

export function createAllChildrenRejectedEvent(
  tokenId: BigInt
): AllChildrenRejected {
  let allChildrenRejectedEvent = changetype<AllChildrenRejected>(newMockEvent())

  allChildrenRejectedEvent.parameters = new Array()

  allChildrenRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return allChildrenRejectedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createChildAcceptedEvent(
  tokenId: BigInt,
  childIndex: BigInt,
  childAddress: Address,
  childId: BigInt
): ChildAccepted {
  let childAcceptedEvent = changetype<ChildAccepted>(newMockEvent())

  childAcceptedEvent.parameters = new Array()

  childAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  childAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "childIndex",
      ethereum.Value.fromUnsignedBigInt(childIndex)
    )
  )
  childAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "childAddress",
      ethereum.Value.fromAddress(childAddress)
    )
  )
  childAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "childId",
      ethereum.Value.fromUnsignedBigInt(childId)
    )
  )

  return childAcceptedEvent
}

export function createChildProposedEvent(
  tokenId: BigInt,
  childIndex: BigInt,
  childAddress: Address,
  childId: BigInt
): ChildProposed {
  let childProposedEvent = changetype<ChildProposed>(newMockEvent())

  childProposedEvent.parameters = new Array()

  childProposedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  childProposedEvent.parameters.push(
    new ethereum.EventParam(
      "childIndex",
      ethereum.Value.fromUnsignedBigInt(childIndex)
    )
  )
  childProposedEvent.parameters.push(
    new ethereum.EventParam(
      "childAddress",
      ethereum.Value.fromAddress(childAddress)
    )
  )
  childProposedEvent.parameters.push(
    new ethereum.EventParam(
      "childId",
      ethereum.Value.fromUnsignedBigInt(childId)
    )
  )

  return childProposedEvent
}

export function createChildTransferredEvent(
  tokenId: BigInt,
  childIndex: BigInt,
  childAddress: Address,
  childId: BigInt,
  fromPending: boolean
): ChildTransferred {
  let childTransferredEvent = changetype<ChildTransferred>(newMockEvent())

  childTransferredEvent.parameters = new Array()

  childTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  childTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "childIndex",
      ethereum.Value.fromUnsignedBigInt(childIndex)
    )
  )
  childTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "childAddress",
      ethereum.Value.fromAddress(childAddress)
    )
  )
  childTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "childId",
      ethereum.Value.fromUnsignedBigInt(childId)
    )
  )
  childTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "fromPending",
      ethereum.Value.fromBoolean(fromPending)
    )
  )

  return childTransferredEvent
}

export function createControllerChangedEvent(
  controller: Address,
  enabled: boolean
): ControllerChanged {
  let controllerChangedEvent = changetype<ControllerChanged>(newMockEvent())

  controllerChangedEvent.parameters = new Array()

  controllerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )
  controllerChangedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return controllerChangedEvent
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

export function createMEP1002TokenUpdateNameEvent(
  tokenId: BigInt,
  name: string
): MEP1002TokenUpdateName {
  let mep1002TokenUpdateNameEvent = changetype<MEP1002TokenUpdateName>(
    newMockEvent()
  )

  mep1002TokenUpdateNameEvent.parameters = new Array()

  mep1002TokenUpdateNameEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  mep1002TokenUpdateNameEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return mep1002TokenUpdateNameEvent
}

export function createNestTransferEvent(
  from: Address,
  to: Address,
  fromTokenId: BigInt,
  toTokenId: BigInt,
  tokenId: BigInt
): NestTransfer {
  let nestTransferEvent = changetype<NestTransfer>(newMockEvent())

  nestTransferEvent.parameters = new Array()

  nestTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  nestTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  nestTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  nestTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  nestTransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nestTransferEvent
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

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { delCollectionEvent } from "../generated/schema"
import { delCollectionEvent as delCollectionEventEvent } from "../generated/MXCCollectionFactory/MXCCollectionFactory"
import { handledelCollectionEvent } from "../src/mxc-collection-factory"
import { createdelCollectionEventEvent } from "./mxc-collection-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let collectionAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newdelCollectionEventEvent = createdelCollectionEventEvent(
      collectionAddress,
      owner
    )
    handledelCollectionEvent(newdelCollectionEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("delCollectionEvent created and stored", () => {
    assert.entityCount("delCollectionEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "delCollectionEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collectionAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "delCollectionEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

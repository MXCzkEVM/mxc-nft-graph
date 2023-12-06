import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { OrderCancelled } from "../generated/schema"
import { OrderCancelled as OrderCancelledEvent } from "../generated/MXCMarketplace/MXCMarketplace"
import { handleOrderCancelled } from "../src/mxc-marketplace"
import { createOrderCancelledEvent } from "./mxc-marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = Bytes.fromI32(1234567890)
    let assetId = BigInt.fromI32(234)
    let seller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let nftAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newOrderCancelledEvent = createOrderCancelledEvent(
      id,
      assetId,
      seller,
      nftAddress
    )
    handleOrderCancelled(newOrderCancelledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("OrderCancelled created and stored", () => {
    assert.entityCount("OrderCancelled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "OrderCancelled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetId",
      "234"
    )
    assert.fieldEquals(
      "OrderCancelled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "seller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "OrderCancelled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

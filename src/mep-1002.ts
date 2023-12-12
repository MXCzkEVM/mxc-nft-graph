import { Address } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent
} from "../generated/MEP1002/MEP1002"
import { MXCMarketplace } from "../generated/MXCMarketplace/MXCMarketplace"
import { Transfer } from "../generated/schema"

const ContractAddress = '0x91fd2e13379dF87f752c82E8C16a1aE72601a9B2'
const Mep1002Address = '0xad5a1855A383732f311241c1A4F9510da0Ad0743'
const MarketContract = MXCMarketplace.bind(Address.fromString(ContractAddress))

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

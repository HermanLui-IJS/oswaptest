import {
  Approval as ApprovalEvent,
  Authorize as AuthorizeEvent,
  Deauthorize as DeauthorizeEvent,
  StartOwnershipTransfer as StartOwnershipTransferEvent,
  Transfer as TransferEvent,
  TransferOwnership as TransferOwnershipEvent
} from "../generated/Token/Token"
import {
  Approval,
  Authorize,
  Deauthorize,
  StartOwnershipTransfer,
  Transfer,
  TransferOwnership
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleAuthorize(event: AuthorizeEvent): void {
  let entity = new Authorize(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.save()
}

export function handleDeauthorize(event: DeauthorizeEvent): void {
  let entity = new Deauthorize(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.save()
}

export function handleStartOwnershipTransfer(
  event: StartOwnershipTransferEvent
): void {
  let entity = new StartOwnershipTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleTransferOwnership(event: TransferOwnershipEvent): void {
  let entity = new TransferOwnership(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.save()
}

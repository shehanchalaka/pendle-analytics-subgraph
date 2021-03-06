import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const ZERO_BI = BigInt.fromI32(0);
export const ZERO_BD = BigDecimal.fromString("0");
export const ONE_BI = BigInt.fromI32(1);
export const ONE_BD = BigDecimal.fromString("1");
export const TWO_BI = BigInt.fromI32(2);
export const TWO_BD = BigDecimal.fromString("2");

export let RONE_BD = BigInt.fromI32(2)
  .pow(40)
  .toBigDecimal();

export let UNISWAP_Q192 = BigInt.fromI32(2)
  .pow(192)
  .toBigDecimal();

export let PENDLE_WRAPPER = Address.fromString("0x91b7c55301c6cc44ce01bce66dc0dfd176cf16bb");

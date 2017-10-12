import { BigNumber } from 'bignumber.js';

export interface OrderParams {
  loopringProtocol: string;
  tokenS: string;
  tokenB: string;
  amountS: BigNumber;
  amountB: BigNumber;
  timestamp: BigNumber;
  ttl: BigNumber;
  salt: BigNumber;
  lrcFee: BigNumber;
  buyNoMoreThanAmountB: boolean;
  marginSplitPercentage: number;
  orderHashHex?: string;
  v?: number;
  r?: string;
  s?: string;
}

export interface LoopringSubmitParams {
  addressList: string[][];
  uintArgsList: BigNumber[][];
  uint8ArgsList: number[][];
  buyNoMoreThanAmountBList: boolean[];
  vList: number[];
  rList: string[];
  sList: string[];
  ringOwner: string;
  feeRecepient: string;
  throwIfLRCIsInsuffcient: boolean;
}

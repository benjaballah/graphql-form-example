import express from 'express';

export interface DecodedTokenInterface {
  account_id: number;
  account_lid: string;
  scope: string;
  iat: number;
  exp: number;
  iss: string
}

export type DecodedTokenReqInterface = express.Request;

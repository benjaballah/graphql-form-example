import { verify } from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import { DecodedTokenInterface, DecodedTokenReqInterface } from './interface/decoded.interface';

export const decodedToken = (req: DecodedTokenReqInterface): DecodedTokenInterface => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AuthenticationError('Missing authentication');
  }

  try {
    const decoded = verify(
      token,
      process.env.DS_TOKEN_KEY || 'YourPrivateKey',
      {
        algorithms: ['HS256'],
        issuer: 'sixense-digitalsite.com',
        ignoreExpiration: false
      }
    );
    return decoded as DecodedTokenInterface;
  } catch (error) {
    throw new AuthenticationError(error.message);
  }
}

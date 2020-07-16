import { DecodedTokenInterface } from "../../../server/interface/decoded.interface";

export class FormApiContext {
  userid: string = '';
  authorization: string = '';
  numperpage: string = '10';
  pagenumber: string = '1';
  projectId: string = '';
  user: DecodedTokenInterface | null = null;
}
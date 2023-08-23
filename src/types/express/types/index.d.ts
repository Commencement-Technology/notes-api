import {UserTypes} from "../../"

declare global {
  namespace Express {
    export interface Request {
      user?: UserTypes;
    }
  }
}

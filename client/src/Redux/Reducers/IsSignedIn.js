import * as Session from  '../../Lib/Helpers/Session'
import { AUTH } from '../Actions/Sessions/Types'

const IS_SIGNED_IN = Session.isSignedIn()

export default function(state=IS_SIGNED_IN, action) {
  switch(action.type) {
    case AUTH:
      return action.IsSignedIn
    default:
      return state
  }
}

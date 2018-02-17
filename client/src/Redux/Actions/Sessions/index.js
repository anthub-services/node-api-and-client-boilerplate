import { AUTH } from  '../../Actions/Sessions/Types'

export function auth(isSignedIn) {
  return { type: AUTH, isSignedIn }
}

import { AUTH } from  './Types'

export function auth(IsSignedIn) {
  return { type: AUTH, IsSignedIn }
}

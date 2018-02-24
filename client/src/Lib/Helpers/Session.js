import Store from 'store'
import JWT from 'jsonwebtoken'
import Axios from '../Common/Axios'

export function store(data) {
  for (const key in data) {
    Store.set(key, data[key])
  }
}

export function isSignedIn() {
  token()
  ? Axios.defaults.headers.common['Authorization'] = `Bearer ${token()}`
  : delete Axios.defaults.headers.common['Authorization']

  return !!token()
}

export function isSignedOut() {
  return !isSignedIn()
}

export function isAdmin() {
  return userRole() === 'admin'
}

export function adminIsSignedIn() {
  return isSignedIn() && isAdmin()
}

export function isUser() {
  return userRole() !== 'admin'
}

export function userIsSignedIn() {
  if (adminIsSignedIn()) return true
  return isSignedIn() && isUser()
}

export function userRole() {
  const role = Store.get('role')

  return role === 'admin' ? '' : role
}

/* PAGE ACCESS */

export function showPage(path) {
  const allowedPaths = tokenData('allowedPaths')
  const excludedPaths = tokenData('excludedPaths')

  if (excludedPaths && excludedPaths.length > 0 && excludedPaths.indexOf(path) > -1) return false
  if (allowedPaths && allowedPaths.toString() === '*') return true
  return allowedPaths ? allowedPaths.indexOf(path) > -1 : false
}

export function accessDenied(path) {
  return !showPage(path)
}

export function isAuthorised(path) {
  return (typeof(path) === 'boolean' && path) || showPage(path)
}

/* TOKEN */

export function verifyToken() {
  Axios
    .get(process.env.REACT_APP_API_VERIFY_TOKEN_URL)
    .catch(error => {
      console.log('Error: ', error)
      Store.remove('token')
      window.location.reload()
    })
}

export function token() {
  return Store.get('token')
}

export function deleteToken() {
  Store.remove('token')
}

export function decodedToken() {
  if (token()) {
    return JWT.verify(
      token(),
      process.env.REACT_APP_API_JWT_SECRET,
      function(errors, decoded) {
        if (errors) return token()
        return decoded
      }
    )
  }
}

export function tokenData(data) {
  return decodedToken() && decodedToken()[data] ? decodedToken()[data] : null
}

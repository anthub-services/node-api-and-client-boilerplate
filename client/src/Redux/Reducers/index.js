import Session from './Session'
import GospelAuthors from './GospelAuthors'

export default {
  isSignedIn: Session.IsSignedIn,
  gospelAuthors: GospelAuthors.List,
  activeGospelAuthor: GospelAuthors.Active,
  selectedGospelAuthor: GospelAuthors.Selected
}

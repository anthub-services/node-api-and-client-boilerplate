import { SELECT_GOSPEL_AUTHOR } from '../Actions/GospelAuthors/Types'

const DEFAULT_STATE = {
  activeAuthor: {},
  selectedAuthor: null
}

export default function (state=DEFAULT_STATE, action) {
  switch (action.type) {
    case SELECT_GOSPEL_AUTHOR:
      return action.GospelAuthors
    default:
      return state
  }
}

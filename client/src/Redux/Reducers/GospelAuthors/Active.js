import { SELECT_AUTHOR } from '../../Actions/GospelAuthors/Types'

export default function (state=null, action) {
  switch (action.type) {
    case SELECT_AUTHOR:
      return action.author
    default:
      return state
  }
}

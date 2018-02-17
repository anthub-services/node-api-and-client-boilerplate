import { SELECTED_AUTHOR } from '../../Actions/GospelAuthors/Types'

export default function (state=null, action) {
  switch(action.type) {
    case SELECTED_AUTHOR:
      return action.selectedAuthor
    default:
      return state
  }
}

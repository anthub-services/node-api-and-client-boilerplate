import { SELECT_AUTHOR, SELECTED_AUTHOR } from '../../Actions/GospelAuthors/Types'

export function selectAuthor(author) {
  return { type: SELECT_AUTHOR, author }
}

export function toggleAuthor(selectedAuthor) {
  return { type: SELECTED_AUTHOR, selectedAuthor }
}

import _ from 'lodash'
import { SELECT_GOSPEL_AUTHOR } from './Types'

export function selectAuthor(author, index, { GospelAuthors }) {
  GospelAuthors = _.merge({}, GospelAuthors, { activeAuthor: author, selectedAuthor: index })

  return { type: SELECT_GOSPEL_AUTHOR, GospelAuthors }
}

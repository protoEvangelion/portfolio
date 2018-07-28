import { cloneDeep, omit } from 'lodash'

// Omit space prevents the spacing props from margin and padding
//   from bleeding into the components below it

const omitProps = (props, blacklist) => {
  let omittedProps = cloneDeep(props)

  if (blacklist.includes('margin')) {
    omittedProps = omit(omittedProps, ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'])
  }

  if (blacklist.includes('padding')) {
    omittedProps = omit(omittedProps, ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'])
  }

  return omit(omittedProps, ...blacklist)
}

export default omitProps

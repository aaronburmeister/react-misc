import _ from 'lodash'
import React from 'react'

export default (props, baseAs = 'div') => {
  const blacklist = _.isObject(props) ? _.keys(props) : props
  blacklist.push('as')
  const Wrapper = ({ as = baseAs, children, ...childProps } = {}) => React.createElement(
    as,
    _.omit(childProps, blacklist),
    children
  )
  Wrapper.displayName = 'Styled.Wrapper'
  return Wrapper
}

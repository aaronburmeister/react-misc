/**
*
* CenterLayout
*
*/

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import consumeProps from '../../utils/consumeProps'

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
])

const boolOrNumber = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
])

// ITEM

const itemPropTypes = {
  minWidth: stringOrNumber,
  maxWidth: stringOrNumber,
  minHeight: stringOrNumber,
  maxHeight: stringOrNumber,
  grow: boolOrNumber,
  shrink: boolOrNumber,
  basis: stringOrNumber,
}

const Item = styled(consumeProps(itemPropTypes))`
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  flex: ${({ grow }) => +grow} ${({ shrink }) => +shrink} ${({ basis }) => basis};
`

Item.displayName = 'CenterLayout.Item'

Item.propTypes = itemPropTypes

Item.defaultProps = {
  minWidth: 0,
  maxWidth: 'none',
  minHeight: 0,
  maxHeight: 'none',
  grow: false,
  shrink: false,
  basis: 'auto',
}

// PARENT

const parentPropTypes = {
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  stretch: PropTypes.bool,
}

const Parent = styled(consumeProps(parentPropTypes))`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: ${({ direction }) => direction} nowrap;
  justify-content: center;
  align-items: ${({ stretch }) => (stretch ? 'stretch' : 'center')};
  align-content: center;
`

Parent.displayName = 'CenterLayout.Parent'

Parent.propTypes = parentPropTypes

Parent.defaultProps = {
  direction: 'row',
  stretch: false,
}

// CENTER LAYOUT

function CenterLayout({
  direction, stretch,
  minWidth, maxWidth, minHeight, maxHeight, grow, shrink, basis,
  children, ...props,
}) {
  return (
    <Parent
      direction={direction}
      stretch={stretch}
      {...props}
    >
      <Item
        minWidth={minWidth}
        maxWidth={maxWidth}
        minHeight={minHeight}
        maxHeight={maxHeight}
        grow={grow}
        shrink={shrink}
        basis={basis}
      >
        {children}
      </Item>
    </Parent>
  )
}

CenterLayout.displayName = 'CenterLayout'

CenterLayout.propTypes = {
  ...parentPropTypes,

  ...itemPropTypes,

  children: PropTypes.node,
}

// EXPORTS

export default CenterLayout

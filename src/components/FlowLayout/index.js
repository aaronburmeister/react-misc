/**
*
* FlowLayout
*
*/

import _ from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import consumeProps from '../../utils/consumeProps'

const boolOrNumber = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
])

const normalizeWrap = (wrap) => {
  if (_.isString(wrap)) return wrap
  return wrap ? 'wrap' : 'nowrap'
}

// ITEM

const itemPropTypes = {
  grow: boolOrNumber,
  shrink: boolOrNumber,
  basis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

const Item = styled(consumeProps(itemPropTypes))`
  display: flex;
  min-width: 0;
  max-width: none;
  min-height: 0;
  max-height: none;
  flex: ${({ grow }) => +grow} ${({ shrink }) => +shrink} ${({ basis }) => basis};
`

Item.displayName = 'FlowLayout.Item'

Item.propTypes = itemPropTypes

Item.defaultProps = {
  grow: false,
  shrink: false,
  basis: 'auto',
}

// FLOW LAYOUT

const flowLayoutPropTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  wrap: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'nowrap',
      'wrap',
      'wrap-reverse',
    ]),
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  stretch: PropTypes.bool,
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
}

const FlowLayout = styled(consumeProps(flowLayoutPropTypes))`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: ${({ direction }) => direction} ${({ wrap }) => normalizeWrap(wrap)};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ stretch }) => (stretch ? 'stretch' : 'center')};
  align-content: ${({ alignContent }) => alignContent};
`

FlowLayout.displayName = 'FlowLayout'

FlowLayout.propTypes = flowLayoutPropTypes

FlowLayout.defaultProps = {
  direction: 'column',
  wrap: false,
  justifyContent: 'flex-start',
  stretch: true,
  alignContent: 'center',
}

// EXPORTS

FlowLayout.Item = Item

export default FlowLayout

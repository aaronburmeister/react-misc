import _ from 'lodash'
import Measure from 'react-measure'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import resolveElement, { renderProps, supportChildren } from 'react-resolve-element'

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
])

const pixify = (dimen) => (_.isString(dimen) ? dimen : `${dimen}px`)

// MEASURE PUPPET

const MeasurePuppet = styled.div`
  width: ${({ horizontal }) => (horizontal ? '100%' : '0px')};
  height: ${({ vertical }) => (vertical ? '100%' : '0px')};
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
`

MeasurePuppet.displayName = 'ShadowCompound.MeasurePuppet'

MeasurePuppet.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
}

// MEASURE BALLOON

const MeasureBalloon = styled.div`
  ${({ width }) => (width ? `width: ${pixify(width)};` : '')}
  ${({ height }) => (height ? `height: ${pixify(height)};` : '')}
`

MeasureBalloon.displayName = 'ShadowCompound.MeasureBalloon'

MeasureBalloon.propTypes = {
  width: stringOrNumber,
  height: stringOrNumber,
}

// SHADOW COMPOUND

class ShadowCompound extends React.Component {
  state = {
    measuredWidth: 0,
    measuredHeight: 0,
  }

  render() {
    const { horizontal, vertical, component, render, children, ...props } = this.props

    return (
      <Measure
        onResize={
          ({
            entry: {
              width: measuredWidth,
              height: measuredHeight,
            },
          }) => this.setState({ measuredWidth, measuredHeight })
        }
        {...props}
      >
        {({ measureRef }) => (
          <MeasureBalloon
            width={horizontal ? this.state.measuredWidth : '0px'}
            height={vertical ? this.state.measuredHeight : '0px'}
          >
            {React.Children.only(resolveElement(
              { component, render, children: supportChildren(children) },
              { measureRef }
            ))}
          </MeasureBalloon>
        )}
      </Measure>
    )
  }
}

ShadowCompound.displayName = 'ShadowCompound'

ShadowCompound.propTypes = {
  horizonal: PropTypes.bool,
  vertical: PropTypes.bool,

  ...renderProps,
}

// EXPORTS

ShadowCompound.MeasurePuppet = MeasurePuppet

export default ShadowCompound

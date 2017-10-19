/**
*
* HttpError
*
*/

import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import messages from './messages'

function selectMessage(code) {
  switch (code) {
    case 400: return messages.badRequest
    case 401: return messages.notAuthenticated
    case 402: return messages.paymentError
    case 403: return messages.forbidden
    case 404: return messages.notFound
    case 405: return messages.methodNotAllowed
    case 406: return messages.notAcceptable
    case 408: return messages.timeout
    case 409: return messages.conflict
    case 422: return messages.unprocessable
    default:
    case 500: return messages.generalError
    case 501: return messages.notImplemented
    case 503: return messages.unavailable
  }
}

// HTTP ERROR

function HttpError({ code }) {
  return (
    <div>
      <FormattedMessage {...selectMessage(code)} />
    </div>
  )
}

HttpError.displayName = 'HttpError'

HttpError.propTypes = {
  code: PropTypes.any,
}

HttpError.humanize = (error, fieldName = 'code') => (
  error ? (<HttpError code={_.get(error, fieldName, error)} />) : null
)

// EXPORTS

export default HttpError

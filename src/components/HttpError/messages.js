/*
 * HttpError Messages
 *
 * This contains all the text for the HttpError component.
 */

import { defineMessages } from 'react-intl'

const scope = 'react-misc.components.HttpError'

export default defineMessages({
  badRequest: {
    id: `${scope}.badRequest`,
    defaultMessage: 'The request is invalid.',
  },
  notAuthenticated: {
    id: `${scope}.notAuthenticated`,
    defaultMessage: 'You are not authenticated.',
  },
  paymentError: {
    id: `${scope}.paymentError`,
    defaultMessage: 'There was a payment error.',
  },
  forbidden: {
    id: `${scope}.forbidden`,
    defaultMessage: 'You are not allowed to access the requested resource.',
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: 'The requested resource could not be found.',
  },
  methodNotAllowed: {
    id: `${scope}.methodNotAllowed`,
    defaultMessage: 'The request method is not allowed.',
  },
  notAcceptable: {
    id: `${scope}.notAcceptable`,
    defaultMessage: 'The resource could not be provided in the requested format.',
  },
  timeout: {
    id: `${scope}.timeout`,
    defaultMessage: 'The request timed out.',
  },
  conflict: {
    id: `${scope}.conflict`,
    defaultMessage: 'There was a conflict accessing the resource.',
  },
  unprocessable: {
    id: `${scope}.unprocessable`,
    defaultMessage: 'The request could not be processed.',
  },
  generalError: {
    id: `${scope}.generalError`,
    defaultMessage: 'There was an unexpected error.',
  },
  notImplemented: {
    id: `${scope}.notImplemented`,
    defaultMessage: 'The requested service is not implemented.',
  },
  unavailable: {
    id: `${scope}.unavailable`,
    defaultMessage: 'The requested service is unavailable.',
  },
})

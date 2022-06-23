// srp - single responsibility principle

import { formSubmission, clearInput, inputValue } from './search-bar.mjs'
import { fetchFunction } from './fetchFunction.mjs'

formSubmission(inputValue, fetchFunction, clearInput)
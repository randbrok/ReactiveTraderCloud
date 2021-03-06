import { ACTION_TYPES as CONNECTION_ACTION_TYPES, DisconnectAction } from '../../operations/connectionStatus'
import { CurrencyPairPosition, HistoricPosition } from '../../types'
import { ACTION_TYPES, AnalyticsActions } from './actions'

export interface AnalyticsState {
  currentPositions: CurrencyPairPosition[]
  history: HistoricPosition[]
}

const INITIAL_STATE: AnalyticsState = {
  currentPositions: [],
  history: []
}

export const analyticsReducer = (
  state: AnalyticsState = INITIAL_STATE,
  action: AnalyticsActions | DisconnectAction
): AnalyticsState => {
  switch (action.type) {
    case ACTION_TYPES.ANALYTICS_SERVICE:
      return { ...state, ...action.payload }
    case CONNECTION_ACTION_TYPES.DISCONNECT_SERVICES:
      return INITIAL_STATE
    default:
      return state
  }
}

export default analyticsReducer

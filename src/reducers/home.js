import {combineReducers} from 'redux'

const feature = (state = {
  exchange: undefined,
  base: undefined,
  help: undefined,
}, action) => {
  switch(action.type) {
    default: return state
  }
}

export default combineReducers({
  feature,
  announcements: () => [],
  members: () => [],
  achievements: ()=> ({league: {}, projects: []}),
  workChanceDatas: () => [],
  experts: () => [],
  recommendTalents: () => [],
  footer: () => ({hotClicks: [], latestArticle: []}),
})
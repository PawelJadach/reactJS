// selectors

export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE_SEARCH = createActionName('CHANGE_SEARCH');
// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE_SEARCH });
// reducer
export default function reducer(state = '', action = {}) {
  console.log(action.payload);
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.payload;
    default:
      return state;
  }
}


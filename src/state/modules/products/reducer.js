import { 
    SEARCH_FAILURE,
    SEARCH_FULLFILED,
    SEARCH_REQUESTED,
    SEARCH_SUCCEDED,
    DETAIL_FAILURE,
    DETAIL_FULLFILED,
    DETAIL_REQUESTED,
    DETAIL_SUCCEDED,
} from './actionTypes'

const initialState = {
  term: '',
  loading: false,
  result: null,
  error: null,
  product: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_REQUESTED:
        return {
            ...state,
            term: action.payload,
            error: null,
            loading: true,
            product: null,
        }
    case SEARCH_SUCCEDED:
        return {
            ...state,
            result: action.payload
        }
    case SEARCH_FAILURE:
        return {
            ...state,
            error: action.payload
        }
    case SEARCH_FULLFILED:
        return {
            ...state,
            loading: false,
        }
    case DETAIL_REQUESTED:
        return {
            ...state,
            error: null,
            loading: true,
        }
    case DETAIL_SUCCEDED:
        return {
            ...state,
            product: action.payload
        }
    case DETAIL_FAILURE:
        return {
            ...state,
            error: action.payload
        }
    case DETAIL_FULLFILED:
        return {
            ...state,
            loading: false,
        }
    default:
      return state;
  }
}
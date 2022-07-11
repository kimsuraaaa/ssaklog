import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    const { type } = action;
    switch (type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          // ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  },
});

export default rootReducer;

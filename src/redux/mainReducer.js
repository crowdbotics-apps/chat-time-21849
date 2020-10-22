import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp215156383Reducer from '../features/SignUp215156383/redux/reducers'
import SignIn46156377Reducer from '../features/SignIn46156377/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp215156383: SignUp215156383Reducer,
SignIn46156377: SignIn46156377Reducer,

});
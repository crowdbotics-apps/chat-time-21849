import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn214156384Reducer from '../features/SignIn214156384/redux/reducers'
import SignUp215156383Reducer from '../features/SignUp215156383/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn214156384: SignIn214156384Reducer,
SignUp215156383: SignUp215156383Reducer,

});
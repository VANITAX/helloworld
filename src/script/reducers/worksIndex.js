import types from '../actions/ActionTypes';
import createReducer from './createReducer';
import Immutable , { Record , Map} from 'immutable';



function GET_INDEX_WORKS_DATA ( state , action ) {
  const productState = Map({
    test: 1234,
    abcd: 1233
  })

  console.log(productState.valueSeq().map((i)=>{
      return i;
    }))
  return 'fuck';
}


const handlers = {
  [types.GET_INDEX_WORKS_DATA]: GET_INDEX_WORKS_DATA,
}

export default createReducer( 'hihi' , handlers );

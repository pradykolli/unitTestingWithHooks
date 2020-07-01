import {ActionsType, initialStateType} from '../Cafe/types'
import { cafeReducer } from '../Cafe/CafeReducer';
let mockState = {
  Cakes: 10,
  Coffees: 20,
  Bagels: 30,
}
  const mockContext = {
    state: mockState,
    dispatch: jest.fn() 
  }
  const dispatchMock = (action:ActionsType) => {
    mockState = cafeReducer(mockState, action);
  } 
  export const mockStateDispatch = {
    state: mockState,
    dispatch: dispatchMock
  }
  export default mockContext
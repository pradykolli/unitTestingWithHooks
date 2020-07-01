import mockContext, {mockStateDispatch} from '../testHelpers/testHelper'
import {cafeReducer} from './CafeReducer'
describe('Cafe Reducer Tests', () => {
    it("Add Coffee should increase the count", async () => {
        const newState = cafeReducer(mockContext.state, { type: "addCoffee"});
      
        expect(newState.Coffees).toEqual(21);
      });
      
    it("Buy Coffee should decrease the count", async () => {
        const newState = cafeReducer(mockContext.state, { type: "buyCoffee"});
      
        expect(newState.Coffees).toEqual(19);
      });
      it("Add Cakes should increase the count", async () => {
        const newState = cafeReducer(mockContext.state, { type: "addCake"});
      
        expect(newState.Cakes).toEqual(11);
      });
      
      it("Buy Coffee should decrease the count", async () => {
        const newState = cafeReducer(mockContext.state, { type: "buyCake"});
      
        expect(newState.Cakes).toEqual(9);
      });
      it("Add Bagels should increase the count", async () => {
        const newState = cafeReducer(mockContext.state, { type: "addBagel"});
      
        expect(newState.Bagels).toEqual(31);
      });
      
      it("Buy Coffee should decrease the count", async () => {
        const newState = cafeReducer(mockContext.state, { type: "buyBagel"});
      
        expect(newState.Bagels).toEqual(29);
      });
})
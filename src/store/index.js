import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import product from "./reducers/product";
import notice from "./reducers/notice";

const appReducer = function (state = { scrollTo: 0 }, action) {
  // scrollTo:
  switch (action.type) {
    case "CHANGE_SCROLL_TO":
      // 每次设置随机数,保证数据改变
      return { ...state, scrollTo: Math.random() };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  product, // product: product
  notice,
  app: appReducer,
});

export default createStore(rootReducer, compose(applyMiddleware(...[thunk])));

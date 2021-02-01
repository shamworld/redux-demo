/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-02 01:12:07
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-02 01:42:59
 * @Deprecated: 否
 * @FilePath: /redux/demo4/redux/applyMiddleware.js
 */
import compose from './compose.js';

const applyMiddleware = function(...middlewares) {
    return function (oldCreateStore){
        return function (reducer,initState){
            const store = oldCreateStore(reducer,initState);
            const simpleStore = {
                getState:store.getState
            }
            const chain = middlewares.map((middleware)=>middleware(simpleStore));
            const dispatch = compose(...chain)(store.dispatch);

            return{
                ...store,
                dispatch
            }
        }
    }
};

export default applyMiddleware;
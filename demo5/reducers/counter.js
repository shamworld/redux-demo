/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-01 20:55:49
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-02 01:58:21
 * @Deprecated: 否
 * @FilePath: /redux/demo5/reducers/counter.js
 */
let initState = {
    count:10
}

export default function counterReducer(state,action){
    if(!state){
        state = initState;
    }
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                count:state.count+1,
            };
        case 'DECREMENT':
            return {
                ...state,
                count:state.count-1,
            }; 
        default:
            return state; 
    }
}
/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-01 20:55:52
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-01 21:08:40
 * @Deprecated: 否
 * @FilePath: /redux/demo2/reducers/info.js
 */
let initState = {
    name:'Roy',
    description:'贪吃的猫',
};
export default function infoReducer(state,action){
    if(!state){
        state = initState;
    }
    switch(action.type){
        case 'SET_NAME':
            return {
                ...state,
                name:action.name
            };
        case 'SET_DESCRIPTOIN':
            return {
                ...state,
                description:action.description
            }
        default:
            return state;
    }
}
/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-01 21:23:41
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-01 21:38:30
 * @Deprecated: 否
 * @FilePath: /redux/demo2/redux/combineReducers.js
 */
export default function combineReducers(reducers){
    const reducersKeys = Object.keys(reducers);//先把参数里面所有的键值拿出来
    //返回一个普通结构的reducer函数
    return function combinaction(state={},action){
        const nextState = {};
        for(let i=0;i<reducersKeys.length;i++){
            // reducers里面每个键的值都是一个reducer，我们把它拿出来运行下就可以得到对应键新的state值
            // 然后将所有reducer返回的state按照参数里面的key组装好
            // 最后再返回组装好的newState就行
            const key = reducersKeys[i];
            const reducer = reducers[key];
            //现有的状态
            const prevStateForKey = state[key];
            const nextStateForKey = reducer(prevStateForKey,action);
            nextState[key] = nextStateForKey;

        }
        return nextState;
    }
}
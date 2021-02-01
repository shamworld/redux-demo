/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-01 20:19:52
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-01 21:58:51
 * @Deprecated: 否
 * @FilePath: /redux/demo2/redux/createStore.js
 */
export default function createStore(reducer,initState){
    let state = initState;//记录所有的状态
    let listeners = [];//保存所有注册的回调
    
    function subscribe(listener){
        listeners.push(listener);//subscribe就是将订阅器保存下来
    }

    // dispatch就是将所有的回调拿出来依次执行就行
    function dispatch(action) {
        //reducer负责更新数据
        state = reducer(state,action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }


    //getState直接返回state
    function getState(){
        return state
    }

    return {
        subscribe,
        getState,
        dispatch
    }
    
}
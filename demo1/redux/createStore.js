export default function createStore(initState){
    let state = initState;//记录所有的状态
    let listeners = [];//保存所有注册的回调
    
    
    function subscribe(listener){
        listeners.push(listener);//subscribe就是将订阅器保存下来
    }

    // dispatch就是将所有的回调拿出来依次执行就行
    function dispatch(newState) {
        state = newState;
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
/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-02 00:20:53
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-02 00:45:41
 * @Deprecated: 否
 * @FilePath: /redux/demo3/middlewares/loggerMiddleware.js
 */
const loggerMiddleware = (store)=>(next)=>(action)=>{
    console.log("this state",store.getState());
    console.log("action",action);
    next(action);
    console.log("next state",store.getState());
}

export default loggerMiddleware;
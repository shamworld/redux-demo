/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-02 00:20:53
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-02 01:36:18
 * @Deprecated: 否
 * @FilePath: /redux/demo3/middlewares/timeMiddleware.js
 */
const timeMiddleware = (store)=>(next)=>(action)=>{
    console.log("时间:",new Date().getTime());
    next(action);
}

export default timeMiddleware;
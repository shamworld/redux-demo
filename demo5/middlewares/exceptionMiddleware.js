/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-02 00:20:53
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-02 00:44:08
 * @Deprecated: 否
 * @FilePath: /redux/demo3/middlewares/exceptionMiddleware.js
 */

const exceptionMiddleware = (store)=>(next)=>(action)=>{
    try {
        next(action);
    } catch (error) {
        console.error('错误报告',error);
    }
}

export default exceptionMiddleware;


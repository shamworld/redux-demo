/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-02 01:08:42
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-02 01:10:15
 * @Deprecated: 否
 * @FilePath: /redux/demo4/redux/compose.js
 */
export default function compose(...funcs){
    if(funcs.length==0){
        return (arg)=>arg;
    }
    if(funcs.length==1){
        return funcs[0];
    }
    return funcs.reduce((a,b)=>(...args)=>a(b(...args)));
}
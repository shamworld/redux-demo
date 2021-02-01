/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-01 20:55:52
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-02 01:51:42
 * @Deprecated: 否
 * @FilePath: /redux/demo5/reducers/info.js
 */
function setName(){
    return {
        type: 'SET_NAME',
        name:'贪吃的猫12'
    }
}

export {setName};
/**
 * Created by visual studio code
 * @author Iceberry
 * @date 2022-01-12
 * @version 1.0
 * @description apis for get course data
 */
const baseUrl = "https://chnsx.github.io/Chnsxlab"
let xhr = new XMLHttpRequest();

/**
 * 请求获取课程数据，以状态码200为成功，其它标志为失败
 * @param {function} fn1 请求成功时的回调函数
 * @param {function} fn2 请求失败时的回调函数
 */
export const getCourseData = (fn1, fn2) => {
    xhr.open("GET", baseUrl + '/json/card.json')
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fn1.call(this, xhr.status, xhr.responseText)
        } else if (xhr.status != 200) {
            fn2.call(this, xhr.status, xhr.statusText)
        }
    }
    xhr.send()
}

/**
 * 请求获取各种语言卡片的颜色，以状态码200为成功，其它标志为失败
 * @param {function} fn1 请求成功时的回调函数
 * @param {function} fn2 请求失败时的回调函数
 */
export const getCourseColor = (fn1, fn2) => {
    xhr.open("GET", baseUrl + '/json/color.json')
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fn1.call(this, xhr.status, xhr.responseText)
        } else if (xhr.status != 200) {
            fn2.call(this, xhr.status, xhr.statusText)
        }
    }
    xhr.send()
}

export default { getCourseData, getCourseColor }
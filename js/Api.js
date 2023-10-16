/**
 * Created by visual studio code
 * @author Iceberry
 * @date 2022-01-12
 * @version 1.0
 * @description apis for get course data
 */
 const baseUrl = "https://chnsx.github.io/Chnsxlab"

/**
 * 请求获取课程数据，以状态码200为成功，其它标志为失败
 * @returns 获取的课程数据
 */
export function getCourseData(){
    return fetch(`${baseUrl}/json/card.json`,{
        method: 'GET',
        headers:{
            'Content-Type': "application/json",
        },
        redirect: 'follow',
        credentials: 'same-origin'
    })
}

export function getCourseColor(){
    return fetch(`${baseUrl}/json/color.json`,{
        method: 'GET',
        headers:{
            'Content-Type': "application/json"
        },
        redirect: 'follow',
        credentials: 'same-origin'
    })
}

export default { getCourseData, getCourseColor }
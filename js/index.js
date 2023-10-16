/**
 * Created by visual studio code
 * @author Iceberry
 * @date 2022-01-10
 * @version 1.0
 * @description Script for index page
 */
import { loadingVM } from './Viewmodel.js';
import { injectCourseListOfAllLang, injectCoursesCssV2 } from './Template.js';
import { getCourseData, getCourseColor } from './Api.js';

window.onload = function () {
    printLogo()
    adjustIndexSize()

    getCourse()
}

async function getCourse() {
    try {
        const dataResponse = await getCourseData()
        if (!dataResponse.ok) throw new Error(`Can't fetch courseData.`)
        const courseList = await dataResponse.json()

        const colorResponse = await getCourseColor()
        if (!colorResponse.ok) throw new Error(`Can't fetch courseColor.`)
        const courseColorList = await colorResponse.json()

        injectCourseContent(courseList)
        injectCoursesStyle(injectCoursesCssV2(Object.keys(courseList), courseColorList))
        loadingVM.isLoading = false
    } catch (e) {
        console.error(e)
    }
}

window.onresize = function () {
    adjustIndexSize()
}

/**
 * 调整index大小为窗口大小
 */
function adjustIndexSize() {
    const index = document.getElementsByClassName('Index')[0]
    const header = document.getElementsByClassName("Header")[0]
    let winHeight = window.innerHeight
    let headerHeight = window.getComputedStyle(header).height.replace('px', '')
    index.style.height = (winHeight - headerHeight) + 'px'
}

/**
 * 向网页注入课程卡片页内容
 * @param {string} data 要注入的html内容 
 */
function injectCourseContent(data) {
    let allCourseList = injectCourseListOfAllLang(data)
    let courseDiv = document.getElementById('course')
    courseDiv.innerHTML = allCourseList
}

/**
 * 向网页注入课程卡片页css样式表
 * @param {string} styles 要注入的css内容
 */
function injectCoursesStyle(styles) {
    var styleElement = document.getElementById('styles_js')
    if (!styleElement) {
        styleElement = document.createElement('style')
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);

    }
    styleElement.appendChild(document.createTextNode(styles))
}

/**
 * 打印logo
 */
function printLogo() {
    const logo = `   ________                    __      __  \n  / ____/ /_  ____  ______  __/ /___ _/ /_ \n / /   / __ \\/ __ \\/ ___/ |/_/ / __ \`/ __ \\\n\/ /___/ / / / / / (__  )>  </ / /_/ / /_/ /\n\\____/_/ /_/_/ /_/____/_/|_/_/\\__,_/_.___/`
    console.log(logo)
}
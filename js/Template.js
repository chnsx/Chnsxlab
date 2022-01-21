/**
 * Created by visual studio code
 * @author Iceberry
 * @date 2022-01-11
 * @version 1.0
 * @description template for inject courses
 */

/**
 * 生成单个课程卡片内容
 * @param {string} lang 课程所属语言类型
 * @param {Course} course 课程对象
 * @returns html字符串
 */
function injectCourse(lang, course) {
    return `<div class="Card ${lang}" >
                <div class="Card-title">${course.title}</div>
                <div class="Card-extra">
                    <div class="Card-extra-author">@${course.author}</div>
                    <div class="Card-extra-time">${course.time}'</div>
                </div>
                <div class="Card-content">
                    <div class="Card-content-icon">
                        <img class="icon" src=".${course.iconUrl}" />
                    </div>
                    <button class="Card-content-btn ${lang} ${course.btnStatus?'allow':'not-allow'}">
                        <a class="Card-content-btn-link" href="${course.btnStatus?course.url:'javascript:;'}">
                            ${course.btnStatus?'启动':'未完成'}
                        </a>
                    </button>
                </div>
            </div>`
}

/**
 * 生成属于lang的所有课程卡片内容
 * @param {string} lang 课程组所属语言类型
 * @param {Array<Course>} data 属于lang的所有课程卡片信息数组
 * @returns 属于lang的所有课程卡片信息html
 */
function injectCoursesOfOneLang(lang, data) {
    let allCourses = ""
    for (const key of data) {
        allCourses += injectCourse(lang.toLowerCase(), key)
    }
    return `<div id="${lang}">
                <div class="Sort-title ${lang.toLowerCase()}">${lang}</div>
                <div class="Course-list">
                ${allCourses}
                </div>
            </div>`
}

/**
 * 生成从外部获取到的所有lang的课程卡片内容
 * @param {Object} data 外部获得的所有lang的课程卡片内容
 * @returns 所有lang的课程卡片信息html
 */
function injectCourseListOfAllLang(data) {
    let coursesOfAllLang = ""
    for (const key in data) {
        coursesOfAllLang += injectCoursesOfOneLang(key, data[key])
    }
    return coursesOfAllLang
}

/**
 * 根据lang生成不同颜色的课程卡片css
 * @param {string} lang 语言类型
 * @returns 生成的课程卡片css
 */
function injectCourseCss(lang, langColor) {
    return `.${lang}{
        border-left-color: ${langColor};
    }
    
    .Card.${lang}:hover{
        box-shadow: 0px 0px 4px 4px ${langColor}33;
    }
    .Card-content-btn.${lang}.allow {
        background-color: ${langColor};
        cursor: pointer;
    }

    .Card-content-btn.${lang}.not-allow {
        background-color: grey;
    }`
}

/**
 * 根据外部数据生成课程卡片css
 * @param {Array<string>} langs 外部获取到的数据的所有语言类型数组
 * @param {Map<string>} langsColor 外部获取到的所有语言的颜色类型
 * @returns 最终生成的课程卡片css
 */
function injectCoursesCss(langs, langsColor) {
    let css = ""
    for (const lang of langs) {
        css += injectCourseCss(lang.toLowerCase(), langsColor[lang.toLowerCase()])
    }
    return css

}

export default { injectCourseListOfAllLang, injectCoursesCss }

export { injectCourseListOfAllLang, injectCoursesCss }
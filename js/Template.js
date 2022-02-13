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
                    ${course.updated ? `<div class="Card-extra-updated">更新于 ${course.updated}</div>` : ``}
                </div>
                <div class="Card-content">
                    <div class="Card-content-icon">
                        <img class="icon" src=".${course.iconUrl}" />
                    </div>
                    <button class="Card-content-btn ${lang} ${course.btnStatus ? 'allow' : 'not-allow'}">
                        <a class="Card-content-btn-link" href="${course.btnStatus ? course.url : 'javascript:;'}">
                            ${course.btnStatus ? '启动' : '未完成'}
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
 * @deprecated 请使用新函数injectCoursesOfOneLangV2
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
 * 生成属于lang的所有课程卡片内容V2
 * @param {string} lang 课程组所属语言类型
 * @param {Array<Course>} data 属于lang的所有课程卡片信息数组
 * @returns 属于lang的所有课程卡片信息html
 */
function injectCoursesOfOneLangV2(lang, data) {
    return `<div id="${lang}">
                <div class="Sort-title ${lang.toLowerCase()}">${lang}</div>
                <div class="Course-list">
                ${data.map(item => injectCourse(lang.toLowerCase(), item)).join("")}
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
        coursesOfAllLang += injectCoursesOfOneLangV2(key, data[key])
    }
    return coursesOfAllLang
}

/**
 * 生成从外部获取到的所有lang的课程卡片内容V2
 * @param {Object} data 外部获得的所有lang的课程卡片内容
 * @returns 所有lang的课程卡片信息html
 * @todo 未完成
 */
function injectCourseListOfAllLangV2(data) {
    return `${data.map(item => `
            <div id="${item.key}">
                <div class="Sort-title ${item.key.toLowerCase()}">${item.key}</div>
                <div class="Course-list">
                ${item.map(i => injectCourse(item.key.toLowerCase(), i.key)).join("")}
                </div>
            </div>
        `).join("")
        }`
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
 * @deprecated 请使用新函数injectCoursesCssV2
 */
function injectCoursesCss(langs, langsColor) {
    let css = ""
    for (const lang of langs) {
        css += injectCourseCss(lang.toLowerCase(), langsColor[lang.toLowerCase()])
    }
    return css
}

/**
 * 根据外部数据生成课程卡片css
 * @param {Array<string>} langs 外部获取到的数据的所有语言类型数组
 * @param {Map<string>} langsColor 外部获取到的所有语言的颜色类型
 * @returns 最终生成的课程卡片css
 */
function injectCoursesCssV2(langs, langsColor) {
    return `${langs.map(lang => `
            .${lang.toLowerCase()}{
                border-left-color: ${langsColor[lang.toLowerCase()]};
            }
            
            .Card.${lang.toLowerCase()}:hover{
                box-shadow: 0px 0px 4px 4px ${langsColor[lang.toLowerCase()]}33;
            }

            .Card-content-btn.${lang.toLowerCase()}.allow {
                background-color: ${langsColor[lang.toLowerCase()]};
                cursor: pointer;
            }
        
            .Card-content-btn.${lang.toLowerCase()}.not-allow {
                background-color: grey;
            }
        `).join('')
        }`
}

export default { injectCourseListOfAllLang, injectCoursesCss, injectCoursesCssV2 }

export { injectCourseListOfAllLang, injectCoursesCss, injectCoursesCssV2 }
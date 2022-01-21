/**
 * Created by visual studio code
 * @author Iceberry
 * @date 2022-01-11
 * @version 1.0
 * @description Model for serialisation and deserialisation 
 */

/**
 * 单个课程卡片模型
 */
class Course {
    constructor(title, author, time, iconUrl, btnStatus, url) {
        this.title = title
        this.author = author
        this.time = time
        this.iconUrl = iconUrl
        this.btnStatus = btnStatus
        this.url = url
    }
}

/**
 * 卡片列表模型
 * @todo 整个项目并未使用此模型
 */
class CourseList {
    constructor(Course) {
        this.Course = Course
    }
}

export default { Course, CourseList }

export { Course, CourseList }
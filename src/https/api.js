/**
 * 汇总所有的modules下的js对象
 * 包含了所有的请求方法
 */
import user from './modules/user';
import student from './modules/student';
import subject from './modules/subject';
import classes from './modules/class';
export default {
    user,
    student,
    subject,
    classes
}
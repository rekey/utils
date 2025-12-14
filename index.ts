import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { createHash } from 'crypto';

export * from './number';

dayjs.extend(utc);

/**
 * 计算字符串的 SHA-256 哈希值
 * @param {string} s - 需要计算哈希值的输入字符串
 */
export function sha256(s: string) {
    return createHash('sha256').update(s).digest('hex');
}

/**
 * 等待指定的毫秒数
 * @param ms 要等待的毫秒数
 * @returns 一个在指定时间后解析的Promise
 */
export async function wait(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/**
 * 获取当前时间的整分钟时间戳（毫秒）
 * @param now 可选，指定时间戳（毫秒）。默认为当前时间
 * @returns 返回整分钟的时间戳（毫秒）
 */
export function getMinuteMS(now = 0) {
    if (now === 0) {
        /**
         * 将时间戳或Date对象格式化为UTC时间的字符串
         * @param time 可选的时间参数，可以是时间戳或Date对象，默认为当前时间
         * @returns 格式化后的UTC时间字符串，格式为'YYYY-MM-DD HH:mm:ss'
         */
        now = Date.now();
    }
    return Math.floor(now / 60000) * 60000;
}

/**
 * 将时间戳或日期对象格式化为字符串
 * @param {number | Date} [time] - 可选的时间参数，可以是时间戳或Date对象，默认为当前时间
 * @returns {string} 格式为'YYYY-MM-DD HH:mm:ss'
 */
export function date(time?: number | Date) {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss');
}

/**
 * 将时间戳或Date对象格式化为UTC时间的字符串
 * @param time 可选的时间参数，可以是时间戳或Date对象，默认为当前时间
 * @returns 格式化后的UTC时间字符串，格式为'YYYY-MM-DD HH:mm:ss'
 */
export function dateUTC(time?: number | Date) {
    return dayjs(time).utc().format('YYYY-MM-DD HH:mm:ss');
}

/**
 * 获取当前UTC时间的毫秒时间戳
 * @returns 当前UTC时间的毫秒时间戳
 */
export function getUTCTime() {
    return dayjs().utc().unix() * 1000;
}

/**
 * 输出带时间戳的日志信息
 * @param messages 要打印的任意类型参数列表，会自动在开头添加当前时间戳
 */
export function log(...messages: any[]) {
    messages.unshift(`[${date()}]`);
    messages = messages.map((item) => {
        if (Array.isArray(item)) {
            return JSON.stringify(item);
        }
        if (typeof item === 'object') {
            return JSON.stringify(item);
        }
        return item;
    });
    console.log(...messages);
}

/**
 * 创建一个带有指定分类的日志记录函数
 * @param {string} category - 日志分类标识
 */
export function getLog(category: string) {
    return function (...messages: any[]) {
        messages.unshift(category);
        log(...messages);
    };
}

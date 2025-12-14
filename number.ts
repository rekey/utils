import BigNumber from "bignumber.js";

/**
 * 比较两个字符串表示的数字是否满足 x >= y
 * @param x - 第一个数字字符串
 * @param y - 第二个数字字符串
 * @returns 如果 x >= y 返回 true，否则返回 false
 */
export function gte(x: string, y: string) {
    const xx = new BigNumber(x);
    const yy = new BigNumber(y);
    return xx.gte(yy);
}

/**
 * 计算两个字符串数字的乘积
 * @param x - 第一个数字字符串
 * @param y - 第二个数字字符串
 * @returns 返回两个数字相乘后的结果（BigNumber对象）
 */
export function mul(x: string, y: string) {
    const xx = new BigNumber(x);
    const yy = new BigNumber(y);
    return xx.multipliedBy(yy);
}

/**
 * 将两个字符串数字相加
 * @param x 第一个数字字符串
 * @param y 第二个数字字符串
 * @returns 相加后的结果（BigNumber对象）
 */
export function plus(x: string, y: string) {
    const xx = new BigNumber(x);
    const yy = new BigNumber(y);
    return xx.plus(yy);
}

/**
 * 计算两个字符串数字的差值
 * @param x 被减数字符串
 * @param y 减数字符串
 * @returns 返回两个数字相减的结果，使用BigNumber处理
 */
export function minus(x: string, y: string) {
    const xx = new BigNumber(x);
    const yy = new BigNumber(y);
    return xx.minus(yy);
}

/**
 * 大数字符串除法运算
 * @param x - 被除数字符串
 * @param y - 除数字符串
 * @returns BigNumber 除法运算结果
 */
export function div(x: string, y: string) {
    const xx = new BigNumber(x);
    const yy = new BigNumber(y);
    return xx.div(yy);
}

/**
 * 将字符串数字格式化为指定小数位数的字符串
 * @param x 要格式化的数字字符串
 * @param n 要保留的小数位数
 * @returns 格式化后的字符串
 */
export function toFixed(x: string, n: number) {
    const xx = new BigNumber(x);
    return xx.toFixed(n);
}

/**
 * 检查字符串表示的数值是否为零
 * @param {string} x - 要检查的数值字符串
 */
export function isZero(x: string) {
    const xx = new BigNumber(x);
    return xx.isZero();
}

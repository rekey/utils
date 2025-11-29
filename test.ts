import { getLog } from "./index";

const log = getLog('test');

log('abc', 123, [1, '3', 'a'], { a: 'b', c: { d: 'abc', f: 1, e: '123' } }, true, null, undefined);
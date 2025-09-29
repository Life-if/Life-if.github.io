import { Jieba } from '@node-rs/jieba'
import { dict } from '@node-rs/jieba/dict.js'
const jieba = Jieba.withDict(dict)
const r = jieba.cut("草莓", false);

console.log(r);
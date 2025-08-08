import { isMasterApp } from 'hel-iso'
import { libReady } from 'hel-lib-proxy'
import { LIB_NAME } from './configs/subApp'
import { preFetchLib, bindVueRuntime } from "hel-micro";
import * as Vue from 'vue'

bindVueRuntime({
  Vue,
});

;(async function () {
    try {
        if (isMasterApp()) {
            console.log('主应用模式，加载loadApp...')
            await import('./loadApp')
        }
    } catch (error) {
        console.error('主应用main.js执行出错:', error)
        throw error
    }
})().catch(console.error)

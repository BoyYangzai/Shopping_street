import axios from 'axios'
import Vue from 'vue'
Vue.prototype.axios = axios
export function request(dizhi) {
    const instance = axios.create(
        {
            timeout: 5000
        }
    )
    return instance(dizhi.url)
}
import 'whatwg-fetch'
import 'es6-promise'

export function getData() {
    // '/api/1' 获取字符串
    let result = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result.then(res => {
        if (typeof res === 'string') {
            return res.json();   //为字符串是转化为json
        }
        return res
    }).then(text => {
        console.log(text)
    });

    // '/api/2' 获取json
    let result1 = fetch('/api/2', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result1.then(res => {
        if (typeof res === 'string') {
            return res.json();   //为字符串是转化为json
        }
        return res
    }).then(json => {
        console.log(json)
    })
}

export function postData() {
    // '/api/post' 提交数据
    let result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: "a=100&b=200"
    });

    result.then(res => {
        if (typeof res === 'string') {
            return res.json();   //为字符串是转化为json
        }
        return res
    }).then(json => {
        console.log(json)
    })
}

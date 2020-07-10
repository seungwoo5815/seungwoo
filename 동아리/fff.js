var hello = function(name) {
    return new Promise(function(resolve, reject) {
        if(name === '') {
            reject('이름은 비어있습니다!')

        }
        resolve(name + '님 반갑습니다!')
        
    }}
}

var asyncHello = promise


function fetchInfo(a) {
    let mainInfo;
    mainInfo = fetch(a).then(responce => {
        if(responce.status >= 200 && responce.status < 400)
            return responce.json()
        else console.log('err')
    }).catch(err => console.log('what?',err))
    return  mainInfo
}

function getInfo() {
    let e = fetchInfo('https://jsonplaceholder.typicode.com/users/');
    return e;
}


export {getInfo}
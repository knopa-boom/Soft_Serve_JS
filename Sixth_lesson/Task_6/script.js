var obj = {
    name: 'Nastya',
}

function isEmpty(obj) {

    for (var key in obj) {
        return false;
    }

    return true;
}

var res = isEmpty(obj);
console.log(res);

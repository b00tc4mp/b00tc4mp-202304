function filter(array, callback) {
    var filtered = [] // new Array

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (callback(element))
            filtered[filtered.length] = element
    }
 
    return filtered
}
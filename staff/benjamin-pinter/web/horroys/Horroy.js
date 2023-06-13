function Horroy() {
    this.length = 0
}

Horroy.prototype.forEach = function (callback) {
    for(var i = 0; i < this.length; i++)
        callback(this[i])
}

Horroy.prototype.filter = function (callback) {
    var filtered = new Horroy

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {
            filtered[filtered.length] = element
            filtered.length++
        }
    }

    return filtered
}

Horroy.prototype.push = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
        this[this.length] = elements[i]
        this.length++
    }

    return this.length
}

Horroy.prototype.pop = function() {
    var last = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    
    return last
}

Horroy.prototype.shift = function () {
    var element = this[0]
    for (i = 0; i < this.length; i++)
            this[i] = this[i+1]
    delete this[this.length -1]
    this.length--
    return element
}

Horroy.prototype.join = function (separator = ',') {
    let joined = ''

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (element !== undefined)
            joined = joined + element

        if (i < this.length - 1)
            joined = joined + separator
    }

    return joined
}

Horroy.prototype.some = function (callbackFn) {
    for (var i = 0; i < this.length ; i++) {
        if (callbackFn(this[i]))
            return true
    }
    return false
}

Horroy.prototype.every = function (callbackFn, thisArg) {
    for(var i = 0; i < this.length; i++) {
        if(!callbackFn(this[i]))
            return false
    }
    return true
}

Horroy.prototype.lastIndexOf = function (searchElement ,fromIndex = 0) {
    for(i = this.length - fromIndex - 1 ; i >= 0; i--) {
        var element = this[i]
        if(element === searchElement)
            return i
    }
    return -1
}

Horroy.prototype.group = function (callback) {
    var result = {}

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var property = callback(element)

        if (!result[property])
            result[property] = new Horroy

        var h = result[property]
        h[h.length] = element
        h.length++
    }

    return result
}



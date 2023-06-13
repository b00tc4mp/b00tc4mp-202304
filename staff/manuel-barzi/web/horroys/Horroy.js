function Horroy() {
    this.length = 0
}

Horroy.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++)
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

Horroy.prototype.push = function (...elements) {
    for (let i = 0; i < elements.length; i++) {
        this[this.length] = elements[i]
        this.length++
    }

    return this.length
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
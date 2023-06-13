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

Horroy.prototype.unshift = function (...elements) {
    for (var i = 0; i < elements.length; i++) {
        this.length++
    }
    for (var j = this.length - 1; j >= 0; j--)
        this[j] = this[j - elements.length]
    for (var s = 0; s < elements.length; s++)
        this[s] = elements[s]

    return this.length

}

Horroy.prototype.reverse = function () {
    var a = this.length - 1
    var b = 0
    for (let i = 1 + this.length % 2; i < this.length; i++) {
        var c = this[b]
        var d = this[a]
        this[a] = c
        this[b] = d
        a--
        b++
    }
    return this
}

Horroy.prototype.map = function (callback) {
    var mapped = new Horroy
    for (var i = 0; i < this.length; i++)
        mapped[i] = callback(this[i])

    mapped.length = this.length
    return mapped
}

Horroy.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (callbackFn(this[i]))
            return this[i]
    }
    return
}
Horroy.prototype.splice = function (start, deleteCount, ...items) {
    if (deleteCount === 0) {
        for (var i = this.length - 1; i >= start; i--)
            this[i + items.length] = this[i]


        for (var i = 0; i < items.length; i++)
            this[start + i] = items[i]

        this.length = this.length + items.length

        return new Horroy

    } else if (deleteCount > 0) {
        var removed = new Horroy

        for (var i = start; i < start + deleteCount; i++) {
            removed[removed.length] = this[i]
            removed.length++

        }

        //removed.length = deleteCount


        var displacement = items.length - deleteCount

        if (displacement > 0) {
          
            for (var i = this.length - 1; i >= start + deleteCount; i--)
            this[i + displacement] = this[i]

            this.length = this.length + displacement
  
        }
        else if (displacement < 0){
            for (var i = start; i <= start + deleteCount; i++)
            this[i + displacement] = this[i]

            this.length = this.length + displacement
        }
        for (var i = 0; i < items.length; i++)
            this[start + i] = items[i]



        return removed
    }
}

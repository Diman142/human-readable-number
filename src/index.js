module.exports = function toReadable(n) {
    if (n == 0) {
        return 'zero'
    }
    else {
        let numArr = n.toString().split('')
        if (numArr.length === 1) {
            return getFirst(numArr[0])
        } else if (numArr.length === 2) {
            if (numArr[0] == 1) {
                let arg = numArr[0] + numArr[1]
                return getUniqNumber(arg)
            } else if (numArr[1] == 0) {
                return getSecond(numArr[0])
            }
            else {
                return getSecond(numArr[0]) + ' ' + getFirst(numArr[1])
            }
        } else {
            if (numArr[1] == 1) {
                let hundreds = getFirst(numArr[0])
                let tens = getUniqNumber(numArr[1] + numArr[2])
                return `${hundreds} hundred ${tens}`
            }
            else {
                let hundreds = getFirst(numArr[0])
                let tens = getSecond(numArr[1])
                let ones = getFirst(numArr[2])

                if (!tens) {
                    return (`${hundreds} hundred ${ones || ''}`).trim()
                }

                let str = `${hundreds} hundred ${tens} ${ones || ''}`

                return str.trim()
            }
        }
    }

    function getFirst(a) {
        switch (a) {
            case '1':
                return 'one'
            case '2':
                return 'two'
            case '3':
                return 'three'
            case '4':
                return 'four'
            case '5':
                return 'five'
            case '6':
                return 'six'
            case '7':
                return 'seven'
            case '8':
                return 'eight'
            case '9':
                return 'nine'
            default: ''
        }
    }

    function getSecond(a) {
        switch (a) {
            case '2':
                return 'twenty'
            case '3':
                return 'thirty'
            case '4':
                return 'forty'
            case '5':
                return 'fifty'
            case '6':
                return 'sixty'
            case '7':
                return 'seventy'
            case '8':
                return 'eighty'
            case '9':
                return 'ninety'
            default: ''
        }
    }

    function getUniqNumber(a) {
        if (a == 10) {
            return 'ten'
        }
        else if (a == 11) {
            return 'eleven'
        }
        else if (a == 12) {
            return 'twelve'
        }
        else if (a == 13) {
            return 'thirteen'
        }
        else if (a == 14) {
            return 'fourteen'
        }
        else if (a == 15) {
            return 'fifteen'
        }
        else if (a == 16) {
            return 'sixteen'
        }
        else if (a == 17) {
            return 'seventeen'
        }
        else if (a == 18) {
            return 'eighteen'
        }
        else if (a == 19) {
            return 'nineteen'
        }
    }
}


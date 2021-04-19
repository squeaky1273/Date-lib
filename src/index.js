const { months, mons, days, dys } = require('./utils')

class D {
    constructor(...args) {
        this._date = new Date(...args)
    }

    get year() {
        return this._date.getFullYear()
    }

    get yr() {
        return this._date.getFullYear() % 100
    }

    get month() {
        return months[this._date.getMonth()]
    }

    get mon() {
        return mons[this._date.getMonth()]
    }

    get day() {
        return days[this._date.getDay()]
    }

    get dy() {
        return dys[this._date.getDay()]
    }

    get date() {
        return this._date.getDate()
    }

    get hour() {
        return this._date.getHours()
    }

    get min() {
        return this._date.getMinutes()
    }

    get sec() {
        return this._date.getSeconds()
    }

    format(mask = 'M D Y') {
        const dict = {
            "Y": this.year,
            "y": this.yr,
            "M": this.month,
            "m": this.mon,
            "D": this._date.getDate(),
            "d": this.date,
            "H": this._date.getHours(),
            "h": this._date.getHours(),
            "I": this._date.getMinutes(),
            "i": this.mins,
            "S": this._date.getSeconds(),
            "s": this.secs,
        }

        let output = ''
        for (let i = 0; i < mask.length; i++) {
            if (dict[mask[i]] === undefined) {
                output += mask[i]
            } else {
                output += dict[mask[i]]
            }
        }
        return output
    }

    when() {
        const today = new D();
        const diffYear = this.year - today.year
        const diffMonth = this._date.getMonth() - today._date.getMonth() + diffYear * 12;
        const diffDay = this._date - today.date
        
        if (monthDiff > 11) {
            return `${diffYear} year(s) from today`;
        } else if (diffMonth > 0) {
            return `${diffMonth} month(s) from today`;
        } else if (diffMonth < 0) {
            return `${diffMonth} month(s) ago`;
        } else if (diffMonth > 0) {
            return `${diffDay} day(s) ago`;
        } else if (diffMonth < 0) {
            return `${diffDay} days from now`;
        } else {
            return 'today';
        }
    }
}

module.exports = D
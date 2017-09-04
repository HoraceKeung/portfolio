import moment from 'moment'
import _ from 'lodash'

const functions = {
    camelToKebab: function (string) {
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    },
    splitCamel: function (string) {
        return string.split(/(?=[A-Z])/g).join(' ')
    },
    formatDate: function (date) {
        return moment(date, 'YYYYMMDD').format('Do MMM YYYY')
    },
    sortObjByDate: function (arr) {
        return arr.sort(function (a, b) {
            if (moment(a.date).isBefore(b.date)) {
                return 1
            }
            if (moment(b.date).isBefore(a.date)) {
                return -1
            }
            return 0
        })
    },
    searchWorkOrBlog: function (arr, searchWord) {
        if (searchWord === '') {
            return functions.sortObjByDate(arr.slice(0))
        }
        return functions.sortObjByDate(arr.filter(x => {
            const titleArr = functions.splitCamel(x.name).toLowerCase().split(' ')
            const searchWordArr = searchWord.toLowerCase().split(' ').filter(x => {
                return x.charAt(0) !== '#'
            })
            for (let i = 0; i < titleArr.length; i++) {
                for (let j = 0; j < searchWordArr.length; j++) {
                    if (titleArr[i].includes(searchWordArr[j])) {
                        return true
                    }
                }
            }
            const searchTagArr = searchWord.toLowerCase().split(' ').filter(x => {
                return x.charAt(0) === '#'
            }).reduce((a, b) => {
                return a.concat(_.drop(b.split('#')))
            }, [])
            for (let i = 0; i < x.tags.length; i++) {
                for (let j = 0; j < searchTagArr.length; j++) {
                    if (x.tags[i].toLowerCase() === searchTagArr[j]) {
                        return true
                    }
                }
            }
        }))
    }
}

export default functions

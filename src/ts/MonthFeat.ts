function dateToLegal(dates: Date) {
    let date = dates.toISOString().split('T')[0];
    if (date.length !== 10) {
        if (date[7] !== '-') {
            date = date.substring(0, 5) + '0' + date.substring(5);
        }
        if (date.length !== 10) {
            date = date.substring(0, 8) + '0' + date.substring(8);
        }
    }
    return date;
}
function monthToLegal(month: string) {
    if (month.length !== 7) {
        month = month.substring(0, 4) + '0' + month.substring(4);
    }
    return month;
}
function monthFeat(since: string | number | Date, until: string | number | Date) {
    since = new Date(since);
    until = new Date(until);
    // console.log(since, until);
    const monthList = [];
    while (since <= until) {
        const year = since.getFullYear();
        const month = since.getMonth();
        if (month < 9) {
            monthList.push(`${year}-0${month + 1}`);
        } else {
            monthList.push(`${year}-${month + 1}`);
        }
        since.setMonth(month + 1);
    }
    // 返回结果
    return monthList;
}
function convertMonthListToParis(monthList: string | any[]) {
    const monthPairs = [];
    let since = new Date(monthList[0]);
    let until = new Date(monthList[0]);
    // console.log(dateToLegal(since), dateToLegal(until));
    for (let i= 1; i < monthList.length; i++) {
        const month = new Date(monthList[i]);
        // console.log(dateToLegal(month), dateToLegal(until));
        // console.log(month.getFullYear() - until.getFullYear());
        // console.log(month.getMonth(), until.getMonth());
        if (month.getFullYear() - until.getFullYear() === 1 && month.getMonth() === 0 && until.getMonth() === 11) {
            until = month;
        } else if (month.getMonth() - until.getMonth() !== 1) {
            monthPairs.push([dateToLegal(since).slice(0, 7), dateToLegal(until).slice(0, 7)]);
            since = month;
            until = month;
        }
        else if (i === monthList.length - 1) {
            monthPairs.push([dateToLegal(since).slice(0, 7), dateToLegal(month).slice(0, 7)]);
        } else {
            until = month;
        }
    }
    return monthPairs;
}

const since = '2023-04';
const until = '2024-04';
const monthList = monthFeat(since, until);
// console.log(monthList);
console.log(convertMonthListToParis(monthList));
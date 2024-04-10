function monthFeat(since, until) {
    since = new Date(since);
    until = new Date(until);
    console.log(since, until);
    const monthList = [];
    while (since <= until) {
        const year = since.getFullYear();
        const month = since.getMonth();
        monthList.push(`${year}-${month + 1}`);
        since.setMonth(month + 1);
    }
    // 返回结果
    return monthList;
}

const since = '2023-4';
const until = '2024-4';
const monthList = monthFeat(since, until);
console.log(monthList);
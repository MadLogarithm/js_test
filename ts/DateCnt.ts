function dateCnt(since: number | Date, until: number | Date) {
    // @ts-ignore
    return (until - since) / (3600 * 24 * 1000);
}

const since = new Date('2023-12-11');
const until = new Date('2024-04-11');
console.log(dateCnt(since, until));
setTimeout(() =>{
    console.log(1);
}, 0) // 0表示毫秒

console.log(2)

// @ts-ignore
new Promise((resolve: () => void) => {
    console.log(3)
    resolve()
}).then(() => {
    console.log(4);
})

console.log(5)
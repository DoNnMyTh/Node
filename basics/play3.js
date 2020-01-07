const fetchDate = callback => {
    setTimeout(() => {
        callback('Done');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is Done!');
    fetchDate(text => {
        console.log(text);
    });
}, 2000);

console.log('hello!');
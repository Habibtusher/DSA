var addTwoPromises = async function (promise1, promise2) {
    const promises = await promise1 + await promise2;
    return new Promise(resolve => setTimeout(() => resolve(promises), 20))
};


addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20)),
    new Promise(resolve => setTimeout(() => resolve(5), 60))); 
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout (resolve, ms);
    });
}

async function test() {
    console.log("Start");
    await delay(2000);
    console.log("This prints after 2 seconds");
}

test();

const value = fetch("https:api.github.com/users/myles-portfolio");

//alerts can block JS from running

const hodor = (time) => {
  return new Promise((resolve, reject) => {
    if (time > 4999) {
      reject("Sorry, I got tired...");
    }
    setTimeout(() => resolve(`Take your time... (${time}ms)`), time);
  })
};

const iGotYou = async () => {
  try {
    const res = await hodor(400);
    console.log(res);
    const res1 = await hodor(1500);
    console.log(res1);
    const res2 = await hodor(800);
    console.log(res2);
    const res3 =  await hodor(1500);
    console.log(res3);
    const res4 = await hodor(5000);
    console.log(res4);
    const res5 = await hodor(2000);
    console.log(res5);
  } catch (error) {
    console.log(error);
  }
}

iGotYou();

const digitalClock = document.getElementById("digitalClock");

const timeNode = document.createElement("div");
digitalClock.appendChild(timeNode);

const dateNode = document.createElement("div");
digitalClock.appendChild(dateNode);

// const myDate = new Date();
// myNode.innerHTML = myDate.toTimeString(); //not needed as it's now under the function

const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();

    //toLocaleTimeString is better than myDate.toTimeString(); since the general one shows the time + GMT 0000 which is not necessary 
    timeNode.innerHTML = myDate.toLocaleTimeString(); 
    //This is for creating time inner html

    dateNode.innerHTML = myDate.toLocaleDateString();
    //This is for creating date inner html
};
setInterval(updateTime, 1000);
updateTime()
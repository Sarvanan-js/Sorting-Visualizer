function changeArraySize(size)
{
    createNewArray(parseInt(size));
}

function swap(ele1,ele2)
{
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

function disable()
{
    document.querySelector("#selection").disabled = true;
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#quick").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#newArray").disabled = true;
    document.querySelector("#arr_sz").disabled = true;
    console.log("disable")
}

function enable()
{
    document.querySelector("#selection").disabled = false;
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#quick").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#arr_sz").disabled = false;
    document.querySelector("#newArray").disabled = false;
    console.log("disable")
}


let delay = 260;
// let delay = 5000;
let delayElement = document.querySelector('#speed_input');
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
    // delay = 5000;
});

function createDelay(delay)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(delay)
        },delay)
    })
}

createNewArray()

function createNewArray(noOfBars = 60)
{
    deleteArray();
    let arr = []

    for(let i = 0;i<noOfBars;i++)
    {
        let r = Math.floor(Math.random()*250) + 1;
        arr.push(r);
    }

    const bars = document.getElementById("bars");
    for(let i = 0;i<arr.length;i++)
    {
        let bar = document.createElement("div");
        bar.style.height = `${arr[i]*2}px`;
        bar.classList.add("flex-item");
        bar.classList.add("arr")
        bar.classList.add('bar');
        // used for indexing in the swapping algos
        bars.appendChild(bar);
    }
}

function deleteArray()
{
    const bars = document.getElementById("bars");
    bars.innerHTML = '';
}


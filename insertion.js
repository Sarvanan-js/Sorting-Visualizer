async function insertionSort()
{
    const ele = document.querySelectorAll(".bar")
    ele[0].style.background = "green";
    for(let i = 1;i<ele.length;i++)
    {
        let pos = i;
        let cur_height = ele[i].style.height;
        ele[i].style.background = "blue";
        await createDelay(delay);
        while(pos > 0 && parseInt(cur_height) < parseInt(ele[pos-1].style.height))
        {
            ele[pos-1].style.background = "blue";
            await createDelay(delay);
            ele[pos].style.height = ele[pos-1].style.height;
            ele[pos].style.background = "green";
            ele[pos-1].style.background = "green";
            pos--; 
        }
        ele[pos].style.height = cur_height
        ele[pos].style.background = "green";
    }
}


const insertionBtn = document.querySelector("#insertion")
insertionBtn.addEventListener('click', async function()
{
    // document.querySelector("#arr_sz").disabled = true;
    disable();
    await insertionSort();
    enable();
})

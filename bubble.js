async function bubbleSort()
{
    const ele = document.querySelectorAll(".bar")
    for(let i = 0;i<ele.length;i++)
    {
        for(let j = 0;j<ele.length-i-1;j++)
        {
            ele[j].style.background = "blue";
            ele[j+1].style.background = "blue";
            await createDelay(delay);

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                swap(ele[j],ele[j+1]);
            }

            ele[j].style.background = "cyan";
        }
        ele[ele.length-i-1].style.background = "green";
    }
}


const bubbleBtn = document.querySelector("#bubble")
bubbleBtn.addEventListener('click', async function()
{
    // document.querySelector("#arr_sz").disabled = true;
    disable();
    await bubbleSort();
    enable();
})

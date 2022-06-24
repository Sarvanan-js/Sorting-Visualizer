async function selectionSort()
{
    const ele = document.querySelectorAll(".bar")
    for(let i = 0;i<ele.length;i++)
    {
        ele[i].style.background = 'blue';
        let min_index = i;
        for(let j = i+1;j<ele.length;j++)
        {
            ele[j].style.background = 'red';

            await createDelay(delay)
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height))
            {
                if(min_index != i)
                {
                    ele[min_index].style.background = 'cyan';
                }

                min_index = j;
            }
            else
            {
                ele[j].style.background = 'cyan';
            }
        }

        await createDelay(delay)
        swap(ele[min_index],ele[i]);
        ele[min_index].style.background = "cyan";
        ele[i].style.background = "green";
    }
}

const selectionBtn = document.querySelector("#selection")
selectionBtn.addEventListener('click', async function()
{
    // document.querySelector("#arr_sz").disabled = true;
    disable();
    await selectionSort();
    enable();
})



// const selectionSortbtn = document.querySelector(".selectionSort");
// selectionSortbtn.addEventListener('click', async function(){
//     disableSortingBtn();
//     disableSizeSlider();
//     disableNewArrayBtn();
//     await selection();
//     enableSortingBtn();
//     enableSizeSlider();
//     enableNewArrayBtn();
// });
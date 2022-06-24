async function partition(ele,l, r)
{
    let pivot = ele[r].style.height;
    let left = l;
    let right = r - 1;
    console.log(l)
    ele[r].style.background = "red";
    await createDelay(delay);
    while (true)
    {
        ele[left].style.background = "yellow";
        while (left <= right && parseInt(ele[left].style.height) <= parseInt(pivot))
        {
            await createDelay(delay);
            ele[left].style.background = "orange";
            left++;
            if(left < right)
            {
                ele[left].style.background = "yellow";
            }

        }
        await createDelay(delay);
        ele[right].style.background = "yellow";
        while (left <= right && parseInt(ele[right].style.height) >= parseInt(pivot))
        {
            await createDelay(delay);
            ele[right].style.background = "pink";
            right--;
            if(right > left)
                ele[right].style.background = "yellow";
        }


        if (right < left)
            break;
        else
        {
            await createDelay(delay);
            swap(ele[left],ele[right]);
            ele[left].style.background = "orange";
            ele[right].style.background = "pink";
        }

    }

    swap(ele[left],ele[r]);
    ele[r].style.background = "orange";
    ele[left].style.background = "green";

    await createDelay(delay);
    for(let i = 0;i<ele.length;i++)
    {
        if(ele[i].style.background == "green")
            continue;
        ele[i].style.background = "cyan";
    }
    await createDelay(delay);
    return left;
}


async function quickSort(ele,l,r)
{
    if(l < r)
    {
        let p = await partition(ele,l,r);
        await quickSort(ele,l,p-1);
        await quickSort(ele,p+1,r);
    }
    else if(l == r)
    {
        ele[l].style.background = "green";
    }
}


const quickBtn = document.querySelector("#quick")
quickBtn.addEventListener('click', async function()
{
    disable();
    const ele = document.querySelectorAll(".bar");
    await quickSort(ele,0,ele.length-1);
    enable();
})

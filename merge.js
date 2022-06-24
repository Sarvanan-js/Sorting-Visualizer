async function mergesort(ele,l,r)
{
    console.log(l)
    console.log(r)
    if(r-l+1== 1)
        return;
    let mid = Math.floor((l+r)/2);
    await mergesort(ele,l,mid);
    await mergesort(ele,mid+1,r);
    
    let left = [];
    let right = [];
    for(let i = l;i<=mid;i++)
    {
        await createDelay(delay);
        left.push(ele[i].style.height);
        ele[i].style.background = "yellow";
    }

    for(let i = mid+1;i<=r;i++)
    {
        await createDelay(delay);
        right.push(ele[i].style.height);
        ele[i].style.background = "orange";
    }
    
    await createDelay(delay);
    let i = 0;
    let j = 0;
    let k = l;

    while (i < left.length && j < right.length)
    {
        await createDelay(delay);
        if (parseInt(left[i]) <= parseInt(right[j]))
        {
            ele[k].style.height = left[i];
            if(left.length + right.length == ele.length)
            {
                ele[k].style.background = "green";
            }
            else
            {
                ele[k].style.background = "lightgreen";
            }

            i++;
            k++;
        }
        else
        {
            ele[k].style.height = right[j];
            if(left.length + right.length == ele.length)
            {
                ele[k].style.background = "green";
            }
            else
            {
                ele[k].style.background = "lightgreen";
            }

            j++;
            k++;
        }
    }

    while (i < left.length)
    {
        await createDelay(delay);
        ele[k].style.height = left[i];
        if(left.length + right.length == ele.length)
        {
            ele[k].style.background = "green";
        }
        else
        {
            ele[k].style.background = "lightgreen";
        }

        i++;
        k++;
    }

    while (j < right.length)
    {
        await createDelay(delay);
        ele[k].style.height = right[j];
        if(left.length + right.length == ele.length)
        {
            ele[k].style.background = "green";
        }
        else
        {
            ele[k].style.background = "lightgreen";
        }

        j++;
        k++;
    } 
}


const mergeBtn = document.querySelector("#merge")
mergeBtn.addEventListener('click', async function()
{

    disable();
    const ele = document.querySelectorAll(".bar")
    await mergesort(ele,0,ele.length-1);
    enable();
})

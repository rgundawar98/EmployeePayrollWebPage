window.addEventListener('DOMContentLoaded',(event)=>
{
    const name = document.querySelector('#name');
    const texterror=document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        if(name.value.length==0)
        {
            texterror.textContent="";
        }
        try{
            (new EmployeepayrollData()).name=name.value;
            texterror.textContent="";
        }catch(e)
        {
              texterror.textContent=e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function()
    {
       output.textContent=salary.value;
    });
})

function createAndUpdateStorage(employeepayrollData)
{
    let employeepayrollList=JSON.parse(localStorage.getItem('EmployeePayRollList257'))
    if(employeepayrollList!=undefined)
    {
        employeepayrollList.push(employeepayrollData);
    }
    else
    {
        employeepayrollList=[employeepayrollData]
    }
    localStorage.setItem("EmployeePayRollList257",JSON.stringify(employeepayrollList));
}

const save=()=>{
    try{
       //For displaying data
       // let EmployeepayrollData = createEmployeePayroll();
       //while addding into local this line// 
       createAndUpdateStorage(EmployeepayrollData);
    }catch(e)
    {
        return;
    }
}

const createEmployeePayroll=()=>
{
    let employeepayrollData = new EmployeepayrollData();
    try{
        employeepayrollData.name=getInputValueById('#name');
    }catch(e)
    {
        setTextValue('.texterror',e);
        throw e;
    }
    employeepayrollData.profilePic=getSelectedvalues('[name=profile]').pop();
    employeepayrollData.gender=getSelectedvalues('[name=gender]').pop();
    employeepayrollData.department=getSelectedvalues('[name=department]');
    employeepayrollData.salary=getInputValueById('#salary');
    employeepayrollData.note=getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeepayrollData.startDate= date;
    alert(employeepayrollData.tostring());
    return employeepayrollData;
}

const getInputValueById=(id)=>
{
    let value= document.querySelector(id).value;
    return value;
}

const setTextValue=(id,value)=>{
    const element = document.querySelector(id);
    element.textContent=value;  
}

const getSelectedvalues=(propertyValue)=>
{
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems=[];
    allItems.forEach(item =>
        {
            if(item.checked)
               selectedItems.push(item.value);
        });
        return selectedItems;
}
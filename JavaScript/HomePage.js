window.addEventListener('DOMContentLoaded',(event)=>
{
     createInnerHtml();
});
const createInnerHtml=()=>
{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml=`{headerHtml}
    <tr>
        <td><img src="/Assets/Pictures/Female.png" class="profile"></td>
        <td>Rita</td>
        <td>Female</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>300000</td>
        <td>1Nov2012</td>
        <td>
            <button id="1" onclick="remove(this)">Delete</button>
            <button id="1" onclick="edit(this)">Edit</button>
        </td>
       </tr>`;
       document.querySelector('#display').innerHTML=innerHtml;
}

const createEmployeePayrollJson=()=>
{
    let empPayrollListLocal=[
        {
            _name:'Geeta',
            _gender:'Female',
            _department:['Enginnering','Finance'],
            _salary:'400000',
            _startDate:'2 oct 2016';
            _note:'',
            _profilepic:'/Assets/Pictures/Female.png'
        }
    ]
}
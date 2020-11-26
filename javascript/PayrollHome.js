window.addEventListener('DOMContentLoaded', ()=>{
    createEmployeeTable();
});

// Template literal ES6 feature
const createEmployeeTable = ()=>{
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img src="../assets/ProfilePics/Ellipse -7.png" alt=""></td>
        <td>Srujana Valavala</td>
        <td>Female</td>
        <td>
            <div class="dept-label">Finance</div>
            <div class="dept-label">HR</div>
        </td>
        <td>&#x20B9 4,50,000</td>
        <td>18 Sep 2020</td>
        <td>
            <img class="action-label" id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete.svg">
            <img class="action-label" id="2" onclick="update(this)" alt="update" src="../assets/icons/create.svg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
} 
'use strict';

function StudentInfo(id, name, studenEmail, mobile, tuition) {
  this.id = id;
  this.name = name;
  this.studenEmail = studenEmail;
  this.mobile = mobile;
  this.tuition = tuition;
  this.age = getAge(24, 18);
  StudentInfo.all.push(this);
}
StudentInfo.all = [];


//Get data from the Form
const studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', clickSubmit);
function clickSubmit(event) {
  event.preventDefault();
  const studenEmail = event.target.studenEmail.value;
  const mobile = event.target.mobile.value;
  const tuition = event.target.tuition.value;
  const name = studenEmail.substring(0, studenEmail.lastIndexOf('@'));
  // for (let i = 1; i < localStorage.length; i++) {
  const student = new StudentInfo(1, name, studenEmail, mobile, tuition);
  // console.log(student);
  // break;
  // }
  localStorage.setItem('student', JSON.stringify(StudentInfo.all));
  student.render();
}


// Get Age....
function getAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const table = document.getElementById('tBody');

StudentInfo.prototype.render = function () {
  const localData = new StudentInfo(JSON.parse(localStorage.getItem('student')));
  console.log(localData);
  for (let i = 0; i < localStorage.length; i++) {
    //id table data
    const tdElid = document.createElement('td');
    const trEl = document.createElement('tr');
    table.appendChild(trEl);
    trEl.appendChild(tdElid);
    tdElid.textContent = StudentInfo.all[i].id;

    //name table data
    const tdElname = document.createElement('td');
    trEl.appendChild(tdElname);
    tdElname.textContent = StudentInfo.all[i].name;

    //Email table data
    const tdElEmail = document.createElement('td');
    trEl.appendChild(tdElEmail);
    tdElEmail.textContent = StudentInfo.all[i].studenEmail;

    //Mobile table data
    const tdElMobile = document.createElement('td');
    trEl.appendChild(tdElMobile);
    tdElMobile.textContent = StudentInfo.all[i].mobile;

    //Age table data
    const tdElAge = document.createElement('td');
    trEl.appendChild(tdElAge);
    tdElAge.textContent = StudentInfo.all[i].age;

    //tuition table data
    const tdEltTuition = document.createElement('td');
    trEl.appendChild(tdEltTuition);
    tdEltTuition.textContent = StudentInfo.all[i].tuition;



  }

};

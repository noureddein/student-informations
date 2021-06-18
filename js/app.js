'use strict';
let tuitionValue = [100, 500, 1000, 1200];

function StudentInfo(id, name, studenEmail, mobile, tuition, age) {
  this.id = id;
  this.name = name;
  this.studenEmail = studenEmail;
  this.mobile = mobile;
  this.tuition = tuition;
  this.age = age;
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
  const student = new StudentInfo(id(), name, studenEmail, mobile, tuition, getAge(24, 18));
  localStorage.setItem('student', JSON.stringify(StudentInfo.all));
  student.render();
  studentForm.reset();
}

//get student ID


const localData = JSON.parse(localStorage.getItem('student'));

let idCounter = 0;
if (localStorage.length) {
  idCounter = parseInt(localData[localData.length - 1].id, 10);
}
function id() {
  idCounter++;
  return idCounter;
}
const ids = [];
const currentYear = new Date().getFullYear();




// Get Age....
function getAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//Render Data
const table = document.getElementById('tBody');
const totalSpan = document.getElementById('total');

let i = 0;
let totalTuition = 0;
StudentInfo.prototype.render = function () {

  for (; i < StudentInfo.all.length; i++) {
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
    tdEltTuition.textContent = `${StudentInfo.all[i].tuition} JOD`;

    //add delete row button
    const clearbtn = document.createElement('button');
    const tdElDelete = document.createElement('td');
    trEl.appendChild(tdElDelete);
    tdElDelete.appendChild(clearbtn);
    clearbtn.textContent = 'Clear';

    // Total tuition
    totalTuition = parseInt(StudentInfo.all[i].tuition, 10) + totalTuition;
    totalSpan.textContent = `${totalTuition} JOD`;

  }

};


function retreive() {
  if (localStorage.length > 0) {
    for (let i = 0; i < localData.length; i++) {
      const x = new StudentInfo(localData[i].id, localData[i].name, localData[i].studenEmail, localData[i].mobile, localData[i].tuition, localData[i].age);
      x.render();
    }
  }
}

const selectEl = document.getElementById('tuition');



function tuition() {
  for (let j in tuitionValue) {
    const optionEl = document.createElement('option');
    selectEl.appendChild(optionEl);
    optionEl.textContent = `${tuitionValue[j]}`;
  }
}
retreive();
tuition();

function clearTableData() {
  const tableEL = document.getElementById('tBody');
  tableEL.remove();
  localStorage.removeItem('student');
  totalSpan.textContent = '0 JOD';
}



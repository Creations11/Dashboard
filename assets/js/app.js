function toggleSidebar(){

const sidebar =
document.getElementById("sidebar");

const mainContent =
document.querySelector(".main-content");

sidebar.classList.toggle("active");

mainContent.classList.toggle("expanded");

}

function showToast(message){

const toast =
document.getElementById("toast");

toast.innerText = message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3000);

}

document
.querySelectorAll(".nav-item")
.forEach((item,index)=>{

item.addEventListener("click",function(e){

e.preventDefault();

document
.querySelectorAll(".nav-item")
.forEach(nav=>nav.classList.remove("active"));

this.classList.add("active");

const pageTitle =
document.getElementById("page-title");

const tabNames = [
"Dashboard",
"New Application",
"Analytics",
"Compliance"
];

pageTitle.innerText =
tabNames[index];

loadTab(index);

});

});

function loadTab(index){

const tabContent =
document.getElementById("tab-content");

if(index === 0){

tabContent.innerHTML = `

<div class="card-grid">

<div class="stat-card">
<h3>Total Applications</h3>
<h2>128</h2>
</div>

<div class="stat-card">
<h3>Pending</h3>
<h2>34</h2>
</div>

<div class="stat-card">
<h3>Approved</h3>
<h2>72</h2>
</div>

<div class="stat-card">
<h3>Declined</h3>
<h2>22</h2>
</div>

</div>

<div class="card">

<h2>
Recent Applications
</h2>

<table>

<thead>
<tr>
<th>Reference</th>
<th>Name</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr>
<td>5C-1001</td>
<td>John Doe</td>
<td>Pending</td>
</tr>

<tr>
<td>5C-1002</td>
<td>Jane Smith</td>
<td>Approved</td>
</tr>

</tbody>

</table>

</div>

`;

}

if(index === 1){

tabContent.innerHTML = `

<div class="card">

<h2>
New Application Queue
</h2>

<p>
Applications will appear here.
</p>

</div>

`;

}

if(index === 2){

tabContent.innerHTML = `

<div class="card">

<h2>
Analytics
</h2>

<canvas id="analyticsChart"></canvas>

</div>

`;

setTimeout(()=>{

const ctx =
document
.getElementById("analyticsChart");

new Chart(ctx,{

type:"bar",

data:{

labels:[
"Mon",
"Tue",
"Wed",
"Thu",
"Fri"
],

datasets:[{

label:"Applications",

data:[
12,
19,
7,
15,
22
]

}]

}

});

},100);

}

if(index === 3){

tabContent.innerHTML = `

<div class="card">

<h2>
Compliance Centre
</h2>

<p>
NCR workflow checks and audit tracking.
</p>

</div>

`;

}

}

window.onload = function(){

loadTab(0);

};

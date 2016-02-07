<h1>First Angular Apps !!! By Shakil Hussain</h1>


<div ng-controller="EmpListCtrl">
<p>Total number of Employees: {{empList.length}}</p>
<ul>
<li ng-repeat="emp in empList">
<span>{{emp.name}}</span>
<p>Department is: {{emp.department}}</p>
</li>
</ul>
</div> 

function addEmployee(){
    // store datas of employee using object
    employee={id:eid.value, name:enam.value, designation:edes.value, experience:eexp.value, salary:esal.value}
    // store  these stored data into local storage

    if(employee.id in localStorage){
        alert("Employee already exist")
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))  //JSON.stringify() is used to convert object into string
        alert("Employee added successfully")
    }
}
function searchEmp(){
    key=search.value     //store value of search in a variable
    if(key in localStorage){      //checking the data in key is present in local storage
        emp=JSON.parse(localStorage.getItem(key)) //pull the data stored in local storage and converting it from to js format using JSON.parse()
        result.innerHTML=`<p>Employee id : ${emp.id}</p>
        <p>Employee Name  : ${emp.name}</p>
        <p>Designation : ${emp.designation}</p>
        <p>Experience : ${emp.experience}</p>
        <p>Salary : ${emp.salary}</p>`                         
    }    
    else{
        alert("Employee not present")
        result.innerHTML=""
    }                                               
}
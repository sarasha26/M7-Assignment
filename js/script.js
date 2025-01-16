//HELPER FUNCTION

const $ = (id) => document.getElementById(id)
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let empForm = document.getElementById('addForm')
let empTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById('empCount')
let noOfEmployees = 0

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES

    let empId = $('id').value
    let empName = $('name').value
    let empExt = $('extension').value
    let empEmail = $('email').value
    let empDept = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow()


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    //Employee ID
    let cellID = row.insertCell()
    let textID = document.createTextNode(empId)
    cellID.appendChild(textID)

    //Employee name
    let cellName = row.insertCell()
    let textName = document.createTextNode(empName)
    cellName.appendChild(textName)

    //Employee extension
    let cellExt = row.insertCell()
    let textExt = document.createTextNode(empExt)
    cellExt.appendChild(textExt)

    //Employee email
    let cellEmail = row.insertCell()
    let textEmail = document.createTextNode(empEmail)
    cellEmail.appendChild(textEmail)

    //Employee department
    let cellDept = row.insertCell()
    let textDept = document.createTextNode(empDept)
    cellDept.appendChild(textDept)


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON
    let delBtn = document.createElement('button')
    delBtn.className = 'btn btn-danger btn-sm float-end'
    let textDelete = document.createTextNode('X')
    delBtn.appendChild(textDelete)
    let cellDelete = row.insertCell()
    cellDelete.appendChild(delBtn)


    // RESET THE FORM
    empForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    noOfEmployees += 1
    empCount.value = noOfEmployees

})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {


    if (confirm('Are you sure you want to delete this employee?')) {
        let pathToRow = document.getElementsByTagName('tr')
        let rowIndex = e.target.closest('tr').rowIndex
        empTable.deleteRow(rowIndex)
        noOfEmployees -= 1
        empCount.value = noOfEmployees
    }

})

let EmployeeRepository = require('../repository/EmployeeRepository');

class EmployeeController {

    login(req,res) {
        EmployeeRepository.login(req,res);
    }

    employeeList(req,res) {
        EmployeeRepository.listEmployees(req,res);
    }

    currentUserDetails(req,res) {
        EmployeeRepository.currentUserDetails(req,res);
    }
}

module.exports = new EmployeeController()
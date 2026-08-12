import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Aarav Sharma',
      department: 'IT',
      city: 'Delhi',
      age: 26,
      salary: 55000,
    },
    {
      id: 2,
      name: 'Diya Patel',
      department: 'HR',
      city: 'Ahmedabad',
      age: 28,
      salary: 50000,
    },
    {
      id: 3,
      name: 'Rohan Verma',
      department: 'Finance',
      city: 'Mumbai',
      age: 30,
      salary: 65000,
    },
    {
      id: 4,
      name: 'Ananya Singh',
      department: 'IT',
      city: 'Pune',
      age: 25,
      salary: 58000,
    },
    {
      id: 5,
      name: 'Kabir Mehta',
      department: 'Sales',
      city: 'Jaipur',
      age: 29,
      salary: 52000,
    },
    {
      id: 6,
      name: 'Meera Iyer',
      department: 'Marketing',
      city: 'Chennai',
      age: 27,
      salary: 54000,
    },
    {
      id: 7,
      name: 'Arjun Nair',
      department: 'IT',
      city: 'Bengaluru',
      age: 31,
      salary: 72000,
    },
    {
      id: 8,
      name: 'Sara Khan',
      department: 'HR',
      city: 'Lucknow',
      age: 24,
      salary: 47000,
    },
    {
      id: 9,
      name: 'Vivaan Rao',
      department: 'Finance',
      city: 'Hyderabad',
      age: 32,
      salary: 68000,
    },
    {
      id: 10,
      name: 'Ishita Gupta',
      department: 'Sales',
      city: 'Delhi',
      age: 26,
      salary: 51000,
    },
    {
      id: 11,
      name: 'Aditya Joshi',
      department: 'IT',
      city: 'Pune',
      age: 28,
      salary: 61000,
    },
    {
      id: 12,
      name: 'Priya Menon',
      department: 'Marketing',
      city: 'Kochi',
      age: 29,
      salary: 56000,
    },
    {
      id: 13,
      name: 'Yash Malhotra',
      department: 'Finance',
      city: 'Chandigarh',
      age: 33,
      salary: 75000,
    },
    {
      id: 14,
      name: 'Naina Kapoor',
      department: 'HR',
      city: 'Delhi',
      age: 27,
      salary: 49500,
    },
    {
      id: 15,
      name: 'Karan Bhatia',
      department: 'IT',
      city: 'Noida',
      age: 30,
      salary: 70000,
    },
    {
      id: 16,
      name: 'Sneha Reddy',
      department: 'Marketing',
      city: 'Hyderabad',
      age: 25,
      salary: 53000,
    },
    {
      id: 17,
      name: 'Rahul Das',
      department: 'Sales',
      city: 'Kolkata',
      age: 31,
      salary: 60000,
    },
    {
      id: 18,
      name: 'Pooja Sinha',
      department: 'Finance',
      city: 'Patna',
      age: 28,
      salary: 62000,
    },
    {
      id: 19,
      name: 'Dev Malviya',
      department: 'IT',
      city: 'Indore',
      age: 26,
      salary: 59000,
    },
    {
      id: 20,
      name: 'Riya Chawla',
      department: 'HR',
      city: 'Delhi',
      age: 29,
      salary: 51500,
    },
  ];

  getEmployees(): Employee[] {
    return [...this.employees];
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(
      (emp) => emp.id === updatedEmployee.id,
    );
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }
}

import { Component, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  @ViewChildren(EmployeeCardComponent)
  employeeCards!: QueryList<EmployeeCardComponent>;

  constructor(
    private employeeService: EmployeeService,
    private renderer: Renderer2,
  ) {}

  getEmployeeList(): void {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id);
      this.getEmployeeList();
    }
  }

  editEmployee(employee: Employee): void {
    const newSalary = prompt('Enter new salary', employee.salary.toString());

    if (newSalary !== null) {
      const updatedEmployee: Employee = {
        ...employee,
        salary: +newSalary,
      };

      this.employeeService.updateEmployee(updatedEmployee);
      this.getEmployeeList();
    }
  }

  highlightTopSalaries() {
    this.employeeCards.forEach((card) => {
      const element = card.cardRoot.nativeElement;

      if (card.employee.salary >= 65000) {
        this.renderer.setStyle(element, 'border', '3px solid #f59e0b');
        this.renderer.setStyle(element, 'background', '#fffbeb');
        this.renderer.setStyle(element, 'transform', 'translateY(-4px)');
      }
    });
  }
}

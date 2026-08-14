import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employee!: Employee;
  originalEmployee!: Employee;
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const emp = this.employeeService.getEmployeeById(id);

    if (emp) {
      this.employee = { ...emp };
      this.originalEmployee = { ...emp };
    }
  }

  saveEmployee(): void {
    this.employeeService.updateEmployee(this.employee);
    this.formSubmitted = true;

    alert('Employee updated successfully');
    this.router.navigate(['/employees']);
  }

  private hasUnsavedChanges(): boolean {
    return (
      JSON.stringify(this.employee) !== JSON.stringify(this.originalEmployee)
    );
  }

  canDeactivate(): boolean {
    if (this.formSubmitted) {
      return true;
    }

    if (this.hasUnsavedChanges()) {
      return confirm('You have unsaved changes. Leave this page?');
    }

    return true;
  }
}

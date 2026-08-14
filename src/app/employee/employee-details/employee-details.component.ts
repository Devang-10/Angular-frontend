import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent {
  employee?: Employee;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.employee = this.employeeService.getEmployeeById(id);
      this.isPrevDisabled = !this.employeeService.getEmployeeById(id - 1);
      this.isNextDisabled = !this.employeeService.getEmployeeById(id + 1);
    });
  }

  nextEmployee(): void {
    if (!this.employee) return;

    const nextId = this.employee.id + 1;

    const nextEmp = this.employeeService.getEmployeeById(nextId);

    if (nextEmp) {
      this.router.navigate(['/employee', nextId]);
    } else {
      this.isNextDisabled = true;
    }
  }
  previousEmployee(): void {
    if (!this.employee) return;

    const previousId = this.employee.id - 1;

    const previousEmp = this.employeeService.getEmployeeById(previousId);

    if (previousEmp) {
      this.router.navigate(['/employee', previousId]);
    } else {
      this.isPrevDisabled = true;
    }
  }
  editEmployee(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}

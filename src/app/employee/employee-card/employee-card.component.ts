import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  @Input()
  employee!: Employee;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Employee>();

  @ViewChild('cardRoot')
  cardRoot!: ElementRef;

  constructor(private router: Router) {}

  onDelete(): void {
    this.delete.emit(this.employee.id);
  }

  onEdit(): void {
    this.edit.emit(this.employee);
  }

  viewDetails(id: number) {
    this.router.navigate(['/employee', id]);
  }
}

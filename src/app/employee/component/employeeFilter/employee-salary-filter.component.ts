import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SortOrder} from '../../model/sort-order';

@Component({
  selector: 'app-employee-salary-filter',
  template: `
    <h2 mat-dialog-title>Age Filter</h2>
    <mat-dialog-content>
      <mat-radio-group [(ngModel)]="data">
        <mat-radio-button *ngFor="let order of sortOrder" [value]="order">{{ order }}</mat-radio-button>
      </mat-radio-group>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button color="primary" mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" (click)="submit()">Filter</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-radio-group {
      display: inline-flex;
      flex-direction: column;
    }
    mat-radio-button {
      margin: 13px 0;
    }
    mat-dialog-content {
      overflow: hidden;
    }
    mat-dialog-actions {
      margin-top: 15px;
      float: right;
    }
  `]
})
export class EmployeeSalaryFilterComponent {

  sortOrder = Object.values(SortOrder);

  constructor(
    private dialogRef: MatDialogRef<EmployeeSalaryFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SortOrder) {
  }

  submit() {
    this.dialogRef.close(this.data);
  }
}

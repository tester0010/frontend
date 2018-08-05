import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AgeFilter} from '../../model/employee';
import {AgeFilterData} from '../../model/age-filter-data';

@Component({
  selector: 'app-employee-age-filter',
  template: `
    <h2 mat-dialog-title>Age Filter</h2>
    <mat-dialog-content>
      <mat-form-field>
        <input matInput placeholder="Age" type="number" [(ngModel)]="data.age">
      </mat-form-field>
      <mat-radio-group [(ngModel)]="data.ageFilter">
        <mat-radio-button *ngFor="let filter of ageFilter" [value]="filter">{{ filter }}</mat-radio-button>
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
    mat-form-field {
      width: 100%;
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
export class EmployeeAgeFilterComponent {

  ageFilter = Object.values(AgeFilter);

  constructor(
    private dialogRef: MatDialogRef<EmployeeAgeFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AgeFilterData) {
  }

  submit() {
    this.dialogRef.close({...this.data});
  }
}

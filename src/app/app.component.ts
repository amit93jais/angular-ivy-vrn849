import { Component, OnChanges, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidate } from './models/candidate.model';
//import data from './data.json';
import { DataService } from './service/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  candidates: Candidate[];

  //female = true;
  //male = true;
  gender: string;
  searchQuery: string;

  candidateForm: FormGroup;
  candidateSearchForm: FormGroup;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.candidateForm = new FormGroup({
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });

    /* this.dataService.getCandidate().subscribe((res) => (this.candidates = res)); */

    this.candidates = this.dataService.getCandidate();
  }

  saveCandidate() {
    let candidate: Candidate = {
      id: 122,
      first_name: this.candidateForm.value.fName,
      last_name: this.candidateForm.value.lName,
      email: this.candidateForm.value.email,
      gender: this.candidateForm.value.gender,
    };
    console.log('Amit:' + this.candidateForm.value.fName);
    this.candidates.push(candidate);
  }
}

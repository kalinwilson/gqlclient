import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {map} from 'rxjs/operators';
import {Satellite, SatelliteListGQL} from '../services/satelliteGraphql.service';
import {Apollo} from 'apollo-angular';
import {PageEvent} from '@angular/material/paginator';
import gql from 'graphql-tag';
import set = Reflect.set;
import {Observable} from 'rxjs';

@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatelliteListComponent implements OnInit {

  satelliteList: Observable<Satellite[]>;
  length = 14000;
  pageSize = 50;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  pageEvent: PageEvent;

  loading = true;
  error: any;

  constructor(private readonly satelliteListService: SatelliteListGQL, private apollo: Apollo) {
  }

  satelliteList$ = this.satelliteListService
    .fetch({page: this.pageIndex, limit: this.pageSize})
    .pipe(map((res) => res.data.satellites));


  setPageSizeOptions(setPageSizeOptionsInput: String) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  onPageChanged(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    this.getSatellites();
  }

  getSatellites() {
    this.satelliteList = this.satelliteListService
      .fetch({page: this.pageIndex, limit: this.pageSize})
      .pipe(map((res) => res.data.satellites));

  }

  ngOnInit(): void {
    this.getSatellites();
  }

  // ngOnInit() {
  //   this.apollo.watchQuery<any[]>({
  //       query: gql`
  //           query satelliteList {
  //               satellites(categories: [1], orderBy: satelliteNumber_ASC){
  //                   id
  //                   name
  //                   satelliteNumber
  //               }
  //           }`
  //   }).valueChanges.subscribe(result => {
  //     console.log(result);
  //     this.satelliteList = result.data && result.data.satelliteList;
  //     this.loading = result.loading;
  //     this.error = result.errors;
  //   });
  // }

}

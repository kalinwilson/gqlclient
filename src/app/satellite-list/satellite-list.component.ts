import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {map} from 'rxjs/operators';
import {SatelliteListGQL} from '../services/satelliteGraphql.service';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatelliteListComponent implements OnInit {

  satelliteList: any[] = [];
  loading = true;
  error: any;

  constructor(private readonly satelliteListService: SatelliteListGQL, private apollo: Apollo) {
  }


    // satelliteList$ = this.satelliteListService
    //   .fetch()
    //   .pipe(map((res) => res.data.satellites));

    ngOnInit() {
      this.apollo.watchQuery({
          query: gql`
              query satelliteList {
                  satellites(categories: [1], orderBy: satelliteNumber_ASC){
                      id
                      name
                      satelliteNumber
                  }
              }`
      }).valueChanges.subscribe(result => {
        console.log(result);
        this.satelliteList = result.data && result.data.satelliteList;
        this.loading = result.loading;
        this.error = result.errors;
      });

    }

}

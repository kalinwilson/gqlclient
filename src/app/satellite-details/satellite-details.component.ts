import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {SatelliteDetailsControlsGQL} from '../services/satelliteGraphql.service';

@Component({
  selector: 'app-satellite-details',
  templateUrl: './satellite-details.component.html',
  styleUrls: ['./satellite-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatelliteDetailsComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly satelliteDetailsService: SatelliteDetailsControlsGQL
  ) {
  }

  satelliteDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.satelliteDetailsService.fetch({id})),
    map((res) => res.data.satelliteById)
  );

  ngOnInit() {
  }

}

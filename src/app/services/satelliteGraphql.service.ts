import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



export enum ApplicationEnum {
  NotAssociated = 'NotAssociated',
  Rob = 'ROB',
  Dca = 'DCA'
}

export type ConsolidatedQuery = {
   __typename?: 'ConsolidatedQuery',
  /** Fetch a list of satellites by number and/or category. Numbers and categories are optional. */
  satellites?: Maybe<Array<Maybe<Satellite>>>,
  satelliteById?: Maybe<Satellite>,
  /** Fetch an IntegratorControls object by its id. */
  integratorControlsById?: Maybe<IntegratorControls>,
  /** Fetch an IntegratorControls object by its associated satellite id. */
  integratorControlsBySatelliteIdAndApplications?: Maybe<Array<Maybe<IntegratorControls>>>,
  /** Fetch an IntegratorControls object by its associated satellite number. */
  integratorControlsBySatelliteNumberAndApplications?: Maybe<Array<Maybe<IntegratorControls>>>,
};


export type ConsolidatedQuerySatellitesArgs = {
  satelliteNumbers?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderBy?: Maybe<SatelliteOrderByInput>,
  page?: Maybe<Scalars['Int']>,
  limit: Scalars['Int']
};


export type ConsolidatedQuerySatelliteByIdArgs = {
  id: Scalars['ID']
};


export type ConsolidatedQueryIntegratorControlsByIdArgs = {
  id: Scalars['ID']
};


export type ConsolidatedQueryIntegratorControlsBySatelliteIdAndApplicationsArgs = {
  satId: Scalars['ID'],
  applications?: Maybe<Array<Maybe<ApplicationEnum>>>
};


export type ConsolidatedQueryIntegratorControlsBySatelliteNumberAndApplicationsArgs = {
  satelliteNumber: Scalars['Int'],
  applications?: Maybe<Array<Maybe<ApplicationEnum>>>
};

export enum CoordinateSystemEnum {
  IntegratorJ2000 = 'IntegratorJ2000',
  IntegratorEpoch = 'IntegratorEpoch'
}

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ElementConversionControls = {
   __typename?: 'ElementConversionControls',
  id?: Maybe<Scalars['ID']>,
  satelliteId?: Maybe<Scalars['ID']>,
  application?: Maybe<ApplicationEnum>,
  epochPlacement?: Maybe<EpochPlacementEnum>,
  extrapolationDcDeltaSpan?: Maybe<Scalars['Float']>,
  extrapolationDcDragErRms?: Maybe<Scalars['Float']>,
  extrapolationDc?: Maybe<Scalars['Boolean']>,
  extrapolationDcEpochErRms?: Maybe<Scalars['Float']>,
  extrapolationDcEpochMargin?: Maybe<Scalars['Float']>,
  extrapolationDcKeepNthPnt?: Maybe<Scalars['Int']>,
  extrapolationDcMaxPosRms?: Maybe<Scalars['Float']>,
  extrapolationDcMinSpan?: Maybe<Scalars['Float']>,
  extrapolationDcSpan?: Maybe<Scalars['Float']>,
  extrapolationSpanUnits?: Maybe<ExtrapolationSpanUnitsEnum>,
};

export enum EpochPlacementEnum {
  DcEpoch = 'DCEpoch',
  DcEpochPriorAscendingNode = 'DCEpochPriorAscendingNode',
  LastDcObservation = 'LastDCObservation',
  LastDcObservationPriorAscendingNode = 'LastDCObservationPriorAscendingNode',
  NextPerigeeAfterDcEndTime = 'NextPerigeeAfterDCEndTime'
}

export enum ExtrapolationSpanUnitsEnum {
  Days = 'Days',
  Revs = 'Revs'
}

export type IntegratorControls = {
   __typename?: 'IntegratorControls',
  id?: Maybe<Scalars['ID']>,
  satelliteId?: Maybe<Scalars['ID']>,
  application?: Maybe<ApplicationEnum>,
  coordinateSystem?: Maybe<CoordinateSystemEnum>,
  errorControl?: Maybe<Scalars['Float']>,
  inputStepSize?: Maybe<Scalars['Float']>,
  partialDerivatives?: Maybe<PartialDerivativesEnum>,
  printStepChangeFlag?: Maybe<Scalars['Boolean']>,
  propagator?: Maybe<PropagatorEnum>,
  spadocEmulationFlag?: Maybe<Scalars['Boolean']>,
  stepMode?: Maybe<StepModeEnum>,
  stepSizeMethod?: Maybe<StepSizeMethodEnum>,
  stepSizeSource?: Maybe<StepSizeSourceEnum>,
};

export enum PartialDerivativesEnum {
  AnalyticDerivative = 'AnalyticDerivative',
  FullNumericalDerivative = 'FullNumericalDerivative',
  FastNumericalDerivative = 'FastNumericalDerivative'
}

export enum PropagatorEnum {
  Sp = 'SP',
  Sgp = 'SGP',
  Sgp4 = 'SGP4',
  Ppt3 = 'PPT3'
}

export type Satellite = {
   __typename?: 'Satellite',
  id?: Maybe<Scalars['ID']>,
  satelliteNumber?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  intlDesignator?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['Int']>,
  integratorControls?: Maybe<Array<Maybe<IntegratorControls>>>,
  elementConversionControls?: Maybe<Array<Maybe<ElementConversionControls>>>,
};


export type SatelliteIntegratorControlsArgs = {
  applications?: Maybe<Array<Maybe<ApplicationEnum>>>
};


export type SatelliteElementConversionControlsArgs = {
  applications?: Maybe<Array<Maybe<ApplicationEnum>>>
};

export enum SatelliteOrderByInput {
  SatelliteNumberAsc = 'satelliteNumber_ASC',
  SatelliteNumberDesc = 'satelliteNumber_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum StepModeEnum {
  AutomaticIntegration = 'AutomaticIntegration',
  TimeIntegration = 'TimeIntegration',
  SIntegration = 'SIntegration'
}

export enum StepSizeMethodEnum {
  VariableStepIntegration = 'VariableStepIntegration',
  FixedStepIntegration = 'FixedStepIntegration'
}

export enum StepSizeSourceEnum {
  ManualStepSelection = 'ManualStepSelection',
  AutomaticStepSelection = 'AutomaticStepSelection'
}

export type SatelliteDetailsControlsQueryVariables = {
  id: Scalars['ID']
};


export type SatelliteDetailsControlsQuery = (
  { __typename?: 'ConsolidatedQuery' }
  & { satelliteById: Maybe<(
    { __typename?: 'Satellite' }
    & Pick<Satellite, 'id' | 'name' | 'satelliteNumber'>
    & { integratorControls: Maybe<Array<Maybe<(
      { __typename?: 'IntegratorControls' }
      & Pick<IntegratorControls, 'id' | 'satelliteId' | 'application' | 'coordinateSystem' | 'errorControl' | 'inputStepSize' | 'partialDerivatives' | 'printStepChangeFlag' | 'propagator' | 'spadocEmulationFlag' | 'stepMode' | 'stepSizeMethod' | 'stepSizeSource'>
    )>>>, elementConversionControls: Maybe<Array<Maybe<(
      { __typename?: 'ElementConversionControls' }
      & Pick<ElementConversionControls, 'id' | 'satelliteId' | 'application' | 'epochPlacement' | 'extrapolationDcDeltaSpan' | 'extrapolationDcDragErRms' | 'extrapolationDc' | 'extrapolationDcEpochErRms' | 'extrapolationDcEpochMargin' | 'extrapolationDcKeepNthPnt' | 'extrapolationDcMaxPosRms' | 'extrapolationDcMinSpan' | 'extrapolationDcSpan' | 'extrapolationSpanUnits'>
    )>>> }
  )> }
);

export type SatelliteListQueryVariables = {
  page?: Maybe<Scalars['Int']>,
  limit: Scalars['Int']
};


export type SatelliteListQuery = (
  { __typename?: 'ConsolidatedQuery' }
  & { satellites: Maybe<Array<Maybe<(
    { __typename?: 'Satellite' }
    & Pick<Satellite, 'id' | 'name' | 'satelliteNumber'>
  )>>> }
);


export const SatelliteDetailsControlsDocument = gql`
    query satelliteDetailsControls($id: ID!) {
  satelliteById(id: $id) {
    id
    name
    satelliteNumber
    integratorControls {
      id
      satelliteId
      application
      coordinateSystem
      errorControl
      inputStepSize
      partialDerivatives
      printStepChangeFlag
      propagator
      spadocEmulationFlag
      stepMode
      stepSizeMethod
      stepSizeSource
    }
    elementConversionControls {
      id
      satelliteId
      application
      epochPlacement
      extrapolationDcDeltaSpan
      extrapolationDcDragErRms
      extrapolationDc
      extrapolationDcEpochErRms
      extrapolationDcEpochMargin
      extrapolationDcKeepNthPnt
      extrapolationDcMaxPosRms
      extrapolationDcMinSpan
      extrapolationDcSpan
      extrapolationSpanUnits
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SatelliteDetailsControlsGQL extends Apollo.Query<SatelliteDetailsControlsQuery, SatelliteDetailsControlsQueryVariables> {
    document = SatelliteDetailsControlsDocument;
    
  }
export const SatelliteListDocument = gql`
    query satelliteList($page: Int, $limit: Int!) {
  satellites(categories: [1], orderBy: satelliteNumber_ASC, page: $page, limit: $limit) {
    id
    name
    satelliteNumber
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SatelliteListGQL extends Apollo.Query<SatelliteListQuery, SatelliteListQueryVariables> {
    document = SatelliteListDocument;
    
  }
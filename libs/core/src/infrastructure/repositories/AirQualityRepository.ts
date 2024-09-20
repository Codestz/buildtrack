
      
        import {IRepositoryParams, IAirQualityRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            AirQuality,
            QueryAirQualityArgs,
            QueryAirQualitiesListArgs,
            AirQualityListResponse,
            MutationAirQualityCreateArgs, MutationAirQualityDeleteArgs, MutationAirQualityUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class AirQualityRepository implements IAirQualityRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getAirQuality(params: IRepositoryParams<QueryAirQualityArgs>): Promise<AirQuality | null> {
                return this.http.requestGraphQL<{
                    airQuality: AirQuality
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_AIRQUALITY(
                            $id: ID
                        ) {
                            airQuality(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
measurement_date
pm25
pm10
co2
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.airQuality)?.catch(() => null);
            }

            async getAirQualityList(params: IRepositoryParams<QueryAirQualitiesListArgs>): Promise<AirQualityListResponse> {
                return this.http.requestGraphQL<{
                    airQualitiesList: AirQualityListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_AIRQUALITY (
                                  $first: Int
                                  $skip: Int
                                  $filter: AirQualityFilter
                                  $sort: [AirQualitySort!]
                            ) {
                                airQualitiesList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
measurement_date
pm25
pm10
co2

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.airQualitiesList);
            }

            
                    async createAirQuality(params: IRepositoryParams<MutationAirQualityCreateArgs>): Promise<AirQuality | null> {
                        return this.http.requestGraphQL<{
                          airQualityCreate: AirQuality
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_AIRQUALITY (
                                      $data: AirQualityCreateInput!
                                    ) {
                                         airQualityCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.airQualityCreate)?.catch(() => null);
                  }
                

                    async deleteAirQuality(params: IRepositoryParams<MutationAirQualityDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_AIRQUALITY (
                                      $data: AirQualityDeleteInput!
                                      $filter: AirQualityKeyFilter
                                      $force: Boolean
                                    ) {
                                        airQualityDelete (
                                          data: $data
                                          filter: $filter
                                          force: $force
                                        ) {
                                            success
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.catch(() => null);
                }
                  

                    async updateAirQuality(params: IRepositoryParams<MutationAirQualityUpdateArgs>): Promise<AirQuality | null> {
                        return this.http.requestGraphQL<{
                          airQualityUpdate: AirQuality
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_AIRQUALITY (
                                      $data: AirQualityUpdateInput!
                                    ) {
                                         airQualityUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.airQualityUpdate)?.catch(() => null);
                  }
                

            
        }
    
      
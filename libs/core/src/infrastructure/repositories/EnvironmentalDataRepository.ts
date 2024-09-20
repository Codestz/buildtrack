
      
        import {IRepositoryParams, IEnvironmentalDataRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            EnvironmentalDatum,
            QueryEnvironmentalDatumArgs,
            QueryEnvironmentalDataListArgs,
            EnvironmentalDatumListResponse,
            MutationEnvironmentalDatumCreateArgs, MutationEnvironmentalDatumDeleteArgs, MutationEnvironmentalDatumUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class EnvironmentalDataRepository implements IEnvironmentalDataRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getEnvironmentalData(params: IRepositoryParams<QueryEnvironmentalDatumArgs>): Promise<EnvironmentalDatum | null> {
                return this.http.requestGraphQL<{
                    environmentalDatum: EnvironmentalDatum
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_ENVIRONMENTALDATA(
                            $id: ID
                        ) {
                            environmentalDatum(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
parameter
value
measurement_date
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.environmentalDatum)?.catch(() => null);
            }

            async getEnvironmentalDataList(params: IRepositoryParams<QueryEnvironmentalDataListArgs>): Promise<EnvironmentalDatumListResponse> {
                return this.http.requestGraphQL<{
                    environmentalDataList: EnvironmentalDatumListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_ENVIRONMENTALDATA (
                                  $first: Int
                                  $skip: Int
                                  $filter: EnvironmentalDatumFilter
                                  $sort: [EnvironmentalDatumSort!]
                            ) {
                                environmentalDataList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
parameter
value
measurement_date

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.environmentalDataList);
            }

            
                    async createEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumCreateArgs>): Promise<EnvironmentalDatum | null> {
                        return this.http.requestGraphQL<{
                          environmentalDatumCreate: EnvironmentalDatum
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_ENVIRONMENTALDATA (
                                      $data: EnvironmentalDataCreateInput!
                                    ) {
                                         environmentalDatumCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.environmentalDatumCreate)?.catch(() => null);
                  }
                

                    async deleteEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_ENVIRONMENTALDATA (
                                      $data: EnvironmentalDatumDeleteInput!
                                      $filter: EnvironmentalDatumKeyFilter
                                      $force: Boolean
                                    ) {
                                        environmentalDatumDelete (
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
                  

                    async updateEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumUpdateArgs>): Promise<EnvironmentalDatum | null> {
                        return this.http.requestGraphQL<{
                          environmentalDatumUpdate: EnvironmentalDatum
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_ENVIRONMENTALDATA (
                                      $data: EnvironmentalDataUpdateInput!
                                    ) {
                                         environmentalDatumUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.environmentalDatumUpdate)?.catch(() => null);
                  }
                

            
        }
    
      
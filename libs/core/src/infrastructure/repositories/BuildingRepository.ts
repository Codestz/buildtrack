
      
        import {IRepositoryParams, IBuildingRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Building,
            QueryBuildingArgs,
            QueryBuildingsListArgs,
            BuildingListResponse,
            MutationBuildingCreateArgs, MutationBuildingDeleteArgs, MutationBuildingUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class BuildingRepository implements IBuildingRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getBuilding(params: IRepositoryParams<QueryBuildingArgs>): Promise<Building | null> {
                return this.http.requestGraphQL<{
                    building: Building
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_BUILDING(
                            $id: ID,$name: String
                        ) {
                            building(
                              id: $id,name: $name
                            ) {
                                id
createdAt
updatedAt
name
address
city
state
zip_code
country










    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.building)?.catch(() => null);
            }

            async getBuildingsList(params: IRepositoryParams<QueryBuildingsListArgs>): Promise<BuildingListResponse> {
                return this.http.requestGraphQL<{
                    buildingsList: BuildingListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_BUILDINGS (
                                  $first: Int
                                  $skip: Int
                                  $filter: BuildingFilter
                                  $sort: [BuildingSort!]
                            ) {
                                buildingsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
name
address
city
state
zip_code
country











                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.buildingsList);
            }

            
                    async createBuilding(params: IRepositoryParams<MutationBuildingCreateArgs>): Promise<Building | null> {
                        return this.http.requestGraphQL<{
                          buildingCreate: Building
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_BUILDING (
                                      $data: BuildingCreateInput!
                                    ) {
                                         buildingCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.buildingCreate)?.catch(() => null);
                  }
                

                    async deleteBuilding(params: IRepositoryParams<MutationBuildingDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_BUILDING (
                                      $data: BuildingDeleteInput!
                                      $filter: BuildingKeyFilter
                                      $force: Boolean
                                    ) {
                                        buildingDelete (
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
                  

                    async updateBuilding(params: IRepositoryParams<MutationBuildingUpdateArgs>): Promise<Building | null> {
                        return this.http.requestGraphQL<{
                          buildingUpdate: Building
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_BUILDING (
                                      $data: BuildingUpdateInput!
                                    ) {
                                         buildingUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.buildingUpdate)?.catch(() => null);
                  }
                

            
        }
    
      
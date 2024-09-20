
      
        import {IRepositoryParams, IEquipmentRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Equipment,
            QueryEquipmentArgs,
            QueryEquipmentListArgs,
            EquipmentListResponse,
            MutationEquipmentCreateArgs, MutationEquipmentDeleteArgs, MutationEquipmentUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class EquipmentRepository implements IEquipmentRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getEquipment(params: IRepositoryParams<QueryEquipmentArgs>): Promise<Equipment | null> {
                return this.http.requestGraphQL<{
                    equipment: Equipment
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_EQUIPMENT(
                            $id: ID
                        ) {
                            equipment(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
name
type
installation_date
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.equipment)?.catch(() => null);
            }

            async getEquipmentList(params: IRepositoryParams<QueryEquipmentListArgs>): Promise<EquipmentListResponse> {
                return this.http.requestGraphQL<{
                    equipmentList: EquipmentListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_EQUIPMENT (
                                  $first: Int
                                  $skip: Int
                                  $filter: EquipmentFilter
                                  $sort: [EquipmentSort!]
                            ) {
                                equipmentList (
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
type
installation_date

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.equipmentList);
            }

            
                    async createEquipment(params: IRepositoryParams<MutationEquipmentCreateArgs>): Promise<Equipment | null> {
                        return this.http.requestGraphQL<{
                          equipmentCreate: Equipment
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_EQUIPMENT (
                                      $data: EquipmentCreateInput!
                                    ) {
                                         equipmentCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.equipmentCreate)?.catch(() => null);
                  }
                

                    async deleteEquipment(params: IRepositoryParams<MutationEquipmentDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_EQUIPMENT (
                                      $data: EquipmentDeleteInput!
                                      $filter: EquipmentKeyFilter
                                      $force: Boolean
                                    ) {
                                        equipmentDelete (
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
                  

                    async updateEquipment(params: IRepositoryParams<MutationEquipmentUpdateArgs>): Promise<Equipment | null> {
                        return this.http.requestGraphQL<{
                          equipmentUpdate: Equipment
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_EQUIPMENT (
                                      $data: EquipmentUpdateInput!
                                    ) {
                                         equipmentUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.equipmentUpdate)?.catch(() => null);
                  }
                

            
        }
    
      
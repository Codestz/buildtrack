
      
        import {IRepositoryParams, ISubscriptionsAppRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            SubscriptionsApp,
            QuerySubscriptionsAppArgs,
            QuerySubscriptionsAppsListArgs,
            SubscriptionsAppListResponse,
            MutationSubscriptionsAppCreateArgs, MutationSubscriptionsAppDeleteArgs, MutationSubscriptionsAppUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class SubscriptionsAppRepository implements ISubscriptionsAppRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getSubscriptionsApp(params: IRepositoryParams<QuerySubscriptionsAppArgs>): Promise<SubscriptionsApp | null> {
                return this.http.requestGraphQL<{
                    subscriptionsApp: SubscriptionsApp
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_SUBSCRIPTIONSAPP(
                            $id: ID
                        ) {
                            subscriptionsApp(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
tier_name
description
price
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.subscriptionsApp)?.catch(() => null);
            }

            async getSubscriptionsAppsList(params: IRepositoryParams<QuerySubscriptionsAppsListArgs>): Promise<SubscriptionsAppListResponse> {
                return this.http.requestGraphQL<{
                    subscriptionsAppsList: SubscriptionsAppListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_SUBSCRIPTIONSAPPS (
                                  $first: Int
                                  $skip: Int
                                  $filter: SubscriptionsAppFilter
                                  $sort: [SubscriptionsAppSort!]
                            ) {
                                subscriptionsAppsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
tier_name
description
price

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.subscriptionsAppsList);
            }

            
                    async createSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppCreateArgs>): Promise<SubscriptionsApp | null> {
                        return this.http.requestGraphQL<{
                          subscriptionsAppCreate: SubscriptionsApp
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_SUBSCRIPTIONSAPP (
                                      $data: SubscriptionsAppCreateInput!
                                    ) {
                                         subscriptionsAppCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.subscriptionsAppCreate)?.catch(() => null);
                  }
                

                    async deleteSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_SUBSCRIPTIONSAPP (
                                      $data: SubscriptionsAppDeleteInput!
                                      $filter: SubscriptionsAppKeyFilter
                                      $force: Boolean
                                    ) {
                                        subscriptionsAppDelete (
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
                  

                    async updateSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppUpdateArgs>): Promise<SubscriptionsApp | null> {
                        return this.http.requestGraphQL<{
                          subscriptionsAppUpdate: SubscriptionsApp
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_SUBSCRIPTIONSAPP (
                                      $data: SubscriptionsAppUpdateInput!
                                    ) {
                                         subscriptionsAppUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.subscriptionsAppUpdate)?.catch(() => null);
                  }
                

            
        }
    
      
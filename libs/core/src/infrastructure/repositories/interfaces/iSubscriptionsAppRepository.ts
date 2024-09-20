
      
        import {
            SubscriptionsApp,
            QuerySubscriptionsAppArgs,
            QuerySubscriptionsAppsListArgs,
            SubscriptionsAppListResponse,
            MutationSubscriptionsAppCreateArgs, MutationSubscriptionsAppDeleteArgs, MutationSubscriptionsAppUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface ISubscriptionsAppRepository {
            getSubscriptionsApp(params: IRepositoryParams<QuerySubscriptionsAppArgs>): Promise<SubscriptionsApp | null>;
            getSubscriptionsAppsList(params: IRepositoryParams<QuerySubscriptionsAppsListArgs>): Promise<SubscriptionsAppListResponse>;
            createSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppCreateArgs>): Promise<SubscriptionsApp | null>;
deleteSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppDeleteArgs>): Promise<SuccessResponse | null>;
updateSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppUpdateArgs>): Promise<SubscriptionsApp | null>;
            
          }
    
      
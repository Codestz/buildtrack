
      
        import {
            QuerySubscriptionsAppArgs,
            QuerySubscriptionsAppsListArgs,
            MutationSubscriptionsAppCreateArgs, MutationSubscriptionsAppDeleteArgs, MutationSubscriptionsAppUpdateArgs,
            
        } from '../../../definitions/schema';
        import {SubscriptionsAppEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface ISubscriptionsAppUseCase {
            getSubscriptionsApp(params: IRepositoryParams<QuerySubscriptionsAppArgs>): Promise<SubscriptionsAppEntity | null>;
            getSubscriptionsAppList(params: IRepositoryParams<QuerySubscriptionsAppsListArgs>): Promise<{
                count: number;
                items: Array<SubscriptionsAppEntity>;
            }>;
            createSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppCreateArgs>): Promise<boolean>;
deleteSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppDeleteArgs>): Promise<boolean>;
updateSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppUpdateArgs>): Promise<boolean>;
              
        }
    
      
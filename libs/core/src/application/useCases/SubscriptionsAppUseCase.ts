
      
        import {ISubscriptionsAppUseCase} from './interfaces';
        import {SubscriptionsAppEntity} from '../../domain';
        import {
            QuerySubscriptionsAppArgs,
            QuerySubscriptionsAppsListArgs,
            MutationSubscriptionsAppCreateArgs, MutationSubscriptionsAppDeleteArgs, MutationSubscriptionsAppUpdateArgs,
            
        } from '../../definitions/schema';
        import {ISubscriptionsAppRepository, SubscriptionsAppRepository, IRepositoryParams} from '../../infrastructure';

        export class SubscriptionsAppUseCase implements ISubscriptionsAppUseCase {
              private readonly repository: ISubscriptionsAppRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new SubscriptionsAppRepository();
                    this.errorCatcher = (
                      error: unknown,
                      methodName: string,
                    ) => {
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                        
                        if (typeof error === 'string') {
                            throw new Error(error);
                        }

                        throw new Error(`An error occurred trying to ${methodName}`);
                    };
              }

            async getSubscriptionsApp(params: IRepositoryParams<QuerySubscriptionsAppArgs>): Promise<SubscriptionsAppEntity | null> {
                        try {
                            return this.repository.getSubscriptionsApp(params)
                            .then((result) => new SubscriptionsAppEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getSubscriptionsApp'));
                        } catch (error) {
                            this.errorCatcher(error, 'getSubscriptionsApp');
                        }
            }

            async getSubscriptionsAppList(params: IRepositoryParams<QuerySubscriptionsAppsListArgs>): Promise<{
                count: number;
                items: Array<SubscriptionsAppEntity>;
                }> {
                try {
                    return this.repository.getSubscriptionsAppsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new SubscriptionsAppEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getSubscriptionsAppsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getSubscriptionsAppsList');
                }
            }

            async createSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createSubscriptionsApp(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createSubscriptionsApp'));
                        } catch (error) {
                            this.errorCatcher(error, 'createSubscriptionsApp');
                        }
                    }

                    async deleteSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteSubscriptionsApp(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteSubscriptionsApp'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteSubscriptionsApp');
                        }
                    }
                  
async updateSubscriptionsApp(params: IRepositoryParams<MutationSubscriptionsAppUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateSubscriptionsApp(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateSubscriptionsApp'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateSubscriptionsApp');
                        }
                    }

              
            }
    
      
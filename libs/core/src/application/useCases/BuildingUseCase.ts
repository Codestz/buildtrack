
      
        import {IBuildingUseCase} from './interfaces';
        import {BuildingEntity} from '../../domain';
        import {
            QueryBuildingArgs,
            QueryBuildingsListArgs,
            MutationBuildingCreateArgs, MutationBuildingDeleteArgs, MutationBuildingUpdateArgs,
            
        } from '../../definitions/schema';
        import {IBuildingRepository, BuildingRepository, IRepositoryParams} from '../../infrastructure';

        export class BuildingUseCase implements IBuildingUseCase {
              private readonly repository: IBuildingRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new BuildingRepository();
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

            async getBuilding(params: IRepositoryParams<QueryBuildingArgs>): Promise<BuildingEntity | null> {
                        try {
                            return this.repository.getBuilding(params)
                            .then((result) => new BuildingEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getBuilding'));
                        } catch (error) {
                            this.errorCatcher(error, 'getBuilding');
                        }
            }

            async getBuildingList(params: IRepositoryParams<QueryBuildingsListArgs>): Promise<{
                count: number;
                items: Array<BuildingEntity>;
                }> {
                try {
                    return this.repository.getBuildingsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new BuildingEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getBuildingsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getBuildingsList');
                }
            }

            async createBuilding(params: IRepositoryParams<MutationBuildingCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createBuilding(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createBuilding'));
                        } catch (error) {
                            this.errorCatcher(error, 'createBuilding');
                        }
                    }

                    async deleteBuilding(params: IRepositoryParams<MutationBuildingDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteBuilding(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteBuilding'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteBuilding');
                        }
                    }
                  
async updateBuilding(params: IRepositoryParams<MutationBuildingUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateBuilding(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateBuilding'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateBuilding');
                        }
                    }

              
            }
    
      
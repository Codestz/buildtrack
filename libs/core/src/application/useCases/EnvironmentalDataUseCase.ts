
      
        import {IEnvironmentalDataUseCase} from './interfaces';
        import {EnvironmentalDataEntity} from '../../domain';
        import {
            QueryEnvironmentalDatumArgs,
            QueryEnvironmentalDataListArgs,
            MutationEnvironmentalDatumCreateArgs, MutationEnvironmentalDatumDeleteArgs, MutationEnvironmentalDatumUpdateArgs,
            
        } from '../../definitions/schema';
        import {IEnvironmentalDataRepository, EnvironmentalDataRepository, IRepositoryParams} from '../../infrastructure';

        export class EnvironmentalDataUseCase implements IEnvironmentalDataUseCase {
              private readonly repository: IEnvironmentalDataRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new EnvironmentalDataRepository();
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

            async getEnvironmentalData(params: IRepositoryParams<QueryEnvironmentalDatumArgs>): Promise<EnvironmentalDataEntity | null> {
                        try {
                            return this.repository.getEnvironmentalData(params)
                            .then((result) => new EnvironmentalDataEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getEnvironmentalData'));
                        } catch (error) {
                            this.errorCatcher(error, 'getEnvironmentalData');
                        }
            }

            async getEnvironmentalDataList(params: IRepositoryParams<QueryEnvironmentalDataListArgs>): Promise<{
                count: number;
                items: Array<EnvironmentalDataEntity>;
                }> {
                try {
                    return this.repository.getEnvironmentalDataList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new EnvironmentalDataEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getEnvironmentalDataList'));
                } catch (error) {
                    this.errorCatcher(error, 'getEnvironmentalDataList');
                }
            }

            async createEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createEnvironmentalData(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createEnvironmentalData'));
                        } catch (error) {
                            this.errorCatcher(error, 'createEnvironmentalData');
                        }
                    }

                    async deleteEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteEnvironmentalData(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteEnvironmentalData'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteEnvironmentalData');
                        }
                    }
                  
async updateEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateEnvironmentalData(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateEnvironmentalData'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateEnvironmentalData');
                        }
                    }

              
            }
    
      
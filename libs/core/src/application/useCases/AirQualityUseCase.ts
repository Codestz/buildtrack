
      
        import {IAirQualityUseCase} from './interfaces';
        import {AirQualityEntity} from '../../domain';
        import {
            QueryAirQualityArgs,
            QueryAirQualitiesListArgs,
            MutationAirQualityCreateArgs, MutationAirQualityDeleteArgs, MutationAirQualityUpdateArgs,
            
        } from '../../definitions/schema';
        import {IAirQualityRepository, AirQualityRepository, IRepositoryParams} from '../../infrastructure';

        export class AirQualityUseCase implements IAirQualityUseCase {
              private readonly repository: IAirQualityRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new AirQualityRepository();
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

            async getAirQuality(params: IRepositoryParams<QueryAirQualityArgs>): Promise<AirQualityEntity | null> {
                        try {
                            return this.repository.getAirQuality(params)
                            .then((result) => new AirQualityEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getAirQuality'));
                        } catch (error) {
                            this.errorCatcher(error, 'getAirQuality');
                        }
            }

            async getAirQualityList(params: IRepositoryParams<QueryAirQualitiesListArgs>): Promise<{
                count: number;
                items: Array<AirQualityEntity>;
                }> {
                try {
                    return this.repository.getAirQualityList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new AirQualityEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getAirQualityList'));
                } catch (error) {
                    this.errorCatcher(error, 'getAirQualityList');
                }
            }

            async createAirQuality(params: IRepositoryParams<MutationAirQualityCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createAirQuality(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createAirQuality'));
                        } catch (error) {
                            this.errorCatcher(error, 'createAirQuality');
                        }
                    }

                    async deleteAirQuality(params: IRepositoryParams<MutationAirQualityDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteAirQuality(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteAirQuality'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteAirQuality');
                        }
                    }
                  
async updateAirQuality(params: IRepositoryParams<MutationAirQualityUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateAirQuality(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateAirQuality'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateAirQuality');
                        }
                    }

              
            }
    
      
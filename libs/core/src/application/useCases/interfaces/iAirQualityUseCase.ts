
      
        import {
            QueryAirQualityArgs,
            QueryAirQualitiesListArgs,
            MutationAirQualityCreateArgs, MutationAirQualityDeleteArgs, MutationAirQualityUpdateArgs,
            
        } from '../../../definitions/schema';
        import {AirQualityEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IAirQualityUseCase {
            getAirQuality(params: IRepositoryParams<QueryAirQualityArgs>): Promise<AirQualityEntity | null>;
            getAirQualityList(params: IRepositoryParams<QueryAirQualitiesListArgs>): Promise<{
                count: number;
                items: Array<AirQualityEntity>;
            }>;
            createAirQuality(params: IRepositoryParams<MutationAirQualityCreateArgs>): Promise<boolean>;
deleteAirQuality(params: IRepositoryParams<MutationAirQualityDeleteArgs>): Promise<boolean>;
updateAirQuality(params: IRepositoryParams<MutationAirQualityUpdateArgs>): Promise<boolean>;
              
        }
    
      
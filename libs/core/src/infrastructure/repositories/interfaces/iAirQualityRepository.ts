
      
        import {
            AirQuality,
            QueryAirQualityArgs,
            QueryAirQualitiesListArgs,
            AirQualityListResponse,
            MutationAirQualityCreateArgs, MutationAirQualityDeleteArgs, MutationAirQualityUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IAirQualityRepository {
            getAirQuality(params: IRepositoryParams<QueryAirQualityArgs>): Promise<AirQuality | null>;
            getAirQualityList(params: IRepositoryParams<QueryAirQualitiesListArgs>): Promise<AirQualityListResponse>;
            createAirQuality(params: IRepositoryParams<MutationAirQualityCreateArgs>): Promise<AirQuality | null>;
deleteAirQuality(params: IRepositoryParams<MutationAirQualityDeleteArgs>): Promise<SuccessResponse | null>;
updateAirQuality(params: IRepositoryParams<MutationAirQualityUpdateArgs>): Promise<AirQuality | null>;
            
          }
    
      
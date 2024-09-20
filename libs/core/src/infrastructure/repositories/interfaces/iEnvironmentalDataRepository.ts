
      
        import {
            EnvironmentalDatum,
            QueryEnvironmentalDatumArgs,
            QueryEnvironmentalDataListArgs,
            EnvironmentalDatumListResponse,
            MutationEnvironmentalDatumCreateArgs, MutationEnvironmentalDatumDeleteArgs, MutationEnvironmentalDatumUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IEnvironmentalDataRepository {
            getEnvironmentalData(params: IRepositoryParams<QueryEnvironmentalDatumArgs>): Promise<EnvironmentalDatum | null>;
            getEnvironmentalDataList(params: IRepositoryParams<QueryEnvironmentalDataListArgs>): Promise<EnvironmentalDatumListResponse>;
            createEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumCreateArgs>): Promise<EnvironmentalDatum | null>;
deleteEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumDeleteArgs>): Promise<SuccessResponse | null>;
updateEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumUpdateArgs>): Promise<EnvironmentalDatum | null>;
            
          }
    
      
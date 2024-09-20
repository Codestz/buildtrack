
      
        import {
            QueryEnvironmentalDatumArgs,
            QueryEnvironmentalDataListArgs,
            MutationEnvironmentalDatumCreateArgs, MutationEnvironmentalDatumDeleteArgs, MutationEnvironmentalDatumUpdateArgs,
            
        } from '../../../definitions/schema';
        import {EnvironmentalDataEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IEnvironmentalDataUseCase {
            getEnvironmentalData(params: IRepositoryParams<QueryEnvironmentalDatumArgs>): Promise<EnvironmentalDataEntity | null>;
            getEnvironmentalDataList(params: IRepositoryParams<QueryEnvironmentalDataListArgs>): Promise<{
                count: number;
                items: Array<EnvironmentalDataEntity>;
            }>;
            createEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumCreateArgs>): Promise<boolean>;
deleteEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumDeleteArgs>): Promise<boolean>;
updateEnvironmentalData(params: IRepositoryParams<MutationEnvironmentalDatumUpdateArgs>): Promise<boolean>;
              
        }
    
      

      
        import {
            Building,
            QueryBuildingArgs,
            QueryBuildingsListArgs,
            BuildingListResponse,
            MutationBuildingCreateArgs, MutationBuildingDeleteArgs, MutationBuildingUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IBuildingRepository {
            getBuilding(params: IRepositoryParams<QueryBuildingArgs>): Promise<Building | null>;
            getBuildingsList(params: IRepositoryParams<QueryBuildingsListArgs>): Promise<BuildingListResponse>;
            createBuilding(params: IRepositoryParams<MutationBuildingCreateArgs>): Promise<Building | null>;
deleteBuilding(params: IRepositoryParams<MutationBuildingDeleteArgs>): Promise<SuccessResponse | null>;
updateBuilding(params: IRepositoryParams<MutationBuildingUpdateArgs>): Promise<Building | null>;
            
          }
    
      
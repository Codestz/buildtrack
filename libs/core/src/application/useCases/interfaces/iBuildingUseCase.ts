
      
        import {
            QueryBuildingArgs,
            QueryBuildingsListArgs,
            MutationBuildingCreateArgs, MutationBuildingDeleteArgs, MutationBuildingUpdateArgs,
            
        } from '../../../definitions/schema';
        import {BuildingEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IBuildingUseCase {
            getBuilding(params: IRepositoryParams<QueryBuildingArgs>): Promise<BuildingEntity | null>;
            getBuildingList(params: IRepositoryParams<QueryBuildingsListArgs>): Promise<{
                count: number;
                items: Array<BuildingEntity>;
            }>;
            createBuilding(params: IRepositoryParams<MutationBuildingCreateArgs>): Promise<boolean>;
deleteBuilding(params: IRepositoryParams<MutationBuildingDeleteArgs>): Promise<boolean>;
updateBuilding(params: IRepositoryParams<MutationBuildingUpdateArgs>): Promise<boolean>;
              
        }
    
      
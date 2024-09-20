
      
        import {
            Equipment,
            QueryEquipmentArgs,
            QueryEquipmentListArgs,
            EquipmentListResponse,
            MutationEquipmentCreateArgs, MutationEquipmentDeleteArgs, MutationEquipmentUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IEquipmentRepository {
            getEquipment(params: IRepositoryParams<QueryEquipmentArgs>): Promise<Equipment | null>;
            getEquipmentList(params: IRepositoryParams<QueryEquipmentListArgs>): Promise<EquipmentListResponse>;
            createEquipment(params: IRepositoryParams<MutationEquipmentCreateArgs>): Promise<Equipment | null>;
deleteEquipment(params: IRepositoryParams<MutationEquipmentDeleteArgs>): Promise<SuccessResponse | null>;
updateEquipment(params: IRepositoryParams<MutationEquipmentUpdateArgs>): Promise<Equipment | null>;
            
          }
    
      
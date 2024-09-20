
      
        import {
            QueryEquipmentArgs,
            QueryEquipmentListArgs,
            MutationEquipmentCreateArgs, MutationEquipmentDeleteArgs, MutationEquipmentUpdateArgs,
            
        } from '../../../definitions/schema';
        import {EquipmentEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IEquipmentUseCase {
            getEquipment(params: IRepositoryParams<QueryEquipmentArgs>): Promise<EquipmentEntity | null>;
            getEquipmentList(params: IRepositoryParams<QueryEquipmentListArgs>): Promise<{
                count: number;
                items: Array<EquipmentEntity>;
            }>;
            createEquipment(params: IRepositoryParams<MutationEquipmentCreateArgs>): Promise<boolean>;
deleteEquipment(params: IRepositoryParams<MutationEquipmentDeleteArgs>): Promise<boolean>;
updateEquipment(params: IRepositoryParams<MutationEquipmentUpdateArgs>): Promise<boolean>;
              
        }
    
      
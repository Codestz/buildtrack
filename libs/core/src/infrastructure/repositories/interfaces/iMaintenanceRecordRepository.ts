
      
        import {
            MaintenanceRecord,
            QueryMaintenanceRecordArgs,
            QueryMaintenanceRecordsListArgs,
            MaintenanceRecordListResponse,
            MutationMaintenanceRecordCreateArgs, MutationMaintenanceRecordDeleteArgs, MutationMaintenanceRecordUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IMaintenanceRecordRepository {
            getMaintenanceRecord(params: IRepositoryParams<QueryMaintenanceRecordArgs>): Promise<MaintenanceRecord | null>;
            getMaintenanceRecordsList(params: IRepositoryParams<QueryMaintenanceRecordsListArgs>): Promise<MaintenanceRecordListResponse>;
            createMaintenanceRecord(params: IRepositoryParams<MutationMaintenanceRecordCreateArgs>): Promise<MaintenanceRecord | null>;
deleteMaintenanceRecord(params: IRepositoryParams<MutationMaintenanceRecordDeleteArgs>): Promise<SuccessResponse | null>;
updateMaintenanceRecord(params: IRepositoryParams<MutationMaintenanceRecordUpdateArgs>): Promise<MaintenanceRecord | null>;
            
          }
    
      
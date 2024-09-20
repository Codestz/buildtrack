
      
        import {
            QueryReportArgs,
            QueryReportsListArgs,
            MutationReportCreateArgs, MutationReportDeleteArgs, MutationReportUpdateArgs,
            
        } from '../../../definitions/schema';
        import {ReportEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IReportUseCase {
            getReport(params: IRepositoryParams<QueryReportArgs>): Promise<ReportEntity | null>;
            getReportList(params: IRepositoryParams<QueryReportsListArgs>): Promise<{
                count: number;
                items: Array<ReportEntity>;
            }>;
            createReport(params: IRepositoryParams<MutationReportCreateArgs>): Promise<boolean>;
deleteReport(params: IRepositoryParams<MutationReportDeleteArgs>): Promise<boolean>;
updateReport(params: IRepositoryParams<MutationReportUpdateArgs>): Promise<boolean>;
              
        }
    
      
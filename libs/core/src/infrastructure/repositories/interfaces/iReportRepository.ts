
      
        import {
            Report,
            QueryReportArgs,
            QueryReportsListArgs,
            ReportListResponse,
            MutationReportCreateArgs, MutationReportDeleteArgs, MutationReportUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IReportRepository {
            getReport(params: IRepositoryParams<QueryReportArgs>): Promise<Report | null>;
            getReportsList(params: IRepositoryParams<QueryReportsListArgs>): Promise<ReportListResponse>;
            createReport(params: IRepositoryParams<MutationReportCreateArgs>): Promise<Report | null>;
deleteReport(params: IRepositoryParams<MutationReportDeleteArgs>): Promise<SuccessResponse | null>;
updateReport(params: IRepositoryParams<MutationReportUpdateArgs>): Promise<Report | null>;
            
          }
    
      
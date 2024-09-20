
      
        import {
            Certification,
            QueryCertificationArgs,
            QueryCertificationsListArgs,
            CertificationListResponse,
            MutationCertificationCreateArgs, MutationCertificationDeleteArgs, MutationCertificationUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface ICertificationRepository {
            getCertification(params: IRepositoryParams<QueryCertificationArgs>): Promise<Certification | null>;
            getCertificationsList(params: IRepositoryParams<QueryCertificationsListArgs>): Promise<CertificationListResponse>;
            createCertification(params: IRepositoryParams<MutationCertificationCreateArgs>): Promise<Certification | null>;
deleteCertification(params: IRepositoryParams<MutationCertificationDeleteArgs>): Promise<SuccessResponse | null>;
updateCertification(params: IRepositoryParams<MutationCertificationUpdateArgs>): Promise<Certification | null>;
            
          }
    
      
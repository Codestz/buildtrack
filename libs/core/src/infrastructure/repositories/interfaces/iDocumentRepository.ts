
      
        import {
            Document,
            QueryDocumentArgs,
            QueryDocumentsListArgs,
            DocumentListResponse,
            MutationDocumentCreateArgs, MutationDocumentDeleteArgs, MutationDocumentUpdateArgs,
            SuccessResponse,
            
        } from '../../../definitions/schema';
        import {IRepositoryParams} from './iRepositoryParams';

        export interface IDocumentRepository {
            getDocument(params: IRepositoryParams<QueryDocumentArgs>): Promise<Document | null>;
            getDocumentsList(params: IRepositoryParams<QueryDocumentsListArgs>): Promise<DocumentListResponse>;
            createDocument(params: IRepositoryParams<MutationDocumentCreateArgs>): Promise<Document | null>;
deleteDocument(params: IRepositoryParams<MutationDocumentDeleteArgs>): Promise<SuccessResponse | null>;
updateDocument(params: IRepositoryParams<MutationDocumentUpdateArgs>): Promise<Document | null>;
            
          }
    
      
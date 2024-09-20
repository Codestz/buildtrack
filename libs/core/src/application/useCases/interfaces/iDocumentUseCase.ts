
      
        import {
            QueryDocumentArgs,
            QueryDocumentsListArgs,
            MutationDocumentCreateArgs, MutationDocumentDeleteArgs, MutationDocumentUpdateArgs,
            
        } from '../../../definitions/schema';
        import {DocumentEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IDocumentUseCase {
            getDocument(params: IRepositoryParams<QueryDocumentArgs>): Promise<DocumentEntity | null>;
            getDocumentList(params: IRepositoryParams<QueryDocumentsListArgs>): Promise<{
                count: number;
                items: Array<DocumentEntity>;
            }>;
            createDocument(params: IRepositoryParams<MutationDocumentCreateArgs>): Promise<boolean>;
deleteDocument(params: IRepositoryParams<MutationDocumentDeleteArgs>): Promise<boolean>;
updateDocument(params: IRepositoryParams<MutationDocumentUpdateArgs>): Promise<boolean>;
              
        }
    
      
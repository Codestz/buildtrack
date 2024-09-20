
      
        import {IDocumentUseCase} from './interfaces';
        import {DocumentEntity} from '../../domain';
        import {
            QueryDocumentArgs,
            QueryDocumentsListArgs,
            MutationDocumentCreateArgs, MutationDocumentDeleteArgs, MutationDocumentUpdateArgs,
            
        } from '../../definitions/schema';
        import {IDocumentRepository, DocumentRepository, IRepositoryParams} from '../../infrastructure';

        export class DocumentUseCase implements IDocumentUseCase {
              private readonly repository: IDocumentRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new DocumentRepository();
                    this.errorCatcher = (
                      error: unknown,
                      methodName: string,
                    ) => {
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                        
                        if (typeof error === 'string') {
                            throw new Error(error);
                        }

                        throw new Error(`An error occurred trying to ${methodName}`);
                    };
              }

            async getDocument(params: IRepositoryParams<QueryDocumentArgs>): Promise<DocumentEntity | null> {
                        try {
                            return this.repository.getDocument(params)
                            .then((result) => new DocumentEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getDocument'));
                        } catch (error) {
                            this.errorCatcher(error, 'getDocument');
                        }
            }

            async getDocumentList(params: IRepositoryParams<QueryDocumentsListArgs>): Promise<{
                count: number;
                items: Array<DocumentEntity>;
                }> {
                try {
                    return this.repository.getDocumentsList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new DocumentEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getDocumentsList'));
                } catch (error) {
                    this.errorCatcher(error, 'getDocumentsList');
                }
            }

            async createDocument(params: IRepositoryParams<MutationDocumentCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createDocument(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createDocument'));
                        } catch (error) {
                            this.errorCatcher(error, 'createDocument');
                        }
                    }

                    async deleteDocument(params: IRepositoryParams<MutationDocumentDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteDocument(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteDocument'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteDocument');
                        }
                    }
                  
async updateDocument(params: IRepositoryParams<MutationDocumentUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateDocument(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateDocument'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateDocument');
                        }
                    }

              
            }
    
      
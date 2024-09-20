
      
        import {IRepositoryParams, IDocumentRepository} from './interfaces';
        import {Http, IHttp} from '../http';
        import { gql } from 'graphql-request';
        import {Environment} from '../../environment';
        import {
            Document,
            QueryDocumentArgs,
            QueryDocumentsListArgs,
            DocumentListResponse,
            MutationDocumentCreateArgs, MutationDocumentDeleteArgs, MutationDocumentUpdateArgs,
            SuccessResponse,
            
        } from '../../definitions/schema';

        export class DocumentRepository implements IDocumentRepository {
            private readonly http: IHttp;

            constructor() {
                this.http = new Http();
            }

            async getDocument(params: IRepositoryParams<QueryDocumentArgs>): Promise<Document | null> {
                return this.http.requestGraphQL<{
                    document: Document
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_DOCUMENT(
                            $id: ID
                        ) {
                            document(
                              id: $id
                            ) {
                                id
createdAt
updatedAt
document_type
file_path
uploaded_date
    
                            }
                        }
                        `
                      ,
                      token: params.token,
                    variables: params.variables,
                })?.then((response) => response.document)?.catch(() => null);
            }

            async getDocumentsList(params: IRepositoryParams<QueryDocumentsListArgs>): Promise<DocumentListResponse> {
                return this.http.requestGraphQL<{
                    documentsList: DocumentListResponse
                }>({
                    url: Environment.BACKEND_API_URL,
                    requestDocument:
                        gql`
                            query GET_DOCUMENTS (
                                  $first: Int
                                  $skip: Int
                                  $filter: DocumentFilter
                                  $sort: [DocumentSort!]
                            ) {
                                documentsList (
                                  first: $first
                                  skip: $skip
                                  filter: $filter
                                  sort: $sort
                                ) {
                                    items {
                                        id
createdAt
updatedAt
document_type
file_path
uploaded_date

                                    }
                                    count
                            }
                        }
                      `,
                      token: params.token,
                    variables: params.variables,
                })
                ?.then((response) => response.documentsList);
            }

            
                    async createDocument(params: IRepositoryParams<MutationDocumentCreateArgs>): Promise<Document | null> {
                        return this.http.requestGraphQL<{
                          documentCreate: Document
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation CREATE_DOCUMENT (
                                      $data: DocumentCreateInput!
                                    ) {
                                         documentCreate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.documentCreate)?.catch(() => null);
                  }
                

                    async deleteDocument(params: IRepositoryParams<MutationDocumentDeleteArgs>): Promise<SuccessResponse | null> {
                        return this.http.requestGraphQL<SuccessResponse>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation DELETE_DOCUMENT (
                                      $data: DocumentDeleteInput!
                                      $filter: DocumentKeyFilter
                                      $force: Boolean
                                    ) {
                                        documentDelete (
                                          data: $data
                                          filter: $filter
                                          force: $force
                                        ) {
                                            success
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.catch(() => null);
                }
                  

                    async updateDocument(params: IRepositoryParams<MutationDocumentUpdateArgs>): Promise<Document | null> {
                        return this.http.requestGraphQL<{
                          documentUpdate: Document
                        }>({
                            url: Environment.BACKEND_API_URL,
                            requestDocument:
                                gql`
                                    mutation UPDATE_DOCUMENT (
                                      $data: DocumentUpdateInput!
                                    ) {
                                         documentUpdate (
                                          data: $data
                                        ) {
                                            id
                                        }
                                    }
                                `,
                            token: params.token,
                            variables: params.variables,
                        })?.then((response) => response.documentUpdate)?.catch(() => null);
                  }
                

            
        }
    
      
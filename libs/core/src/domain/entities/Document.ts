
      
        import { IDocumentEntity,  } from './interfaces';
        import {
          
          Document as GQLDocument } from '../../definitions/schema';
        

        export class DocumentEntity implements IDocumentEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _document_type?: string;
private readonly _file_path?: string;
private readonly _uploaded_date?: string;


                constructor(data: GQLDocument | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._document_type = data?.document_type || undefined;
this._file_path = data?.file_path || undefined;
this._uploaded_date = data?.uploaded_date || undefined;

                }

                
                        get Id(): string | undefined {
                            return this._id;
                  }
                    

                        get CreatedAt(): string | undefined {
                            return this._createdAt;
                  }
                    

                        get UpdatedAt(): string | undefined {
                            return this._updatedAt;
                  }
                    

                        get DocumentType(): string | undefined {
                            return this._document_type;
                  }
                    

                        get FilePath(): string | undefined {
                            return this._file_path;
                  }
                    

                        get UploadedDate(): string | undefined {
                            return this._uploaded_date;
                  }
                    

        }
    
      
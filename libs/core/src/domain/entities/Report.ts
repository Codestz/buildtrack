
      
        import { IReportEntity,  } from './interfaces';
        import {
          
          Report as GQLReport } from '../../definitions/schema';
        

        export class ReportEntity implements IReportEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _title?: string;
private readonly _content?: Record<string, any>;
private readonly _generated_date?: string;


                constructor(data: GQLReport | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._title = data?.title || undefined;
this._content = data?.content || undefined;
this._generated_date = data?.generated_date || undefined;

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
                    

                        get Title(): string | undefined {
                            return this._title;
                  }
                    

                        get Content(): Record<string, any> | undefined {
                            return this._content;
                  }
                    

                        get GeneratedDate(): string | undefined {
                            return this._generated_date;
                  }
                    

        }
    
      
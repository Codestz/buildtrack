
      
        import { IPermitEntity,  } from './interfaces';
        import {
          
          Permit as GQLPermit } from '../../definitions/schema';
        

        export class PermitEntity implements IPermitEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _permit_number?: string;
private readonly _issue_date?: string;
private readonly _expiry_date?: string;


                constructor(data: GQLPermit | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._permit_number = data?.permit_number || undefined;
this._issue_date = data?.issue_date || undefined;
this._expiry_date = data?.expiry_date || undefined;

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
                    

                        get PermitNumber(): string | undefined {
                            return this._permit_number;
                  }
                    

                        get IssueDate(): string | undefined {
                            return this._issue_date;
                  }
                    

                        get ExpiryDate(): string | undefined {
                            return this._expiry_date;
                  }
                    

        }
    
      
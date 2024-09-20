
      
        import { IComplianceRecordEntity,  } from './interfaces';
        import {
          
          ComplianceRecord as GQLComplianceRecord } from '../../definitions/schema';
        

        export class ComplianceRecordEntity implements IComplianceRecordEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _compliance_type?: string;
private readonly _status?: string;
private readonly _last_checked_date?: string;


                constructor(data: GQLComplianceRecord | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._compliance_type = data?.compliance_type || undefined;
this._status = data?.status || undefined;
this._last_checked_date = data?.last_checked_date || undefined;

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
                    

                        get ComplianceType(): string | undefined {
                            return this._compliance_type;
                  }
                    

                        get Status(): string | undefined {
                            return this._status;
                  }
                    

                        get LastCheckedDate(): string | undefined {
                            return this._last_checked_date;
                  }
                    

        }
    
      
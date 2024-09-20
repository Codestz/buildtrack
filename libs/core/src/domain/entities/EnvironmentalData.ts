
      
        import { IEnvironmentalDataEntity,  } from './interfaces';
        import {
          
          EnvironmentalData as GQLEnvironmentalData } from '../../definitions/schema';
        

        export class EnvironmentalDataEntity implements IEnvironmentalDataEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _parameter?: string;
private readonly _value?: number;
private readonly _measurement_date?: string;


                constructor(data: GQLEnvironmentalData | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._parameter = data?.parameter || undefined;
this._value = data?.value || undefined;
this._measurement_date = data?.measurement_date || undefined;

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
                    

                        get Parameter(): string | undefined {
                            return this._parameter;
                  }
                    

                        get Value(): number | undefined {
                            return this._value;
                  }
                    

                        get MeasurementDate(): string | undefined {
                            return this._measurement_date;
                  }
                    

        }
    
      
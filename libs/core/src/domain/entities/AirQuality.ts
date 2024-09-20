
      
        import { IAirQualityEntity,  } from './interfaces';
        import {
          
          AirQuality as GQLAirQuality } from '../../definitions/schema';
        

        export class AirQualityEntity implements IAirQualityEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _measurement_date?: string;
private readonly _pm25?: number;
private readonly _pm10?: number;
private readonly _co2?: number;


                constructor(data: GQLAirQuality | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._measurement_date = data?.measurement_date || undefined;
this._pm25 = data?.pm25 || undefined;
this._pm10 = data?.pm10 || undefined;
this._co2 = data?.co2 || undefined;

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
                    

                        get MeasurementDate(): string | undefined {
                            return this._measurement_date;
                  }
                    

                        get Pm25(): number | undefined {
                            return this._pm25;
                  }
                    

                        get Pm10(): number | undefined {
                            return this._pm10;
                  }
                    

                        get Co2(): number | undefined {
                            return this._co2;
                  }
                    

        }
    
      
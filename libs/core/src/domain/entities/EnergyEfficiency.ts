
      
        import { IEnergyEfficiencyEntity,  } from './interfaces';
        import {
          
          EnergyEfficiency as GQLEnergyEfficiency } from '../../definitions/schema';
        

        export class EnergyEfficiencyEntity implements IEnergyEfficiencyEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _measurement_date?: string;
private readonly _energy_consumption?: number;
private readonly _energy_savings?: number;


                constructor(data: GQLEnergyEfficiency | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._measurement_date = data?.measurement_date || undefined;
this._energy_consumption = data?.energy_consumption || undefined;
this._energy_savings = data?.energy_savings || undefined;

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
                    

                        get EnergyConsumption(): number | undefined {
                            return this._energy_consumption;
                  }
                    

                        get EnergySavings(): number | undefined {
                            return this._energy_savings;
                  }
                    

        }
    
      

      
        import { ISubscriptionsAppEntity,  } from './interfaces';
        import {
          
          SubscriptionsApp as GQLSubscriptionsApp } from '../../definitions/schema';
        

        export class SubscriptionsAppEntity implements ISubscriptionsAppEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _tier_name?: string;
private readonly _description?: string;
private readonly _price?: number;


                constructor(data: GQLSubscriptionsApp | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._tier_name = data?.tier_name || undefined;
this._description = data?.description || undefined;
this._price = data?.price || undefined;

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
                    

                        get TierName(): string | undefined {
                            return this._tier_name;
                  }
                    

                        get Description(): string | undefined {
                            return this._description;
                  }
                    

                        get Price(): number | undefined {
                            return this._price;
                  }
                    

        }
    
      

      
        import { IBuildingEntity,  } from './interfaces';
        import {
          
          Building as GQLBuilding } from '../../definitions/schema';
        

        export class BuildingEntity implements IBuildingEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _name?: string;
private readonly _address?: string;
private readonly _city?: string;
private readonly _state?: string;
private readonly _zip_code?: string;
private readonly _country?: string;












                constructor(data: GQLBuilding | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._name = data?.name || undefined;
this._address = data?.address || undefined;
this._city = data?.city || undefined;
this._state = data?.state || undefined;
this._zip_code = data?.zip_code || undefined;
this._country = data?.country || undefined;











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
                    

                        get Name(): string | undefined {
                            return this._name;
                  }
                    

                        get Address(): string | undefined {
                            return this._address;
                  }
                    

                        get City(): string | undefined {
                            return this._city;
                  }
                    

                        get State(): string | undefined {
                            return this._state;
                  }
                    

                        get ZipCode(): string | undefined {
                            return this._zip_code;
                  }
                    

                        get Country(): string | undefined {
                            return this._country;
                  }
                    











        }
    
      
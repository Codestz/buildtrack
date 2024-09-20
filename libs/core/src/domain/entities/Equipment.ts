
      
        import { IEquipmentEntity,  } from './interfaces';
        import {
          
          Equipment as GQLEquipment } from '../../definitions/schema';
        

        export class EquipmentEntity implements IEquipmentEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _name?: string;
private readonly _type?: string;
private readonly _installation_date?: string;


                constructor(data: GQLEquipment | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._name = data?.name || undefined;
this._type = data?.type || undefined;
this._installation_date = data?.installation_date || undefined;

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
                    

                        get Type(): string | undefined {
                            return this._type;
                  }
                    

                        get InstallationDate(): string | undefined {
                            return this._installation_date;
                  }
                    

        }
    
      
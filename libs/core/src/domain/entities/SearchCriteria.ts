
      
        import { ISearchCriteriaEntity,  } from './interfaces';
        import {
          
          SearchCriteria as GQLSearchCriteria } from '../../definitions/schema';
        

        export class SearchCriteriaEntity implements ISearchCriteriaEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _name?: string;
private readonly _criteria?: Record<string, any>;


                constructor(data: GQLSearchCriteria | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._name = data?.name || undefined;
this._criteria = data?.criteria || undefined;

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
                    

                        get Criteria(): Record<string, any> | undefined {
                            return this._criteria;
                  }
                    

        }
    
      
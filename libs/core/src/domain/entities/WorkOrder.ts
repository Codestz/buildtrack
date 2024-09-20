
      
        import { IWorkOrderEntity,  } from './interfaces';
        import {
          
          WorkOrder as GQLWorkOrder } from '../../definitions/schema';
        

        export class WorkOrderEntity implements IWorkOrderEntity {
              private readonly _id?: string;
private readonly _createdAt?: string;
private readonly _updatedAt?: string;
private readonly _task_description?: string;
private readonly _assigned_date?: string;
private readonly _completion_date?: string;
private readonly _status?: string;



                constructor(data: GQLWorkOrder | null) {
                    this._id = data?.id || undefined;
this._createdAt = data?.createdAt || undefined;
this._updatedAt = data?.updatedAt || undefined;
this._task_description = data?.task_description || undefined;
this._assigned_date = data?.assigned_date || undefined;
this._completion_date = data?.completion_date || undefined;
this._status = data?.status || undefined;


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
                    

                        get TaskDescription(): string | undefined {
                            return this._task_description;
                  }
                    

                        get AssignedDate(): string | undefined {
                            return this._assigned_date;
                  }
                    

                        get CompletionDate(): string | undefined {
                            return this._completion_date;
                  }
                    

                        get Status(): string | undefined {
                            return this._status;
                  }
                    


        }
    
      
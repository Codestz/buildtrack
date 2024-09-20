
      
        import {IEquipmentUseCase} from './interfaces';
        import {EquipmentEntity} from '../../domain';
        import {
            QueryEquipmentArgs,
            QueryEquipmentListArgs,
            MutationEquipmentCreateArgs, MutationEquipmentDeleteArgs, MutationEquipmentUpdateArgs,
            
        } from '../../definitions/schema';
        import {IEquipmentRepository, EquipmentRepository, IRepositoryParams} from '../../infrastructure';

        export class EquipmentUseCase implements IEquipmentUseCase {
              private readonly repository: IEquipmentRepository;
              private readonly errorCatcher: (error: unknown, methodName: string) => never;

              constructor() {
                    this.repository = new EquipmentRepository();
                    this.errorCatcher = (
                      error: unknown,
                      methodName: string,
                    ) => {
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                        
                        if (typeof error === 'string') {
                            throw new Error(error);
                        }

                        throw new Error(`An error occurred trying to ${methodName}`);
                    };
              }

            async getEquipment(params: IRepositoryParams<QueryEquipmentArgs>): Promise<EquipmentEntity | null> {
                        try {
                            return this.repository.getEquipment(params)
                            .then((result) => new EquipmentEntity(result))
                            .catch((err) => this.errorCatcher(err, 'getEquipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'getEquipment');
                        }
            }

            async getEquipmentList(params: IRepositoryParams<QueryEquipmentListArgs>): Promise<{
                count: number;
                items: Array<EquipmentEntity>;
                }> {
                try {
                    return this.repository.getEquipmentList(params)
                    .then((result) => {
                        return {
                            count: result?.count || 0,
                            items: result?.items?.map((item) => new EquipmentEntity(item)) || [],
                        };
                    })
                    .catch((err) => this.errorCatcher(err, 'getEquipmentList'));
                } catch (error) {
                    this.errorCatcher(error, 'getEquipmentList');
                }
            }

            async createEquipment(params: IRepositoryParams<MutationEquipmentCreateArgs>): Promise<boolean> {
                        try {
                            return this.repository.createEquipment(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'createEquipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'createEquipment');
                        }
                    }

                    async deleteEquipment(params: IRepositoryParams<MutationEquipmentDeleteArgs>): Promise<boolean> {
                        try {
                            return this.repository.deleteEquipment(params)
                            .then((result) => !!result?.success)
                            .catch((err) => this.errorCatcher(err, 'deleteEquipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'deleteEquipment');
                        }
                    }
                  
async updateEquipment(params: IRepositoryParams<MutationEquipmentUpdateArgs>): Promise<boolean> {
                        try {
                            return this.repository.updateEquipment(params)
                            .then((result) => !!result?.id)
                            .catch((err) => this.errorCatcher(err, 'updateEquipment'));
                        } catch (error) {
                            this.errorCatcher(error, 'updateEquipment');
                        }
                    }

              
            }
    
      
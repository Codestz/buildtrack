
      
        import {
            QueryImprovementArgs,
            QueryImprovementsListArgs,
            MutationImprovementCreateArgs, MutationImprovementDeleteArgs, MutationImprovementUpdateArgs,
            
        } from '../../../definitions/schema';
        import {ImprovementEntity } from '../../../domain';
        import {IRepositoryParams} from '../../../infrastructure';

        export interface IImprovementUseCase {
            getImprovement(params: IRepositoryParams<QueryImprovementArgs>): Promise<ImprovementEntity | null>;
            getImprovementList(params: IRepositoryParams<QueryImprovementsListArgs>): Promise<{
                count: number;
                items: Array<ImprovementEntity>;
            }>;
            createImprovement(params: IRepositoryParams<MutationImprovementCreateArgs>): Promise<boolean>;
deleteImprovement(params: IRepositoryParams<MutationImprovementDeleteArgs>): Promise<boolean>;
updateImprovement(params: IRepositoryParams<MutationImprovementUpdateArgs>): Promise<boolean>;
              
        }
    
      
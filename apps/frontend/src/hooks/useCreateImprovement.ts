
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationImprovementCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationImprovementCreateArgs
            {
 *   data: ImprovementCreateInput
 * }
 * 
 *  ImprovementCreateInput = {
 *   building_id?: InputMaybe<ImprovementsBuilding_IdRelationInput>
 * 
 *   cost?: InputMaybe<Scalars['Int']['input']>
 * 
 *   date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   description?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ImprovementsBuilding_IdRelationInput = {
 *   create?: InputMaybe<Improvements_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Improvement from the server.
               * @returns {UseMutationResult<boolean, Error, MutationImprovementCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateImprovement();
               * @param {MutationImprovementCreateArgs} params
              */

              export function useCreateImprovement() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationImprovementCreateArgs
                >(
                {
                  mutationKey: ['IMPROVEMENT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Improvement.createImprovement({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['IMPROVEMENT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
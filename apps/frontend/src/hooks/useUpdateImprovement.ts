
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationImprovementUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationImprovementUpdateArgs
            {
 *   data: ImprovementUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<ImprovementKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  ImprovementUpdateInput = {
 *   building_id?: InputMaybe<ImprovementsBuilding_IdUpdateRelationInput>
 * 
 *   cost?: InputMaybe<Scalars['Int']['input']>
 * 
 *   date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   description?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
 * export type ImprovementsBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<Improvements_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type ImprovementKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Improvement from the server.
               * @returns {UseMutationResult<boolean, Error, MutationImprovementUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateImprovement();
               * @param {MutationImprovementUpdateArgs} params
              */

              export function useUpdateImprovement() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationImprovementUpdateArgs
                >(
                {
                  mutationKey: ['IMPROVEMENT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Improvement.updateImprovement({
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
            
      

      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationBuildingDeleteArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationBuildingDeleteArgs
            {
 *   data?: InputMaybe<BuildingDeleteInput>
 *   filter?: InputMaybe<BuildingKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  BuildingDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type BuildingKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Building from the server.
               * @returns {UseMutationResult<boolean, Error, MutationBuildingDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteBuilding();
               * @param {MutationBuildingDeleteArgs} params
              */

              export function useDeleteBuilding() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationBuildingDeleteArgs
                >(
                {
                  mutationKey: ['BUILDING_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Building.deleteBuilding({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['BUILDING_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
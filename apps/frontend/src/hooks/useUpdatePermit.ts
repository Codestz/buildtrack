
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPermitUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationPermitUpdateArgs
            {
 *   data: PermitUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<PermitKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  PermitUpdateInput = {
 *   building_id?: InputMaybe<PermitsBuilding_IdUpdateRelationInput>
 * 
 *   expiry_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   permit_number?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type PermitsBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<Permits_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type PermitKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Permit from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPermitUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdatePermit();
               * @param {MutationPermitUpdateArgs} params
              */

              export function useUpdatePermit() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPermitUpdateArgs
                >(
                {
                  mutationKey: ['PERMIT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Permit.updatePermit({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['PERMIT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
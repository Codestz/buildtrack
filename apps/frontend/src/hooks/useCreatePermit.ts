
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationPermitCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationPermitCreateArgs
            {
 *   data: PermitCreateInput
 * }
 * 
 *  PermitCreateInput = {
 *   building_id?: InputMaybe<PermitsBuilding_IdRelationInput>
 * 
 *   expiry_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   permit_number?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type PermitsBuilding_IdRelationInput = {
 *   create?: InputMaybe<Permits_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Permit from the server.
               * @returns {UseMutationResult<boolean, Error, MutationPermitCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreatePermit();
               * @param {MutationPermitCreateArgs} params
              */

              export function useCreatePermit() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationPermitCreateArgs
                >(
                {
                  mutationKey: ['PERMIT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Permit.createPermit({
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
            
      

      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEquipmentDeleteArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEquipmentDeleteArgs
            {
 *   data?: InputMaybe<EquipmentDeleteInput>
 *   filter?: InputMaybe<EquipmentKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  EquipmentDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type EquipmentKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Equipment from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEquipmentDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteEquipment();
               * @param {MutationEquipmentDeleteArgs} params
              */

              export function useDeleteEquipment() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEquipmentDeleteArgs
                >(
                {
                  mutationKey: ['EQUIPMENT_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Equipment.deleteEquipment({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['EQUIPMENT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
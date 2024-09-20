
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEquipmentCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEquipmentCreateArgs
            {
 *   data: EquipmentCreateInput
 * }
 * 
 *  EquipmentCreateInput = {
 *   building_id?: InputMaybe<EquipmentBuilding_IdRelationInput>
 * 
 *   installation_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   name?: InputMaybe<Scalars['String']['input']>
 * 
 *   type?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type EquipmentBuilding_IdRelationInput = {
 *   create?: InputMaybe<Equipment_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Equipment from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEquipmentCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateEquipment();
               * @param {MutationEquipmentCreateArgs} params
              */

              export function useCreateEquipment() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEquipmentCreateArgs
                >(
                {
                  mutationKey: ['EQUIPMENT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Equipment.createEquipment({
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
            
      
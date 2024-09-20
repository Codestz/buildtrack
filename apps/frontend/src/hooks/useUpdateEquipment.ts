
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEquipmentUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEquipmentUpdateArgs
            {
 *   data: EquipmentUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<EquipmentKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  EquipmentUpdateInput = {
 *   building_id?: InputMaybe<EquipmentBuilding_IdUpdateRelationInput>
 *   id?: InputMaybe<Scalars['ID']['input']>
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
 * export type EquipmentBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<Equipment_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type EquipmentKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Equipment from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEquipmentUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateEquipment();
               * @param {MutationEquipmentUpdateArgs} params
              */

              export function useUpdateEquipment() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEquipmentUpdateArgs
                >(
                {
                  mutationKey: ['EQUIPMENT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Equipment.updateEquipment({
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
            
      
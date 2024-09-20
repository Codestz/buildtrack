
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationMaintenanceRecordUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationMaintenanceRecordUpdateArgs
            {
 *   data: MaintenanceRecordUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<MaintenanceRecordKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  MaintenanceRecordUpdateInput = {
 *   building_id?: InputMaybe<MaintenanceRecordsBuilding_IdUpdateRelationInput>
 * 
 *   date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   description?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
 * export type MaintenanceRecordsBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<MaintenanceRecords_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type MaintenanceRecordKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a MaintenanceRecord from the server.
               * @returns {UseMutationResult<boolean, Error, MutationMaintenanceRecordUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateMaintenanceRecord();
               * @param {MutationMaintenanceRecordUpdateArgs} params
              */

              export function useUpdateMaintenanceRecord() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationMaintenanceRecordUpdateArgs
                >(
                {
                  mutationKey: ['MAINTENANCERECORD_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.MaintenanceRecord.updateMaintenanceRecord({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['MAINTENANCERECORD_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
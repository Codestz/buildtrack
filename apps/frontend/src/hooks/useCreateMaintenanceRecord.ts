
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationMaintenanceRecordCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationMaintenanceRecordCreateArgs
            {
 *   data: MaintenanceRecordCreateInput
 * }
 * 
 *  MaintenanceRecordCreateInput = {
 *   building_id?: InputMaybe<MaintenanceRecordsBuilding_IdRelationInput>
 * 
 *   date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   description?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type MaintenanceRecordsBuilding_IdRelationInput = {
 *   create?: InputMaybe<MaintenanceRecords_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a MaintenanceRecord from the server.
               * @returns {UseMutationResult<boolean, Error, MutationMaintenanceRecordCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateMaintenanceRecord();
               * @param {MutationMaintenanceRecordCreateArgs} params
              */

              export function useCreateMaintenanceRecord() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationMaintenanceRecordCreateArgs
                >(
                {
                  mutationKey: ['MAINTENANCERECORD_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.MaintenanceRecord.createMaintenanceRecord({
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
            
      
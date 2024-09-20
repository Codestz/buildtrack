
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationComplianceRecordUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationComplianceRecordUpdateArgs
            {
 *   data: ComplianceRecordUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<ComplianceRecordKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  ComplianceRecordUpdateInput = {
 *   building_id?: InputMaybe<ComplianceRecordsBuilding_IdUpdateRelationInput>
 * 
 *   compliance_type?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   last_checked_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   status?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ComplianceRecordsBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<ComplianceRecords_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type ComplianceRecordKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a ComplianceRecord from the server.
               * @returns {UseMutationResult<boolean, Error, MutationComplianceRecordUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateComplianceRecord();
               * @param {MutationComplianceRecordUpdateArgs} params
              */

              export function useUpdateComplianceRecord() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationComplianceRecordUpdateArgs
                >(
                {
                  mutationKey: ['COMPLIANCERECORD_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.ComplianceRecord.updateComplianceRecord({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['COMPLIANCERECORD_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
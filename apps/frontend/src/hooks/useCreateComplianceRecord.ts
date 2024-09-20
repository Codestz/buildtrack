
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationComplianceRecordCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationComplianceRecordCreateArgs
            {
 *   data: ComplianceRecordCreateInput
 * }
 * 
 *  ComplianceRecordCreateInput = {
 *   building_id?: InputMaybe<ComplianceRecordsBuilding_IdRelationInput>
 * 
 *   compliance_type?: InputMaybe<Scalars['String']['input']>
 * 
 *   last_checked_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   status?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ComplianceRecordsBuilding_IdRelationInput = {
 *   create?: InputMaybe<ComplianceRecords_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a ComplianceRecord from the server.
               * @returns {UseMutationResult<boolean, Error, MutationComplianceRecordCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateComplianceRecord();
               * @param {MutationComplianceRecordCreateArgs} params
              */

              export function useCreateComplianceRecord() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationComplianceRecordCreateArgs
                >(
                {
                  mutationKey: ['COMPLIANCERECORD_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.ComplianceRecord.createComplianceRecord({
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
            
      
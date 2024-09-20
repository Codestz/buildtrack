
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationReportUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationReportUpdateArgs
            {
 *   data: ReportUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<ReportKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  ReportUpdateInput = {
 * 
 *   content?: InputMaybe<Scalars['JSON']['input']>
 * 
 *   generated_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   title?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<ReportsUser_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type ReportsUser_IdUpdateRelationInput = {
 *   update?: InputMaybe<Reports_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type ReportKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Report from the server.
               * @returns {UseMutationResult<boolean, Error, MutationReportUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateReport();
               * @param {MutationReportUpdateArgs} params
              */

              export function useUpdateReport() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationReportUpdateArgs
                >(
                {
                  mutationKey: ['REPORT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Report.updateReport({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['REPORT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      

      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationReportCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationReportCreateArgs
            {
 *   data: ReportCreateInput
 * }
 * 
 *  ReportCreateInput = {
 * 
 *   content?: InputMaybe<Scalars['JSON']['input']>
 * 
 *   generated_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   title?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<ReportsUser_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type ReportsUser_IdRelationInput = {
 *   create?: InputMaybe<Reports_UserCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Report from the server.
               * @returns {UseMutationResult<boolean, Error, MutationReportCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateReport();
               * @param {MutationReportCreateArgs} params
              */

              export function useCreateReport() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationReportCreateArgs
                >(
                {
                  mutationKey: ['REPORT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Report.createReport({
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
            
      
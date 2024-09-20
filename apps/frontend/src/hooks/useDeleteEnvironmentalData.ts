
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEnvironmentalDatumDeleteArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEnvironmentalDatumDeleteArgs
            {
 *   data?: InputMaybe<EnvironmentalDatumDeleteInput>
 *   filter?: InputMaybe<EnvironmentalDatumKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  EnvironmentalDatumDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type EnvironmentalDatumKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a EnvironmentalData from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEnvironmentalDatumDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteEnvironmentalData();
               * @param {MutationEnvironmentalDatumDeleteArgs} params
              */

              export function useDeleteEnvironmentalData() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEnvironmentalDatumDeleteArgs
                >(
                {
                  mutationKey: ['ENVIRONMENTALDATA_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.EnvironmentalData.deleteEnvironmentalData({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['ENVIRONMENTALDATA_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
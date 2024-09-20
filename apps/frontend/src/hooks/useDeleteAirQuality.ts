
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationAirQualityDeleteArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationAirQualityDeleteArgs
            {
 *   data?: InputMaybe<AirQualityDeleteInput>
 *   filter?: InputMaybe<AirQualityKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  AirQualityDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type AirQualityKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a AirQuality from the server.
               * @returns {UseMutationResult<boolean, Error, MutationAirQualityDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteAirQuality();
               * @param {MutationAirQualityDeleteArgs} params
              */

              export function useDeleteAirQuality() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationAirQualityDeleteArgs
                >(
                {
                  mutationKey: ['AIRQUALITY_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.AirQuality.deleteAirQuality({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['AIRQUALITY_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
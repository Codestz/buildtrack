
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationAirQualityCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationAirQualityCreateArgs
            {
 *   data: AirQualityCreateInput
 * }
 * 
 *  AirQualityCreateInput = {
 *   building_id: AirQualityBuilding_IdRelationInput
 * 
 *   co2?: InputMaybe<Scalars['Int']['input']>
 * 
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   pm10?: InputMaybe<Scalars['Int']['input']>
 * 
 *   pm25?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * export type AirQualityBuilding_IdRelationInput = {
 *   create?: InputMaybe<AirQuality_BuildingCreateInput>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to create a AirQuality from the server.
               * @returns {UseMutationResult<boolean, Error, MutationAirQualityCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateAirQuality();
               * @param {MutationAirQualityCreateArgs} params
              */

              export function useCreateAirQuality() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationAirQualityCreateArgs
                >(
                {
                  mutationKey: ['AIRQUALITY_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.AirQuality.createAirQuality({
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
            
      
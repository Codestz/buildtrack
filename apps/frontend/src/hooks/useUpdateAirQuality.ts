
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationAirQualityUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationAirQualityUpdateArgs
            {
 *   data: AirQualityUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<AirQualityKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  AirQualityUpdateInput = {
 *   building_id?: InputMaybe<AirQualityBuilding_IdUpdateRelationInput>
 * 
 *   co2?: InputMaybe<Scalars['Int']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   pm10?: InputMaybe<Scalars['Int']['input']>
 * 
 *   pm25?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * 
 * 
 * export type AirQualityBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<AirQuality_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type AirQualityKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a AirQuality from the server.
               * @returns {UseMutationResult<boolean, Error, MutationAirQualityUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateAirQuality();
               * @param {MutationAirQualityUpdateArgs} params
              */

              export function useUpdateAirQuality() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationAirQualityUpdateArgs
                >(
                {
                  mutationKey: ['AIRQUALITY_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.AirQuality.updateAirQuality({
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
            
      
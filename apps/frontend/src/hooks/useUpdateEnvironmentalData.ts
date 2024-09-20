
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEnvironmentalDatumUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEnvironmentalDatumUpdateArgs
            {
 *   data: EnvironmentalDatumUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<EnvironmentalDatumKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  EnvironmentalDatumUpdateInput = {
 *   building_id?: InputMaybe<EnvironmentalDataBuilding_IdUpdateRelationInput>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   parameter?: InputMaybe<Scalars['String']['input']>
 * 
 *   value?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * 
 * 
 * export type EnvironmentalDataBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<EnvironmentalData_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type EnvironmentalDatumKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a EnvironmentalData from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEnvironmentalDatumUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateEnvironmentalData();
               * @param {MutationEnvironmentalDatumUpdateArgs} params
              */

              export function useUpdateEnvironmentalData() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEnvironmentalDatumUpdateArgs
                >(
                {
                  mutationKey: ['ENVIRONMENTALDATA_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.EnvironmentalData.updateEnvironmentalData({
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
            
      

      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEnvironmentalDatumCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEnvironmentalDatumCreateArgs
            {
 *   data: EnvironmentalDatumCreateInput
 * }
 * 
 *  EnvironmentalDatumCreateInput = {
 *   building_id?: InputMaybe<EnvironmentalDataBuilding_IdRelationInput>
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
 * export type EnvironmentalDataBuilding_IdRelationInput = {
 *   create?: InputMaybe<EnvironmentalData_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a EnvironmentalData from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEnvironmentalDatumCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateEnvironmentalData();
               * @param {MutationEnvironmentalDatumCreateArgs} params
              */

              export function useCreateEnvironmentalData() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEnvironmentalDatumCreateArgs
                >(
                {
                  mutationKey: ['ENVIRONMENTALDATA_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.EnvironmentalData.createEnvironmentalData({
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
            
      
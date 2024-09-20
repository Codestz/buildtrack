
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEnergyEfficiencyUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEnergyEfficiencyUpdateArgs
            {
 *   data: EnergyEfficiencyUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  EnergyEfficiencyUpdateInput = {
 *   building_id?: InputMaybe<EnergyEfficiencyBuilding_IdUpdateRelationInput>
 * 
 *   energy_consumption?: InputMaybe<Scalars['Int']['input']>
 * 
 *   energy_savings?: InputMaybe<Scalars['Int']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EnergyEfficiencyBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<EnergyEfficiency_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type EnergyEfficiencyKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a EnergyEfficiency from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEnergyEfficiencyUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateEnergyEfficiency();
               * @param {MutationEnergyEfficiencyUpdateArgs} params
              */

              export function useUpdateEnergyEfficiency() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEnergyEfficiencyUpdateArgs
                >(
                {
                  mutationKey: ['ENERGYEFFICIENCY_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.EnergyEfficiency.updateEnergyEfficiency({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['ENERGYEFFICIENCY_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
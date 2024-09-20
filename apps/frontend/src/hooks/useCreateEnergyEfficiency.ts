
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationEnergyEfficiencyCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationEnergyEfficiencyCreateArgs
            {
 *   data: EnergyEfficiencyCreateInput
 * }
 * 
 *  EnergyEfficiencyCreateInput = {
 *   building_id?: InputMaybe<EnergyEfficiencyBuilding_IdRelationInput>
 * 
 *   energy_consumption?: InputMaybe<Scalars['Int']['input']>
 * 
 *   energy_savings?: InputMaybe<Scalars['Int']['input']>
 * 
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EnergyEfficiencyBuilding_IdRelationInput = {
 *   create?: InputMaybe<EnergyEfficiency_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a EnergyEfficiency from the server.
               * @returns {UseMutationResult<boolean, Error, MutationEnergyEfficiencyCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateEnergyEfficiency();
               * @param {MutationEnergyEfficiencyCreateArgs} params
              */

              export function useCreateEnergyEfficiency() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationEnergyEfficiencyCreateArgs
                >(
                {
                  mutationKey: ['ENERGYEFFICIENCY_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.EnergyEfficiency.createEnergyEfficiency({
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
            
      
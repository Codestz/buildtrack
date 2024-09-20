
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationWorkOrderUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationWorkOrderUpdateArgs
            {
 *   data: WorkOrderUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<WorkOrderKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  WorkOrderUpdateInput = {
 * 
 *   assigned_date?: InputMaybe<Scalars['DateTime']['input']>
 *   building_id?: InputMaybe<WorkOrdersBuilding_IdUpdateRelationInput>
 * 
 *   completion_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   status?: InputMaybe<Scalars['String']['input']>
 * 
 *   task_description?: InputMaybe<Scalars['String']['input']>
 *   vendor_id?: InputMaybe<WorkOrdersVendor_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type WorkOrdersBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<WorkOrders_BuildingUpdateInput>
 * }
 * 
 * export type WorkOrdersVendor_IdUpdateRelationInput = {
 *   update?: InputMaybe<WorkOrders_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type WorkOrderKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a WorkOrder from the server.
               * @returns {UseMutationResult<boolean, Error, MutationWorkOrderUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateWorkOrder();
               * @param {MutationWorkOrderUpdateArgs} params
              */

              export function useUpdateWorkOrder() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationWorkOrderUpdateArgs
                >(
                {
                  mutationKey: ['WORKORDER_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.WorkOrder.updateWorkOrder({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['WORKORDER_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
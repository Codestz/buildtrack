
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationWorkOrderCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationWorkOrderCreateArgs
            {
 *   data: WorkOrderCreateInput
 * }
 * 
 *  WorkOrderCreateInput = {
 * 
 *   assigned_date?: InputMaybe<Scalars['DateTime']['input']>
 *   building_id?: InputMaybe<WorkOrdersBuilding_IdRelationInput>
 * 
 *   completion_date: Scalars['DateTime']['input']
 * 
 *   status?: InputMaybe<Scalars['String']['input']>
 * 
 *   task_description?: InputMaybe<Scalars['String']['input']>
 *   vendor_id?: InputMaybe<WorkOrdersVendor_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type WorkOrdersBuilding_IdRelationInput = {
 *   create?: InputMaybe<WorkOrders_BuildingCreateInput>
 * }
 * 
 * export type WorkOrdersVendor_IdRelationInput = {
 *   create?: InputMaybe<WorkOrders_UserCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a WorkOrder from the server.
               * @returns {UseMutationResult<boolean, Error, MutationWorkOrderCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateWorkOrder();
               * @param {MutationWorkOrderCreateArgs} params
              */

              export function useCreateWorkOrder() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationWorkOrderCreateArgs
                >(
                {
                  mutationKey: ['WORKORDER_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.WorkOrder.createWorkOrder({
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
            
      
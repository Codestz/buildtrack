
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationSubscriptionsAppUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationSubscriptionsAppUpdateArgs
            {
 *   data: SubscriptionsAppUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<SubscriptionsAppKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  SubscriptionsAppUpdateInput = {
 * 
 *   description?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   price?: InputMaybe<Scalars['Int']['input']>
 * 
 *   tier_name?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<SubscriptionsAppsUser_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type SubscriptionsAppsUser_IdUpdateRelationInput = {
 *   update?: InputMaybe<SubscriptionsApps_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type SubscriptionsAppKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a SubscriptionsApp from the server.
               * @returns {UseMutationResult<boolean, Error, MutationSubscriptionsAppUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateSubscriptionsApp();
               * @param {MutationSubscriptionsAppUpdateArgs} params
              */

              export function useUpdateSubscriptionsApp() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationSubscriptionsAppUpdateArgs
                >(
                {
                  mutationKey: ['SUBSCRIPTIONSAPP_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.SubscriptionsApp.updateSubscriptionsApp({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['SUBSCRIPTIONSAPP_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
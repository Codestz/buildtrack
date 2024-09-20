
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationSubscriptionsAppCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationSubscriptionsAppCreateArgs
            {
 *   data: SubscriptionsAppCreateInput
 * }
 * 
 *  SubscriptionsAppCreateInput = {
 * 
 *   description?: InputMaybe<Scalars['String']['input']>
 * 
 *   price?: InputMaybe<Scalars['Int']['input']>
 * 
 *   tier_name?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<SubscriptionsAppsUser_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type SubscriptionsAppsUser_IdRelationInput = {
 *   create?: InputMaybe<SubscriptionsApps_UserCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a SubscriptionsApp from the server.
               * @returns {UseMutationResult<boolean, Error, MutationSubscriptionsAppCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateSubscriptionsApp();
               * @param {MutationSubscriptionsAppCreateArgs} params
              */

              export function useCreateSubscriptionsApp() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationSubscriptionsAppCreateArgs
                >(
                {
                  mutationKey: ['SUBSCRIPTIONSAPP_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.SubscriptionsApp.createSubscriptionsApp({
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
            
      
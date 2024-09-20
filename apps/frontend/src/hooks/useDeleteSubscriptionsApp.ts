
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationSubscriptionsAppDeleteArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationSubscriptionsAppDeleteArgs
            {
 *   data?: InputMaybe<SubscriptionsAppDeleteInput>
 *   filter?: InputMaybe<SubscriptionsAppKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  SubscriptionsAppDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type SubscriptionsAppKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a SubscriptionsApp from the server.
               * @returns {UseMutationResult<boolean, Error, MutationSubscriptionsAppDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteSubscriptionsApp();
               * @param {MutationSubscriptionsAppDeleteArgs} params
              */

              export function useDeleteSubscriptionsApp() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationSubscriptionsAppDeleteArgs
                >(
                {
                  mutationKey: ['SUBSCRIPTIONSAPP_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.SubscriptionsApp.deleteSubscriptionsApp({
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
            
      

      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationNotificationCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationNotificationCreateArgs
            {
 *   data: NotificationCreateInput
 * }
 * 
 *  NotificationCreateInput = {
 * 
 *   is_read?: InputMaybe<Scalars['Boolean']['input']>
 * 
 *   message?: InputMaybe<Scalars['String']['input']>
 * 
 *   type?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<NotificationsUser_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type NotificationsUser_IdRelationInput = {
 *   create?: InputMaybe<Notifications_UserCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Notification from the server.
               * @returns {UseMutationResult<boolean, Error, MutationNotificationCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateNotification();
               * @param {MutationNotificationCreateArgs} params
              */

              export function useCreateNotification() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationNotificationCreateArgs
                >(
                {
                  mutationKey: ['NOTIFICATION_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Notification.createNotification({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['NOTIFICATION_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      

      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationUserCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationUserCreateArgs
            {
 *   data: UserCreateInput
 * }
 * 
 *  UserCreateInput = {
 *   Notifications?: InputMaybe<UsersNotificationsRelationInput>
 *   Reports?: InputMaybe<UsersReportsRelationInput>
 *   SearchCriteria?: InputMaybe<UsersSearchCriteriaRelationInput>
 *   SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsRelationInput>
 *   WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>
 *   avatar?: InputMaybe<UsersAvatarRelationInput>
 *   email: Scalars['String']['input']
 *   firstName?: InputMaybe<Scalars['String']['input']>
 *   lastName?: InputMaybe<Scalars['String']['input']>
 *   roles?: InputMaybe<UsersRolesRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timezone?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type UsersNotificationsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<User_Id_NotificationCreateInput>>>
 * }
 * 
 * export type UsersReportsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<User_Id_ReportCreateInput>>>
 * }
 * 
 * export type UsersSearchCriteriaRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<User_Id_SearchCriterionCreateInput>>>
 * }
 * 
 * export type UsersSubscriptionsAppsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<User_Id_SubscriptionsAppCreateInput>>>
 * }
 * 
 * export type UsersWorkOrdersRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Vendor_Id_WorkOrderCreateInput>>>
 * }
 * 
 * export type UsersAvatarRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Users_Avatar_FileCreateInput>
 * }
 * 
 * export type UsersRolesRelationInput = {
 *   connect?: InputMaybe<Array<RoleKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>
 * }
 * 
             */
                
             

              /**
               * Hook to create a User from the server.
               * @returns {UseMutationResult<boolean, Error, MutationUserCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateUser();
               * @param {MutationUserCreateArgs} params
              */

              export function useCreateUser() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationUserCreateArgs
                >(
                {
                  mutationKey: ['USER_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.User.createUser({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['USER_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      

      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QuerySubscriptionsAppArgs,
            SubscriptionsAppEntity,
        } from '@buildtrack/core';

            /*
              Type: SubscriptionsAppEntity

              
      
        

         ISubscriptionsAppEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
TierName?: string;
Description?: string;
Price?: number;

        }
    
      
            */

          
              /*
            Type: QuerySubscriptionsAppArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch SubscriptionsApp from the server.
         *
         * @returns {UseQueryResult<SubscriptionsAppEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useSubscriptionsApp({id: '1'});
         * 
         * @param {QuerySubscriptionsAppArgs} variables - The query variables.
        */

        export function useSubscriptionsApp(
              variables: QuerySubscriptionsAppArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<SubscriptionsAppEntity | null>(
          {
              queryKey: ['SUBSCRIPTIONSAPP_QUERY'],
              queryFn: async () => UseCases.SubscriptionsApp.getSubscriptionsApp({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
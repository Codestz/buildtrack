
      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryWorkOrderArgs,
            WorkOrderEntity,
        } from '@buildtrack/core';

            /*
              Type: WorkOrderEntity

              
      
        

         IWorkOrderEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
TaskDescription?: string;
AssignedDate?: string;
CompletionDate?: string;
Status?: string;


        }
    
      
            */

          
              /*
            Type: QueryWorkOrderArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch WorkOrder from the server.
         *
         * @returns {UseQueryResult<WorkOrderEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useWorkOrder({id: '1'});
         * 
         * @param {QueryWorkOrderArgs} variables - The query variables.
        */

        export function useWorkOrder(
              variables: QueryWorkOrderArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<WorkOrderEntity | null>(
          {
              queryKey: ['WORKORDER_QUERY'],
              queryFn: async () => UseCases.WorkOrder.getWorkOrder({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
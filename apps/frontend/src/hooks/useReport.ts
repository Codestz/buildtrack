
      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryReportArgs,
            ReportEntity,
        } from '@buildtrack/core';

            /*
              Type: ReportEntity

              
      
        

         IReportEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Title?: string;
Content?: Record<string, any>;
GeneratedDate?: string;

        }
    
      
            */

          
              /*
            Type: QueryReportArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Report from the server.
         *
         * @returns {UseQueryResult<ReportEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useReport({id: '1'});
         * 
         * @param {QueryReportArgs} variables - The query variables.
        */

        export function useReport(
              variables: QueryReportArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<ReportEntity | null>(
          {
              queryKey: ['REPORT_QUERY'],
              queryFn: async () => UseCases.Report.getReport({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
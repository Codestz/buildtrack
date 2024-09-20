
      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryEnvironmentalDatumArgs,
            EnvironmentalDataEntity,
        } from '@buildtrack/core';

            /*
              Type: EnvironmentalDataEntity

              
      
        

         IEnvironmentalDataEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Parameter?: string;
Value?: number;
MeasurementDate?: string;

        }
    
      
            */

          
              /*
            Type: QueryEnvironmentalDataArgs
            undefined
          */
            

        /**
         * Hook to fetch EnvironmentalData from the server.
         *
         * @returns {UseQueryResult<EnvironmentalDataEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useEnvironmentalData({id: '1'});
         * 
         * @param {QueryEnvironmentalDatumArgs} variables - The query variables.
        */

        export function useEnvironmentalData(
              variables: QueryEnvironmentalDatumArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<EnvironmentalDataEntity | null>(
          {
              queryKey: ['ENVIRONMENTALDATA_QUERY'],
              queryFn: async () => UseCases.EnvironmentalData.getEnvironmentalData({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
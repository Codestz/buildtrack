
      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryAirQualityArgs,
            AirQualityEntity,
        } from '@buildtrack/core';

            /*
              Type: AirQualityEntity

              
      
        

         IAirQualityEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
MeasurementDate?: string;
Pm25?: number;
Pm10?: number;
Co2?: number;

        }
    
      
            */

          
              /*
            Type: QueryAirQualityArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch AirQuality from the server.
         *
         * @returns {UseQueryResult<AirQualityEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useAirQuality({id: '1'});
         * 
         * @param {QueryAirQualityArgs} variables - The query variables.
        */

        export function useAirQuality(
              variables: QueryAirQualityArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<AirQualityEntity | null>(
          {
              queryKey: ['AIRQUALITY_QUERY'],
              queryFn: async () => UseCases.AirQuality.getAirQuality({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      

      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryBuildingArgs,
            BuildingEntity,
        } from '@buildtrack/core';

            /*
              Type: BuildingEntity

              
      
        

         IBuildingEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Name?: string;
Address?: string;
City?: string;
State?: string;
ZipCode?: string;
Country?: string;











        }
    
      
            */

          
              /*
            Type: QueryBuildingArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Building from the server.
         *
         * @returns {UseQueryResult<BuildingEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useBuilding({id: '1'});
         * 
         * @param {QueryBuildingArgs} variables - The query variables.
        */

        export function useBuilding(
              variables: QueryBuildingArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<BuildingEntity | null>(
          {
              queryKey: ['BUILDING_QUERY'],
              queryFn: async () => UseCases.Building.getBuilding({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
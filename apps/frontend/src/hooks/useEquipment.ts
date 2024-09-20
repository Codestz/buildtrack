
      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryEquipmentArgs,
            EquipmentEntity,
        } from '@buildtrack/core';

            /*
              Type: EquipmentEntity

              
      
        

         IEquipmentEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Name?: string;
Type?: string;
InstallationDate?: string;

        }
    
      
            */

          
              /*
            Type: QueryEquipmentArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Equipment from the server.
         *
         * @returns {UseQueryResult<EquipmentEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useEquipment({id: '1'});
         * 
         * @param {QueryEquipmentArgs} variables - The query variables.
        */

        export function useEquipment(
              variables: QueryEquipmentArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<EquipmentEntity | null>(
          {
              queryKey: ['EQUIPMENT_QUERY'],
              queryFn: async () => UseCases.Equipment.getEquipment({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
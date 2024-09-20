
      
            import { useQuery, useQueryClient } from "@tanstack/react-query";
            import { useSession } from 'next-auth/react';
            import {UseCases} from "../usecases";
            import {
            QueryDocumentArgs,
            DocumentEntity,
        } from '@buildtrack/core';

            /*
              Type: DocumentEntity

              
      
        

         IDocumentEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
DocumentType?: string;
FilePath?: string;
UploadedDate?: string;

        }
    
      
            */

          
              /*
            Type: QueryDocumentArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */
            

        /**
         * Hook to fetch Document from the server.
         *
         * @returns {UseQueryResult<DocumentEntity | null>}
         * 
         * @example
         * const {data, isError, isLoading, isFetching, refetch} = useDocument({id: '1'});
         * 
         * @param {QueryDocumentArgs} variables - The query variables.
        */

        export function useDocument(
              variables: QueryDocumentArgs,
        ) {
          const {data: session} = useSession();
          return useQuery<DocumentEntity | null>(
          {
              queryKey: ['DOCUMENT_QUERY'],
              queryFn: async () => UseCases.Document.getDocument({
                variables,
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
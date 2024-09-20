
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDocumentDeleteArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationDocumentDeleteArgs
            {
 *   data?: InputMaybe<DocumentDeleteInput>
 *   filter?: InputMaybe<DocumentKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  DocumentDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type DocumentKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to delete a Document from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDocumentDeleteArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useDeleteDocument();
               * @param {MutationDocumentDeleteArgs} params
              */

              export function useDeleteDocument() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDocumentDeleteArgs
                >(
                {
                  mutationKey: ['DOCUMENT_DELETE_MUTATION'],
                  mutationFn: async (params) => UseCases.Document.deleteDocument({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['DOCUMENT_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
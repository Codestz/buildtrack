
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDocumentUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationDocumentUpdateArgs
            {
 *   data: DocumentUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<DocumentKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  DocumentUpdateInput = {
 *   building_id?: InputMaybe<DocumentsBuilding_IdUpdateRelationInput>
 * 
 *   document_type?: InputMaybe<Scalars['String']['input']>
 * 
 *   file_path?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * 
 *   uploaded_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type DocumentsBuilding_IdUpdateRelationInput = {
 *   update?: InputMaybe<Documents_BuildingUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type DocumentKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Document from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDocumentUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateDocument();
               * @param {MutationDocumentUpdateArgs} params
              */

              export function useUpdateDocument() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDocumentUpdateArgs
                >(
                {
                  mutationKey: ['DOCUMENT_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Document.updateDocument({
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
            
      

      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationDocumentCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationDocumentCreateArgs
            {
 *   data: DocumentCreateInput
 * }
 * 
 *  DocumentCreateInput = {
 *   building_id?: InputMaybe<DocumentsBuilding_IdRelationInput>
 * 
 *   document_type?: InputMaybe<Scalars['String']['input']>
 * 
 *   file_path?: InputMaybe<Scalars['String']['input']>
 * 
 *   uploaded_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type DocumentsBuilding_IdRelationInput = {
 *   create?: InputMaybe<Documents_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Document from the server.
               * @returns {UseMutationResult<boolean, Error, MutationDocumentCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateDocument();
               * @param {MutationDocumentCreateArgs} params
              */

              export function useCreateDocument() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationDocumentCreateArgs
                >(
                {
                  mutationKey: ['DOCUMENT_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Document.createDocument({
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
            
      
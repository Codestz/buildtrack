
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationCertificationCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationCertificationCreateArgs
            {
 *   data: CertificationCreateInput
 * }
 * 
 *  CertificationCreateInput = {
 *   building_id?: InputMaybe<CertificationsBuilding_IdRelationInput>
 * 
 *   certification_type?: InputMaybe<Scalars['String']['input']>
 * 
 *   expiry_date?: InputMaybe<Scalars['DateTime']['input']>
 * 
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type CertificationsBuilding_IdRelationInput = {
 *   create?: InputMaybe<Certifications_BuildingCreateInput>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Certification from the server.
               * @returns {UseMutationResult<boolean, Error, MutationCertificationCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateCertification();
               * @param {MutationCertificationCreateArgs} params
              */

              export function useCreateCertification() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationCertificationCreateArgs
                >(
                {
                  mutationKey: ['CERTIFICATION_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Certification.createCertification({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['CERTIFICATION_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
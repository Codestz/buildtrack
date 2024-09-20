
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationBuildingCreateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationBuildingCreateArgs
            {
 *   data: BuildingCreateInput
 * }
 * 
 *  BuildingCreateInput = {
 *   AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>
 *   Certifications?: InputMaybe<BuildingsCertificationsRelationInput>
 *   ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsRelationInput>
 *   Documents?: InputMaybe<BuildingsDocumentsRelationInput>
 *   EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyRelationInput>
 *   EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>
 *   Equipment?: InputMaybe<BuildingsEquipmentRelationInput>
 *   Improvements?: InputMaybe<BuildingsImprovementsRelationInput>
 *   MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>
 *   Permits?: InputMaybe<BuildingsPermitsRelationInput>
 *   WorkOrders?: InputMaybe<BuildingsWorkOrdersRelationInput>
 * 
 *   address?: InputMaybe<Scalars['String']['input']>
 * 
 *   city?: InputMaybe<Scalars['String']['input']>
 * 
 *   country?: InputMaybe<Scalars['String']['input']>
 * 
 *   name?: InputMaybe<Scalars['String']['input']>
 * 
 *   state?: InputMaybe<Scalars['String']['input']>
 * 
 *   zip_code?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type BuildingsAirQualityRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_AirQualityCreateInput>>>
 * }
 * 
 * export type BuildingsCertificationsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_CertificationCreateInput>>>
 * }
 * 
 * export type BuildingsComplianceRecordsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_ComplianceRecordCreateInput>>>
 * }
 * 
 * export type BuildingsDocumentsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_DocumentCreateInput>>>
 * }
 * 
 * export type BuildingsEnergyEfficiencyRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_EnergyEfficiencyCreateInput>>>
 * }
 * 
 * export type BuildingsEnvironmentalDataRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_EnvironmentalDatumCreateInput>>>
 * }
 * 
 * export type BuildingsEquipmentRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_EquipmentCreateInput>>>
 * }
 * 
 * export type BuildingsImprovementsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_ImprovementCreateInput>>>
 * }
 * 
 * export type BuildingsMaintenanceRecordsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_MaintenanceRecordCreateInput>>>
 * }
 * 
 * export type BuildingsPermitsRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_PermitCreateInput>>>
 * }
 * 
 * export type BuildingsWorkOrdersRelationInput = {
 *   create?: InputMaybe<Array<InputMaybe<Building_Id_WorkOrderCreateInput>>>
 * }
 * 
             */
                
             

              /**
               * Hook to create a Building from the server.
               * @returns {UseMutationResult<boolean, Error, MutationBuildingCreateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useCreateBuilding();
               * @param {MutationBuildingCreateArgs} params
              */

              export function useCreateBuilding() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationBuildingCreateArgs
                >(
                {
                  mutationKey: ['BUILDING_CREATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Building.createBuilding({
                    variables: params,
                    token: session?.token?.idToken,
                  }),
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['BUILDING_LIST_QUERY'],
                    });
                  },
                }
                );
              }
            
      
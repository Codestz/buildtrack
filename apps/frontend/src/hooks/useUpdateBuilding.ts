
      
              import { useMutation, useQueryClient } from "@tanstack/react-query";
              import { useSession } from 'next-auth/react';
              import {UseCases} from "../usecases";
              import {
                  MutationBuildingUpdateArgs
              } from '@buildtrack/core';


              
                  /** 
             * Type: MutationBuildingUpdateArgs
            {
 *   data: BuildingUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<BuildingKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  BuildingUpdateInput = {
 *   AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>
 *   Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>
 *   ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>
 *   Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>
 *   EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>
 *   EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>
 *   Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>
 *   Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>
 *   MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>
 *   Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>
 *   WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>
 * 
 *   address?: InputMaybe<Scalars['String']['input']>
 * 
 *   city?: InputMaybe<Scalars['String']['input']>
 * 
 *   country?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
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
 * export type BuildingsAirQualityUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_AirQualityUpdateInput>>>
 * }
 * 
 * export type BuildingsCertificationsUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_CertificationUpdateInput>>>
 * }
 * 
 * export type BuildingsComplianceRecordsUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_ComplianceRecordUpdateInput>>>
 * }
 * 
 * export type BuildingsDocumentsUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_DocumentUpdateInput>>>
 * }
 * 
 * export type BuildingsEnergyEfficiencyUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_EnergyEfficiencyUpdateInput>>>
 * }
 * 
 * export type BuildingsEnvironmentalDataUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_EnvironmentalDatumUpdateInput>>>
 * }
 * 
 * export type BuildingsEquipmentUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_EquipmentUpdateInput>>>
 * }
 * 
 * export type BuildingsImprovementsUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_ImprovementUpdateInput>>>
 * }
 * 
 * export type BuildingsMaintenanceRecordsUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_MaintenanceRecordUpdateInput>>>
 * }
 * 
 * export type BuildingsPermitsUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_PermitUpdateInput>>>
 * }
 * 
 * export type BuildingsWorkOrdersUpdateRelationInput = {
 *   update?: InputMaybe<Array<InputMaybe<Building_Id_WorkOrderUpdateInput>>>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type BuildingKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */
                
             

              /**
               * Hook to update a Building from the server.
               * @returns {UseMutationResult<boolean, Error, MutationBuildingUpdateArgs>}
               * @example
               * const {mutate, isPending, isError, mutateAsync} = useUpdateBuilding();
               * @param {MutationBuildingUpdateArgs} params
              */

              export function useUpdateBuilding() {
                const {data: session} = useSession();
                const queryClient = useQueryClient();
                

                return useMutation<
                  boolean,
                  Error,
                  MutationBuildingUpdateArgs
                >(
                {
                  mutationKey: ['BUILDING_UPDATE_MUTATION'],
                  mutationFn: async (params) => UseCases.Building.updateBuilding({
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
            
      
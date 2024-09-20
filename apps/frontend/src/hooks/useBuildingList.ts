
      
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryBuildingsListArgs,          
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

           /** 
             * Type: QueryBuildingsListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<BuildingFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<BuildingGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<BuildingOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<BuildingSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  BuildingFilter = {
 *   AND?: InputMaybe<Array<BuildingFilter>>
 *   AirQuality?: InputMaybe<AirQualityRelationFilter>
 *   Certifications?: InputMaybe<CertificationRelationFilter>
 *   ComplianceRecords?: InputMaybe<ComplianceRecordRelationFilter>
 *   Documents?: InputMaybe<DocumentRelationFilter>
 *   EnergyEfficiency?: InputMaybe<EnergyEfficiencyRelationFilter>
 *   EnvironmentalData?: InputMaybe<EnvironmentalDatumRelationFilter>
 *   Equipment?: InputMaybe<EquipmentRelationFilter>
 *   Improvements?: InputMaybe<ImprovementRelationFilter>
 *   MaintenanceRecords?: InputMaybe<MaintenanceRecordRelationFilter>
 *   OR?: InputMaybe<Array<BuildingFilter>>
 *   Permits?: InputMaybe<PermitRelationFilter>
 *   WorkOrders?: InputMaybe<WorkOrderRelationFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   address?: InputMaybe<StringPredicate>
 *   city?: InputMaybe<StringPredicate>
 *   country?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   name?: InputMaybe<StringPredicate>
 *   state?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 *   zip_code?: InputMaybe<StringPredicate>
 * }
 * 
 * export type 
 * 
 * export type BuildingFilter = {
 *   AND?: InputMaybe<Array<BuildingFilter>>
 *   AirQuality?: InputMaybe<AirQualityRelationFilter>
 *   Certifications?: InputMaybe<CertificationRelationFilter>
 *   ComplianceRecords?: InputMaybe<ComplianceRecordRelationFilter>
 *   Documents?: InputMaybe<DocumentRelationFilter>
 *   EnergyEfficiency?: InputMaybe<EnergyEfficiencyRelationFilter>
 *   EnvironmentalData?: InputMaybe<EnvironmentalDatumRelationFilter>
 *   Equipment?: InputMaybe<EquipmentRelationFilter>
 *   Improvements?: InputMaybe<ImprovementRelationFilter>
 *   MaintenanceRecords?: InputMaybe<MaintenanceRecordRelationFilter>
 *   OR?: InputMaybe<Array<BuildingFilter>>
 *   Permits?: InputMaybe<PermitRelationFilter>
 *   WorkOrders?: InputMaybe<WorkOrderRelationFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   address?: InputMaybe<StringPredicate>
 *   city?: InputMaybe<StringPredicate>
 *   country?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   name?: InputMaybe<StringPredicate>
 *   state?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 *   zip_code?: InputMaybe<StringPredicate>
 * }
 * 
 * export type AirQualityRelationFilter = {
 *   every?: InputMaybe<AirQualityFilter>
 *   none?: InputMaybe<AirQualityFilter>
 *   some?: InputMaybe<AirQualityFilter>
 * }
 * 
 * export type CertificationRelationFilter = {
 *   every?: InputMaybe<CertificationFilter>
 *   none?: InputMaybe<CertificationFilter>
 *   some?: InputMaybe<CertificationFilter>
 * }
 * 
 * export type ComplianceRecordRelationFilter = {
 *   every?: InputMaybe<ComplianceRecordFilter>
 *   none?: InputMaybe<ComplianceRecordFilter>
 *   some?: InputMaybe<ComplianceRecordFilter>
 * }
 * 
 * export type DocumentRelationFilter = {
 *   every?: InputMaybe<DocumentFilter>
 *   none?: InputMaybe<DocumentFilter>
 *   some?: InputMaybe<DocumentFilter>
 * }
 * 
 * export type EnergyEfficiencyRelationFilter = {
 *   every?: InputMaybe<EnergyEfficiencyFilter>
 *   none?: InputMaybe<EnergyEfficiencyFilter>
 *   some?: InputMaybe<EnergyEfficiencyFilter>
 * }
 * 
 * export type EnvironmentalDatumRelationFilter = {
 *   every?: InputMaybe<EnvironmentalDatumFilter>
 *   none?: InputMaybe<EnvironmentalDatumFilter>
 *   some?: InputMaybe<EnvironmentalDatumFilter>
 * }
 * 
 * export type EquipmentRelationFilter = {
 *   every?: InputMaybe<EquipmentFilter>
 *   none?: InputMaybe<EquipmentFilter>
 *   some?: InputMaybe<EquipmentFilter>
 * }
 * 
 * export type ImprovementRelationFilter = {
 *   every?: InputMaybe<ImprovementFilter>
 *   none?: InputMaybe<ImprovementFilter>
 *   some?: InputMaybe<ImprovementFilter>
 * }
 * 
 * export type MaintenanceRecordRelationFilter = {
 *   every?: InputMaybe<MaintenanceRecordFilter>
 *   none?: InputMaybe<MaintenanceRecordFilter>
 *   some?: InputMaybe<MaintenanceRecordFilter>
 * }
 * 
 * export type PermitRelationFilter = {
 *   every?: InputMaybe<PermitFilter>
 *   none?: InputMaybe<PermitFilter>
 *   some?: InputMaybe<PermitFilter>
 * }
 * 
 * export type WorkOrderRelationFilter = {
 *   every?: InputMaybe<WorkOrderFilter>
 *   none?: InputMaybe<WorkOrderFilter>
 *   some?: InputMaybe<WorkOrderFilter>
 * }
 * 
 * export type StringPredicate = {
 *   contains?: InputMaybe<Scalars['String']['input']>
 *   ends_with?: InputMaybe<Scalars['String']['input']>
 *   equals?: InputMaybe<Scalars['String']['input']>
 *   in?: InputMaybe<Array<Scalars['String']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   not_contains?: InputMaybe<Scalars['String']['input']>
 *   not_ends_with?: InputMaybe<Scalars['String']['input']>
 *   not_equals?: InputMaybe<Scalars['String']['input']>
 *   not_in?: InputMaybe<Array<Scalars['String']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['String']['input']>
 *   starts_with?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * export type DateTimePredicate = {
 *   equals?: InputMaybe<Scalars['DateTime']['input']>
 *   gt?: InputMaybe<Scalars['DateTime']['input']>
 *   gte?: InputMaybe<Scalars['DateTime']['input']>
 *   in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['DateTime']['input']>
 *   lte?: InputMaybe<Scalars['DateTime']['input']>
 *   not_equals?: InputMaybe<Scalars['DateTime']['input']>
 *   not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   relative?: InputMaybe<DateRelativePredicates>
 * }
 * 
 * export type IntPredicate = {
 *   equals?: InputMaybe<Scalars['Int']['input']>
 *   gt?: InputMaybe<Scalars['Int']['input']>
 *   gte?: InputMaybe<Scalars['Int']['input']>
 *   in?: InputMaybe<Array<Scalars['Int']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['Int']['input']>
 *   lte?: InputMaybe<Scalars['Int']['input']>
 *   not_equals?: InputMaybe<Scalars['Int']['input']>
 *   not_in?: InputMaybe<Array<Scalars['Int']['input']>>
 * }
 * 
 * export type IdPredicate = {
 *   contains?: InputMaybe<Scalars['ID']['input']>
 *   ends_with?: InputMaybe<Scalars['ID']['input']>
 *   equals?: InputMaybe<Scalars['ID']['input']>
 *   gt?: InputMaybe<Scalars['ID']['input']>
 *   gte?: InputMaybe<Scalars['ID']['input']>
 *   in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['ID']['input']>
 *   lte?: InputMaybe<Scalars['ID']['input']>
 *   not_contains?: InputMaybe<Scalars['ID']['input']>
 *   not_ends_with?: InputMaybe<Scalars['ID']['input']>
 *   not_equals?: InputMaybe<Scalars['ID']['input']>
 *   not_in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['ID']['input']>
 *   starts_with?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type BuildingGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: BuildingGroupByQuery
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<GroupBySort>>
 * }
 * 
 * 
 * 
 * export type Having = {
 *   AND?: InputMaybe<Array<Having>>
 *   OR?: InputMaybe<Array<Having>>
 *   alias?: InputMaybe<Scalars['String']['input']>
 *   bigint?: InputMaybe<BigIntPredicateHaving>
 *   bool?: InputMaybe<BoolPredicateHaving>
 *   date?: InputMaybe<DatePredicateHaving>
 *   datetime?: InputMaybe<DateTimePredicateHaving>
 *   float?: InputMaybe<FloatPredicateHaving>
 *   id?: InputMaybe<IdPredicateHaving>
 *   int?: InputMaybe<IntPredicateHaving>
 *   string?: InputMaybe<StringPredicateHaving>
 * }
 * 
 * export type BuildingGroupByQuery = {
 *   AirQuality?: InputMaybe<AirQualityGroupByQuery>
 *   Certifications?: InputMaybe<CertificationGroupByQuery>
 *   ComplianceRecords?: InputMaybe<ComplianceRecordGroupByQuery>
 *   Documents?: InputMaybe<DocumentGroupByQuery>
 *   EnergyEfficiency?: InputMaybe<EnergyEfficiencyGroupByQuery>
 *   EnvironmentalData?: InputMaybe<EnvironmentalDatumGroupByQuery>
 *   Equipment?: InputMaybe<EquipmentGroupByQuery>
 *   Improvements?: InputMaybe<ImprovementGroupByQuery>
 *   MaintenanceRecords?: InputMaybe<MaintenanceRecordGroupByQuery>
 *   Permits?: InputMaybe<PermitGroupByQuery>
 *   WorkOrders?: InputMaybe<WorkOrderGroupByQuery>
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   address?: InputMaybe<Array<GroupByField>>
 *   city?: InputMaybe<Array<GroupByField>>
 *   country?: InputMaybe<Array<GroupByField>>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   name?: InputMaybe<Array<GroupByField>>
 *   state?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 *   zip_code?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type BuildingSort = {
 *   address?: InputMaybe<SortOrder>
 *   city?: InputMaybe<SortOrder>
 *   country?: InputMaybe<SortOrder>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   name?: InputMaybe<SortOrder>
 *   state?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 *   zip_code?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
 * 
             */
            

          /**
           * Hook to fetch list of Building from the server.
           * 
           * @returns {UseQueryResult<{items: BuildingEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useBuildingList({first: 10});
           * 
           * @param {QueryBuildingsListArgs} variables - The query variables.
          */

          export function useBuildingList(
              variables?: QueryBuildingsListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: BuildingEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['BUILDING_LIST_QUERY'],
              queryFn: async () => UseCases.Building.getBuildingList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
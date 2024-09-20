
      
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryComplianceRecordsListArgs,          
              ComplianceRecordEntity,
          } from '@buildtrack/core';

          
              /*
              Type: ComplianceRecordEntity

              
      
        

         IComplianceRecordEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
ComplianceType?: string;
Status?: string;
LastCheckedDate?: string;

        }
    
      
            */

           /** 
             * Type: QueryComplianceRecordsListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<ComplianceRecordFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<ComplianceRecordGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<ComplianceRecordOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<ComplianceRecordSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ComplianceRecordFilter = {
 *   AND?: InputMaybe<Array<ComplianceRecordFilter>>
 *   OR?: InputMaybe<Array<ComplianceRecordFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   building_id?: InputMaybe<BuildingFilter>
 *   compliance_type?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   last_checked_date?: InputMaybe<DateTimePredicate>
 *   status?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type ComplianceRecordFilter = {
 *   AND?: InputMaybe<Array<ComplianceRecordFilter>>
 *   OR?: InputMaybe<Array<ComplianceRecordFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   building_id?: InputMaybe<BuildingFilter>
 *   compliance_type?: InputMaybe<StringPredicate>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   last_checked_date?: InputMaybe<DateTimePredicate>
 *   status?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
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
 * export type ComplianceRecordGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: ComplianceRecordGroupByQuery
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
 * export type ComplianceRecordGroupByQuery = {
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   building_id?: InputMaybe<BuildingGroupByQuery>
 *   compliance_type?: InputMaybe<Array<GroupByField>>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   last_checked_date?: InputMaybe<Array<GroupByField>>
 *   status?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type ComplianceRecordSort = {
 *   building_id?: InputMaybe<BuildingSort>
 *   compliance_type?: InputMaybe<SortOrder>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   last_checked_date?: InputMaybe<SortOrder>
 *   status?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
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
             */
            

          /**
           * Hook to fetch list of ComplianceRecord from the server.
           * 
           * @returns {UseQueryResult<{items: ComplianceRecordEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = useComplianceRecordList({first: 10});
           * 
           * @param {QueryComplianceRecordsListArgs} variables - The query variables.
          */

          export function useComplianceRecordList(
              variables?: QueryComplianceRecordsListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: ComplianceRecordEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['COMPLIANCERECORD_LIST_QUERY'],
              queryFn: async () => UseCases.ComplianceRecord.getComplianceRecordList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
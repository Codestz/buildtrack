
      
          import { useQuery } from "@tanstack/react-query";
          import { useSession } from 'next-auth/react';
          import {UseCases} from "../usecases";
          import {       
              QueryPermitsListArgs,          
              PermitEntity,
          } from '@buildtrack/core';

          
              /*
              Type: PermitEntity

              
      
        

         IPermitEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
PermitNumber?: string;
IssueDate?: string;
ExpiryDate?: string;

        }
    
      
            */

           /** 
             * Type: QueryPermitsListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<PermitFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<PermitGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<PermitOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<PermitSort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  PermitFilter = {
 *   AND?: InputMaybe<Array<PermitFilter>>
 *   OR?: InputMaybe<Array<PermitFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   building_id?: InputMaybe<BuildingFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   expiry_date?: InputMaybe<DateTimePredicate>
 *   id?: InputMaybe<IdPredicate>
 *   issue_date?: InputMaybe<DateTimePredicate>
 *   permit_number?: InputMaybe<StringPredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type PermitFilter = {
 *   AND?: InputMaybe<Array<PermitFilter>>
 *   OR?: InputMaybe<Array<PermitFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   building_id?: InputMaybe<BuildingFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   expiry_date?: InputMaybe<DateTimePredicate>
 *   id?: InputMaybe<IdPredicate>
 *   issue_date?: InputMaybe<DateTimePredicate>
 *   permit_number?: InputMaybe<StringPredicate>
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
 * export type PermitGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: PermitGroupByQuery
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
 * export type PermitGroupByQuery = {
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   building_id?: InputMaybe<BuildingGroupByQuery>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   expiry_date?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   issue_date?: InputMaybe<Array<GroupByField>>
 *   permit_number?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type PermitSort = {
 *   building_id?: InputMaybe<BuildingSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   expiry_date?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   issue_date?: InputMaybe<SortOrder>
 *   permit_number?: InputMaybe<SortOrder>
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
           * Hook to fetch list of Permit from the server.
           * 
           * @returns {UseQueryResult<{items: PermitEntity[], count: number} | null>}
           * 
           * @example
           * const {data, isError, isLoading, isFetching, refetch} = usePermitList({first: 10});
           * 
           * @param {QueryPermitsListArgs} variables - The query variables.
          */

          export function usePermitList(
              variables?: QueryPermitsListArgs,
        ) {
              const {data: session} = useSession();
          return useQuery<{
              items: PermitEntity[];
              count: number;
          } | null>(
          {
              queryKey: ['PERMIT_LIST_QUERY'],
              queryFn: async () => UseCases.Permit.getPermitList({
                variables: variables || {},
                token: session?.token?.idToken,
              }),
              enabled: !!session?.token?.idToken,
          });
        }
    
      
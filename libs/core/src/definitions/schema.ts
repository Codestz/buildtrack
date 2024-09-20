import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export enum AggregationFunctionType {
  AnyValue = 'ANY_VALUE',
  Avg = 'AVG',
  Count = 'COUNT',
  GroupConcat = 'GROUP_CONCAT',
  Max = 'MAX',
  Min = 'MIN',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  Sum = 'SUM',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP'
}

/** Data related to the indoor air quality of the building. */
export type AirQuality = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building where the air quality measurement was taken. */
  building_id?: Maybe<Building>;
  /** Concentration of CO2. */
  co2?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Date when the air quality measurement was taken. */
  measurement_date?: Maybe<Scalars['DateTime']['output']>;
  /** Concentration of PM10 particles. */
  pm10?: Maybe<Scalars['Int']['output']>;
  /** Concentration of PM2.5 particles. */
  pm25?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** AirQuality relation input */
export type AirQualityBuilding_IdRelationInput = {
  create?: InputMaybe<AirQuality_BuildingCreateInput>;
};

/** AirQuality relation input */
export type AirQualityBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<AirQuality_BuildingUpdateInput>;
};

/** AirQuality create input */
export type AirQualityCreateInput = {
  building_id: AirQualityBuilding_IdRelationInput;
  /** Concentration of CO2. */
  co2?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the air quality measurement was taken. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Concentration of PM10 particles. */
  pm10?: InputMaybe<Scalars['Int']['input']>;
  /** Concentration of PM2.5 particles. */
  pm25?: InputMaybe<Scalars['Int']['input']>;
};

/** AirQuality create many input */
export type AirQualityCreateManyInput = {
  /** Concentration of CO2. */
  co2?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the air quality measurement was taken. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Concentration of PM10 particles. */
  pm10?: InputMaybe<Scalars['Int']['input']>;
  /** Concentration of PM2.5 particles. */
  pm25?: InputMaybe<Scalars['Int']['input']>;
};

/** AirQuality delete input */
export type AirQualityDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** AirQualityFieldsPermissions create input */
export type AirQualityFieldsPermissions = {
  co2?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  measurement_date?: InputMaybe<Scalars['Boolean']['input']>;
  pm10?: InputMaybe<Scalars['Boolean']['input']>;
  pm25?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AirQualityFilter = {
  AND?: InputMaybe<Array<AirQualityFilter>>;
  OR?: InputMaybe<Array<AirQualityFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  co2?: InputMaybe<IntPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  measurement_date?: InputMaybe<DateTimePredicate>;
  pm10?: InputMaybe<IntPredicate>;
  pm25?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AirQualityGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: AirQualityGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type AirQualityGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  co2?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  measurement_date?: InputMaybe<Array<GroupByField>>;
  pm10?: InputMaybe<Array<GroupByField>>;
  pm25?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type AirQualityKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** AirQualityListResponse output */
export type AirQualityListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<AirQuality>;
};

/** AirQualityManyResponse output */
export type AirQualityManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<AirQuality>;
};

/** No longer supported. Use `sort` instead. */
export enum AirQualityOrderBy {
  Co2Asc = 'co2_ASC',
  Co2Desc = 'co2_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MeasurementDateAsc = 'measurement_date_ASC',
  MeasurementDateDesc = 'measurement_date_DESC',
  Pm10Asc = 'pm10_ASC',
  Pm10Desc = 'pm10_DESC',
  Pm25Asc = 'pm25_ASC',
  Pm25Desc = 'pm25_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** AirQuality subscription payload */
export type AirQualityPayload = {
  mutation: MutationType;
  node?: Maybe<AirQuality>;
  previousValues?: Maybe<AirQuality>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AirQualityRelationFilter = {
  every?: InputMaybe<AirQualityFilter>;
  none?: InputMaybe<AirQualityFilter>;
  some?: InputMaybe<AirQualityFilter>;
};

export type AirQualitySort = {
  building_id?: InputMaybe<BuildingSort>;
  co2?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  measurement_date?: InputMaybe<SortOrder>;
  pm10?: InputMaybe<SortOrder>;
  pm25?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** AirQuality subscription filter */
export type AirQualitySubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AirQualityFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AirQuality update input */
export type AirQualityUpdateByFilterInput = {
  co2?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
  pm10?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
  pm25?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
};

/** AirQuality update input */
export type AirQualityUpdateInput = {
  building_id?: InputMaybe<AirQualityBuilding_IdUpdateRelationInput>;
  /** Concentration of CO2. */
  co2?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the air quality measurement was taken. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Concentration of PM10 particles. */
  pm10?: InputMaybe<Scalars['Int']['input']>;
  /** Concentration of PM2.5 particles. */
  pm25?: InputMaybe<Scalars['Int']['input']>;
};

/** Buildings create input from AirQuality */
export type AirQuality_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords: BuildingsComplianceRecordsRelationInput;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency: BuildingsEnergyEfficiencyRelationInput;
  EnvironmentalData: BuildingsEnvironmentalDataRelationInput;
  Equipment: BuildingsEquipmentRelationInput;
  Improvements: BuildingsImprovementsRelationInput;
  MaintenanceRecords: BuildingsMaintenanceRecordsRelationInput;
  Permits: BuildingsPermitsRelationInput;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from AirQuality */
export type AirQuality_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type AirQuality_PermissionFilter = {
  AND?: InputMaybe<Array<AirQuality_PermissionFilter>>;
  OR?: InputMaybe<Array<AirQuality_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  co2?: InputMaybe<IntPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  measurement_date?: InputMaybe<DateTimePredicate>;
  pm10?: InputMaybe<IntPredicate>;
  pm25?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AirQuality_PermissionRelationFilter = {
  every?: InputMaybe<AirQuality_PermissionFilter>;
  none?: InputMaybe<AirQuality_PermissionFilter>;
  some?: InputMaybe<AirQuality_PermissionFilter>;
};

export type ApiToken = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ApiTokenRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput = {
  name: Scalars['String']['input'];
  roles?: InputMaybe<ApiTokensRolesRelationInput>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ApiTokenFilter = {
  AND?: InputMaybe<Array<ApiTokenFilter>>;
  OR?: InputMaybe<Array<ApiTokenFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiTokenGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ApiTokenGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ApiTokenGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ApiToken>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<ApiToken>;
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** ApiTokens subscription payload */
export type ApiTokenPayload = {
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  previousValues?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ApiTokenRelationFilter = {
  every?: InputMaybe<ApiTokenFilter>;
  none?: InputMaybe<ApiTokenFilter>;
  some?: InputMaybe<ApiTokenFilter>;
};

/** API Token Response */
export type ApiTokenResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** API Token Response */
export type ApiTokenResponseRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type ApiTokenSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ApiTokenFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  token?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<ApiTokensRolesUpdateRelationInput>;
};

export type ApiToken_PermissionFilter = {
  AND?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  OR?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiToken_PermissionRelationFilter = {
  every?: InputMaybe<ApiToken_PermissionFilter>;
  none?: InputMaybe<ApiToken_PermissionFilter>;
  some?: InputMaybe<ApiToken_PermissionFilter>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<ApiTokens_RoleUpdateInput>>>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Application */
export type Application = {
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: ApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type ApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Application>;
};

/** Application Status Enum */
export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type ApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** Async Session */
export type AsyncSession = {
  sessionId: Scalars['String']['output'];
};

export type AsyncSessionStatusResponse = {
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/** Auth response */
export type Auth = {
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  idTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationProfile = {
  _description?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<AuthenticationProfileAttributes>;
  audiences?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  databaseName?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  managementDomain?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  secret?: Maybe<Scalars['String']['output']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthenticationProfileRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes = CognitoAuthProfileAttributes;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions = {
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
  google?: Maybe<GoogleOptions>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput = {
  facebook?: InputMaybe<FacebookOptionsInput>;
  github?: InputMaybe<GithubOptionsInput>;
  google?: InputMaybe<GoogleOptionsInput>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesManyRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticationProfileFilter = {
  AND?: InputMaybe<Array<AuthenticationProfileFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: AuthenticationProfileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type AuthenticationProfileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  audiences?: InputMaybe<Array<GroupByField>>;
  clientId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  databaseName?: InputMaybe<Array<GroupByField>>;
  domain?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  managementDomain?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  secret?: InputMaybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: InputMaybe<Array<GroupByField>>;
  selfSignUpEnabled?: InputMaybe<Array<GroupByField>>;
  type?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy {
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload = {
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  previousValues?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AuthenticationProfileRelationFilter = {
  every?: InputMaybe<AuthenticationProfileFilter>;
  none?: InputMaybe<AuthenticationProfileFilter>;
  some?: InputMaybe<AuthenticationProfileFilter>;
};

export type AuthenticationProfileSort = {
  clientId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  databaseName?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  managementDomain?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secret?: InputMaybe<SortOrder>;
  selfSignUpEnabled?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationProfileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput = {
  audiences?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  clientId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  databaseName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  domain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  managementDomain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  secret?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  selfSignUpEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<AuthenticationProfilesRolesUpdateRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AuthenticationProfile_PermissionFilter = {
  AND?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfile_PermissionRelationFilter = {
  every?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  none?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  some?: InputMaybe<AuthenticationProfile_PermissionFilter>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

export type AuthenticationSetting = {
  _description?: Maybe<Scalars['String']['output']>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthenticationSettingFilter = {
  AND?: InputMaybe<Array<AuthenticationSettingFilter>>;
  OR?: InputMaybe<Array<AuthenticationSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload = {
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  previousValues?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedLogouts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedWebOrigins?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  connections?: InputMaybe<AuthenticationProfileConnectionsOptionsInput>;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput = {
  Notifications: UsersNotificationsRelationInput;
  Reports: UsersReportsRelationInput;
  SearchCriteria: UsersSearchCriteriaRelationInput;
  SubscriptionsApps: UsersSubscriptionsAppsRelationInput;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

export type AwsSignInfoResponse = {
  fields: Scalars['JSON']['output'];
  path: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BigIntPredicateHaving = {
  AND?: InputMaybe<Array<BigIntPredicateHaving>>;
  OR?: InputMaybe<Array<BigIntPredicateHaving>>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not_equals?: InputMaybe<Scalars['BigInt']['input']>;
  not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BillingCurrentPlanResponse = {
  customerId?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<BillingPlanFeature>>>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetrics>>>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<WorkspaceStatus>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum BillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type BillingDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: BillingDetailsOrigin;
};

export type BillingInvoiceItem = {
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<BillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<BillingInvoiceItemPlanInfo>;
  project?: Maybe<BillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type BillingInvoiceItemOrganizationInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemPlanInfo = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemProjectInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum BillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingInvoiceItem>;
};

export type BillingLimitMetricItem = {
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricOverageItem = {
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricUsageItem = {
  limitMetric?: Maybe<BillingLimitMetricItem>;
  overage?: Maybe<BillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type BillingMetricUsageQuotaItem = {
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageQuotaItem>;
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageItem>;
};

export type BillingNextPlanResponse = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type BillingPlanBaseInfo = {
  capacity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  featuresTitle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BillingPlanFeature = {
  displayName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingPlanLimitMetricItem = {
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

export type BillingPlanLimitMetrics = {
  hardLimit?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['String']['output']>;
  softLimit?: Maybe<Scalars['String']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export type BoolPredicate = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolPredicateHaving = {
  AND?: InputMaybe<Array<BoolPredicateHaving>>;
  OR?: InputMaybe<Array<BoolPredicateHaving>>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents a commercial building with its basic information. */
export type Building = {
  AirQuality?: Maybe<AirQualityListResponse>;
  Certifications?: Maybe<CertificationListResponse>;
  ComplianceRecords?: Maybe<ComplianceRecordListResponse>;
  Documents?: Maybe<DocumentListResponse>;
  EnergyEfficiency?: Maybe<EnergyEfficiencyListResponse>;
  EnvironmentalData?: Maybe<EnvironmentalDatumListResponse>;
  Equipment?: Maybe<EquipmentListResponse>;
  Improvements?: Maybe<ImprovementListResponse>;
  MaintenanceRecords?: Maybe<MaintenanceRecordListResponse>;
  Permits?: Maybe<PermitListResponse>;
  WorkOrders?: Maybe<WorkOrderListResponse>;
  _description?: Maybe<Scalars['String']['output']>;
  /** The address of the building. */
  address?: Maybe<Scalars['String']['output']>;
  /** The city where the building is located. */
  city?: Maybe<Scalars['String']['output']>;
  /** The country where the building is located. */
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the building. */
  name?: Maybe<Scalars['String']['output']>;
  /** The state where the building is located. */
  state?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The zip code of the building's location. */
  zip_code?: Maybe<Scalars['String']['output']>;
};


/** Represents a commercial building with its basic information. */
export type BuildingAirQualityArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AirQualityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AirQualityGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AirQualityOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AirQualitySort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingCertificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CertificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<CertificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<CertificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CertificationSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingComplianceRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ComplianceRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ComplianceRecordGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ComplianceRecordOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComplianceRecordSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<DocumentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingEnergyEfficiencyArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnergyEfficiencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnergyEfficiencyGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnergyEfficiencyOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnergyEfficiencySort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingEnvironmentalDataArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentalDatumFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentalDatumGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentalDatumOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentalDatumSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingEquipmentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EquipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EquipmentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EquipmentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EquipmentSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingImprovementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ImprovementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ImprovementGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ImprovementOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImprovementSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingMaintenanceRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MaintenanceRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<MaintenanceRecordGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<MaintenanceRecordOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MaintenanceRecordSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingPermitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PermitFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PermitGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PermitOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PermitSort>>;
};


/** Represents a commercial building with its basic information. */
export type BuildingWorkOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<WorkOrderGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkOrderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkOrderSort>>;
};

/** Buildings create input */
export type BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings create many input */
export type BuildingCreateManyInput = {
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings delete input */
export type BuildingDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** BuildingFieldsPermissions create input */
export type BuildingFieldsPermissions = {
  address?: InputMaybe<Scalars['Boolean']['input']>;
  city?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  zip_code?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuildingFilter = {
  AND?: InputMaybe<Array<BuildingFilter>>;
  AirQuality?: InputMaybe<AirQualityRelationFilter>;
  Certifications?: InputMaybe<CertificationRelationFilter>;
  ComplianceRecords?: InputMaybe<ComplianceRecordRelationFilter>;
  Documents?: InputMaybe<DocumentRelationFilter>;
  EnergyEfficiency?: InputMaybe<EnergyEfficiencyRelationFilter>;
  EnvironmentalData?: InputMaybe<EnvironmentalDatumRelationFilter>;
  Equipment?: InputMaybe<EquipmentRelationFilter>;
  Improvements?: InputMaybe<ImprovementRelationFilter>;
  MaintenanceRecords?: InputMaybe<MaintenanceRecordRelationFilter>;
  OR?: InputMaybe<Array<BuildingFilter>>;
  Permits?: InputMaybe<PermitRelationFilter>;
  WorkOrders?: InputMaybe<WorkOrderRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<StringPredicate>;
  city?: InputMaybe<StringPredicate>;
  country?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  state?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  zip_code?: InputMaybe<StringPredicate>;
};

export type BuildingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: BuildingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type BuildingGroupByQuery = {
  AirQuality?: InputMaybe<AirQualityGroupByQuery>;
  Certifications?: InputMaybe<CertificationGroupByQuery>;
  ComplianceRecords?: InputMaybe<ComplianceRecordGroupByQuery>;
  Documents?: InputMaybe<DocumentGroupByQuery>;
  EnergyEfficiency?: InputMaybe<EnergyEfficiencyGroupByQuery>;
  EnvironmentalData?: InputMaybe<EnvironmentalDatumGroupByQuery>;
  Equipment?: InputMaybe<EquipmentGroupByQuery>;
  Improvements?: InputMaybe<ImprovementGroupByQuery>;
  MaintenanceRecords?: InputMaybe<MaintenanceRecordGroupByQuery>;
  Permits?: InputMaybe<PermitGroupByQuery>;
  WorkOrders?: InputMaybe<WorkOrderGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  address?: InputMaybe<Array<GroupByField>>;
  city?: InputMaybe<Array<GroupByField>>;
  country?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  state?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  zip_code?: InputMaybe<Array<GroupByField>>;
};

export type BuildingKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** BuildingListResponse output */
export type BuildingListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Building>;
};

/** BuildingManyResponse output */
export type BuildingManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Building>;
};

/** No longer supported. Use `sort` instead. */
export enum BuildingOrderBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ZipCodeAsc = 'zip_code_ASC',
  ZipCodeDesc = 'zip_code_DESC'
}

/** Buildings subscription payload */
export type BuildingPayload = {
  mutation: MutationType;
  node?: Maybe<Building>;
  previousValues?: Maybe<Building>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type BuildingSort = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  zip_code?: InputMaybe<SortOrder>;
};

/** Buildings subscription filter */
export type BuildingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<BuildingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Buildings update input */
export type BuildingUpdateByFilterInput = {
  address?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  city?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  country?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  state?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  zip_code?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Buildings update input */
export type BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type Building_PermissionFilter = {
  AND?: InputMaybe<Array<Building_PermissionFilter>>;
  AirQuality?: InputMaybe<AirQuality_PermissionRelationFilter>;
  Certifications?: InputMaybe<Certification_PermissionRelationFilter>;
  ComplianceRecords?: InputMaybe<ComplianceRecord_PermissionRelationFilter>;
  Documents?: InputMaybe<Document_PermissionRelationFilter>;
  EnergyEfficiency?: InputMaybe<EnergyEfficiency_PermissionRelationFilter>;
  EnvironmentalData?: InputMaybe<EnvironmentalDatum_PermissionRelationFilter>;
  Equipment?: InputMaybe<Equipment_PermissionRelationFilter>;
  Improvements?: InputMaybe<Improvement_PermissionRelationFilter>;
  MaintenanceRecords?: InputMaybe<MaintenanceRecord_PermissionRelationFilter>;
  OR?: InputMaybe<Array<Building_PermissionFilter>>;
  Permits?: InputMaybe<Permit_PermissionRelationFilter>;
  WorkOrders?: InputMaybe<WorkOrder_PermissionRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<StringPredicate>;
  city?: InputMaybe<StringPredicate>;
  country?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  state?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  zip_code?: InputMaybe<StringPredicate>;
};

/** AirQuality create input from building_id */
export type Building_Id_AirQualityCreateInput = {
  building_id?: InputMaybe<AirQualityBuilding_IdRelationInput>;
  /** Concentration of CO2. */
  co2?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the air quality measurement was taken. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Concentration of PM10 particles. */
  pm10?: InputMaybe<Scalars['Int']['input']>;
  /** Concentration of PM2.5 particles. */
  pm25?: InputMaybe<Scalars['Int']['input']>;
};

/** AirQuality update input from building_id */
export type Building_Id_AirQualityUpdateInput = {
  data: AirQualityUpdateInput;
  filter?: InputMaybe<AirQualityKeyFilter>;
};

/** Certifications create input from building_id */
export type Building_Id_CertificationCreateInput = {
  building_id?: InputMaybe<CertificationsBuilding_IdRelationInput>;
  /** Type of certification obtained (e.g., LEED, Energy Star). */
  certification_type?: InputMaybe<Scalars['String']['input']>;
  /** Date when the certification expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when the certification was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Certifications update input from building_id */
export type Building_Id_CertificationUpdateInput = {
  data: CertificationUpdateInput;
  filter?: InputMaybe<CertificationKeyFilter>;
};

/** ComplianceRecords create input from building_id */
export type Building_Id_ComplianceRecordCreateInput = {
  building_id?: InputMaybe<ComplianceRecordsBuilding_IdRelationInput>;
  /** Type of compliance requirement (e.g., fire safety, health regulations). */
  compliance_type?: InputMaybe<Scalars['String']['input']>;
  /** Date when the compliance was last checked. */
  last_checked_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Current status of compliance (e.g., compliant, non-compliant, pending). */
  status?: InputMaybe<Scalars['String']['input']>;
};

/** ComplianceRecords update input from building_id */
export type Building_Id_ComplianceRecordUpdateInput = {
  data: ComplianceRecordUpdateInput;
  filter?: InputMaybe<ComplianceRecordKeyFilter>;
};

/** Documents create input from building_id */
export type Building_Id_DocumentCreateInput = {
  building_id?: InputMaybe<DocumentsBuilding_IdRelationInput>;
  /** Type of document (e.g., permit, certificate, inspection report). */
  document_type?: InputMaybe<Scalars['String']['input']>;
  /** Path to the stored document file. */
  file_path?: InputMaybe<Scalars['String']['input']>;
  /** Date when the document was uploaded. */
  uploaded_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Documents update input from building_id */
export type Building_Id_DocumentUpdateInput = {
  data: DocumentUpdateInput;
  filter?: InputMaybe<DocumentKeyFilter>;
};

/** EnergyEfficiency create input from building_id */
export type Building_Id_EnergyEfficiencyCreateInput = {
  building_id?: InputMaybe<EnergyEfficiencyBuilding_IdRelationInput>;
  /** Amount of energy consumed. */
  energy_consumption?: InputMaybe<Scalars['Int']['input']>;
  /** Amount of energy saved. */
  energy_savings?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the energy efficiency was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** EnergyEfficiency update input from building_id */
export type Building_Id_EnergyEfficiencyUpdateInput = {
  data: EnergyEfficiencyUpdateInput;
  filter?: InputMaybe<EnergyEfficiencyKeyFilter>;
};

/** EnvironmentalData create input from building_id */
export type Building_Id_EnvironmentalDatumCreateInput = {
  building_id?: InputMaybe<EnvironmentalDataBuilding_IdRelationInput>;
  /** Date when the environmental parameter was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Environmental parameter being measured (e.g., noise level, water quality). */
  parameter?: InputMaybe<Scalars['String']['input']>;
  /** Value of the environmental parameter. */
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** EnvironmentalData update input from building_id */
export type Building_Id_EnvironmentalDatumUpdateInput = {
  data: EnvironmentalDatumUpdateInput;
  filter?: InputMaybe<EnvironmentalDatumKeyFilter>;
};

/** Equipment create input from building_id */
export type Building_Id_EquipmentCreateInput = {
  building_id?: InputMaybe<EquipmentBuilding_IdRelationInput>;
  /** Date when the equipment was installed. */
  installation_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Name of the equipment. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Type of the equipment. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Equipment update input from building_id */
export type Building_Id_EquipmentUpdateInput = {
  data: EquipmentUpdateInput;
  filter?: InputMaybe<EquipmentKeyFilter>;
};

/** Improvements create input from building_id */
export type Building_Id_ImprovementCreateInput = {
  building_id?: InputMaybe<ImprovementsBuilding_IdRelationInput>;
  /** Cost of the improvement. */
  cost?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the improvement was made. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the improvement made. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** Improvements update input from building_id */
export type Building_Id_ImprovementUpdateInput = {
  data: ImprovementUpdateInput;
  filter?: InputMaybe<ImprovementKeyFilter>;
};

/** MaintenanceRecords create input from building_id */
export type Building_Id_MaintenanceRecordCreateInput = {
  building_id?: InputMaybe<MaintenanceRecordsBuilding_IdRelationInput>;
  /** Date when the maintenance activity was performed. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the maintenance activity. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** MaintenanceRecords update input from building_id */
export type Building_Id_MaintenanceRecordUpdateInput = {
  data: MaintenanceRecordUpdateInput;
  filter?: InputMaybe<MaintenanceRecordKeyFilter>;
};

/** Permits create input from building_id */
export type Building_Id_PermitCreateInput = {
  building_id?: InputMaybe<PermitsBuilding_IdRelationInput>;
  /** Date when the permit expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when the permit was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Unique identifier for the permit. */
  permit_number?: InputMaybe<Scalars['String']['input']>;
};

/** Permits update input from building_id */
export type Building_Id_PermitUpdateInput = {
  data: PermitUpdateInput;
  filter?: InputMaybe<PermitKeyFilter>;
};

/** WorkOrders create input from building_id */
export type Building_Id_WorkOrderCreateInput = {
  /** Date when the task was assigned. */
  assigned_date?: InputMaybe<Scalars['DateTime']['input']>;
  building_id?: InputMaybe<WorkOrdersBuilding_IdRelationInput>;
  /** Date when the task was completed. */
  completion_date: Scalars['DateTime']['input'];
  /** Current status of the work order (e.g., pending, completed). */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Description of the maintenance task. */
  task_description?: InputMaybe<Scalars['String']['input']>;
  vendor_id: WorkOrdersVendor_IdRelationInput;
};

/** WorkOrders update input from building_id */
export type Building_Id_WorkOrderUpdateInput = {
  data: WorkOrderUpdateInput;
  filter?: InputMaybe<WorkOrderKeyFilter>;
};

/** Buildings relation input */
export type BuildingsAirQualityRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_AirQualityCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsAirQualityUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_AirQualityUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsCertificationsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_CertificationCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsCertificationsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_CertificationUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsComplianceRecordsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_ComplianceRecordCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsComplianceRecordsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_ComplianceRecordUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsDocumentsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_DocumentCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsDocumentsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_DocumentUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsEnergyEfficiencyRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_EnergyEfficiencyCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsEnergyEfficiencyUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_EnergyEfficiencyUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsEnvironmentalDataRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_EnvironmentalDatumCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsEnvironmentalDataUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_EnvironmentalDatumUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsEquipmentRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_EquipmentCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsEquipmentUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_EquipmentUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsImprovementsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_ImprovementCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsImprovementsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_ImprovementUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsMaintenanceRecordsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_MaintenanceRecordCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsMaintenanceRecordsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_MaintenanceRecordUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsPermitsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_PermitCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsPermitsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_PermitUpdateInput>>>;
};

/** Buildings relation input */
export type BuildingsWorkOrdersRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Building_Id_WorkOrderCreateInput>>>;
};

/** Buildings relation input */
export type BuildingsWorkOrdersUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Building_Id_WorkOrderUpdateInput>>>;
};

/** Records certifications obtained by the building. */
export type Certification = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building that obtained the certification. */
  building_id?: Maybe<Building>;
  /** Type of certification obtained (e.g., LEED, Energy Star). */
  certification_type?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Date when the certification expires. */
  expiry_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Date when the certification was issued. */
  issue_date?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Certifications create input */
export type CertificationCreateInput = {
  building_id?: InputMaybe<CertificationsBuilding_IdRelationInput>;
  /** Type of certification obtained (e.g., LEED, Energy Star). */
  certification_type?: InputMaybe<Scalars['String']['input']>;
  /** Date when the certification expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when the certification was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Certifications create many input */
export type CertificationCreateManyInput = {
  /** Type of certification obtained (e.g., LEED, Energy Star). */
  certification_type?: InputMaybe<Scalars['String']['input']>;
  /** Date when the certification expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when the certification was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Certifications delete input */
export type CertificationDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** CertificationFieldsPermissions create input */
export type CertificationFieldsPermissions = {
  certification_type?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  expiry_date?: InputMaybe<Scalars['Boolean']['input']>;
  issue_date?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CertificationFilter = {
  AND?: InputMaybe<Array<CertificationFilter>>;
  OR?: InputMaybe<Array<CertificationFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  certification_type?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  expiry_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  issue_date?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type CertificationGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: CertificationGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type CertificationGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  certification_type?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  expiry_date?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  issue_date?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type CertificationKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** CertificationListResponse output */
export type CertificationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Certification>;
};

/** CertificationManyResponse output */
export type CertificationManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Certification>;
};

/** No longer supported. Use `sort` instead. */
export enum CertificationOrderBy {
  CertificationTypeAsc = 'certification_type_ASC',
  CertificationTypeDesc = 'certification_type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ExpiryDateAsc = 'expiry_date_ASC',
  ExpiryDateDesc = 'expiry_date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IssueDateAsc = 'issue_date_ASC',
  IssueDateDesc = 'issue_date_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Certifications subscription payload */
export type CertificationPayload = {
  mutation: MutationType;
  node?: Maybe<Certification>;
  previousValues?: Maybe<Certification>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CertificationRelationFilter = {
  every?: InputMaybe<CertificationFilter>;
  none?: InputMaybe<CertificationFilter>;
  some?: InputMaybe<CertificationFilter>;
};

export type CertificationSort = {
  building_id?: InputMaybe<BuildingSort>;
  certification_type?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  expiry_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issue_date?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Certifications subscription filter */
export type CertificationSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<CertificationFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Certifications update input */
export type CertificationUpdateByFilterInput = {
  certification_type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Certifications update input */
export type CertificationUpdateInput = {
  building_id?: InputMaybe<CertificationsBuilding_IdUpdateRelationInput>;
  /** Type of certification obtained (e.g., LEED, Energy Star). */
  certification_type?: InputMaybe<Scalars['String']['input']>;
  /** Date when the certification expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the certification was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Certification_PermissionFilter = {
  AND?: InputMaybe<Array<Certification_PermissionFilter>>;
  OR?: InputMaybe<Array<Certification_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  certification_type?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  expiry_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  issue_date?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Certification_PermissionRelationFilter = {
  every?: InputMaybe<Certification_PermissionFilter>;
  none?: InputMaybe<Certification_PermissionFilter>;
  some?: InputMaybe<Certification_PermissionFilter>;
};

/** Certifications relation input */
export type CertificationsBuilding_IdRelationInput = {
  create?: InputMaybe<Certifications_BuildingCreateInput>;
};

/** Certifications relation input */
export type CertificationsBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<Certifications_BuildingUpdateInput>;
};

/** Buildings create input from Certifications */
export type Certifications_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsRelationInput>;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from Certifications */
export type Certifications_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** ChangePasswordInput */
export type ChangePasswordInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes = {
  clientAuthDomain?: Maybe<Scalars['String']['output']>;
};

/** Tracks compliance with various regulatory requirements. */
export type ComplianceRecord = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building for which compliance is tracked. */
  building_id?: Maybe<Building>;
  /** Type of compliance requirement (e.g., fire safety, health regulations). */
  compliance_type?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Date when the compliance was last checked. */
  last_checked_date?: Maybe<Scalars['DateTime']['output']>;
  /** Current status of compliance (e.g., compliant, non-compliant, pending). */
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** ComplianceRecords create input */
export type ComplianceRecordCreateInput = {
  building_id?: InputMaybe<ComplianceRecordsBuilding_IdRelationInput>;
  /** Type of compliance requirement (e.g., fire safety, health regulations). */
  compliance_type?: InputMaybe<Scalars['String']['input']>;
  /** Date when the compliance was last checked. */
  last_checked_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Current status of compliance (e.g., compliant, non-compliant, pending). */
  status?: InputMaybe<Scalars['String']['input']>;
};

/** ComplianceRecords create many input */
export type ComplianceRecordCreateManyInput = {
  /** Type of compliance requirement (e.g., fire safety, health regulations). */
  compliance_type?: InputMaybe<Scalars['String']['input']>;
  /** Date when the compliance was last checked. */
  last_checked_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Current status of compliance (e.g., compliant, non-compliant, pending). */
  status?: InputMaybe<Scalars['String']['input']>;
};

/** ComplianceRecords delete input */
export type ComplianceRecordDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ComplianceRecordFieldsPermissions create input */
export type ComplianceRecordFieldsPermissions = {
  compliance_type?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  last_checked_date?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComplianceRecordFilter = {
  AND?: InputMaybe<Array<ComplianceRecordFilter>>;
  OR?: InputMaybe<Array<ComplianceRecordFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  compliance_type?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  last_checked_date?: InputMaybe<DateTimePredicate>;
  status?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ComplianceRecordGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ComplianceRecordGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ComplianceRecordGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  compliance_type?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  last_checked_date?: InputMaybe<Array<GroupByField>>;
  status?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ComplianceRecordKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ComplianceRecordListResponse output */
export type ComplianceRecordListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ComplianceRecord>;
};

/** ComplianceRecordManyResponse output */
export type ComplianceRecordManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<ComplianceRecord>;
};

/** No longer supported. Use `sort` instead. */
export enum ComplianceRecordOrderBy {
  ComplianceTypeAsc = 'compliance_type_ASC',
  ComplianceTypeDesc = 'compliance_type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastCheckedDateAsc = 'last_checked_date_ASC',
  LastCheckedDateDesc = 'last_checked_date_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** ComplianceRecords subscription payload */
export type ComplianceRecordPayload = {
  mutation: MutationType;
  node?: Maybe<ComplianceRecord>;
  previousValues?: Maybe<ComplianceRecord>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ComplianceRecordRelationFilter = {
  every?: InputMaybe<ComplianceRecordFilter>;
  none?: InputMaybe<ComplianceRecordFilter>;
  some?: InputMaybe<ComplianceRecordFilter>;
};

export type ComplianceRecordSort = {
  building_id?: InputMaybe<BuildingSort>;
  compliance_type?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_checked_date?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** ComplianceRecords subscription filter */
export type ComplianceRecordSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ComplianceRecordFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** ComplianceRecords update input */
export type ComplianceRecordUpdateByFilterInput = {
  compliance_type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** ComplianceRecords update input */
export type ComplianceRecordUpdateInput = {
  building_id?: InputMaybe<ComplianceRecordsBuilding_IdUpdateRelationInput>;
  /** Type of compliance requirement (e.g., fire safety, health regulations). */
  compliance_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the compliance was last checked. */
  last_checked_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Current status of compliance (e.g., compliant, non-compliant, pending). */
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ComplianceRecord_PermissionFilter = {
  AND?: InputMaybe<Array<ComplianceRecord_PermissionFilter>>;
  OR?: InputMaybe<Array<ComplianceRecord_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  compliance_type?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  last_checked_date?: InputMaybe<DateTimePredicate>;
  status?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ComplianceRecord_PermissionRelationFilter = {
  every?: InputMaybe<ComplianceRecord_PermissionFilter>;
  none?: InputMaybe<ComplianceRecord_PermissionFilter>;
  some?: InputMaybe<ComplianceRecord_PermissionFilter>;
};

/** ComplianceRecords relation input */
export type ComplianceRecordsBuilding_IdRelationInput = {
  create?: InputMaybe<ComplianceRecords_BuildingCreateInput>;
};

/** ComplianceRecords relation input */
export type ComplianceRecordsBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<ComplianceRecords_BuildingUpdateInput>;
};

/** Buildings create input from ComplianceRecords */
export type ComplianceRecords_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsRelationInput>;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from ComplianceRecords */
export type ComplianceRecords_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Computed field mode */
export enum ComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type CustomTableField = {
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<FieldType>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type DateFieldTypeAttributes = {
  format: Scalars['String']['output'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Day = 'DAY',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Hour = 'HOUR',
  LastDay = 'LAST_DAY',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK'
}

export type DatePredicateHaving = {
  AND?: InputMaybe<Array<DatePredicateHaving>>;
  OR?: InputMaybe<Array<DatePredicateHaving>>;
  equals?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  not_equals?: InputMaybe<Scalars['Date']['input']>;
  not_in?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type DateRelativePredicateType = {
  op?: InputMaybe<RelativePredicateOpEnum>;
  unit?: InputMaybe<RelativePredicateUnitEnum>;
  value: Scalars['String']['input'];
};

export type DateRelativePredicates = {
  gt?: InputMaybe<DateRelativePredicateType>;
  gte?: InputMaybe<DateRelativePredicateType>;
  lt?: InputMaybe<DateRelativePredicateType>;
  lte?: InputMaybe<DateRelativePredicateType>;
};

export type DateTimePredicate = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  relative?: InputMaybe<DateRelativePredicates>;
};

export type DateTimePredicateHaving = {
  AND?: InputMaybe<Array<DateTimePredicateHaving>>;
  OR?: InputMaybe<Array<DateTimePredicateHaving>>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type DeployDataResponse = {
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum DeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type DeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<DeployModeEnum>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum DeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** DeployStatusResult */
export type DeployStatusResult = {
  message?: Maybe<Scalars['String']['output']>;
  status: DeployStatusEnum;
};

/** DeployingBuildInput */
export type DeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<DeployOptions>;
};

export type DeploymentAbItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

/** Stores building-related documents such as permits, certificates, and inspection reports. */
export type Document = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building related to the document. */
  building_id?: Maybe<Building>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Type of document (e.g., permit, certificate, inspection report). */
  document_type?: Maybe<Scalars['String']['output']>;
  /** Path to the stored document file. */
  file_path?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Date when the document was uploaded. */
  uploaded_date?: Maybe<Scalars['DateTime']['output']>;
};

/** Documents create input */
export type DocumentCreateInput = {
  building_id?: InputMaybe<DocumentsBuilding_IdRelationInput>;
  /** Type of document (e.g., permit, certificate, inspection report). */
  document_type?: InputMaybe<Scalars['String']['input']>;
  /** Path to the stored document file. */
  file_path?: InputMaybe<Scalars['String']['input']>;
  /** Date when the document was uploaded. */
  uploaded_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Documents create many input */
export type DocumentCreateManyInput = {
  /** Type of document (e.g., permit, certificate, inspection report). */
  document_type?: InputMaybe<Scalars['String']['input']>;
  /** Path to the stored document file. */
  file_path?: InputMaybe<Scalars['String']['input']>;
  /** Date when the document was uploaded. */
  uploaded_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Documents delete input */
export type DocumentDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** DocumentFieldsPermissions create input */
export type DocumentFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  document_type?: InputMaybe<Scalars['Boolean']['input']>;
  file_path?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  uploaded_date?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentFilter = {
  AND?: InputMaybe<Array<DocumentFilter>>;
  OR?: InputMaybe<Array<DocumentFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  document_type?: InputMaybe<StringPredicate>;
  file_path?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploaded_date?: InputMaybe<DateTimePredicate>;
};

export type DocumentGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: DocumentGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type DocumentGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  document_type?: InputMaybe<Array<GroupByField>>;
  file_path?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  uploaded_date?: InputMaybe<Array<GroupByField>>;
};

export type DocumentKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** DocumentListResponse output */
export type DocumentListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Document>;
};

/** DocumentManyResponse output */
export type DocumentManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Document>;
};

/** No longer supported. Use `sort` instead. */
export enum DocumentOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DocumentTypeAsc = 'document_type_ASC',
  DocumentTypeDesc = 'document_type_DESC',
  FilePathAsc = 'file_path_ASC',
  FilePathDesc = 'file_path_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UploadedDateAsc = 'uploaded_date_ASC',
  UploadedDateDesc = 'uploaded_date_DESC'
}

/** Documents subscription payload */
export type DocumentPayload = {
  mutation: MutationType;
  node?: Maybe<Document>;
  previousValues?: Maybe<Document>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DocumentRelationFilter = {
  every?: InputMaybe<DocumentFilter>;
  none?: InputMaybe<DocumentFilter>;
  some?: InputMaybe<DocumentFilter>;
};

export type DocumentSort = {
  building_id?: InputMaybe<BuildingSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  document_type?: InputMaybe<SortOrder>;
  file_path?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded_date?: InputMaybe<SortOrder>;
};

/** Documents subscription filter */
export type DocumentSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<DocumentFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Documents update input */
export type DocumentUpdateByFilterInput = {
  document_type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  file_path?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Documents update input */
export type DocumentUpdateInput = {
  building_id?: InputMaybe<DocumentsBuilding_IdUpdateRelationInput>;
  /** Type of document (e.g., permit, certificate, inspection report). */
  document_type?: InputMaybe<Scalars['String']['input']>;
  /** Path to the stored document file. */
  file_path?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the document was uploaded. */
  uploaded_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Document_PermissionFilter = {
  AND?: InputMaybe<Array<Document_PermissionFilter>>;
  OR?: InputMaybe<Array<Document_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  document_type?: InputMaybe<StringPredicate>;
  file_path?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploaded_date?: InputMaybe<DateTimePredicate>;
};

export type Document_PermissionRelationFilter = {
  every?: InputMaybe<Document_PermissionFilter>;
  none?: InputMaybe<Document_PermissionFilter>;
  some?: InputMaybe<Document_PermissionFilter>;
};

/** Documents relation input */
export type DocumentsBuilding_IdRelationInput = {
  create?: InputMaybe<Documents_BuildingCreateInput>;
};

/** Documents relation input */
export type DocumentsBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<Documents_BuildingUpdateInput>;
};

/** Buildings create input from Documents */
export type Documents_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from Documents */
export type Documents_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Metrics related to the building's energy efficiency. */
export type EnergyEfficiency = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building where the energy efficiency was measured. */
  building_id?: Maybe<Building>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Amount of energy consumed. */
  energy_consumption?: Maybe<Scalars['Int']['output']>;
  /** Amount of energy saved. */
  energy_savings?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Date when the energy efficiency was measured. */
  measurement_date?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** EnergyEfficiency relation input */
export type EnergyEfficiencyBuilding_IdRelationInput = {
  create?: InputMaybe<EnergyEfficiency_BuildingCreateInput>;
};

/** EnergyEfficiency relation input */
export type EnergyEfficiencyBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<EnergyEfficiency_BuildingUpdateInput>;
};

/** EnergyEfficiency create input */
export type EnergyEfficiencyCreateInput = {
  building_id?: InputMaybe<EnergyEfficiencyBuilding_IdRelationInput>;
  /** Amount of energy consumed. */
  energy_consumption?: InputMaybe<Scalars['Int']['input']>;
  /** Amount of energy saved. */
  energy_savings?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the energy efficiency was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** EnergyEfficiency create many input */
export type EnergyEfficiencyCreateManyInput = {
  /** Amount of energy consumed. */
  energy_consumption?: InputMaybe<Scalars['Int']['input']>;
  /** Amount of energy saved. */
  energy_savings?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the energy efficiency was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** EnergyEfficiency delete input */
export type EnergyEfficiencyDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EnergyEfficiencyFieldsPermissions create input */
export type EnergyEfficiencyFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  energy_consumption?: InputMaybe<Scalars['Boolean']['input']>;
  energy_savings?: InputMaybe<Scalars['Boolean']['input']>;
  measurement_date?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnergyEfficiencyFilter = {
  AND?: InputMaybe<Array<EnergyEfficiencyFilter>>;
  OR?: InputMaybe<Array<EnergyEfficiencyFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  energy_consumption?: InputMaybe<IntPredicate>;
  energy_savings?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  measurement_date?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type EnergyEfficiencyGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EnergyEfficiencyGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EnergyEfficiencyGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  energy_consumption?: InputMaybe<Array<GroupByField>>;
  energy_savings?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  measurement_date?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type EnergyEfficiencyKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EnergyEfficiencyListResponse output */
export type EnergyEfficiencyListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnergyEfficiency>;
};

/** EnergyEfficiencyManyResponse output */
export type EnergyEfficiencyManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnergyEfficiency>;
};

/** No longer supported. Use `sort` instead. */
export enum EnergyEfficiencyOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EnergyConsumptionAsc = 'energy_consumption_ASC',
  EnergyConsumptionDesc = 'energy_consumption_DESC',
  EnergySavingsAsc = 'energy_savings_ASC',
  EnergySavingsDesc = 'energy_savings_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MeasurementDateAsc = 'measurement_date_ASC',
  MeasurementDateDesc = 'measurement_date_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** EnergyEfficiency subscription payload */
export type EnergyEfficiencyPayload = {
  mutation: MutationType;
  node?: Maybe<EnergyEfficiency>;
  previousValues?: Maybe<EnergyEfficiency>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnergyEfficiencyRelationFilter = {
  every?: InputMaybe<EnergyEfficiencyFilter>;
  none?: InputMaybe<EnergyEfficiencyFilter>;
  some?: InputMaybe<EnergyEfficiencyFilter>;
};

export type EnergyEfficiencySort = {
  building_id?: InputMaybe<BuildingSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  energy_consumption?: InputMaybe<SortOrder>;
  energy_savings?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  measurement_date?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** EnergyEfficiency subscription filter */
export type EnergyEfficiencySubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EnergyEfficiencyFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** EnergyEfficiency update input */
export type EnergyEfficiencyUpdateByFilterInput = {
  energy_consumption?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
  energy_savings?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
};

/** EnergyEfficiency update input */
export type EnergyEfficiencyUpdateInput = {
  building_id?: InputMaybe<EnergyEfficiencyBuilding_IdUpdateRelationInput>;
  /** Amount of energy consumed. */
  energy_consumption?: InputMaybe<Scalars['Int']['input']>;
  /** Amount of energy saved. */
  energy_savings?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the energy efficiency was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Buildings create input from EnergyEfficiency */
export type EnergyEfficiency_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords: BuildingsComplianceRecordsRelationInput;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from EnergyEfficiency */
export type EnergyEfficiency_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type EnergyEfficiency_PermissionFilter = {
  AND?: InputMaybe<Array<EnergyEfficiency_PermissionFilter>>;
  OR?: InputMaybe<Array<EnergyEfficiency_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  energy_consumption?: InputMaybe<IntPredicate>;
  energy_savings?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  measurement_date?: InputMaybe<DateTimePredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type EnergyEfficiency_PermissionRelationFilter = {
  every?: InputMaybe<EnergyEfficiency_PermissionFilter>;
  none?: InputMaybe<EnergyEfficiency_PermissionFilter>;
  some?: InputMaybe<EnergyEfficiency_PermissionFilter>;
};

export type EnvironmentBackupItem = {
  name: Scalars['String']['output'];
  size: Scalars['Float']['output'];
};

export type EnvironmentItem = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput = {
  deleteLock?: InputMaybe<Scalars['Boolean']['input']>;
  introspection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentVariable = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EnvironmentVariableFilter = {
  AND?: InputMaybe<Array<EnvironmentVariableFilter>>;
  OR?: InputMaybe<Array<EnvironmentVariableFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  value?: InputMaybe<StringPredicate>;
};

export type EnvironmentVariableGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EnvironmentVariableGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EnvironmentVariableGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  value?: InputMaybe<Array<GroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload = {
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  previousValues?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnvironmentVariableSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EnvironmentVariableFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  value?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** EnvironmentalData relation input */
export type EnvironmentalDataBuilding_IdRelationInput = {
  create?: InputMaybe<EnvironmentalData_BuildingCreateInput>;
};

/** EnvironmentalData relation input */
export type EnvironmentalDataBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<EnvironmentalData_BuildingUpdateInput>;
};

/** Buildings create input from EnvironmentalData */
export type EnvironmentalData_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords: BuildingsComplianceRecordsRelationInput;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency: BuildingsEnergyEfficiencyRelationInput;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from EnvironmentalData */
export type EnvironmentalData_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Records environmental information related to the building. */
export type EnvironmentalDatum = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building where the environmental data was recorded. */
  building_id?: Maybe<Building>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Date when the environmental parameter was measured. */
  measurement_date?: Maybe<Scalars['DateTime']['output']>;
  /** Environmental parameter being measured (e.g., noise level, water quality). */
  parameter?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Value of the environmental parameter. */
  value?: Maybe<Scalars['Int']['output']>;
};

/** EnvironmentalData create input */
export type EnvironmentalDatumCreateInput = {
  building_id?: InputMaybe<EnvironmentalDataBuilding_IdRelationInput>;
  /** Date when the environmental parameter was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Environmental parameter being measured (e.g., noise level, water quality). */
  parameter?: InputMaybe<Scalars['String']['input']>;
  /** Value of the environmental parameter. */
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** EnvironmentalData create many input */
export type EnvironmentalDatumCreateManyInput = {
  /** Date when the environmental parameter was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Environmental parameter being measured (e.g., noise level, water quality). */
  parameter?: InputMaybe<Scalars['String']['input']>;
  /** Value of the environmental parameter. */
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** EnvironmentalData delete input */
export type EnvironmentalDatumDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EnvironmentalDatumFieldsPermissions create input */
export type EnvironmentalDatumFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  measurement_date?: InputMaybe<Scalars['Boolean']['input']>;
  parameter?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentalDatumFilter = {
  AND?: InputMaybe<Array<EnvironmentalDatumFilter>>;
  OR?: InputMaybe<Array<EnvironmentalDatumFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  measurement_date?: InputMaybe<DateTimePredicate>;
  parameter?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  value?: InputMaybe<IntPredicate>;
};

export type EnvironmentalDatumGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EnvironmentalDatumGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EnvironmentalDatumGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  measurement_date?: InputMaybe<Array<GroupByField>>;
  parameter?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  value?: InputMaybe<Array<GroupByField>>;
};

export type EnvironmentalDatumKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EnvironmentalDatumListResponse output */
export type EnvironmentalDatumListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnvironmentalDatum>;
};

/** EnvironmentalDatumManyResponse output */
export type EnvironmentalDatumManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentalDatum>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentalDatumOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MeasurementDateAsc = 'measurement_date_ASC',
  MeasurementDateDesc = 'measurement_date_DESC',
  ParameterAsc = 'parameter_ASC',
  ParameterDesc = 'parameter_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** EnvironmentalData subscription payload */
export type EnvironmentalDatumPayload = {
  mutation: MutationType;
  node?: Maybe<EnvironmentalDatum>;
  previousValues?: Maybe<EnvironmentalDatum>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnvironmentalDatumRelationFilter = {
  every?: InputMaybe<EnvironmentalDatumFilter>;
  none?: InputMaybe<EnvironmentalDatumFilter>;
  some?: InputMaybe<EnvironmentalDatumFilter>;
};

export type EnvironmentalDatumSort = {
  building_id?: InputMaybe<BuildingSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  measurement_date?: InputMaybe<SortOrder>;
  parameter?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

/** EnvironmentalData subscription filter */
export type EnvironmentalDatumSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EnvironmentalDatumFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** EnvironmentalData update input */
export type EnvironmentalDatumUpdateByFilterInput = {
  parameter?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  value?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
};

/** EnvironmentalData update input */
export type EnvironmentalDatumUpdateInput = {
  building_id?: InputMaybe<EnvironmentalDataBuilding_IdUpdateRelationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the environmental parameter was measured. */
  measurement_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Environmental parameter being measured (e.g., noise level, water quality). */
  parameter?: InputMaybe<Scalars['String']['input']>;
  /** Value of the environmental parameter. */
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type EnvironmentalDatum_PermissionFilter = {
  AND?: InputMaybe<Array<EnvironmentalDatum_PermissionFilter>>;
  OR?: InputMaybe<Array<EnvironmentalDatum_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  measurement_date?: InputMaybe<DateTimePredicate>;
  parameter?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  value?: InputMaybe<IntPredicate>;
};

export type EnvironmentalDatum_PermissionRelationFilter = {
  every?: InputMaybe<EnvironmentalDatum_PermissionFilter>;
  none?: InputMaybe<EnvironmentalDatum_PermissionFilter>;
  some?: InputMaybe<EnvironmentalDatum_PermissionFilter>;
};

/** Details about equipment installed in the building. */
export type Equipment = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building where the equipment is installed. */
  building_id?: Maybe<Building>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Date when the equipment was installed. */
  installation_date?: Maybe<Scalars['DateTime']['output']>;
  /** Name of the equipment. */
  name?: Maybe<Scalars['String']['output']>;
  /** Type of the equipment. */
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Equipment relation input */
export type EquipmentBuilding_IdRelationInput = {
  create?: InputMaybe<Equipment_BuildingCreateInput>;
};

/** Equipment relation input */
export type EquipmentBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<Equipment_BuildingUpdateInput>;
};

/** Equipment create input */
export type EquipmentCreateInput = {
  building_id?: InputMaybe<EquipmentBuilding_IdRelationInput>;
  /** Date when the equipment was installed. */
  installation_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Name of the equipment. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Type of the equipment. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Equipment create many input */
export type EquipmentCreateManyInput = {
  /** Date when the equipment was installed. */
  installation_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Name of the equipment. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Type of the equipment. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Equipment delete input */
export type EquipmentDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EquipmentFieldsPermissions create input */
export type EquipmentFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  installation_date?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EquipmentFilter = {
  AND?: InputMaybe<Array<EquipmentFilter>>;
  OR?: InputMaybe<Array<EquipmentFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  installation_date?: InputMaybe<DateTimePredicate>;
  name?: InputMaybe<StringPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type EquipmentGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EquipmentGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EquipmentGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  installation_date?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  type?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type EquipmentKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EquipmentListResponse output */
export type EquipmentListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Equipment>;
};

/** EquipmentManyResponse output */
export type EquipmentManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Equipment>;
};

/** No longer supported. Use `sort` instead. */
export enum EquipmentOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstallationDateAsc = 'installation_date_ASC',
  InstallationDateDesc = 'installation_date_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Equipment subscription payload */
export type EquipmentPayload = {
  mutation: MutationType;
  node?: Maybe<Equipment>;
  previousValues?: Maybe<Equipment>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EquipmentRelationFilter = {
  every?: InputMaybe<EquipmentFilter>;
  none?: InputMaybe<EquipmentFilter>;
  some?: InputMaybe<EquipmentFilter>;
};

export type EquipmentSort = {
  building_id?: InputMaybe<BuildingSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  installation_date?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Equipment subscription filter */
export type EquipmentSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EquipmentFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Equipment update input */
export type EquipmentUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Equipment update input */
export type EquipmentUpdateInput = {
  building_id?: InputMaybe<EquipmentBuilding_IdUpdateRelationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the equipment was installed. */
  installation_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Name of the equipment. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Type of the equipment. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings create input from Equipment */
export type Equipment_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords: BuildingsComplianceRecordsRelationInput;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency: BuildingsEnergyEfficiencyRelationInput;
  EnvironmentalData: BuildingsEnvironmentalDataRelationInput;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements: BuildingsImprovementsRelationInput;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits: BuildingsPermitsRelationInput;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from Equipment */
export type Equipment_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type Equipment_PermissionFilter = {
  AND?: InputMaybe<Array<Equipment_PermissionFilter>>;
  OR?: InputMaybe<Array<Equipment_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  installation_date?: InputMaybe<DateTimePredicate>;
  name?: InputMaybe<StringPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Equipment_PermissionRelationFilter = {
  every?: InputMaybe<Equipment_PermissionFilter>;
  none?: InputMaybe<Equipment_PermissionFilter>;
  some?: InputMaybe<Equipment_PermissionFilter>;
};

/** Facebook connection params */
export type FacebookOptions = {
  app_id: Scalars['String']['output'];
  app_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Facebook connection params input */
export type FacebookOptionsInput = {
  app_id: Scalars['String']['input'];
  app_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Field Data Features */
export type FieldDataFeatures = {
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type FieldSchemaFeatures = {
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum FieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type FieldTypeAttributes = DateFieldTypeAttributes | FileFieldTypeAttributes | GeoFieldTypeAttributes | MissingRelationFieldTypeAttributes | NumberFieldTypeAttributes | SmartFieldTypeAttributes | SwitchFieldTypeAttributes | TextFieldTypeAttributes | UuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type File = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** No longer supported. Use `downloadUrl` instead. */
  downloadStorageUrl?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported. Use `system.fileUploadSignInfo.AwsSignInfoResponse.fields` instead. */
  fields?: Maybe<Scalars['JSON']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  mods?: Maybe<Scalars['JSON']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  shareUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** No longer supported */
  uploadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported */
  uploaded?: Maybe<Scalars['Boolean']['output']>;
  users_avatar?: Maybe<UserListResponse>;
};


export type FileSettings_LandingPageImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileSettings_MenuBarLogoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileUsers_AvatarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Files create input */
export type FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files create many input */
export type FileCreateManyInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarManyRelationInput>;
};

/** Files delete input */
export type FileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes = {
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  downloadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  fields?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['Boolean']['input']>;
  filename?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['Boolean']['input']>;
  mods?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['Boolean']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  shareUrl?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  uploadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  uploaded?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileFilter = {
  AND?: InputMaybe<Array<FileFilter>>;
  OR?: InputMaybe<Array<FileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<SettingRelationFilter>;
  settings_menuBarLogo?: InputMaybe<SettingRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<UserRelationFilter>;
};

export type FileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  downloadUrl?: InputMaybe<Array<GroupByField>>;
  fields?: InputMaybe<Array<GroupByField>>;
  fileId?: InputMaybe<Array<GroupByField>>;
  filename?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  meta?: InputMaybe<Array<GroupByField>>;
  mods?: InputMaybe<Array<GroupByField>>;
  provider?: InputMaybe<Array<GroupByField>>;
  public?: InputMaybe<Array<GroupByField>>;
  settings_landingPageImage?: InputMaybe<SettingGroupByQuery>;
  settings_menuBarLogo?: InputMaybe<SettingGroupByQuery>;
  shareUrl?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  uploadUrl?: InputMaybe<Array<GroupByField>>;
  uploaded?: InputMaybe<Array<GroupByField>>;
  users_avatar?: InputMaybe<UserGroupByQuery>;
};

export type FileKeyFilter = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FileListResponse output */
export type FileListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<File>;
};

/** FileManyResponse output */
export type FileManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<File>;
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC'
}

/** Files subscription payload */
export type FilePayload = {
  mutation: MutationType;
  node?: Maybe<File>;
  previousValues?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FileSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  downloadUrl?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  shareUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploadUrl?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type FileStackSignInfoResponse = {
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

/** Files subscription filter */
export type FileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** Files update input */
export type FileUpdateByFilterInput = {
  downloadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  fileId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  filename?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  meta?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  mods?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  provider?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  public?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  shareUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploaded?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
};

/** Files update input */
export type FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type File_PermissionFilter = {
  AND?: InputMaybe<Array<File_PermissionFilter>>;
  OR?: InputMaybe<Array<File_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<Setting_PermissionRelationFilter>;
  settings_menuBarLogo?: InputMaybe<Setting_PermissionRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<User_PermissionRelationFilter>;
};

export type FilesSetting = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  filemanagername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  settings?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** FilesSettings create input */
export type FilesSettingCreateInput = {
  filemanagername: Scalars['String']['input'];
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings: Scalars['JSON']['input'];
};

/** FilesSettings create many input */
export type FilesSettingCreateManyInput = {
  filemanagername: Scalars['String']['input'];
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings: Scalars['JSON']['input'];
};

/** FilesSettings delete input */
export type FilesSettingDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FilesSettingFieldsPermissions create input */
export type FilesSettingFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  filemanagername?: InputMaybe<Scalars['Boolean']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilesSettingFilter = {
  AND?: InputMaybe<Array<FilesSettingFilter>>;
  OR?: InputMaybe<Array<FilesSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  filemanagername?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isEnabled?: InputMaybe<BoolPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type FilesSettingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FilesSettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FilesSettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  filemanagername?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  isEnabled?: InputMaybe<Array<GroupByField>>;
  settings?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type FilesSettingKeyFilter = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FilesSettingListResponse output */
export type FilesSettingListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<FilesSetting>;
};

/** FilesSettingManyResponse output */
export type FilesSettingManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FilesSetting>;
};

/** No longer supported. Use `sort` instead. */
export enum FilesSettingOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FilemanagernameAsc = 'filemanagername_ASC',
  FilemanagernameDesc = 'filemanagername_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsEnabledAsc = 'isEnabled_ASC',
  IsEnabledDesc = 'isEnabled_DESC',
  SettingsAsc = 'settings_ASC',
  SettingsDesc = 'settings_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** FilesSettings subscription payload */
export type FilesSettingPayload = {
  mutation: MutationType;
  node?: Maybe<FilesSetting>;
  previousValues?: Maybe<FilesSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FilesSettingSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  filemanagername?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isEnabled?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** FilesSettings subscription filter */
export type FilesSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FilesSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** FilesSettings update input */
export type FilesSettingUpdateByFilterInput = {
  filemanagername?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  isEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  settings?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
};

/** FilesSettings update input */
export type FilesSettingUpdateInput = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type FilesSetting_PermissionFilter = {
  AND?: InputMaybe<Array<FilesSetting_PermissionFilter>>;
  OR?: InputMaybe<Array<FilesSetting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  filemanagername?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isEnabled?: InputMaybe<BoolPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Avatar_UserUpdateInput>>>;
};

export type FloatPredicateHaving = {
  AND?: InputMaybe<Array<FloatPredicateHaving>>;
  OR?: InputMaybe<Array<FloatPredicateHaving>>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FrontendUtilizationAbResponse = {
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type FunctionInfo = {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoCheck */
export type FunctionInfoCheck = {
  version?: Maybe<Scalars['String']['output']>;
};

/** FunctionInfoFilter */
export type FunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<FunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** FunctionListResponse output */
export type FunctionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FunctionInfo>;
};

/** FunctionResolverInfo */
export type FunctionResolverInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type FunctionTaskInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum FunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes = {
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

/** Github connection params */
export type GithubOptions = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Github connection params input */
export type GithubOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Google connection params */
export type GoogleOptions = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Google connection params input */
export type GoogleOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput = {
  create?: InputMaybe<GraphQlCreateFileCustomInput>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type GroupByField = {
  as?: InputMaybe<Scalars['String']['input']>;
  fn?: InputMaybe<Array<InputMaybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  abs?: InputMaybe<Scalars['Boolean']['input']>;
  aggregate?: InputMaybe<AggregationFunctionType>;
  ascii?: InputMaybe<Scalars['Boolean']['input']>;
  bitLength?: InputMaybe<Scalars['Boolean']['input']>;
  ceil?: InputMaybe<Scalars['Boolean']['input']>;
  charLength?: InputMaybe<Scalars['Boolean']['input']>;
  crc32?: InputMaybe<Scalars['Boolean']['input']>;
  datePart?: InputMaybe<DatePartFunctionType>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  floor?: InputMaybe<Scalars['Boolean']['input']>;
  hex?: InputMaybe<Scalars['Boolean']['input']>;
  ifNull?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PatternFunctionArguments>;
  locate?: InputMaybe<LocateFunctionArguments>;
  lower?: InputMaybe<Scalars['Boolean']['input']>;
  lpad?: InputMaybe<StringPadFunctionArguments>;
  ltrim?: InputMaybe<Scalars['Boolean']['input']>;
  mod?: InputMaybe<Scalars['Int']['input']>;
  notLike?: InputMaybe<PatternFunctionArguments>;
  nullIf?: InputMaybe<Scalars['String']['input']>;
  replace?: InputMaybe<ReplaceFunctionArguments>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Int']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  rpad?: InputMaybe<StringPadFunctionArguments>;
  rtrim?: InputMaybe<Scalars['Boolean']['input']>;
  sign?: InputMaybe<Scalars['Boolean']['input']>;
  substring?: InputMaybe<SubstringFunctionArguments>;
  trim?: InputMaybe<TrimFunctionArguments>;
  truncate?: InputMaybe<Scalars['Int']['input']>;
  upper?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupByResponse = {
  AirQualityGroup: AirQualityListResponse;
  ApiTokenGroup: ApiTokenListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  BigInt?: Maybe<Scalars['BigInt']['output']>;
  Boolean?: Maybe<Scalars['Boolean']['output']>;
  BuildingGroup: BuildingListResponse;
  CertificationGroup: CertificationListResponse;
  ComplianceRecordGroup: ComplianceRecordListResponse;
  Date?: Maybe<Scalars['Date']['output']>;
  DateTime?: Maybe<Scalars['DateTime']['output']>;
  DocumentGroup: DocumentListResponse;
  EnergyEfficiencyGroup: EnergyEfficiencyListResponse;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  EnvironmentalDatumGroup: EnvironmentalDatumListResponse;
  EquipmentGroup: EquipmentListResponse;
  FileGroup: FileListResponse;
  FilesSettingGroup: FilesSettingListResponse;
  Float?: Maybe<Scalars['Float']['output']>;
  GroupIds?: Maybe<Array<Scalars['ID']['output']>>;
  ID?: Maybe<Scalars['ID']['output']>;
  ImprovementGroup: ImprovementListResponse;
  Int?: Maybe<Scalars['Int']['output']>;
  JSON?: Maybe<Scalars['JSON']['output']>;
  MaintenanceRecordGroup: MaintenanceRecordListResponse;
  NotificationGroup: NotificationListResponse;
  PermitGroup: PermitListResponse;
  ReportGroup: ReportListResponse;
  RoleGroup: RoleListResponse;
  SearchCriterionGroup: SearchCriterionListResponse;
  String?: Maybe<Scalars['String']['output']>;
  SubscriptionsAppGroup: SubscriptionsAppListResponse;
  UserGroup: UserListResponse;
  WorkOrderGroup: WorkOrderListResponse;
};


export type GroupByResponseAirQualityGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AirQualityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AirQualityGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AirQualityOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AirQualitySort>>;
};


export type GroupByResponseApiTokenGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type GroupByResponseAuthenticationProfileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type GroupByResponseBuildingGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BuildingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<BuildingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<BuildingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BuildingSort>>;
};


export type GroupByResponseCertificationGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CertificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<CertificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<CertificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CertificationSort>>;
};


export type GroupByResponseComplianceRecordGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ComplianceRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ComplianceRecordGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ComplianceRecordOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComplianceRecordSort>>;
};


export type GroupByResponseDocumentGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<DocumentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSort>>;
};


export type GroupByResponseEnergyEfficiencyGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnergyEfficiencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnergyEfficiencyGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnergyEfficiencyOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnergyEfficiencySort>>;
};


export type GroupByResponseEnvironmentVariableGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
};


export type GroupByResponseEnvironmentalDatumGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentalDatumFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentalDatumGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentalDatumOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentalDatumSort>>;
};


export type GroupByResponseEquipmentGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EquipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EquipmentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EquipmentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EquipmentSort>>;
};


export type GroupByResponseFileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
};


export type GroupByResponseFilesSettingGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilesSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FilesSettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FilesSettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FilesSettingSort>>;
};


export type GroupByResponseImprovementGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ImprovementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ImprovementGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ImprovementOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImprovementSort>>;
};


export type GroupByResponseMaintenanceRecordGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MaintenanceRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<MaintenanceRecordGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<MaintenanceRecordOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MaintenanceRecordSort>>;
};


export type GroupByResponseNotificationGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<NotificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSort>>;
};


export type GroupByResponsePermitGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PermitFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PermitGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PermitOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PermitSort>>;
};


export type GroupByResponseReportGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ReportGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ReportOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReportSort>>;
};


export type GroupByResponseRoleGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};


export type GroupByResponseSearchCriterionGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SearchCriterionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SearchCriterionGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SearchCriterionOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SearchCriterionSort>>;
};


export type GroupByResponseSubscriptionsAppGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubscriptionsAppFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SubscriptionsAppGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubscriptionsAppOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SubscriptionsAppSort>>;
};


export type GroupByResponseUserGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};


export type GroupByResponseWorkOrderGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<WorkOrderGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkOrderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkOrderSort>>;
};

export type GroupBySort = {
  alias: Scalars['String']['input'];
  direction: SortOrder;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String']['input'];
};

export type Having = {
  AND?: InputMaybe<Array<Having>>;
  OR?: InputMaybe<Array<Having>>;
  alias?: InputMaybe<Scalars['String']['input']>;
  bigint?: InputMaybe<BigIntPredicateHaving>;
  bool?: InputMaybe<BoolPredicateHaving>;
  date?: InputMaybe<DatePredicateHaving>;
  datetime?: InputMaybe<DateTimePredicateHaving>;
  float?: InputMaybe<FloatPredicateHaving>;
  id?: InputMaybe<IdPredicateHaving>;
  int?: InputMaybe<IntPredicateHaving>;
  string?: InputMaybe<StringPredicateHaving>;
};

export type IdPredicate = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type IdPredicateHaving = {
  AND?: InputMaybe<Array<IdPredicateHaving>>;
  OR?: InputMaybe<Array<IdPredicateHaving>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** ImportCSV */
export type ImportCsv = {
  data: ImportCsvData;
  tableId: Scalars['String']['input'];
};

export type ImportCsvData = {
  fields?: InputMaybe<Scalars['String']['input']>;
  hasHeader?: InputMaybe<Scalars['Boolean']['input']>;
  matchField?: InputMaybe<Scalars['String']['input']>;
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  tableFields?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

/** ImportedTable */
export type ImportedTable = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Records improvements made to the building. */
export type Improvement = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building where the improvement was made. */
  building_id?: Maybe<Building>;
  /** Cost of the improvement. */
  cost?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Date when the improvement was made. */
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Description of the improvement made. */
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Improvements create input */
export type ImprovementCreateInput = {
  building_id?: InputMaybe<ImprovementsBuilding_IdRelationInput>;
  /** Cost of the improvement. */
  cost?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the improvement was made. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the improvement made. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** Improvements create many input */
export type ImprovementCreateManyInput = {
  /** Cost of the improvement. */
  cost?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the improvement was made. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the improvement made. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** Improvements delete input */
export type ImprovementDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ImprovementFieldsPermissions create input */
export type ImprovementFieldsPermissions = {
  cost?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImprovementFilter = {
  AND?: InputMaybe<Array<ImprovementFilter>>;
  OR?: InputMaybe<Array<ImprovementFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  cost?: InputMaybe<IntPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  date?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ImprovementGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ImprovementGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ImprovementGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  cost?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  date?: InputMaybe<Array<GroupByField>>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ImprovementKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ImprovementListResponse output */
export type ImprovementListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Improvement>;
};

/** ImprovementManyResponse output */
export type ImprovementManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Improvement>;
};

/** No longer supported. Use `sort` instead. */
export enum ImprovementOrderBy {
  CostAsc = 'cost_ASC',
  CostDesc = 'cost_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Improvements subscription payload */
export type ImprovementPayload = {
  mutation: MutationType;
  node?: Maybe<Improvement>;
  previousValues?: Maybe<Improvement>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ImprovementRelationFilter = {
  every?: InputMaybe<ImprovementFilter>;
  none?: InputMaybe<ImprovementFilter>;
  some?: InputMaybe<ImprovementFilter>;
};

export type ImprovementSort = {
  building_id?: InputMaybe<BuildingSort>;
  cost?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Improvements subscription filter */
export type ImprovementSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ImprovementFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Improvements update input */
export type ImprovementUpdateByFilterInput = {
  cost?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Improvements update input */
export type ImprovementUpdateInput = {
  building_id?: InputMaybe<ImprovementsBuilding_IdUpdateRelationInput>;
  /** Cost of the improvement. */
  cost?: InputMaybe<Scalars['Int']['input']>;
  /** Date when the improvement was made. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the improvement made. */
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Improvement_PermissionFilter = {
  AND?: InputMaybe<Array<Improvement_PermissionFilter>>;
  OR?: InputMaybe<Array<Improvement_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  cost?: InputMaybe<IntPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  date?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Improvement_PermissionRelationFilter = {
  every?: InputMaybe<Improvement_PermissionFilter>;
  none?: InputMaybe<Improvement_PermissionFilter>;
  some?: InputMaybe<Improvement_PermissionFilter>;
};

/** Improvements relation input */
export type ImprovementsBuilding_IdRelationInput = {
  create?: InputMaybe<Improvements_BuildingCreateInput>;
};

/** Improvements relation input */
export type ImprovementsBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<Improvements_BuildingUpdateInput>;
};

/** Buildings create input from Improvements */
export type Improvements_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords: BuildingsComplianceRecordsRelationInput;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency: BuildingsEnergyEfficiencyRelationInput;
  EnvironmentalData: BuildingsEnvironmentalDataRelationInput;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from Improvements */
export type Improvements_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Inbox Events List Filter */
export type InboxEventsListFilter = {
  isCompleted?: InputMaybe<IntPredicate>;
};

/** Table Create Index Input */
export type IndexCreateInput = {
  columns: Array<TableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type IndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type IndexUpdateInput = {
  columns?: InputMaybe<Array<TableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

export type IntPredicate = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntPredicateHaving = {
  AND?: InputMaybe<Array<IntPredicateHaving>>;
  OR?: InputMaybe<Array<IntPredicateHaving>>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntrospectionQueryResponse = {
  url: Scalars['String']['output'];
};

export enum InvitationRoleEnum {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}

/** Invited By Name */
export type InvitedByName = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type InvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse = {
  responseData: Scalars['String']['output'];
};

/** IsSocialUser */
export type IsSocialUser = {
  email: Scalars['String']['input'];
};

export type IsSocialUserResponse = {
  isSocialUser?: Maybe<Scalars['Boolean']['output']>;
};

export type LocateFunctionArguments = {
  pos?: InputMaybe<Scalars['Int']['input']>;
  str: Scalars['String']['input'];
};

/** LoginResponse */
export type LoginResponse = {
  auth?: Maybe<Auth>;
  success?: Maybe<Scalars['Boolean']['output']>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

/** Records maintenance activities performed on the building. */
export type MaintenanceRecord = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building where maintenance was performed. */
  building_id?: Maybe<Building>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Date when the maintenance activity was performed. */
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Description of the maintenance activity. */
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** MaintenanceRecords create input */
export type MaintenanceRecordCreateInput = {
  building_id?: InputMaybe<MaintenanceRecordsBuilding_IdRelationInput>;
  /** Date when the maintenance activity was performed. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the maintenance activity. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** MaintenanceRecords create many input */
export type MaintenanceRecordCreateManyInput = {
  /** Date when the maintenance activity was performed. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the maintenance activity. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** MaintenanceRecords delete input */
export type MaintenanceRecordDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** MaintenanceRecordFieldsPermissions create input */
export type MaintenanceRecordFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MaintenanceRecordFilter = {
  AND?: InputMaybe<Array<MaintenanceRecordFilter>>;
  OR?: InputMaybe<Array<MaintenanceRecordFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  date?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type MaintenanceRecordGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: MaintenanceRecordGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type MaintenanceRecordGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  date?: InputMaybe<Array<GroupByField>>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type MaintenanceRecordKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** MaintenanceRecordListResponse output */
export type MaintenanceRecordListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<MaintenanceRecord>;
};

/** MaintenanceRecordManyResponse output */
export type MaintenanceRecordManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<MaintenanceRecord>;
};

/** No longer supported. Use `sort` instead. */
export enum MaintenanceRecordOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** MaintenanceRecords subscription payload */
export type MaintenanceRecordPayload = {
  mutation: MutationType;
  node?: Maybe<MaintenanceRecord>;
  previousValues?: Maybe<MaintenanceRecord>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MaintenanceRecordRelationFilter = {
  every?: InputMaybe<MaintenanceRecordFilter>;
  none?: InputMaybe<MaintenanceRecordFilter>;
  some?: InputMaybe<MaintenanceRecordFilter>;
};

export type MaintenanceRecordSort = {
  building_id?: InputMaybe<BuildingSort>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** MaintenanceRecords subscription filter */
export type MaintenanceRecordSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<MaintenanceRecordFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** MaintenanceRecords update input */
export type MaintenanceRecordUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** MaintenanceRecords update input */
export type MaintenanceRecordUpdateInput = {
  building_id?: InputMaybe<MaintenanceRecordsBuilding_IdUpdateRelationInput>;
  /** Date when the maintenance activity was performed. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of the maintenance activity. */
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MaintenanceRecord_PermissionFilter = {
  AND?: InputMaybe<Array<MaintenanceRecord_PermissionFilter>>;
  OR?: InputMaybe<Array<MaintenanceRecord_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  date?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type MaintenanceRecord_PermissionRelationFilter = {
  every?: InputMaybe<MaintenanceRecord_PermissionFilter>;
  none?: InputMaybe<MaintenanceRecord_PermissionFilter>;
  some?: InputMaybe<MaintenanceRecord_PermissionFilter>;
};

/** MaintenanceRecords relation input */
export type MaintenanceRecordsBuilding_IdRelationInput = {
  create?: InputMaybe<MaintenanceRecords_BuildingCreateInput>;
};

/** MaintenanceRecords relation input */
export type MaintenanceRecordsBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<MaintenanceRecords_BuildingUpdateInput>;
};

/** Buildings create input from MaintenanceRecords */
export type MaintenanceRecords_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords: BuildingsComplianceRecordsRelationInput;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency: BuildingsEnergyEfficiencyRelationInput;
  EnvironmentalData: BuildingsEnvironmentalDataRelationInput;
  Equipment: BuildingsEquipmentRelationInput;
  Improvements: BuildingsImprovementsRelationInput;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits: BuildingsPermitsRelationInput;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from MaintenanceRecords */
export type MaintenanceRecords_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** MissingRelation */
export type MissingRelation = {
  table: Scalars['String']['output'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes = {
  missingTable: Scalars['String']['output'];
};

export type Mutation = {
  ImportCSV?: Maybe<AsyncSession>;
  IsSocialUser?: Maybe<IsSocialUserResponse>;
  airQualityCreate: AirQuality;
  airQualityCreateMany: AirQualityManyResponse;
  airQualityDelete?: Maybe<SuccessResponse>;
  airQualityDeleteByFilter?: Maybe<SuccessResponse>;
  airQualityDestroy?: Maybe<SuccessResponse>;
  airQualityDestroyByFilter?: Maybe<SuccessResponse>;
  airQualityRestore: AirQuality;
  airQualityUpdate: AirQuality;
  airQualityUpdateByFilter: AirQualityManyResponse;
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse>;
  apiTokenDestroy?: Maybe<SuccessResponse>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse>;
  apiTokenRestore: ApiToken;
  apiTokenUpdate: ApiToken;
  apiTokenUpdateByFilter: ApiTokenManyResponse;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse>;
  authenticationProfileDestroy?: Maybe<SuccessResponse>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse>;
  authenticationProfileRestore: AuthenticationProfile;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse;
  authenticationSettingsUpdate: AuthenticationSetting;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  buildingCreate: Building;
  buildingCreateMany: BuildingManyResponse;
  buildingDelete?: Maybe<SuccessResponse>;
  buildingDeleteByFilter?: Maybe<SuccessResponse>;
  buildingDestroy?: Maybe<SuccessResponse>;
  buildingDestroyByFilter?: Maybe<SuccessResponse>;
  buildingRestore: Building;
  buildingUpdate: Building;
  buildingUpdateByFilter: BuildingManyResponse;
  certificationCreate: Certification;
  certificationCreateMany: CertificationManyResponse;
  certificationDelete?: Maybe<SuccessResponse>;
  certificationDeleteByFilter?: Maybe<SuccessResponse>;
  certificationDestroy?: Maybe<SuccessResponse>;
  certificationDestroyByFilter?: Maybe<SuccessResponse>;
  certificationRestore: Certification;
  certificationUpdate: Certification;
  certificationUpdateByFilter: CertificationManyResponse;
  complianceRecordCreate: ComplianceRecord;
  complianceRecordCreateMany: ComplianceRecordManyResponse;
  complianceRecordDelete?: Maybe<SuccessResponse>;
  complianceRecordDeleteByFilter?: Maybe<SuccessResponse>;
  complianceRecordDestroy?: Maybe<SuccessResponse>;
  complianceRecordDestroyByFilter?: Maybe<SuccessResponse>;
  complianceRecordRestore: ComplianceRecord;
  complianceRecordUpdate: ComplianceRecord;
  complianceRecordUpdateByFilter: ComplianceRecordManyResponse;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']['output']>;
  documentCreate: Document;
  documentCreateMany: DocumentManyResponse;
  documentDelete?: Maybe<SuccessResponse>;
  documentDeleteByFilter?: Maybe<SuccessResponse>;
  documentDestroy?: Maybe<SuccessResponse>;
  documentDestroyByFilter?: Maybe<SuccessResponse>;
  documentRestore: Document;
  documentUpdate: Document;
  documentUpdateByFilter: DocumentManyResponse;
  energyEfficiencyCreate: EnergyEfficiency;
  energyEfficiencyCreateMany: EnergyEfficiencyManyResponse;
  energyEfficiencyDelete?: Maybe<SuccessResponse>;
  energyEfficiencyDeleteByFilter?: Maybe<SuccessResponse>;
  energyEfficiencyDestroy?: Maybe<SuccessResponse>;
  energyEfficiencyDestroyByFilter?: Maybe<SuccessResponse>;
  energyEfficiencyRestore: EnergyEfficiency;
  energyEfficiencyUpdate: EnergyEfficiency;
  energyEfficiencyUpdateByFilter: EnergyEfficiencyManyResponse;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse>;
  environmentVariableDestroy?: Maybe<SuccessResponse>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse>;
  environmentVariableRestore: EnvironmentVariable;
  environmentVariableUpdate: EnvironmentVariable;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse;
  environmentalDatumCreate: EnvironmentalDatum;
  environmentalDatumCreateMany: EnvironmentalDatumManyResponse;
  environmentalDatumDelete?: Maybe<SuccessResponse>;
  environmentalDatumDeleteByFilter?: Maybe<SuccessResponse>;
  environmentalDatumDestroy?: Maybe<SuccessResponse>;
  environmentalDatumDestroyByFilter?: Maybe<SuccessResponse>;
  environmentalDatumRestore: EnvironmentalDatum;
  environmentalDatumUpdate: EnvironmentalDatum;
  environmentalDatumUpdateByFilter: EnvironmentalDatumManyResponse;
  equipmentCreate: Equipment;
  equipmentCreateMany: EquipmentManyResponse;
  equipmentDelete?: Maybe<SuccessResponse>;
  equipmentDeleteByFilter?: Maybe<SuccessResponse>;
  equipmentDestroy?: Maybe<SuccessResponse>;
  equipmentDestroyByFilter?: Maybe<SuccessResponse>;
  equipmentRestore: Equipment;
  equipmentUpdate: Equipment;
  equipmentUpdateByFilter: EquipmentManyResponse;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileDeleteByFilter?: Maybe<SuccessResponse>;
  fileDestroy?: Maybe<SuccessResponse>;
  fileDestroyByFilter?: Maybe<SuccessResponse>;
  fileRestore: File;
  fileUpdate: File;
  fileUpdateByFilter: FileManyResponse;
  filesSettingCreate: FilesSetting;
  filesSettingCreateMany: FilesSettingManyResponse;
  filesSettingDelete?: Maybe<SuccessResponse>;
  filesSettingDeleteByFilter?: Maybe<SuccessResponse>;
  filesSettingDestroy?: Maybe<SuccessResponse>;
  filesSettingDestroyByFilter?: Maybe<SuccessResponse>;
  filesSettingRestore: FilesSetting;
  filesSettingUpdate: FilesSetting;
  filesSettingUpdateByFilter: FilesSettingManyResponse;
  improvementCreate: Improvement;
  improvementCreateMany: ImprovementManyResponse;
  improvementDelete?: Maybe<SuccessResponse>;
  improvementDeleteByFilter?: Maybe<SuccessResponse>;
  improvementDestroy?: Maybe<SuccessResponse>;
  improvementDestroyByFilter?: Maybe<SuccessResponse>;
  improvementRestore: Improvement;
  improvementUpdate: Improvement;
  improvementUpdateByFilter: ImprovementManyResponse;
  indexCreate: TableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: TableIndex;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse>;
  maintenanceRecordCreate: MaintenanceRecord;
  maintenanceRecordCreateMany: MaintenanceRecordManyResponse;
  maintenanceRecordDelete?: Maybe<SuccessResponse>;
  maintenanceRecordDeleteByFilter?: Maybe<SuccessResponse>;
  maintenanceRecordDestroy?: Maybe<SuccessResponse>;
  maintenanceRecordDestroyByFilter?: Maybe<SuccessResponse>;
  maintenanceRecordRestore: MaintenanceRecord;
  maintenanceRecordUpdate: MaintenanceRecord;
  maintenanceRecordUpdateByFilter: MaintenanceRecordManyResponse;
  notificationCreate: Notification;
  notificationCreateMany: NotificationManyResponse;
  notificationDelete?: Maybe<SuccessResponse>;
  notificationDeleteByFilter?: Maybe<SuccessResponse>;
  notificationDestroy?: Maybe<SuccessResponse>;
  notificationDestroyByFilter?: Maybe<SuccessResponse>;
  notificationRestore: Notification;
  notificationUpdate: Notification;
  notificationUpdateByFilter: NotificationManyResponse;
  permitCreate: Permit;
  permitCreateMany: PermitManyResponse;
  permitDelete?: Maybe<SuccessResponse>;
  permitDeleteByFilter?: Maybe<SuccessResponse>;
  permitDestroy?: Maybe<SuccessResponse>;
  permitDestroyByFilter?: Maybe<SuccessResponse>;
  permitRestore: Permit;
  permitUpdate: Permit;
  permitUpdateByFilter: PermitManyResponse;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse;
  reportCreate: Report;
  reportCreateMany: ReportManyResponse;
  reportDelete?: Maybe<SuccessResponse>;
  reportDeleteByFilter?: Maybe<SuccessResponse>;
  reportDestroy?: Maybe<SuccessResponse>;
  reportDestroyByFilter?: Maybe<SuccessResponse>;
  reportRestore: Report;
  reportUpdate: Report;
  reportUpdateByFilter: ReportManyResponse;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleDeleteByFilter?: Maybe<SuccessResponse>;
  roleDestroy?: Maybe<SuccessResponse>;
  roleDestroyByFilter?: Maybe<SuccessResponse>;
  roleRestore: Role;
  roleUpdate: Role;
  roleUpdateByFilter: RoleManyResponse;
  searchCriterionCreate: SearchCriterion;
  searchCriterionCreateMany: SearchCriterionManyResponse;
  searchCriterionDelete?: Maybe<SuccessResponse>;
  searchCriterionDeleteByFilter?: Maybe<SuccessResponse>;
  searchCriterionDestroy?: Maybe<SuccessResponse>;
  searchCriterionDestroyByFilter?: Maybe<SuccessResponse>;
  searchCriterionRestore: SearchCriterion;
  searchCriterionUpdate: SearchCriterion;
  searchCriterionUpdateByFilter: SearchCriterionManyResponse;
  sendInvitationTo8base?: Maybe<SuccessResponse>;
  settingsUpdate: Setting;
  subscriptionsAppCreate: SubscriptionsApp;
  subscriptionsAppCreateMany: SubscriptionsAppManyResponse;
  subscriptionsAppDelete?: Maybe<SuccessResponse>;
  subscriptionsAppDeleteByFilter?: Maybe<SuccessResponse>;
  subscriptionsAppDestroy?: Maybe<SuccessResponse>;
  subscriptionsAppDestroyByFilter?: Maybe<SuccessResponse>;
  subscriptionsAppRestore: SubscriptionsApp;
  subscriptionsAppUpdate: SubscriptionsApp;
  subscriptionsAppUpdateByFilter: SubscriptionsAppManyResponse;
  system?: Maybe<SystemMutation>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table;
  userChangePassword?: Maybe<SuccessResponse>;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userDeleteByFilter?: Maybe<SuccessResponse>;
  userDestroy?: Maybe<SuccessResponse>;
  userDestroyByFilter?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userPasswordForgot?: Maybe<SuccessResponse>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse>;
  userRefreshToken?: Maybe<Auth>;
  userRestore: User;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userUpdateByFilter: UserManyResponse;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table;
  viewUpdate: Table;
  workOrderCreate: WorkOrder;
  workOrderCreateMany: WorkOrderManyResponse;
  workOrderDelete?: Maybe<SuccessResponse>;
  workOrderDeleteByFilter?: Maybe<SuccessResponse>;
  workOrderDestroy?: Maybe<SuccessResponse>;
  workOrderDestroyByFilter?: Maybe<SuccessResponse>;
  workOrderRestore: WorkOrder;
  workOrderUpdate: WorkOrder;
  workOrderUpdateByFilter: WorkOrderManyResponse;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
};


export type MutationImportCsvArgs = {
  data: ImportCsv;
};


export type MutationIsSocialUserArgs = {
  data: IsSocialUser;
};


export type MutationAirQualityCreateArgs = {
  data: AirQualityCreateInput;
};


export type MutationAirQualityCreateManyArgs = {
  data: Array<InputMaybe<AirQualityCreateManyInput>>;
};


export type MutationAirQualityDeleteArgs = {
  data?: InputMaybe<AirQualityDeleteInput>;
  filter?: InputMaybe<AirQualityKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAirQualityDeleteByFilterArgs = {
  filter: AirQualityFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAirQualityDestroyArgs = {
  filter?: InputMaybe<AirQualityKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAirQualityDestroyByFilterArgs = {
  filter: AirQualityFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAirQualityRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationAirQualityUpdateArgs = {
  data: AirQualityUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AirQualityKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAirQualityUpdateByFilterArgs = {
  data: AirQualityUpdateByFilterInput;
  filter?: InputMaybe<AirQualityFilter>;
};


export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};


export type MutationApiTokenDeleteArgs = {
  data?: InputMaybe<ApiTokenDeleteInput>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDeleteByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyArgs = {
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenUpdateByFilterArgs = {
  data: ApiTokenUpdateByFilterInput;
  filter?: InputMaybe<ApiTokenFilter>;
};


export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};


export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};


export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};


export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};


export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<InputMaybe<AuthenticationProfileCreateManyInput>>;
};


export type MutationAuthenticationProfileDeleteArgs = {
  data?: InputMaybe<AuthenticationProfileDeleteInput>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDeleteByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyArgs = {
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileUpdateByFilterArgs = {
  data: AuthenticationProfileUpdateByFilterInput;
  filter?: InputMaybe<AuthenticationProfileFilter>;
};


export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};


export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};


export type MutationBuildingCreateArgs = {
  data: BuildingCreateInput;
};


export type MutationBuildingCreateManyArgs = {
  data: Array<InputMaybe<BuildingCreateManyInput>>;
};


export type MutationBuildingDeleteArgs = {
  data?: InputMaybe<BuildingDeleteInput>;
  filter?: InputMaybe<BuildingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBuildingDeleteByFilterArgs = {
  filter: BuildingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBuildingDestroyArgs = {
  filter?: InputMaybe<BuildingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBuildingDestroyByFilterArgs = {
  filter: BuildingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBuildingRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationBuildingUpdateArgs = {
  data: BuildingUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<BuildingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBuildingUpdateByFilterArgs = {
  data: BuildingUpdateByFilterInput;
  filter?: InputMaybe<BuildingFilter>;
};


export type MutationCertificationCreateArgs = {
  data: CertificationCreateInput;
};


export type MutationCertificationCreateManyArgs = {
  data: Array<InputMaybe<CertificationCreateManyInput>>;
};


export type MutationCertificationDeleteArgs = {
  data?: InputMaybe<CertificationDeleteInput>;
  filter?: InputMaybe<CertificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCertificationDeleteByFilterArgs = {
  filter: CertificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCertificationDestroyArgs = {
  filter?: InputMaybe<CertificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCertificationDestroyByFilterArgs = {
  filter: CertificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCertificationRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationCertificationUpdateArgs = {
  data: CertificationUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CertificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCertificationUpdateByFilterArgs = {
  data: CertificationUpdateByFilterInput;
  filter?: InputMaybe<CertificationFilter>;
};


export type MutationComplianceRecordCreateArgs = {
  data: ComplianceRecordCreateInput;
};


export type MutationComplianceRecordCreateManyArgs = {
  data: Array<InputMaybe<ComplianceRecordCreateManyInput>>;
};


export type MutationComplianceRecordDeleteArgs = {
  data?: InputMaybe<ComplianceRecordDeleteInput>;
  filter?: InputMaybe<ComplianceRecordKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationComplianceRecordDeleteByFilterArgs = {
  filter: ComplianceRecordFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationComplianceRecordDestroyArgs = {
  filter?: InputMaybe<ComplianceRecordKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationComplianceRecordDestroyByFilterArgs = {
  filter: ComplianceRecordFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationComplianceRecordRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationComplianceRecordUpdateArgs = {
  data: ComplianceRecordUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ComplianceRecordKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationComplianceRecordUpdateByFilterArgs = {
  data: ComplianceRecordUpdateByFilterInput;
  filter?: InputMaybe<ComplianceRecordFilter>;
};


export type MutationDeployArgs = {
  data?: InputMaybe<DeployingBuildInput>;
};


export type MutationDocumentCreateArgs = {
  data: DocumentCreateInput;
};


export type MutationDocumentCreateManyArgs = {
  data: Array<InputMaybe<DocumentCreateManyInput>>;
};


export type MutationDocumentDeleteArgs = {
  data?: InputMaybe<DocumentDeleteInput>;
  filter?: InputMaybe<DocumentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDocumentDeleteByFilterArgs = {
  filter: DocumentFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDocumentDestroyArgs = {
  filter?: InputMaybe<DocumentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDocumentDestroyByFilterArgs = {
  filter: DocumentFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDocumentRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationDocumentUpdateArgs = {
  data: DocumentUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DocumentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDocumentUpdateByFilterArgs = {
  data: DocumentUpdateByFilterInput;
  filter?: InputMaybe<DocumentFilter>;
};


export type MutationEnergyEfficiencyCreateArgs = {
  data: EnergyEfficiencyCreateInput;
};


export type MutationEnergyEfficiencyCreateManyArgs = {
  data: Array<InputMaybe<EnergyEfficiencyCreateManyInput>>;
};


export type MutationEnergyEfficiencyDeleteArgs = {
  data?: InputMaybe<EnergyEfficiencyDeleteInput>;
  filter?: InputMaybe<EnergyEfficiencyKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnergyEfficiencyDeleteByFilterArgs = {
  filter: EnergyEfficiencyFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnergyEfficiencyDestroyArgs = {
  filter?: InputMaybe<EnergyEfficiencyKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnergyEfficiencyDestroyByFilterArgs = {
  filter: EnergyEfficiencyFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnergyEfficiencyRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnergyEfficiencyUpdateArgs = {
  data: EnergyEfficiencyUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EnergyEfficiencyKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnergyEfficiencyUpdateByFilterArgs = {
  data: EnergyEfficiencyUpdateByFilterInput;
  filter?: InputMaybe<EnergyEfficiencyFilter>;
};


export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};


export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<InputMaybe<EnvironmentVariableCreateManyInput>>;
};


export type MutationEnvironmentVariableDeleteArgs = {
  data?: InputMaybe<EnvironmentVariableDeleteInput>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDeleteByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyArgs = {
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableUpdateByFilterArgs = {
  data: EnvironmentVariableUpdateByFilterInput;
  filter?: InputMaybe<EnvironmentVariableFilter>;
};


export type MutationEnvironmentalDatumCreateArgs = {
  data: EnvironmentalDatumCreateInput;
};


export type MutationEnvironmentalDatumCreateManyArgs = {
  data: Array<InputMaybe<EnvironmentalDatumCreateManyInput>>;
};


export type MutationEnvironmentalDatumDeleteArgs = {
  data?: InputMaybe<EnvironmentalDatumDeleteInput>;
  filter?: InputMaybe<EnvironmentalDatumKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentalDatumDeleteByFilterArgs = {
  filter: EnvironmentalDatumFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentalDatumDestroyArgs = {
  filter?: InputMaybe<EnvironmentalDatumKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentalDatumDestroyByFilterArgs = {
  filter: EnvironmentalDatumFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentalDatumRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnvironmentalDatumUpdateArgs = {
  data: EnvironmentalDatumUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EnvironmentalDatumKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentalDatumUpdateByFilterArgs = {
  data: EnvironmentalDatumUpdateByFilterInput;
  filter?: InputMaybe<EnvironmentalDatumFilter>;
};


export type MutationEquipmentCreateArgs = {
  data: EquipmentCreateInput;
};


export type MutationEquipmentCreateManyArgs = {
  data: Array<InputMaybe<EquipmentCreateManyInput>>;
};


export type MutationEquipmentDeleteArgs = {
  data?: InputMaybe<EquipmentDeleteInput>;
  filter?: InputMaybe<EquipmentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEquipmentDeleteByFilterArgs = {
  filter: EquipmentFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEquipmentDestroyArgs = {
  filter?: InputMaybe<EquipmentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEquipmentDestroyByFilterArgs = {
  filter: EquipmentFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEquipmentRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEquipmentUpdateArgs = {
  data: EquipmentUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EquipmentKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEquipmentUpdateByFilterArgs = {
  data: EquipmentUpdateByFilterInput;
  filter?: InputMaybe<EquipmentFilter>;
};


export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};


export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};


export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};


export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};


export type MutationFileCreateArgs = {
  data: FileCreateInput;
};


export type MutationFileCreateManyArgs = {
  data: Array<InputMaybe<FileCreateManyInput>>;
};


export type MutationFileDeleteArgs = {
  data?: InputMaybe<FileDeleteInput>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDeleteByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyArgs = {
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileUpdateByFilterArgs = {
  data: FileUpdateByFilterInput;
  filter?: InputMaybe<FileFilter>;
};


export type MutationFilesSettingCreateArgs = {
  data: FilesSettingCreateInput;
};


export type MutationFilesSettingCreateManyArgs = {
  data: Array<InputMaybe<FilesSettingCreateManyInput>>;
};


export type MutationFilesSettingDeleteArgs = {
  data?: InputMaybe<FilesSettingDeleteInput>;
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDeleteByFilterArgs = {
  filter: FilesSettingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDestroyArgs = {
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDestroyByFilterArgs = {
  filter: FilesSettingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationFilesSettingUpdateArgs = {
  data: FilesSettingUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingUpdateByFilterArgs = {
  data: FilesSettingUpdateByFilterInput;
  filter?: InputMaybe<FilesSettingFilter>;
};


export type MutationImprovementCreateArgs = {
  data: ImprovementCreateInput;
};


export type MutationImprovementCreateManyArgs = {
  data: Array<InputMaybe<ImprovementCreateManyInput>>;
};


export type MutationImprovementDeleteArgs = {
  data?: InputMaybe<ImprovementDeleteInput>;
  filter?: InputMaybe<ImprovementKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationImprovementDeleteByFilterArgs = {
  filter: ImprovementFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationImprovementDestroyArgs = {
  filter?: InputMaybe<ImprovementKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationImprovementDestroyByFilterArgs = {
  filter: ImprovementFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationImprovementRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationImprovementUpdateArgs = {
  data: ImprovementUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ImprovementKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationImprovementUpdateByFilterArgs = {
  data: ImprovementUpdateByFilterInput;
  filter?: InputMaybe<ImprovementFilter>;
};


export type MutationIndexCreateArgs = {
  data: IndexCreateInput;
};


export type MutationIndexDeleteArgs = {
  data: IndexDeleteInput;
};


export type MutationIndexUpdateArgs = {
  data: IndexUpdateInput;
};


export type MutationInvokeArgs = {
  data?: InputMaybe<InvokeData>;
};


export type MutationMaintenanceRecordCreateArgs = {
  data: MaintenanceRecordCreateInput;
};


export type MutationMaintenanceRecordCreateManyArgs = {
  data: Array<InputMaybe<MaintenanceRecordCreateManyInput>>;
};


export type MutationMaintenanceRecordDeleteArgs = {
  data?: InputMaybe<MaintenanceRecordDeleteInput>;
  filter?: InputMaybe<MaintenanceRecordKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationMaintenanceRecordDeleteByFilterArgs = {
  filter: MaintenanceRecordFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationMaintenanceRecordDestroyArgs = {
  filter?: InputMaybe<MaintenanceRecordKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationMaintenanceRecordDestroyByFilterArgs = {
  filter: MaintenanceRecordFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationMaintenanceRecordRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationMaintenanceRecordUpdateArgs = {
  data: MaintenanceRecordUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<MaintenanceRecordKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationMaintenanceRecordUpdateByFilterArgs = {
  data: MaintenanceRecordUpdateByFilterInput;
  filter?: InputMaybe<MaintenanceRecordFilter>;
};


export type MutationNotificationCreateArgs = {
  data: NotificationCreateInput;
};


export type MutationNotificationCreateManyArgs = {
  data: Array<InputMaybe<NotificationCreateManyInput>>;
};


export type MutationNotificationDeleteArgs = {
  data?: InputMaybe<NotificationDeleteInput>;
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDeleteByFilterArgs = {
  filter: NotificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDestroyArgs = {
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDestroyByFilterArgs = {
  filter: NotificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationUpdateArgs = {
  data: NotificationUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationUpdateByFilterArgs = {
  data: NotificationUpdateByFilterInput;
  filter?: InputMaybe<NotificationFilter>;
};


export type MutationPermitCreateArgs = {
  data: PermitCreateInput;
};


export type MutationPermitCreateManyArgs = {
  data: Array<InputMaybe<PermitCreateManyInput>>;
};


export type MutationPermitDeleteArgs = {
  data?: InputMaybe<PermitDeleteInput>;
  filter?: InputMaybe<PermitKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPermitDeleteByFilterArgs = {
  filter: PermitFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPermitDestroyArgs = {
  filter?: InputMaybe<PermitKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPermitDestroyByFilterArgs = {
  filter: PermitFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPermitRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationPermitUpdateArgs = {
  data: PermitUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PermitKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPermitUpdateByFilterArgs = {
  data: PermitUpdateByFilterInput;
  filter?: InputMaybe<PermitFilter>;
};


export type MutationReportCreateArgs = {
  data: ReportCreateInput;
};


export type MutationReportCreateManyArgs = {
  data: Array<InputMaybe<ReportCreateManyInput>>;
};


export type MutationReportDeleteArgs = {
  data?: InputMaybe<ReportDeleteInput>;
  filter?: InputMaybe<ReportKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReportDeleteByFilterArgs = {
  filter: ReportFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReportDestroyArgs = {
  filter?: InputMaybe<ReportKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReportDestroyByFilterArgs = {
  filter: ReportFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReportRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationReportUpdateArgs = {
  data: ReportUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ReportKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReportUpdateByFilterArgs = {
  data: ReportUpdateByFilterInput;
  filter?: InputMaybe<ReportFilter>;
};


export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};


export type MutationRoleCreateManyArgs = {
  data: Array<InputMaybe<RoleCreateManyInput>>;
};


export type MutationRoleDeleteArgs = {
  data?: InputMaybe<RoleDeleteInput>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDeleteByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyArgs = {
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleUpdateByFilterArgs = {
  data: RoleUpdateByFilterInput;
  filter?: InputMaybe<RoleFilter>;
};


export type MutationSearchCriterionCreateArgs = {
  data: SearchCriterionCreateInput;
};


export type MutationSearchCriterionCreateManyArgs = {
  data: Array<InputMaybe<SearchCriterionCreateManyInput>>;
};


export type MutationSearchCriterionDeleteArgs = {
  data?: InputMaybe<SearchCriterionDeleteInput>;
  filter?: InputMaybe<SearchCriterionKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSearchCriterionDeleteByFilterArgs = {
  filter: SearchCriterionFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSearchCriterionDestroyArgs = {
  filter?: InputMaybe<SearchCriterionKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSearchCriterionDestroyByFilterArgs = {
  filter: SearchCriterionFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSearchCriterionRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationSearchCriterionUpdateArgs = {
  data: SearchCriterionUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SearchCriterionKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSearchCriterionUpdateByFilterArgs = {
  data: SearchCriterionUpdateByFilterInput;
  filter?: InputMaybe<SearchCriterionFilter>;
};


export type MutationSendInvitationTo8baseArgs = {
  inviteEmail: Scalars['String']['input'];
};


export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};


export type MutationSubscriptionsAppCreateArgs = {
  data: SubscriptionsAppCreateInput;
};


export type MutationSubscriptionsAppCreateManyArgs = {
  data: Array<InputMaybe<SubscriptionsAppCreateManyInput>>;
};


export type MutationSubscriptionsAppDeleteArgs = {
  data?: InputMaybe<SubscriptionsAppDeleteInput>;
  filter?: InputMaybe<SubscriptionsAppKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSubscriptionsAppDeleteByFilterArgs = {
  filter: SubscriptionsAppFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSubscriptionsAppDestroyArgs = {
  filter?: InputMaybe<SubscriptionsAppKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSubscriptionsAppDestroyByFilterArgs = {
  filter: SubscriptionsAppFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSubscriptionsAppRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationSubscriptionsAppUpdateArgs = {
  data: SubscriptionsAppUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SubscriptionsAppKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSubscriptionsAppUpdateByFilterArgs = {
  data: SubscriptionsAppUpdateByFilterInput;
  filter?: InputMaybe<SubscriptionsAppFilter>;
};


export type MutationTableCreateArgs = {
  data: TableCreateInput;
};


export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};


export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};


export type MutationUserChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUserCreateArgs = {
  data: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  data: Array<InputMaybe<UserCreateManyInput>>;
};


export type MutationUserDeleteArgs = {
  data?: InputMaybe<UserDeleteInput>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDeleteByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyArgs = {
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserLoginArgs = {
  data: UserLoginInput;
};


export type MutationUserPasswordForgotArgs = {
  data: PasswordForgotInput;
};


export type MutationUserPasswordForgotConfirmArgs = {
  data: PasswordForgotConfirmInput;
};


export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};


export type MutationUserRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserSignUpArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};


export type MutationUserSignUpWithPasswordArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
  user: UserCreateInput;
};


export type MutationUserSignUpWithTokenArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserUpdateByFilterArgs = {
  data: UserUpdateByFilterInput;
  filter?: InputMaybe<UserFilter>;
};


export type MutationUserVerificationEmailResendArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  data: VerificationEmailResendInput;
};


export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};


export type MutationViewUpdateArgs = {
  data: ViewUpdateInput;
};


export type MutationWorkOrderCreateArgs = {
  data: WorkOrderCreateInput;
};


export type MutationWorkOrderCreateManyArgs = {
  data: Array<InputMaybe<WorkOrderCreateManyInput>>;
};


export type MutationWorkOrderDeleteArgs = {
  data?: InputMaybe<WorkOrderDeleteInput>;
  filter?: InputMaybe<WorkOrderKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkOrderDeleteByFilterArgs = {
  filter: WorkOrderFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkOrderDestroyArgs = {
  filter?: InputMaybe<WorkOrderKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkOrderDestroyByFilterArgs = {
  filter: WorkOrderFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkOrderRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationWorkOrderUpdateArgs = {
  data: WorkOrderUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WorkOrderKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkOrderUpdateByFilterArgs = {
  data: WorkOrderUpdateByFilterInput;
  filter?: InputMaybe<WorkOrderFilter>;
};


export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};


export type MutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};

export enum MutationType {
  Create = 'create',
  Delete = 'delete',
  Destroy = 'destroy',
  Update = 'update'
}

/** Stores notifications sent to users regarding compliance deadlines, maintenance tasks, and updates. */
export type Notification = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Indicates if the notification has been read. */
  is_read?: Maybe<Scalars['Boolean']['output']>;
  /** The notification message content. */
  message?: Maybe<Scalars['String']['output']>;
  /** Type of the notification (e.g., compliance, maintenance, update). */
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Reference to the user who received the notification. */
  user_id?: Maybe<User>;
};

/** Notifications create input */
export type NotificationCreateInput = {
  /** Indicates if the notification has been read. */
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  /** The notification message content. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Type of the notification (e.g., compliance, maintenance, update). */
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<NotificationsUser_IdRelationInput>;
};

/** Notifications create many input */
export type NotificationCreateManyInput = {
  /** Indicates if the notification has been read. */
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  /** The notification message content. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Type of the notification (e.g., compliance, maintenance, update). */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Notifications delete input */
export type NotificationDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** NotificationFieldsPermissions create input */
export type NotificationFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationFilter = {
  AND?: InputMaybe<Array<NotificationFilter>>;
  OR?: InputMaybe<Array<NotificationFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  is_read?: InputMaybe<BoolPredicate>;
  message?: InputMaybe<StringPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<UserFilter>;
};

export type NotificationGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: NotificationGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type NotificationGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  is_read?: InputMaybe<Array<GroupByField>>;
  message?: InputMaybe<Array<GroupByField>>;
  type?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  user_id?: InputMaybe<UserGroupByQuery>;
};

export type NotificationKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** NotificationListResponse output */
export type NotificationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Notification>;
};

/** NotificationManyResponse output */
export type NotificationManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Notification>;
};

/** No longer supported. Use `sort` instead. */
export enum NotificationOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsReadAsc = 'is_read_ASC',
  IsReadDesc = 'is_read_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Notifications subscription payload */
export type NotificationPayload = {
  mutation: MutationType;
  node?: Maybe<Notification>;
  previousValues?: Maybe<Notification>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type NotificationRelationFilter = {
  every?: InputMaybe<NotificationFilter>;
  none?: InputMaybe<NotificationFilter>;
  some?: InputMaybe<NotificationFilter>;
};

export type NotificationSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_read?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<UserSort>;
};

export enum NotificationStatusType {
  Done = 'done'
}

/** Notifications subscription filter */
export type NotificationSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<NotificationFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Notifications update input */
export type NotificationUpdateByFilterInput = {
  is_read?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  message?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Notifications update input */
export type NotificationUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Indicates if the notification has been read. */
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  /** The notification message content. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Type of the notification (e.g., compliance, maintenance, update). */
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<NotificationsUser_IdUpdateRelationInput>;
};

export type Notification_PermissionFilter = {
  AND?: InputMaybe<Array<Notification_PermissionFilter>>;
  OR?: InputMaybe<Array<Notification_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  is_read?: InputMaybe<BoolPredicate>;
  message?: InputMaybe<StringPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<User_PermissionFilter>;
};

export type Notification_PermissionRelationFilter = {
  every?: InputMaybe<Notification_PermissionFilter>;
  none?: InputMaybe<Notification_PermissionFilter>;
  some?: InputMaybe<Notification_PermissionFilter>;
};

/** Notifications relation input */
export type NotificationsUser_IdRelationInput = {
  create?: InputMaybe<Notifications_UserCreateInput>;
};

/** Notifications relation input */
export type NotificationsUser_IdUpdateRelationInput = {
  update?: InputMaybe<Notifications_UserUpdateInput>;
};

/** Users create input from Notifications */
export type Notifications_UserCreateInput = {
  Notifications?: InputMaybe<UsersNotificationsRelationInput>;
  Reports: UsersReportsRelationInput;
  SearchCriteria: UsersSearchCriteriaRelationInput;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from Notifications */
export type Notifications_UserUpdateInput = {
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Reports?: InputMaybe<UsersReportsUpdateRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaUpdateRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsUpdateRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Number Field Attributes */
export type NumberFieldTypeAttributes = {
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type OrganizationUpgradeResponse = {
  organizationId: Scalars['String']['output'];
};

export type OrganizationUserInvitationResponse = {
  invitationId: Scalars['String']['output'];
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput = {
  authProfileId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

/** PasswordForgotInput */
export type PasswordForgotInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type PatternFunctionArguments = {
  escape?: InputMaybe<Scalars['String']['input']>;
  pattern: Scalars['String']['input'];
};

export type Permission = {
  _description?: Maybe<Scalars['String']['output']>;
  appId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionFilter = {
  AND?: InputMaybe<Array<PermissionFilter>>;
  OR?: InputMaybe<Array<PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<RoleFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PermissionGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  appId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  permission?: InputMaybe<Array<GroupByField>>;
  resource?: InputMaybe<Array<GroupByField>>;
  resourceType?: InputMaybe<Array<GroupByField>>;
  role?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** Permission Filter */
export type PermissionInputFilter = {
  action?: InputMaybe<Scalars['String']['input']>;
  applicationName?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<PermissionResourceTypeEnum>;
};

/** PermissionListResponse output */
export type PermissionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Permission>;
};

/** Permissions subscription payload */
export type PermissionPayload = {
  mutation: MutationType;
  node?: Maybe<Permission>;
  previousValues?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermissionRelationFilter = {
  every?: InputMaybe<PermissionFilter>;
  none?: InputMaybe<PermissionFilter>;
  some?: InputMaybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Custom = 'custom',
  Data = 'data'
}

/** Permissions subscription filter */
export type PermissionSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PermissionFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

export type Permission_PermissionFilter = {
  AND?: InputMaybe<Array<Permission_PermissionFilter>>;
  OR?: InputMaybe<Array<Permission_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<Role_PermissionFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Permission_PermissionRelationFilter = {
  every?: InputMaybe<Permission_PermissionFilter>;
  none?: InputMaybe<Permission_PermissionFilter>;
  some?: InputMaybe<Permission_PermissionFilter>;
};

/** custom permissions input */
export type PermissionsCustom = {
  data?: InputMaybe<PermissionsCustomData>;
  logic?: InputMaybe<PermissionsCustomLogic>;
  settings?: InputMaybe<PermissionsCustomSettings>;
  users?: InputMaybe<PermissionsCustomUsers>;
};

export type PermissionsCustomData = {
  schemaManagement?: InputMaybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: InputMaybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogic = {
  deploy?: InputMaybe<PermissionsCustomLogicDeploy>;
  invoke?: InputMaybe<PermissionsCustomLogicInvoke>;
  logs?: InputMaybe<PermissionsCustomLogicLogs>;
  view?: InputMaybe<PermissionsCustomLogicView>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: InputMaybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: InputMaybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean']['input'];
};

/** Schema tables permissions input */
export type PermissionsData = {
  AirQuality?: InputMaybe<PermissionsDataAirQuality>;
  Buildings?: InputMaybe<PermissionsDataBuildings>;
  Certifications?: InputMaybe<PermissionsDataCertifications>;
  ComplianceRecords?: InputMaybe<PermissionsDataComplianceRecords>;
  Documents?: InputMaybe<PermissionsDataDocuments>;
  EnergyEfficiency?: InputMaybe<PermissionsDataEnergyEfficiency>;
  EnvironmentalData?: InputMaybe<PermissionsDataEnvironmentalData>;
  Equipment?: InputMaybe<PermissionsDataEquipment>;
  Files?: InputMaybe<PermissionsDataFiles>;
  FilesSettings?: InputMaybe<PermissionsDataFilesSettings>;
  Improvements?: InputMaybe<PermissionsDataImprovements>;
  MaintenanceRecords?: InputMaybe<PermissionsDataMaintenanceRecords>;
  Notifications?: InputMaybe<PermissionsDataNotifications>;
  Permits?: InputMaybe<PermissionsDataPermits>;
  Reports?: InputMaybe<PermissionsDataReports>;
  Roles?: InputMaybe<PermissionsDataRoles>;
  SearchCriteria?: InputMaybe<PermissionsDataSearchCriteria>;
  SubscriptionsApps?: InputMaybe<PermissionsDataSubscriptionsApps>;
  Users?: InputMaybe<PermissionsDataUsers>;
  WorkOrders?: InputMaybe<PermissionsDataWorkOrders>;
};

export type PermissionsDataAirQuality = {
  create?: InputMaybe<PermissionsDataAirQualityCreate>;
  delete?: InputMaybe<PermissionsDataAirQualityDelete>;
  destroy?: InputMaybe<PermissionsDataAirQualityDestroy>;
  read?: InputMaybe<PermissionsDataAirQualityRead>;
  update?: InputMaybe<PermissionsDataAirQualityUpdate>;
};

export type PermissionsDataAirQualityCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataAirQualityDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataAirQualityDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataAirQualityRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<AirQualityFieldsPermissions>;
  filter?: InputMaybe<AirQuality_PermissionFilter>;
};

export type PermissionsDataAirQualityUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<AirQualityFieldsPermissions>;
  filter?: InputMaybe<AirQuality_PermissionFilter>;
};

export type PermissionsDataBuildings = {
  create?: InputMaybe<PermissionsDataBuildingsCreate>;
  delete?: InputMaybe<PermissionsDataBuildingsDelete>;
  destroy?: InputMaybe<PermissionsDataBuildingsDestroy>;
  read?: InputMaybe<PermissionsDataBuildingsRead>;
  update?: InputMaybe<PermissionsDataBuildingsUpdate>;
};

export type PermissionsDataBuildingsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataBuildingsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataBuildingsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataBuildingsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<BuildingFieldsPermissions>;
  filter?: InputMaybe<Building_PermissionFilter>;
};

export type PermissionsDataBuildingsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<BuildingFieldsPermissions>;
  filter?: InputMaybe<Building_PermissionFilter>;
};

export type PermissionsDataCertifications = {
  create?: InputMaybe<PermissionsDataCertificationsCreate>;
  delete?: InputMaybe<PermissionsDataCertificationsDelete>;
  destroy?: InputMaybe<PermissionsDataCertificationsDestroy>;
  read?: InputMaybe<PermissionsDataCertificationsRead>;
  update?: InputMaybe<PermissionsDataCertificationsUpdate>;
};

export type PermissionsDataCertificationsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataCertificationsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataCertificationsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataCertificationsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<CertificationFieldsPermissions>;
  filter?: InputMaybe<Certification_PermissionFilter>;
};

export type PermissionsDataCertificationsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<CertificationFieldsPermissions>;
  filter?: InputMaybe<Certification_PermissionFilter>;
};

export type PermissionsDataComplianceRecords = {
  create?: InputMaybe<PermissionsDataComplianceRecordsCreate>;
  delete?: InputMaybe<PermissionsDataComplianceRecordsDelete>;
  destroy?: InputMaybe<PermissionsDataComplianceRecordsDestroy>;
  read?: InputMaybe<PermissionsDataComplianceRecordsRead>;
  update?: InputMaybe<PermissionsDataComplianceRecordsUpdate>;
};

export type PermissionsDataComplianceRecordsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataComplianceRecordsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataComplianceRecordsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataComplianceRecordsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ComplianceRecordFieldsPermissions>;
  filter?: InputMaybe<ComplianceRecord_PermissionFilter>;
};

export type PermissionsDataComplianceRecordsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ComplianceRecordFieldsPermissions>;
  filter?: InputMaybe<ComplianceRecord_PermissionFilter>;
};

export type PermissionsDataDocuments = {
  create?: InputMaybe<PermissionsDataDocumentsCreate>;
  delete?: InputMaybe<PermissionsDataDocumentsDelete>;
  destroy?: InputMaybe<PermissionsDataDocumentsDestroy>;
  read?: InputMaybe<PermissionsDataDocumentsRead>;
  update?: InputMaybe<PermissionsDataDocumentsUpdate>;
};

export type PermissionsDataDocumentsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataDocumentsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataDocumentsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataDocumentsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<DocumentFieldsPermissions>;
  filter?: InputMaybe<Document_PermissionFilter>;
};

export type PermissionsDataDocumentsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<DocumentFieldsPermissions>;
  filter?: InputMaybe<Document_PermissionFilter>;
};

export type PermissionsDataEnergyEfficiency = {
  create?: InputMaybe<PermissionsDataEnergyEfficiencyCreate>;
  delete?: InputMaybe<PermissionsDataEnergyEfficiencyDelete>;
  destroy?: InputMaybe<PermissionsDataEnergyEfficiencyDestroy>;
  read?: InputMaybe<PermissionsDataEnergyEfficiencyRead>;
  update?: InputMaybe<PermissionsDataEnergyEfficiencyUpdate>;
};

export type PermissionsDataEnergyEfficiencyCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEnergyEfficiencyDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataEnergyEfficiencyDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEnergyEfficiencyRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EnergyEfficiencyFieldsPermissions>;
  filter?: InputMaybe<EnergyEfficiency_PermissionFilter>;
};

export type PermissionsDataEnergyEfficiencyUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EnergyEfficiencyFieldsPermissions>;
  filter?: InputMaybe<EnergyEfficiency_PermissionFilter>;
};

export type PermissionsDataEnvironmentalData = {
  create?: InputMaybe<PermissionsDataEnvironmentalDataCreate>;
  delete?: InputMaybe<PermissionsDataEnvironmentalDataDelete>;
  destroy?: InputMaybe<PermissionsDataEnvironmentalDataDestroy>;
  read?: InputMaybe<PermissionsDataEnvironmentalDataRead>;
  update?: InputMaybe<PermissionsDataEnvironmentalDataUpdate>;
};

export type PermissionsDataEnvironmentalDataCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEnvironmentalDataDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataEnvironmentalDataDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEnvironmentalDataRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EnvironmentalDatumFieldsPermissions>;
  filter?: InputMaybe<EnvironmentalDatum_PermissionFilter>;
};

export type PermissionsDataEnvironmentalDataUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EnvironmentalDatumFieldsPermissions>;
  filter?: InputMaybe<EnvironmentalDatum_PermissionFilter>;
};

export type PermissionsDataEquipment = {
  create?: InputMaybe<PermissionsDataEquipmentCreate>;
  delete?: InputMaybe<PermissionsDataEquipmentDelete>;
  destroy?: InputMaybe<PermissionsDataEquipmentDestroy>;
  read?: InputMaybe<PermissionsDataEquipmentRead>;
  update?: InputMaybe<PermissionsDataEquipmentUpdate>;
};

export type PermissionsDataEquipmentCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEquipmentDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataEquipmentDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEquipmentRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EquipmentFieldsPermissions>;
  filter?: InputMaybe<Equipment_PermissionFilter>;
};

export type PermissionsDataEquipmentUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EquipmentFieldsPermissions>;
  filter?: InputMaybe<Equipment_PermissionFilter>;
};

export type PermissionsDataFiles = {
  create?: InputMaybe<PermissionsDataFilesCreate>;
  delete?: InputMaybe<PermissionsDataFilesDelete>;
  destroy?: InputMaybe<PermissionsDataFilesDestroy>;
  read?: InputMaybe<PermissionsDataFilesRead>;
  update?: InputMaybe<PermissionsDataFilesUpdate>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataFilesSettings = {
  create?: InputMaybe<PermissionsDataFilesSettingsCreate>;
  delete?: InputMaybe<PermissionsDataFilesSettingsDelete>;
  destroy?: InputMaybe<PermissionsDataFilesSettingsDestroy>;
  read?: InputMaybe<PermissionsDataFilesSettingsRead>;
  update?: InputMaybe<PermissionsDataFilesSettingsUpdate>;
};

export type PermissionsDataFilesSettingsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesSettingsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesSettingsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesSettingsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FilesSettingFieldsPermissions>;
  filter?: InputMaybe<FilesSetting_PermissionFilter>;
};

export type PermissionsDataFilesSettingsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FilesSettingFieldsPermissions>;
  filter?: InputMaybe<FilesSetting_PermissionFilter>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataImprovements = {
  create?: InputMaybe<PermissionsDataImprovementsCreate>;
  delete?: InputMaybe<PermissionsDataImprovementsDelete>;
  destroy?: InputMaybe<PermissionsDataImprovementsDestroy>;
  read?: InputMaybe<PermissionsDataImprovementsRead>;
  update?: InputMaybe<PermissionsDataImprovementsUpdate>;
};

export type PermissionsDataImprovementsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataImprovementsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataImprovementsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataImprovementsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ImprovementFieldsPermissions>;
  filter?: InputMaybe<Improvement_PermissionFilter>;
};

export type PermissionsDataImprovementsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ImprovementFieldsPermissions>;
  filter?: InputMaybe<Improvement_PermissionFilter>;
};

export type PermissionsDataMaintenanceRecords = {
  create?: InputMaybe<PermissionsDataMaintenanceRecordsCreate>;
  delete?: InputMaybe<PermissionsDataMaintenanceRecordsDelete>;
  destroy?: InputMaybe<PermissionsDataMaintenanceRecordsDestroy>;
  read?: InputMaybe<PermissionsDataMaintenanceRecordsRead>;
  update?: InputMaybe<PermissionsDataMaintenanceRecordsUpdate>;
};

export type PermissionsDataMaintenanceRecordsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataMaintenanceRecordsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataMaintenanceRecordsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataMaintenanceRecordsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<MaintenanceRecordFieldsPermissions>;
  filter?: InputMaybe<MaintenanceRecord_PermissionFilter>;
};

export type PermissionsDataMaintenanceRecordsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<MaintenanceRecordFieldsPermissions>;
  filter?: InputMaybe<MaintenanceRecord_PermissionFilter>;
};

export type PermissionsDataNotifications = {
  create?: InputMaybe<PermissionsDataNotificationsCreate>;
  delete?: InputMaybe<PermissionsDataNotificationsDelete>;
  destroy?: InputMaybe<PermissionsDataNotificationsDestroy>;
  read?: InputMaybe<PermissionsDataNotificationsRead>;
  update?: InputMaybe<PermissionsDataNotificationsUpdate>;
};

export type PermissionsDataNotificationsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataNotificationsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataNotificationsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataNotificationsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<NotificationFieldsPermissions>;
  filter?: InputMaybe<Notification_PermissionFilter>;
};

export type PermissionsDataNotificationsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<NotificationFieldsPermissions>;
  filter?: InputMaybe<Notification_PermissionFilter>;
};

export type PermissionsDataPermits = {
  create?: InputMaybe<PermissionsDataPermitsCreate>;
  delete?: InputMaybe<PermissionsDataPermitsDelete>;
  destroy?: InputMaybe<PermissionsDataPermitsDestroy>;
  read?: InputMaybe<PermissionsDataPermitsRead>;
  update?: InputMaybe<PermissionsDataPermitsUpdate>;
};

export type PermissionsDataPermitsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPermitsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataPermitsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPermitsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PermitFieldsPermissions>;
  filter?: InputMaybe<Permit_PermissionFilter>;
};

export type PermissionsDataPermitsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PermitFieldsPermissions>;
  filter?: InputMaybe<Permit_PermissionFilter>;
};

export type PermissionsDataReports = {
  create?: InputMaybe<PermissionsDataReportsCreate>;
  delete?: InputMaybe<PermissionsDataReportsDelete>;
  destroy?: InputMaybe<PermissionsDataReportsDestroy>;
  read?: InputMaybe<PermissionsDataReportsRead>;
  update?: InputMaybe<PermissionsDataReportsUpdate>;
};

export type PermissionsDataReportsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataReportsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataReportsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataReportsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ReportFieldsPermissions>;
  filter?: InputMaybe<Report_PermissionFilter>;
};

export type PermissionsDataReportsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ReportFieldsPermissions>;
  filter?: InputMaybe<Report_PermissionFilter>;
};

export type PermissionsDataRoles = {
  create?: InputMaybe<PermissionsDataRolesCreate>;
  delete?: InputMaybe<PermissionsDataRolesDelete>;
  destroy?: InputMaybe<PermissionsDataRolesDestroy>;
  read?: InputMaybe<PermissionsDataRolesRead>;
  update?: InputMaybe<PermissionsDataRolesUpdate>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataRolesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataSearchCriteria = {
  create?: InputMaybe<PermissionsDataSearchCriteriaCreate>;
  delete?: InputMaybe<PermissionsDataSearchCriteriaDelete>;
  destroy?: InputMaybe<PermissionsDataSearchCriteriaDestroy>;
  read?: InputMaybe<PermissionsDataSearchCriteriaRead>;
  update?: InputMaybe<PermissionsDataSearchCriteriaUpdate>;
};

export type PermissionsDataSearchCriteriaCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataSearchCriteriaDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataSearchCriteriaDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataSearchCriteriaRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<SearchCriterionFieldsPermissions>;
  filter?: InputMaybe<SearchCriterion_PermissionFilter>;
};

export type PermissionsDataSearchCriteriaUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<SearchCriterionFieldsPermissions>;
  filter?: InputMaybe<SearchCriterion_PermissionFilter>;
};

export type PermissionsDataSubscriptionsApps = {
  create?: InputMaybe<PermissionsDataSubscriptionsAppsCreate>;
  delete?: InputMaybe<PermissionsDataSubscriptionsAppsDelete>;
  destroy?: InputMaybe<PermissionsDataSubscriptionsAppsDestroy>;
  read?: InputMaybe<PermissionsDataSubscriptionsAppsRead>;
  update?: InputMaybe<PermissionsDataSubscriptionsAppsUpdate>;
};

export type PermissionsDataSubscriptionsAppsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataSubscriptionsAppsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataSubscriptionsAppsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataSubscriptionsAppsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<SubscriptionsAppFieldsPermissions>;
  filter?: InputMaybe<SubscriptionsApp_PermissionFilter>;
};

export type PermissionsDataSubscriptionsAppsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<SubscriptionsAppFieldsPermissions>;
  filter?: InputMaybe<SubscriptionsApp_PermissionFilter>;
};

export type PermissionsDataUsers = {
  create?: InputMaybe<PermissionsDataUsersCreate>;
  delete?: InputMaybe<PermissionsDataUsersDelete>;
  destroy?: InputMaybe<PermissionsDataUsersDestroy>;
  read?: InputMaybe<PermissionsDataUsersRead>;
  update?: InputMaybe<PermissionsDataUsersUpdate>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataUsersDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

export type PermissionsDataWorkOrders = {
  create?: InputMaybe<PermissionsDataWorkOrdersCreate>;
  delete?: InputMaybe<PermissionsDataWorkOrdersDelete>;
  destroy?: InputMaybe<PermissionsDataWorkOrdersDestroy>;
  read?: InputMaybe<PermissionsDataWorkOrdersRead>;
  update?: InputMaybe<PermissionsDataWorkOrdersUpdate>;
};

export type PermissionsDataWorkOrdersCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataWorkOrdersDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataWorkOrdersDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataWorkOrdersRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<WorkOrderFieldsPermissions>;
  filter?: InputMaybe<WorkOrder_PermissionFilter>;
};

export type PermissionsDataWorkOrdersUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<WorkOrderFieldsPermissions>;
  filter?: InputMaybe<WorkOrder_PermissionFilter>;
};

/** PermissionsInput create input */
export type PermissionsInput = {
  custom?: InputMaybe<PermissionsCustom>;
  data?: InputMaybe<PermissionsData>;
};

/** Records permits issued for the building. */
export type Permit = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Reference to the building for which the permit was issued. */
  building_id?: Maybe<Building>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Date when the permit expires. */
  expiry_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Date when the permit was issued. */
  issue_date?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier for the permit. */
  permit_number?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Permits create input */
export type PermitCreateInput = {
  building_id?: InputMaybe<PermitsBuilding_IdRelationInput>;
  /** Date when the permit expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when the permit was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Unique identifier for the permit. */
  permit_number?: InputMaybe<Scalars['String']['input']>;
};

/** Permits create many input */
export type PermitCreateManyInput = {
  /** Date when the permit expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when the permit was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Unique identifier for the permit. */
  permit_number?: InputMaybe<Scalars['String']['input']>;
};

/** Permits delete input */
export type PermitDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** PermitFieldsPermissions create input */
export type PermitFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  expiry_date?: InputMaybe<Scalars['Boolean']['input']>;
  issue_date?: InputMaybe<Scalars['Boolean']['input']>;
  permit_number?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermitFilter = {
  AND?: InputMaybe<Array<PermitFilter>>;
  OR?: InputMaybe<Array<PermitFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<BuildingFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  expiry_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  issue_date?: InputMaybe<DateTimePredicate>;
  permit_number?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PermitGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: PermitGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type PermitGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  expiry_date?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  issue_date?: InputMaybe<Array<GroupByField>>;
  permit_number?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type PermitKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** PermitListResponse output */
export type PermitListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Permit>;
};

/** PermitManyResponse output */
export type PermitManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Permit>;
};

/** No longer supported. Use `sort` instead. */
export enum PermitOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ExpiryDateAsc = 'expiry_date_ASC',
  ExpiryDateDesc = 'expiry_date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IssueDateAsc = 'issue_date_ASC',
  IssueDateDesc = 'issue_date_DESC',
  PermitNumberAsc = 'permit_number_ASC',
  PermitNumberDesc = 'permit_number_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Permits subscription payload */
export type PermitPayload = {
  mutation: MutationType;
  node?: Maybe<Permit>;
  previousValues?: Maybe<Permit>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermitRelationFilter = {
  every?: InputMaybe<PermitFilter>;
  none?: InputMaybe<PermitFilter>;
  some?: InputMaybe<PermitFilter>;
};

export type PermitSort = {
  building_id?: InputMaybe<BuildingSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  expiry_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issue_date?: InputMaybe<SortOrder>;
  permit_number?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Permits subscription filter */
export type PermitSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PermitFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Permits update input */
export type PermitUpdateByFilterInput = {
  permit_number?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Permits update input */
export type PermitUpdateInput = {
  building_id?: InputMaybe<PermitsBuilding_IdUpdateRelationInput>;
  /** Date when the permit expires. */
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Date when the permit was issued. */
  issue_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Unique identifier for the permit. */
  permit_number?: InputMaybe<Scalars['String']['input']>;
};

export type Permit_PermissionFilter = {
  AND?: InputMaybe<Array<Permit_PermissionFilter>>;
  OR?: InputMaybe<Array<Permit_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  expiry_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  issue_date?: InputMaybe<DateTimePredicate>;
  permit_number?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Permit_PermissionRelationFilter = {
  every?: InputMaybe<Permit_PermissionFilter>;
  none?: InputMaybe<Permit_PermissionFilter>;
  some?: InputMaybe<Permit_PermissionFilter>;
};

/** Permits relation input */
export type PermitsBuilding_IdRelationInput = {
  create?: InputMaybe<Permits_BuildingCreateInput>;
};

/** Permits relation input */
export type PermitsBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<Permits_BuildingUpdateInput>;
};

/** Buildings create input from Permits */
export type Permits_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications: BuildingsCertificationsRelationInput;
  ComplianceRecords: BuildingsComplianceRecordsRelationInput;
  Documents: BuildingsDocumentsRelationInput;
  EnergyEfficiency: BuildingsEnergyEfficiencyRelationInput;
  EnvironmentalData: BuildingsEnvironmentalDataRelationInput;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements: BuildingsImprovementsRelationInput;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders: BuildingsWorkOrdersRelationInput;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from Permits */
export type Permits_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectItemWs = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  airQualitiesList: AirQualityListResponse;
  airQuality?: Maybe<AirQuality>;
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse>;
  /** @deprecated No longer supported. Use `system.asyncSessionStatus` instead. */
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: BillingInvoicesListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  building?: Maybe<Building>;
  buildingsList: BuildingListResponse;
  certification?: Maybe<Certification>;
  certificationsList: CertificationListResponse;
  companyName?: Maybe<Scalars['String']['output']>;
  complianceRecord?: Maybe<ComplianceRecord>;
  complianceRecordsList: ComplianceRecordListResponse;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult;
  document?: Maybe<Document>;
  documentsList: DocumentListResponse;
  energyEfficienciesList: EnergyEfficiencyListResponse;
  energyEfficiency?: Maybe<EnergyEfficiency>;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  environmentalDataList: EnvironmentalDatumListResponse;
  environmentalDatum?: Maybe<EnvironmentalDatum>;
  equipment?: Maybe<Equipment>;
  equipmentList: EquipmentListResponse;
  file?: Maybe<File>;
  /** @deprecated No longer supported. Use `fileUploadSignInfo` instead. */
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  filesSetting?: Maybe<FilesSetting>;
  filesSettingsList: FilesSettingListResponse;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse>;
  functionsVersionCheck?: Maybe<FunctionInfoCheck>;
  improvement?: Maybe<Improvement>;
  improvementsList: ImprovementListResponse;
  isAllowedCallbackURL?: Maybe<IsAllowedCallbackUrlQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  maintenanceRecord?: Maybe<MaintenanceRecord>;
  maintenanceRecordsList: MaintenanceRecordListResponse;
  notification?: Maybe<Notification>;
  notificationsList: NotificationListResponse;
  permit?: Maybe<Permit>;
  permitsList: PermitListResponse;
  report?: Maybe<Report>;
  reportsList: ReportListResponse;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  searchCriteriaList: SearchCriterionListResponse;
  searchCriterion?: Maybe<SearchCriterion>;
  settings?: Maybe<Setting>;
  subscriptionsApp?: Maybe<SubscriptionsApp>;
  subscriptionsAppsList: SubscriptionsAppListResponse;
  system?: Maybe<SystemQuery>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  userBillingConfigurationArchie: UserBillingConfigurationResponse;
  /** @deprecated No longer supported. Use `system.userInvitationsList` instead. */
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  viewDryRun?: Maybe<ViewDryRunOutput>;
  workOrder?: Maybe<WorkOrder>;
  workOrdersList: WorkOrderListResponse;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse>;
};


export type QueryAirQualitiesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AirQualityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AirQualityGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AirQualityOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AirQualitySort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAirQualityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApiTokenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApiTokensListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type QueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type QueryAuthenticationProfileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthenticationProfilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<BillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<BillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBuildingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBuildingsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BuildingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<BuildingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<BuildingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BuildingSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCertificationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCertificationsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CertificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<CertificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<CertificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CertificationSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComplianceRecordArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComplianceRecordsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ComplianceRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ComplianceRecordGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ComplianceRecordOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComplianceRecordSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDocumentsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<DocumentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnergyEfficienciesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnergyEfficiencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnergyEfficiencyGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnergyEfficiencyOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnergyEfficiencySort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnergyEfficiencyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariablesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentalDataListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentalDatumFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentalDatumGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentalDatumOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentalDatumSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentalDatumArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEquipmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEquipmentListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EquipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EquipmentGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EquipmentOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EquipmentSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFileArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesSettingArgs = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesSettingsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilesSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FilesSettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FilesSettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FilesSettingSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<FunctionInfoOrderBy>>>;
};


export type QueryImprovementArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryImprovementsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ImprovementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ImprovementGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ImprovementOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ImprovementSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryIsAllowedCallbackUrlArgs = {
  callbackURL: Scalars['String']['input'];
};


export type QueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryMaintenanceRecordArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMaintenanceRecordsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MaintenanceRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<MaintenanceRecordGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<MaintenanceRecordOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MaintenanceRecordSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNotificationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNotificationsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<NotificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPermitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPermitsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PermitFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PermitGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PermitOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PermitSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReportArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReportsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ReportGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ReportOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReportSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRolesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySearchCriteriaListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SearchCriterionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SearchCriterionGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SearchCriterionOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SearchCriterionSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySearchCriterionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySubscriptionsAppArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySubscriptionsAppsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubscriptionsAppFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SubscriptionsAppGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubscriptionsAppOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SubscriptionsAppSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTablesListArgs = {
  filter?: InputMaybe<TableListFilter>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserBillingConfigurationArchieArgs = {
  ideaId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};


export type QueryWorkOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryWorkOrdersListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<WorkOrderGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkOrderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkOrderSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/** RefreshTokenInput */
export type RefreshTokenInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
};

/** Relation */
export type Relation = {
  refField?: Maybe<TableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: Table;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type RelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type RelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum {
  Add = 'ADD',
  Sub = 'SUB'
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum {
  Day = 'DAY',
  DayHour = 'DAY_HOUR',
  DayMicrosecond = 'DAY_MICROSECOND',
  DayMinute = 'DAY_MINUTE',
  DaySecond = 'DAY_SECOND',
  Hour = 'HOUR',
  HourMicrosecond = 'HOUR_MICROSECOND',
  HourMinute = 'HOUR_MINUTE',
  HourSecond = 'HOUR_SECOND',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  MinuteMicrosecond = 'MINUTE_MICROSECOND',
  MinuteSecond = 'MINUTE_SECOND',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  SecondMicrosecond = 'SECOND_MICROSECOND',
  Week = 'WEEK',
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH'
}

export type ReplaceFunctionArguments = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

/** Represents custom reports generated by users based on building data. */
export type Report = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Content of the report in JSON format. */
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Date when the report was generated. */
  generated_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Title of the report. */
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Reference to the user who generated the report. */
  user_id?: Maybe<User>;
};

/** Reports create input */
export type ReportCreateInput = {
  /** Content of the report in JSON format. */
  content?: InputMaybe<Scalars['JSON']['input']>;
  /** Date when the report was generated. */
  generated_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Title of the report. */
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<ReportsUser_IdRelationInput>;
};

/** Reports create many input */
export type ReportCreateManyInput = {
  /** Content of the report in JSON format. */
  content?: InputMaybe<Scalars['JSON']['input']>;
  /** Date when the report was generated. */
  generated_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Title of the report. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Reports delete input */
export type ReportDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ReportFieldsPermissions create input */
export type ReportFieldsPermissions = {
  content?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  generated_date?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReportFilter = {
  AND?: InputMaybe<Array<ReportFilter>>;
  OR?: InputMaybe<Array<ReportFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  generated_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<UserFilter>;
};

export type ReportGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ReportGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ReportGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  content?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  generated_date?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  title?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  user_id?: InputMaybe<UserGroupByQuery>;
};

export type ReportKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ReportListResponse output */
export type ReportListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Report>;
};

/** ReportManyResponse output */
export type ReportManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Report>;
};

/** No longer supported. Use `sort` instead. */
export enum ReportOrderBy {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GeneratedDateAsc = 'generated_date_ASC',
  GeneratedDateDesc = 'generated_date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Reports subscription payload */
export type ReportPayload = {
  mutation: MutationType;
  node?: Maybe<Report>;
  previousValues?: Maybe<Report>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ReportRelationFilter = {
  every?: InputMaybe<ReportFilter>;
  none?: InputMaybe<ReportFilter>;
  some?: InputMaybe<ReportFilter>;
};

export type ReportSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  generated_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<UserSort>;
};

/** Reports subscription filter */
export type ReportSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ReportFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Reports update input */
export type ReportUpdateByFilterInput = {
  content?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  title?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Reports update input */
export type ReportUpdateInput = {
  /** Content of the report in JSON format. */
  content?: InputMaybe<Scalars['JSON']['input']>;
  /** Date when the report was generated. */
  generated_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Title of the report. */
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<ReportsUser_IdUpdateRelationInput>;
};

export type Report_PermissionFilter = {
  AND?: InputMaybe<Array<Report_PermissionFilter>>;
  OR?: InputMaybe<Array<Report_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  generated_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<User_PermissionFilter>;
};

export type Report_PermissionRelationFilter = {
  every?: InputMaybe<Report_PermissionFilter>;
  none?: InputMaybe<Report_PermissionFilter>;
  some?: InputMaybe<Report_PermissionFilter>;
};

/** Reports relation input */
export type ReportsUser_IdRelationInput = {
  create?: InputMaybe<Reports_UserCreateInput>;
};

/** Reports relation input */
export type ReportsUser_IdUpdateRelationInput = {
  update?: InputMaybe<Reports_UserUpdateInput>;
};

/** Users create input from Reports */
export type Reports_UserCreateInput = {
  Notifications?: InputMaybe<UsersNotificationsRelationInput>;
  Reports?: InputMaybe<UsersReportsRelationInput>;
  SearchCriteria: UsersSearchCriteriaRelationInput;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from Reports */
export type Reports_UserUpdateInput = {
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Reports?: InputMaybe<UsersReportsUpdateRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaUpdateRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsUpdateRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type ResizeImageDirectiveCropOptions = {
  height: Scalars['Int']['input'];
  offsetX?: InputMaybe<Scalars['Int']['input']>;
  offsetY?: InputMaybe<Scalars['Int']['input']>;
  width: Scalars['Int']['input'];
};

export type ResizeImageDirectiveFlipOptions = {
  horizontally?: InputMaybe<Scalars['Boolean']['input']>;
  vertically?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResizeImageDirectiveResizeOptions = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Role = {
  _description?: Maybe<Scalars['String']['output']>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  membersCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<PermissionListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UserListResponse>;
};


export type RoleApiTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type RoleAuthenticationProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type RolePermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Roles create input */
export type RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles create many input */
export type RoleCreateManyInput = {
  apiTokens?: InputMaybe<RolesApiTokensManyRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesManyRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  users?: InputMaybe<RolesUsersManyRelationInput>;
};

/** Roles delete input */
export type RoleDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum RoleEnum {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleFilter = {
  AND?: InputMaybe<Array<RoleFilter>>;
  OR?: InputMaybe<Array<RoleFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiTokenRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<UserRelationFilter>;
};

export type RoleGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: RoleGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type RoleGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  apiTokens?: InputMaybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  permissions?: InputMaybe<PermissionGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  users?: InputMaybe<UserGroupByQuery>;
};

export type RoleKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** RoleListResponse output */
export type RoleListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Role>;
};

/** RoleManyResponse output */
export type RoleManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Role>;
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Roles subscription payload */
export type RolePayload = {
  mutation: MutationType;
  node?: Maybe<Role>;
  previousValues?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type RoleRelationFilter = {
  every?: InputMaybe<RoleFilter>;
  none?: InputMaybe<RoleFilter>;
  some?: InputMaybe<RoleFilter>;
};

export type RoleSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<RoleFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Roles update input */
export type RoleUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  systemType?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Roles update input */
export type RoleUpdateInput = {
  apiTokens?: InputMaybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesUpdateRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersUpdateRelationInput>;
};

export type Role_PermissionFilter = {
  AND?: InputMaybe<Array<Role_PermissionFilter>>;
  OR?: InputMaybe<Array<Role_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiToken_PermissionRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfile_PermissionRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<Permission_PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<User_PermissionRelationFilter>;
};

export type Role_PermissionRelationFilter = {
  every?: InputMaybe<Role_PermissionFilter>;
  none?: InputMaybe<Role_PermissionFilter>;
  some?: InputMaybe<Role_PermissionFilter>;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  disconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  reconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_ApiTokenUpdateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
  disconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileUpdateInput>>>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Roles relation input */
export type RolesUsersRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_UserUpdateInput>>>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput = {
  data: ApiTokenUpdateInput;
  filter?: InputMaybe<ApiTokenKeyFilter>;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput = {
  data: AuthenticationProfileUpdateInput;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
};

/** Users create input from roles */
export type Roles_UserCreateInput = {
  Notifications: UsersNotificationsRelationInput;
  Reports: UsersReportsRelationInput;
  SearchCriteria: UsersSearchCriteriaRelationInput;
  SubscriptionsApps: UsersSubscriptionsAppsRelationInput;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

/** Schema Origin */
export type SchemaOrigin = {
  provider?: Maybe<Scalars['String']['output']>;
  type: SchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

/** SearchCriteria relation input */
export type SearchCriteriaUser_IdRelationInput = {
  create?: InputMaybe<SearchCriteria_UserCreateInput>;
};

/** SearchCriteria relation input */
export type SearchCriteriaUser_IdUpdateRelationInput = {
  update?: InputMaybe<SearchCriteria_UserUpdateInput>;
};

/** Users create input from SearchCriteria */
export type SearchCriteria_UserCreateInput = {
  Notifications?: InputMaybe<UsersNotificationsRelationInput>;
  Reports?: InputMaybe<UsersReportsRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from SearchCriteria */
export type SearchCriteria_UserUpdateInput = {
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Reports?: InputMaybe<UsersReportsUpdateRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaUpdateRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsUpdateRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Stores saved search parameters for users. */
export type SearchCriterion = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Search criteria details in JSON format. */
  criteria?: Maybe<Scalars['JSON']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Name of the saved search criteria. */
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Reference to the user who saved the search criteria. */
  user_id?: Maybe<User>;
};

/** SearchCriteria create input */
export type SearchCriterionCreateInput = {
  /** Search criteria details in JSON format. */
  criteria?: InputMaybe<Scalars['JSON']['input']>;
  /** Name of the saved search criteria. */
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<SearchCriteriaUser_IdRelationInput>;
};

/** SearchCriteria create many input */
export type SearchCriterionCreateManyInput = {
  /** Search criteria details in JSON format. */
  criteria?: InputMaybe<Scalars['JSON']['input']>;
  /** Name of the saved search criteria. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** SearchCriteria delete input */
export type SearchCriterionDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** SearchCriterionFieldsPermissions create input */
export type SearchCriterionFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  criteria?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SearchCriterionFilter = {
  AND?: InputMaybe<Array<SearchCriterionFilter>>;
  OR?: InputMaybe<Array<SearchCriterionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<UserFilter>;
};

export type SearchCriterionGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: SearchCriterionGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type SearchCriterionGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  criteria?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  user_id?: InputMaybe<UserGroupByQuery>;
};

export type SearchCriterionKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** SearchCriterionListResponse output */
export type SearchCriterionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<SearchCriterion>;
};

/** SearchCriterionManyResponse output */
export type SearchCriterionManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SearchCriterion>;
};

/** No longer supported. Use `sort` instead. */
export enum SearchCriterionOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CriteriaAsc = 'criteria_ASC',
  CriteriaDesc = 'criteria_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** SearchCriteria subscription payload */
export type SearchCriterionPayload = {
  mutation: MutationType;
  node?: Maybe<SearchCriterion>;
  previousValues?: Maybe<SearchCriterion>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SearchCriterionRelationFilter = {
  every?: InputMaybe<SearchCriterionFilter>;
  none?: InputMaybe<SearchCriterionFilter>;
  some?: InputMaybe<SearchCriterionFilter>;
};

export type SearchCriterionSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<UserSort>;
};

/** SearchCriteria subscription filter */
export type SearchCriterionSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<SearchCriterionFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** SearchCriteria update input */
export type SearchCriterionUpdateByFilterInput = {
  criteria?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** SearchCriteria update input */
export type SearchCriterionUpdateInput = {
  /** Search criteria details in JSON format. */
  criteria?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the saved search criteria. */
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<SearchCriteriaUser_IdUpdateRelationInput>;
};

export type SearchCriterion_PermissionFilter = {
  AND?: InputMaybe<Array<SearchCriterion_PermissionFilter>>;
  OR?: InputMaybe<Array<SearchCriterion_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<User_PermissionFilter>;
};

export type SearchCriterion_PermissionRelationFilter = {
  every?: InputMaybe<SearchCriterion_PermissionFilter>;
  none?: InputMaybe<SearchCriterion_PermissionFilter>;
  some?: InputMaybe<SearchCriterion_PermissionFilter>;
};

export type Setting = {
  _description?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  buttonLinkColor?: Maybe<Scalars['String']['output']>;
  containerColor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  currency?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  landingPageImage?: Maybe<File>;
  language?: Maybe<Scalars['String']['output']>;
  leftNavColor?: Maybe<Scalars['String']['output']>;
  menuBarBGColor?: Maybe<Scalars['String']['output']>;
  menuBarIconsColor?: Maybe<Scalars['String']['output']>;
  menuBarLogo?: Maybe<File>;
  passwordMinLength?: Maybe<Scalars['Int']['output']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']['output']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']['output']>;
  rememberDevice?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaceStyle?: Maybe<Scalars['String']['output']>;
  vanityUrl?: Maybe<Scalars['String']['output']>;
};

export type SettingFilter = {
  AND?: InputMaybe<Array<SettingFilter>>;
  OR?: InputMaybe<Array<SettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<FileFilter>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<FileFilter>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type SettingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: SettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type SettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  bgColor?: InputMaybe<Array<GroupByField>>;
  buttonLinkColor?: InputMaybe<Array<GroupByField>>;
  containerColor?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  currency?: InputMaybe<Array<GroupByField>>;
  dateFormat?: InputMaybe<Array<GroupByField>>;
  landingPageImage?: InputMaybe<FileGroupByQuery>;
  language?: InputMaybe<Array<GroupByField>>;
  leftNavColor?: InputMaybe<Array<GroupByField>>;
  menuBarBGColor?: InputMaybe<Array<GroupByField>>;
  menuBarIconsColor?: InputMaybe<Array<GroupByField>>;
  menuBarLogo?: InputMaybe<FileGroupByQuery>;
  passwordMinLength?: InputMaybe<Array<GroupByField>>;
  passwordRequireLowercase?: InputMaybe<Array<GroupByField>>;
  passwordRequireNumbers?: InputMaybe<Array<GroupByField>>;
  passwordRequireSpecial?: InputMaybe<Array<GroupByField>>;
  passwordRequireUppercase?: InputMaybe<Array<GroupByField>>;
  passwordUpdateInterval?: InputMaybe<Array<GroupByField>>;
  rememberDevice?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  userInterfaceStyle?: InputMaybe<Array<GroupByField>>;
  vanityUrl?: InputMaybe<Array<GroupByField>>;
};

/** SettingListResponse output */
export type SettingListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Setting>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy {
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC'
}

/** Settings subscription payload */
export type SettingPayload = {
  mutation: MutationType;
  node?: Maybe<Setting>;
  previousValues?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SettingRelationFilter = {
  every?: InputMaybe<SettingFilter>;
  none?: InputMaybe<SettingFilter>;
  some?: InputMaybe<SettingFilter>;
};

export type SettingSort = {
  bgColor?: InputMaybe<SortOrder>;
  buttonLinkColor?: InputMaybe<SortOrder>;
  containerColor?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  currency?: InputMaybe<SortOrder>;
  dateFormat?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  landingPageImage?: InputMaybe<FileSort>;
  language?: InputMaybe<SortOrder>;
  leftNavColor?: InputMaybe<SortOrder>;
  menuBarBGColor?: InputMaybe<SortOrder>;
  menuBarIconsColor?: InputMaybe<SortOrder>;
  menuBarLogo?: InputMaybe<FileSort>;
  passwordMinLength?: InputMaybe<SortOrder>;
  passwordRequireLowercase?: InputMaybe<SortOrder>;
  passwordRequireNumbers?: InputMaybe<SortOrder>;
  passwordRequireSpecial?: InputMaybe<SortOrder>;
  passwordRequireUppercase?: InputMaybe<SortOrder>;
  passwordUpdateInterval?: InputMaybe<SortOrder>;
  rememberDevice?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userInterfaceStyle?: InputMaybe<SortOrder>;
  vanityUrl?: InputMaybe<SortOrder>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<SettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Settings update input */
export type SettingUpdateInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  buttonLinkColor?: InputMaybe<Scalars['String']['input']>;
  containerColor?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  leftNavColor?: InputMaybe<Scalars['String']['input']>;
  menuBarBGColor?: InputMaybe<Scalars['String']['input']>;
  menuBarIconsColor?: InputMaybe<Scalars['String']['input']>;
  passwordMinLength?: InputMaybe<Scalars['Int']['input']>;
  passwordRequireLowercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireNumbers?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireUppercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordUpdateInterval?: InputMaybe<Scalars['Int']['input']>;
  rememberDevice?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  userInterfaceStyle?: InputMaybe<Scalars['String']['input']>;
  vanityUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Setting_PermissionFilter = {
  AND?: InputMaybe<Array<Setting_PermissionFilter>>;
  OR?: InputMaybe<Array<Setting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<File_PermissionFilter>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<File_PermissionFilter>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type Setting_PermissionRelationFilter = {
  every?: InputMaybe<Setting_PermissionFilter>;
  none?: InputMaybe<Setting_PermissionFilter>;
  some?: InputMaybe<Setting_PermissionFilter>;
};

/** SignUpResendInput */
export type SignUpResendInput = {
  email: Scalars['String']['input'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes = {
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** SortOrder */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringPadFunctionArguments = {
  len: Scalars['Int']['input'];
  str: Scalars['String']['input'];
};

export type StringPredicate = {
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type StringPredicateHaving = {
  AND?: InputMaybe<Array<StringPredicateHaving>>;
  OR?: InputMaybe<Array<StringPredicateHaving>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING'
}

export type Subscription = {
  AirQuality?: Maybe<AirQualityPayload>;
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  Buildings?: Maybe<BuildingPayload>;
  Certifications?: Maybe<CertificationPayload>;
  ComplianceRecords?: Maybe<ComplianceRecordPayload>;
  Documents?: Maybe<DocumentPayload>;
  EnergyEfficiency?: Maybe<EnergyEfficiencyPayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  EnvironmentalData?: Maybe<EnvironmentalDatumPayload>;
  Equipment?: Maybe<EquipmentPayload>;
  Files?: Maybe<FilePayload>;
  FilesSettings?: Maybe<FilesSettingPayload>;
  Improvements?: Maybe<ImprovementPayload>;
  MaintenanceRecords?: Maybe<MaintenanceRecordPayload>;
  Notifications?: Maybe<NotificationPayload>;
  Permissions?: Maybe<PermissionPayload>;
  Permits?: Maybe<PermitPayload>;
  Reports?: Maybe<ReportPayload>;
  Roles?: Maybe<RolePayload>;
  SearchCriteria?: Maybe<SearchCriterionPayload>;
  Settings?: Maybe<SettingPayload>;
  SubscriptionsApps?: Maybe<SubscriptionsAppPayload>;
  Users?: Maybe<UserPayload>;
  WorkOrders?: Maybe<WorkOrderPayload>;
};


export type SubscriptionAirQualityArgs = {
  filter?: InputMaybe<AirQualitySubscriptionFilter>;
};


export type SubscriptionApiTokensArgs = {
  filter?: InputMaybe<ApiTokenSubscriptionFilter>;
};


export type SubscriptionAuthenticationProfilesArgs = {
  filter?: InputMaybe<AuthenticationProfileSubscriptionFilter>;
};


export type SubscriptionAuthenticationSettingsArgs = {
  filter?: InputMaybe<AuthenticationSettingSubscriptionFilter>;
};


export type SubscriptionBuildingsArgs = {
  filter?: InputMaybe<BuildingSubscriptionFilter>;
};


export type SubscriptionCertificationsArgs = {
  filter?: InputMaybe<CertificationSubscriptionFilter>;
};


export type SubscriptionComplianceRecordsArgs = {
  filter?: InputMaybe<ComplianceRecordSubscriptionFilter>;
};


export type SubscriptionDocumentsArgs = {
  filter?: InputMaybe<DocumentSubscriptionFilter>;
};


export type SubscriptionEnergyEfficiencyArgs = {
  filter?: InputMaybe<EnergyEfficiencySubscriptionFilter>;
};


export type SubscriptionEnvironmentVariablesArgs = {
  filter?: InputMaybe<EnvironmentVariableSubscriptionFilter>;
};


export type SubscriptionEnvironmentalDataArgs = {
  filter?: InputMaybe<EnvironmentalDatumSubscriptionFilter>;
};


export type SubscriptionEquipmentArgs = {
  filter?: InputMaybe<EquipmentSubscriptionFilter>;
};


export type SubscriptionFilesArgs = {
  filter?: InputMaybe<FileSubscriptionFilter>;
};


export type SubscriptionFilesSettingsArgs = {
  filter?: InputMaybe<FilesSettingSubscriptionFilter>;
};


export type SubscriptionImprovementsArgs = {
  filter?: InputMaybe<ImprovementSubscriptionFilter>;
};


export type SubscriptionMaintenanceRecordsArgs = {
  filter?: InputMaybe<MaintenanceRecordSubscriptionFilter>;
};


export type SubscriptionNotificationsArgs = {
  filter?: InputMaybe<NotificationSubscriptionFilter>;
};


export type SubscriptionPermissionsArgs = {
  filter?: InputMaybe<PermissionSubscriptionFilter>;
};


export type SubscriptionPermitsArgs = {
  filter?: InputMaybe<PermitSubscriptionFilter>;
};


export type SubscriptionReportsArgs = {
  filter?: InputMaybe<ReportSubscriptionFilter>;
};


export type SubscriptionRolesArgs = {
  filter?: InputMaybe<RoleSubscriptionFilter>;
};


export type SubscriptionSearchCriteriaArgs = {
  filter?: InputMaybe<SearchCriterionSubscriptionFilter>;
};


export type SubscriptionSettingsArgs = {
  filter?: InputMaybe<SettingSubscriptionFilter>;
};


export type SubscriptionSubscriptionsAppsArgs = {
  filter?: InputMaybe<SubscriptionsAppSubscriptionFilter>;
};


export type SubscriptionUsersArgs = {
  filter?: InputMaybe<UserSubscriptionFilter>;
};


export type SubscriptionWorkOrdersArgs = {
  filter?: InputMaybe<WorkOrderSubscriptionFilter>;
};

/** Details the subscription tier and access level of a user. */
export type SubscriptionsApp = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** Description of the subscription tier. */
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Price of the subscription tier. */
  price?: Maybe<Scalars['Int']['output']>;
  /** Name of the subscription tier. */
  tier_name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Reference to the user who owns the subscription. */
  user_id?: Maybe<User>;
};

/** SubscriptionsApps create input */
export type SubscriptionsAppCreateInput = {
  /** Description of the subscription tier. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Price of the subscription tier. */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the subscription tier. */
  tier_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<SubscriptionsAppsUser_IdRelationInput>;
};

/** SubscriptionsApps create many input */
export type SubscriptionsAppCreateManyInput = {
  /** Description of the subscription tier. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Price of the subscription tier. */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the subscription tier. */
  tier_name?: InputMaybe<Scalars['String']['input']>;
};

/** SubscriptionsApps delete input */
export type SubscriptionsAppDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** SubscriptionsAppFieldsPermissions create input */
export type SubscriptionsAppFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Boolean']['input']>;
  tier_name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionsAppFilter = {
  AND?: InputMaybe<Array<SubscriptionsAppFilter>>;
  OR?: InputMaybe<Array<SubscriptionsAppFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  price?: InputMaybe<IntPredicate>;
  tier_name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<UserFilter>;
};

export type SubscriptionsAppGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: SubscriptionsAppGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type SubscriptionsAppGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  price?: InputMaybe<Array<GroupByField>>;
  tier_name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  user_id?: InputMaybe<UserGroupByQuery>;
};

export type SubscriptionsAppKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** SubscriptionsAppListResponse output */
export type SubscriptionsAppListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<SubscriptionsApp>;
};

/** SubscriptionsAppManyResponse output */
export type SubscriptionsAppManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SubscriptionsApp>;
};

/** No longer supported. Use `sort` instead. */
export enum SubscriptionsAppOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  TierNameAsc = 'tier_name_ASC',
  TierNameDesc = 'tier_name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** SubscriptionsApps subscription payload */
export type SubscriptionsAppPayload = {
  mutation: MutationType;
  node?: Maybe<SubscriptionsApp>;
  previousValues?: Maybe<SubscriptionsApp>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SubscriptionsAppRelationFilter = {
  every?: InputMaybe<SubscriptionsAppFilter>;
  none?: InputMaybe<SubscriptionsAppFilter>;
  some?: InputMaybe<SubscriptionsAppFilter>;
};

export type SubscriptionsAppSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  tier_name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<UserSort>;
};

/** SubscriptionsApps subscription filter */
export type SubscriptionsAppSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<SubscriptionsAppFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** SubscriptionsApps update input */
export type SubscriptionsAppUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  price?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
  tier_name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** SubscriptionsApps update input */
export type SubscriptionsAppUpdateInput = {
  /** Description of the subscription tier. */
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Price of the subscription tier. */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the subscription tier. */
  tier_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<SubscriptionsAppsUser_IdUpdateRelationInput>;
};

export type SubscriptionsApp_PermissionFilter = {
  AND?: InputMaybe<Array<SubscriptionsApp_PermissionFilter>>;
  OR?: InputMaybe<Array<SubscriptionsApp_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  price?: InputMaybe<IntPredicate>;
  tier_name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<User_PermissionFilter>;
};

export type SubscriptionsApp_PermissionRelationFilter = {
  every?: InputMaybe<SubscriptionsApp_PermissionFilter>;
  none?: InputMaybe<SubscriptionsApp_PermissionFilter>;
  some?: InputMaybe<SubscriptionsApp_PermissionFilter>;
};

/** SubscriptionsApps relation input */
export type SubscriptionsAppsUser_IdRelationInput = {
  create?: InputMaybe<SubscriptionsApps_UserCreateInput>;
};

/** SubscriptionsApps relation input */
export type SubscriptionsAppsUser_IdUpdateRelationInput = {
  update?: InputMaybe<SubscriptionsApps_UserUpdateInput>;
};

/** Users create input from SubscriptionsApps */
export type SubscriptionsApps_UserCreateInput = {
  Notifications: UsersNotificationsRelationInput;
  Reports: UsersReportsRelationInput;
  SearchCriteria: UsersSearchCriteriaRelationInput;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from SubscriptionsApps */
export type SubscriptionsApps_UserUpdateInput = {
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Reports?: InputMaybe<UsersReportsUpdateRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaUpdateRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsUpdateRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type SubstringFunctionArguments = {
  len?: InputMaybe<Scalars['Int']['input']>;
  pos: Scalars['Int']['input'];
};

export type SuccessResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SuccessWithMessageResponse = {
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes = {
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

export type SystemAiIdeasInput = {
  examples?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Application */
export type SystemApplication = {
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: SystemApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type SystemApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemApplication>;
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type SystemApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

export type SystemAsyncSessionStatusResponse = {
  result?: Maybe<Scalars['JSON']['output']>;
  status: Scalars['String']['output'];
};

export type SystemAuthProfile = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemAuthenticationInfo = {
  authProfile?: Maybe<Array<Maybe<SystemAuthProfile>>>;
  environmentId?: Maybe<Scalars['String']['output']>;
  environmentName?: Maybe<Scalars['String']['output']>;
};

export type SystemBackendUtilizationResponse = {
  authProfiles?: Maybe<Scalars['Int']['output']>;
  databaseRows?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['Int']['output']>;
  fileStorageSize?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Scalars['Int']['output']>;
  tables?: Maybe<Scalars['Int']['output']>;
};

export type SystemBasicSectionConfigurationForPromptExecutionResponse = {
  content?: Maybe<Scalars['JSON']['output']>;
};

export type SystemBasicSectionConfigurationItem = {
  criteria: Scalars['String']['output'];
  description: Scalars['String']['output'];
  enabledWith8base?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SystemBasicSectionConfigurationResponse = {
  application_classification?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
  building_blocks?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
  commercialization_model?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
};

export type SystemBillingCurrentPlanResponse = {
  customerId?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<SystemBillingPlanFeature>>>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetrics>>>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<SystemWorkspaceStatus>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum SystemBillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemBillingDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemBillingDetailsOrigin;
};

export type SystemBillingInvoiceItem = {
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<SystemBillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<SystemBillingInvoiceItemPlanInfo>;
  project?: Maybe<SystemBillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingInvoiceItemOrganizationInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemPlanInfo = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemProjectInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemBillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingInvoiceItem>;
};

export type SystemBillingLimitMetricItem = {
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricOverageItem = {
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricUsageItem = {
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  overage?: Maybe<SystemBillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem>;
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageItem>;
};

export type SystemBillingNextPlanResponse = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingPlanBaseInfo = {
  capacity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  featuresTitle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingPlanFeature = {
  displayName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingPlanLimitMetricItem = {
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingPlanLimitMetrics = {
  hardLimit?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['String']['output']>;
  softLimit?: Maybe<Scalars['String']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export enum SystemBranchEnvironmentMode {
  Full = 'FULL',
  System = 'SYSTEM'
}

export type SystemCacheEvictResponse = {
  evicted: Array<Maybe<Scalars['String']['output']>>;
};

export type SystemChangePlanIdeaMutationInput = {
  archieId: Scalars['ID']['input'];
  couponId?: InputMaybe<Scalars['String']['input']>;
  couponName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  newPlan: Scalars['String']['input'];
};

export type SystemChangeRoleIdeaMemberMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
  role: InvitationRoleEnum;
};

export type SystemChangeRoleIdeaMutationInputList = {
  recipients: Array<SystemChangeRoleIdeaMemberMutationInput>;
};

/** Ci Commit Mode */
export enum SystemCiCommitMode {
  Full = 'FULL',
  OnlyMigrations = 'ONLY_MIGRATIONS',
  OnlyProject = 'ONLY_PROJECT'
}

/** Ci Status */
export type SystemCiStatusOutput = {
  migrations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Scalars['String']['output'];
};

/** CloudLogs Entry */
export type SystemCloudLogsEntry = {
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

/** Computed field mode */
export enum SystemComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type SystemCustomTableField = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<SystemFieldType>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes = {
  format: Scalars['String']['output'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** Delete Member From Organization Response */
export type SystemDeleteArchieMemberFromOrganizationResponse = {
  success: Scalars['Boolean']['output'];
};

export type SystemDeleteIdeaMutationInput = {
  id: Scalars['ID']['input'];
};

export type SystemDeleteMemberIdeaMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
};

export type SystemDeleteMemberIdeaMutationInputList = {
  members: Array<SystemDeleteMemberIdeaMutationInput>;
};

/** DeployDataResponse */
export type SystemDeployDataResponse = {
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type SystemDeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemDeployModeEnum>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SystemDeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult = {
  message?: Maybe<Scalars['String']['output']>;
  status: SystemDeployStatusEnum;
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<SystemDeployOptions>;
};

export type SystemDeploymentAbItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type SystemDeploymentProjectItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['ID']['output']>;
};

/** SystemDeploymentProjectListResponse output */
export type SystemDeploymentProjectListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemDeploymentProjectItemResponse>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentBackupItem>;
};

export type SystemEnvironmentMember = {
  avatar?: Maybe<SystemEnvironmentMemberAvatar>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<SystemEnvironmentMemberPermissionsList>;
  registeredAt?: Maybe<Scalars['DateTime']['output']>;
  roles?: Maybe<SystemEnvironmentMemberRolesList>;
  status: Scalars['String']['output'];
};

export type SystemEnvironmentMemberAvatar = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberPermission = {
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberPermissionsList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberPermission>>;
};

export type SystemEnvironmentMemberRole = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentMemberRoleIdFilterPredicate = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemEnvironmentMemberRolesList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberRole>>;
};

export type SystemEnvironmentMemberStatusFilterPredicate = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberUpdateData = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemEnvironmentMembersFilter = {
  email: Scalars['String']['input'];
};

export type SystemEnvironmentMembersListFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<SystemEnvironmentMemberRoleIdFilterPredicate>;
  status?: InputMaybe<SystemEnvironmentMemberStatusFilterPredicate>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

/** SystemEnvironmentMembersListResponse output */
export type SystemEnvironmentMembersListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentMember>;
};

export type SystemEnvironmentMembersListSort = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isOwner?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type SystemEnvironmentProjectItem = {
  fields?: Maybe<Scalars['String']['output']>;
  functions?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables?: Maybe<Scalars['String']['output']>;
  worksApiHost?: Maybe<Scalars['String']['output']>;
  workspaceId: Scalars['ID']['output'];
  workspaceName: Scalars['String']['output'];
};

export enum SystemEnvironmentRelationModeEnum {
  ForeignKey = 'ForeignKey',
  Pivot = 'Pivot'
}

export type SystemEnvironmentRoleBaseInfo = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentRoleList = {
  assignedRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
  environmentId: Scalars['String']['output'];
  environmentName: Scalars['String']['output'];
  exists?: Maybe<Scalars['Boolean']['output']>;
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
};

export type SystemEnvironmentSettings = {
  deleteLock?: Maybe<Scalars['Boolean']['output']>;
  fileManagementProvider?: Maybe<SystemFileManagerProviderTypeEnum>;
  introspection?: Maybe<Scalars['Boolean']['output']>;
  relationMode?: Maybe<SystemEnvironmentRelationModeEnum>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentItem>;
};

/** SystemEnvironmentsProjectListResponse output */
export type SystemEnvironmentsProjectListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentProjectItem>;
};

export type SystemExportIdeaToDocumentInput = {
  advancedConsiderations?: InputMaybe<Scalars['Boolean']['input']>;
  applicationServices?: InputMaybe<Scalars['Boolean']['input']>;
  applicationServicesDetails?: InputMaybe<Scalars['Boolean']['input']>;
  designGeneral?: InputMaybe<Scalars['Boolean']['input']>;
  ideaId: Scalars['ID']['input'];
  includeAll?: InputMaybe<Scalars['Boolean']['input']>;
  modules?: InputMaybe<Scalars['Boolean']['input']>;
  modulesDetails?: InputMaybe<Scalars['Boolean']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['Boolean']['input']>;
  screens?: InputMaybe<Scalars['Boolean']['input']>;
  siteMap?: InputMaybe<Scalars['Boolean']['input']>;
  userTypes?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemExportIdeaToDocumentResponse = {
  content?: Maybe<Scalars['JSON']['output']>;
  documentType: Scalars['String']['output'];
};

/** Field Data Features */
export type SystemFieldDataFeatures = {
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures = {
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum SystemFieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes = SystemDateFieldTypeAttributes | SystemFileFieldTypeAttributes | SystemGeoFieldTypeAttributes | SystemMissingRelationFieldTypeAttributes | SystemNumberFieldTypeAttributes | SystemSmartFieldTypeAttributes | SystemSwitchFieldTypeAttributes | SystemTextFieldTypeAttributes | SystemUuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SystemFileBaseInfo = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes = {
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

export enum SystemFileManagerProviderTypeEnum {
  Aws = 'aws',
  Filestack = 'filestack',
  Uploadcare = 'uploadcare'
}

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** FileUploadByUrlInput */
export type SystemFileUploadByUrlInput = {
  url: Scalars['String']['input'];
};

/** FileUploadByUrlResponse */
export type SystemFileUploadByUrlResponse = {
  fileId: Scalars['String']['output'];
  meta: Scalars['JSON']['output'];
};

export type SystemFileUploadSignInfo = AwsSignInfoResponse | FileStackSignInfoResponse | UploadcareSignInfoResponse;

export type SystemFrontendUtilizationAbResponse = {
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

export type SystemFrontendUtilizationResponse = {
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type SystemFunctionInfo = {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoCheck */
export type SystemFunctionInfoCheck = {
  version?: Maybe<Scalars['String']['output']>;
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<SystemFunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemFunctionInfo>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum SystemFunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput = {
  url?: Maybe<Scalars['String']['output']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes = {
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

export type SystemGetCouponResponse = {
  amount_off?: Maybe<Scalars['Float']['output']>;
  duration: Scalars['String']['output'];
  duration_in_months: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  percent_off?: Maybe<Scalars['Float']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type SystemGetInvitationIdeaResponse = {
  archieId: Scalars['ID']['output'];
  ideaId: Scalars['ID']['output'];
  invitationId: Scalars['ID']['output'];
  nickName: Scalars['String']['output'];
  role: InvitationRoleEnum;
  status: Scalars['String']['output'];
};

export type SystemGraphQlArchitecturesResponse = {
  enabling_technologies?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  infrastructure_diagram?: Maybe<Scalars['JSON']['output']>;
  integrations?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBlueprintResponse = {
  ai_enablement_ideas?: Maybe<Scalars['JSON']['output']>;
  application_classification?: Maybe<Scalars['JSON']['output']>;
  building_blocks?: Maybe<Scalars['JSON']['output']>;
  commercialization_model?: Maybe<Scalars['JSON']['output']>;
  design_preview?: Maybe<Scalars['JSON']['output']>;
  design_principles?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  insights?: Maybe<Scalars['JSON']['output']>;
  modules?: Maybe<Scalars['JSON']['output']>;
  originalPrompt?: Maybe<Scalars['JSON']['output']>;
  problem_statement?: Maybe<Scalars['JSON']['output']>;
  solution_statement?: Maybe<Scalars['JSON']['output']>;
  user_types?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBuildingBlocksRequirementsResponse = {
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBuildingBlocksResponse = {
  buildingBlocksRequirements?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksRequirementsResponse>>>;
  checked?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlBuildingBlocksScreensResponse = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  screensWireframes?: Maybe<Array<Maybe<SystemGraphQlScreensWireFramesResponse>>>;
  status?: Maybe<Scalars['String']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlFeaturesBreakdownResponse = {
  functionality?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  technicalRequirements?: Maybe<Scalars['JSON']['output']>;
  userInterfaces?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlModulesRequirementsResponse = {
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlModulesResponse = {
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  modulesRequirements?: Maybe<Array<Maybe<SystemGraphQlModulesRequirementsResponse>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  uiPattern?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlOverviewResponse = {
  accessibility_requirements?: Maybe<Scalars['JSON']['output']>;
  application_classification?: Maybe<Scalars['JSON']['output']>;
  commercialization_model?: Maybe<Scalars['JSON']['output']>;
  compliance_requirements?: Maybe<Scalars['JSON']['output']>;
  design_principles?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  performance_requirements?: Maybe<Scalars['JSON']['output']>;
  problem_statement?: Maybe<Scalars['JSON']['output']>;
  security_requirements?: Maybe<Scalars['JSON']['output']>;
  solution_statement?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlScreensWireFramesResponse = {
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlSectionResultRegenerateMutationInput = {
  archieId: Scalars['ID']['input'];
  idea: Scalars['ID']['input'];
  instructions?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  requirementsDescription?: InputMaybe<Scalars['String']['input']>;
  sectionCategoriesWithIds?: InputMaybe<Scalars['JSON']['input']>;
};

export type SystemGraphQlUserAccountsResponse = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserInterfacesResponse = {
  requirements_design_guidelines?: Maybe<Scalars['JSON']['output']>;
  requirements_site_map?: Maybe<Scalars['JSON']['output']>;
  requirements_ui_ux_general?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  wireframe_layout?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlUserTypeDetailsResponse = {
  comprehensive_needs?: Maybe<Scalars['JSON']['output']>;
  comprehensive_painpoints?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserTypeUseCaseResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserTypesResponse = {
  description?: Maybe<Scalars['String']['output']>;
  deviceusages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  softwareproficiency?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userTypesDetails?: Maybe<Array<Maybe<SystemGraphQlUserTypeDetailsResponse>>>;
  userTypesUseCases?: Maybe<Array<Maybe<SystemGraphQlUserTypeUseCaseResponse>>>;
};

export type SystemIdeaDetailsResponse = {
  archieId: Scalars['ID']['output'];
  architectures?: Maybe<Array<Maybe<SystemGraphQlArchitecturesResponse>>>;
  blueprints?: Maybe<Array<Maybe<SystemGraphQlBlueprintResponse>>>;
  buildingBlocks?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksResponse>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  elevatorDescription?: Maybe<Scalars['String']['output']>;
  executedDesign?: Maybe<Scalars['Boolean']['output']>;
  featuresBreakdown?: Maybe<Array<Maybe<SystemGraphQlFeaturesBreakdownResponse>>>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Maybe<SystemIdeaInvitationBaseResponse>>>;
  isDemoProject?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<Maybe<SystemIdeaMemberBaseResponse>>>;
  modules?: Maybe<Array<Maybe<SystemGraphQlModulesResponse>>>;
  nextStep: Scalars['String']['output'];
  nickName: Scalars['String']['output'];
  overviews?: Maybe<Array<Maybe<SystemGraphQlOverviewResponse>>>;
  owner?: Maybe<SystemMemberAccountInfo>;
  ownerType?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<SystemPlanInfoIdea>;
  progress: Scalars['Float']['output'];
  requirementsDescription?: Maybe<Scalars['String']['output']>;
  screens?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksScreensResponse>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaces?: Maybe<Array<Maybe<SystemGraphQlUserInterfacesResponse>>>;
  userTypes?: Maybe<Array<Maybe<SystemGraphQlUserTypesResponse>>>;
};

export type SystemIdeaGeneralCreateMutationInput = {
  description: Scalars['String']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaGeneralResponse = {
  archieId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nickName: Scalars['String']['output'];
};

export type SystemIdeaGeneralUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  elevatorDescription?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  requirementsDescription?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaImproveMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaImproveResponse = {
  suggestion: Scalars['String']['output'];
};

export type SystemIdeaImproveWithAiMutationInput = {
  aiIdeas?: InputMaybe<Array<InputMaybe<SystemAiIdeasInput>>>;
  archieId: Scalars['ID']['input'];
};

export type SystemIdeaImproveWithAiResponse = {
  expectedBenefits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  kpis?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statement: Scalars['String']['output'];
};

export type SystemIdeaInvitationBaseResponse = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: InvitationRoleEnum;
};

/** Idea Invitation Member */
export type SystemIdeaInvitationMember = {
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userAccounts?: Maybe<SystemGraphQlUserAccountsResponse>;
};

export type SystemIdeaItemOrganizationMember = {
  archieId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  nextStep?: Maybe<Scalars['String']['output']>;
  nickName: Scalars['String']['output'];
  progress: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SystemIdeaItemRespSingle = {
  archieId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lastActivityAt?: Maybe<Scalars['DateTime']['output']>;
  members?: Maybe<Array<Maybe<SystemMemberAccountInfo>>>;
  nextStep: Scalars['String']['output'];
  nickName: Scalars['String']['output'];
  owner?: Maybe<SystemMemberAccountInfo>;
  progress: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** SystemIdeaItemResponse output */
export type SystemIdeaItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemIdeaItemRespSingle>;
};

export type SystemIdeaMemberBaseResponse = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  onboardingStatus: Scalars['JSON']['output'];
  organizationId: Scalars['ID']['output'];
  role: InvitationRoleEnum;
};

export type SystemIdeaUserResponse = {
  ideas: SystemIdeaItemResponse;
};

export type SystemInboxEventDetailsUnion = SystemInboxEventEnvironmentInvitationDetails | SystemInboxEventNotificationDetailsType | SystemInboxEventOrganizationInvitationDetails;

export type SystemInboxEventEnvironmentInvitationDetails = {
  environmentName?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  project?: Maybe<SystemInboxEventProject>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<SystemInboxEventWorkspace>;
};

export type SystemInboxEventInvitedBy = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventItem = {
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<SystemInboxEventDetailsUnion>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<SystemInboxEventTypeEnum>;
};

export type SystemInboxEventNotificationDetailsType = {
  details?: Maybe<Scalars['JSON']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganization = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganizationInvitationDetails = {
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  organization?: Maybe<SystemInboxEventOrganization>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventProject = {
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemInboxEventStatusEnum {
  Accepted = 'accepted',
  Declined = 'declined',
  Sent = 'sent'
}

export enum SystemInboxEventTypeEnum {
  EnvironmentInvitation = 'EnvironmentInvitation',
  Notification = 'Notification',
  OrganizationInvitation = 'OrganizationInvitation'
}

export type SystemInboxEventWorkspace = {
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** SystemInboxEventsListResponse output */
export type SystemInboxEventsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemInboxEventItem>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput = {
  columns: Array<SystemTableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput = {
  columns?: InputMaybe<Array<SystemTableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

/** Idea Invitation Accept/Cancel Response */
export type SystemInvitationAcceptCancelResponse = {
  success: Scalars['Boolean']['output'];
};

/** Idea invitation accept/Cancel input */
export type SystemInvitationIdeaAcceptCancelInput = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Idea Invitation Cancel Response */
export type SystemInvitationIdeaResendResponse = {
  success: Scalars['Boolean']['output'];
};

/** Idea invitation cancel input */
export type SystemInvitationIdeaResendlInput = {
  id: Scalars['String']['input'];
};

/** Invite recipient input */
export type SystemInviteIdeaRecipientInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['String']['input'];
  organizationUserId?: InputMaybe<Scalars['String']['input']>;
  role: RoleEnum;
};

/** Invite idea input */
export type SystemInviteMembersIdeaInput = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
  recipients: Array<SystemInviteIdeaRecipientInput>;
};

/** Invite members input */
export type SystemInviteMembersInput = {
  recipients: Array<SystemInviteRecipientInput>;
};

/** Invite recipient input */
export type SystemInviteRecipientInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Invited By Name */
export type SystemInvitedByName = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type SystemInvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse = {
  responseData: Scalars['String']['output'];
};

/** LogsListFiltered Response */
export type SystemLogsListFilteredResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

/**
 * Member - list of workspaces you are member of
 * Owner - list of workspaces you are owner of
 * OrganizationUser - list of organizations you are part of
 */
export type SystemMemberAccountDeleteDetails = {
  member?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
  organizationUser?: Maybe<Array<Maybe<SystemOrganizationBaseItem>>>;
  owner?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

export type SystemMemberAccountDeleteResponse = {
  details?: Maybe<SystemMemberAccountDeleteDetails>;
  success: Scalars['Boolean']['output'];
};

export type SystemMemberAccountInfo = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  archieRole?: Maybe<Scalars['String']['output']>;
  authCreateMethod?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isADemoUser?: Maybe<Scalars['Boolean']['output']>;
  isArchieAdmin?: Maybe<Scalars['Boolean']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isOrganizationOwner?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  onboardingStatus?: Maybe<Scalars['JSON']['output']>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sourceAccount?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type SystemMemberAccountUpsertDataInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  archieRole?: InputMaybe<Scalars['String']['input']>;
  authCreateMethod?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<GraphQlCreateFileItemInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  intendedUse?: InputMaybe<Scalars['String']['input']>;
  isADemoUser?: InputMaybe<Scalars['Boolean']['input']>;
  isArchieAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isDeveloper?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isOrganizationOwner?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  learningMode?: InputMaybe<Scalars['Boolean']['input']>;
  linkedInUsername?: InputMaybe<Scalars['String']['input']>;
  onboardingStatus?: InputMaybe<Scalars['JSON']['input']>;
  organizationCreatorRole?: InputMaybe<Scalars['String']['input']>;
  organizationKind?: InputMaybe<Scalars['String']['input']>;
  organizationNeed?: InputMaybe<Scalars['String']['input']>;
  organizationSize?: InputMaybe<Scalars['String']['input']>;
  projectDescription?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  sourceAccount?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemUserType>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type SystemMemberArchieInviteOrganizationInput = {
  email: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

/** Member Change Organization Role Input */
export type SystemMemberChangeOrganizationRoleInput = {
  id: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

/** Member Change Organization Role Response */
export type SystemMemberChangeOrganizationRoleResponse = {
  success: Scalars['Boolean']['output'];
};

/** Member Invitation */
export type SystemMemberInvitation = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Member invitation accept input */
export type SystemMemberInvitationAcceptInput = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Member Invitation Accept Response */
export type SystemMemberInvitationAcceptResponse = {
  success: Scalars['Boolean']['output'];
};

/** Cancel members invitations input */
export type SystemMemberInvitationCancelInput = {
  email: Scalars['String']['input'];
};

/** Resend member invitation input */
export type SystemMemberInvitationResendInput = {
  email: Scalars['ID']['input'];
};

export type SystemMemberInvitationsList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemMemberInvitation>>>;
};

export type SystemMemberOrganizationAccountInfo = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  archieRole?: Maybe<Scalars['String']['output']>;
  authCreateMethod?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ideas?: Maybe<Array<Maybe<SystemIdeaItemOrganizationMember>>>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isADemoUser?: Maybe<Scalars['Boolean']['output']>;
  isArchieAdmin?: Maybe<Scalars['Boolean']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isOrganizationOwner?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  onboardingStatus?: Maybe<Scalars['JSON']['output']>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sourceAccount?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** Member Change Organization Role Input */
export type SystemMemberOrganizationInviteMutationInput = {
  ideaId?: InputMaybe<Scalars['String']['input']>;
  ideaRole?: InputMaybe<Scalars['String']['input']>;
  invitedByName: Scalars['String']['input'];
  members?: InputMaybe<Array<InputMaybe<SystemMemberArchieInviteOrganizationInput>>>;
  organizationId: Scalars['ID']['input'];
  organizationName: Scalars['String']['input'];
};

/** Member Change Organization Role Input */
export type SystemMemberOrganizationResendInviteMutationInput = {
  email: Scalars['String']['input'];
  invitedByName: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  organizationName: Scalars['String']['input'];
};

/** MemberPaymentDetailsUpdateMutationInput */
export type SystemMemberPaymentDetailsUpdateMutationInput = {
  cardToken?: InputMaybe<Scalars['String']['input']>;
};

/** Member Resend Verify Account Email Response */
export type SystemMemberResendVerifyAccountEmailResponse = {
  success: Scalars['Boolean']['output'];
};

/** Member Resend Verify Account Email input */
export type SystemMemberResendVerifyAccountEmaillInput = {
  email: Scalars['String']['input'];
};

export type SystemMembersAccountList = {
  items?: Maybe<Array<Maybe<SystemMemberOrganizationAccountInfo>>>;
};

export type SystemMembersIdeaList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemIdeaInvitationMember>>>;
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes = {
  missingTable: Scalars['String']['output'];
};

export type SystemMutation = {
  ExportIdeaToDocument?: Maybe<SystemExportIdeaToDocumentResponse>;
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  billingContextCacheEvict?: Maybe<SystemCacheEvictResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  changePlanIdea?: Maybe<SystemBillingCurrentPlanResponse>;
  changeRoleIdeaInvitation?: Maybe<SuccessResponse>;
  changeRoleIdeaMember?: Maybe<SuccessResponse>;
  ciCommit?: Maybe<AsyncSession>;
  ciInstall?: Maybe<SuccessResponse>;
  createOrganizationSettingsTech: SystemOrganizationSettingsTech;
  deleteArchieMemberFromOrganization: SystemDeleteArchieMemberFromOrganizationResponse;
  deleteIdea?: Maybe<SuccessResponse>;
  deleteMemberIdea?: Maybe<SuccessResponse>;
  deploy?: Maybe<Scalars['Boolean']['output']>;
  environmentBackup?: Maybe<AsyncSession>;
  environmentBranch?: Maybe<AsyncSession>;
  environmentDelete?: Maybe<SuccessResponse>;
  environmentDeleteAsync?: Maybe<AsyncSession>;
  environmentMemberDelete: SuccessResponse;
  environmentMemberUpdate?: Maybe<SystemEnvironmentMember>;
  environmentRestore?: Maybe<AsyncSession>;
  environmentSetup?: Maybe<SuccessResponse>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  fileUploadByUrl: SystemFileUploadByUrlResponse;
  ideaImprove?: Maybe<SystemIdeaImproveResponse>;
  ideaImproveWithAI?: Maybe<SystemIdeaImproveWithAiResponse>;
  ideaTransferOwner?: Maybe<SuccessResponse>;
  ideaUserCreate?: Maybe<SystemIdeaGeneralResponse>;
  ideaUserUpdate?: Maybe<SystemIdeaGeneralResponse>;
  indexCreate: SystemTableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: SystemTableIndex;
  invitationIdeaAcceptCancel: SystemInvitationAcceptCancelResponse;
  invitationIdeaResend: SystemInvitationIdeaResendResponse;
  inviteMembers: Array<Maybe<SystemTeamInvitationDetails>>;
  inviteToIdea?: Maybe<SuccessResponse>;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  memberAccountDelete?: Maybe<SystemMemberAccountDeleteResponse>;
  memberAccountUpsert?: Maybe<SystemMemberAccountInfo>;
  memberChangeOrganizationRole: SystemMemberChangeOrganizationRoleResponse;
  memberInvitationAccept: SystemMemberInvitationAcceptResponse;
  memberInvitationCancel?: Maybe<SuccessResponse>;
  memberInvitationResend?: Maybe<SuccessResponse>;
  memberPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  memberResendVerifyAccountEmail: SystemMemberResendVerifyAccountEmailResponse;
  notificationUpdate?: Maybe<SuccessResponse>;
  onboardingUpdate?: Maybe<SystemMemberAccountInfo>;
  organizationArchieUpgrade?: Maybe<OrganizationUpgradeResponse>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse>;
  organizationInviteUserAccept?: Maybe<SuccessResponse>;
  organizationInviteUserCancel?: Maybe<SuccessResponse>;
  organizationMemberInvite?: Maybe<SuccessResponse>;
  organizationMemberResendInvite?: Maybe<SuccessResponse>;
  organizationPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  organizationProjectUserRemove?: Maybe<SuccessResponse>;
  organizationProjectUserShare?: Maybe<SuccessResponse>;
  organizationUpdate?: Maybe<SystemOrganizationItem>;
  organizationUserRemove?: Maybe<SuccessResponse>;
  organizationUserUpdate?: Maybe<SystemOrganizationUserInfo>;
  partnerCreate?: Maybe<SystemPartnerGeneralResponse>;
  postMessageToQueue?: Maybe<SuccessResponse>;
  prepareDeploy: SystemDeployDataResponse;
  projectCreate?: Maybe<AsyncSession>;
  projectDelete?: Maybe<AsyncSession>;
  projectLeave?: Maybe<SuccessResponse>;
  projectUpdate?: Maybe<SystemProjectUpdateResponse>;
  removeOrganizationSettingsTech: SuccessResponse;
  rolePermissionsCacheEvict?: Maybe<SystemCacheEvictResponse>;
  sectionResultCreate?: Maybe<SystemSectionResultResponse>;
  sectionResultGenerate?: Maybe<SuccessResponse>;
  sectionResultPropagate?: Maybe<SuccessResponse>;
  sectionResultRegenerate?: Maybe<SuccessResponse>;
  sectionResultUpdate?: Maybe<SuccessResponse>;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  updateOrganizationSettings: SystemOrganizationSettings;
  viewCreate: SystemTable;
  viewUpdate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};


export type SystemMutationExportIdeaToDocumentArgs = {
  data: SystemExportIdeaToDocumentInput;
};


export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};


export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};


export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};


export type SystemMutationBillingContextCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
  projectKeys: Array<Scalars['String']['input']>;
};


export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};


export type SystemMutationChangePlanIdeaArgs = {
  data: SystemChangePlanIdeaMutationInput;
};


export type SystemMutationChangeRoleIdeaInvitationArgs = {
  data: SystemChangeRoleIdeaMutationInputList;
};


export type SystemMutationChangeRoleIdeaMemberArgs = {
  data: SystemChangeRoleIdeaMutationInputList;
};


export type SystemMutationCiCommitArgs = {
  build?: InputMaybe<Scalars['String']['input']>;
  migrationNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemCiCommitMode>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationCreateOrganizationSettingsTechArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationSettingsId: Scalars['ID']['input'];
};


export type SystemMutationDeleteArchieMemberFromOrganizationArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationDeleteIdeaArgs = {
  data: SystemDeleteIdeaMutationInput;
};


export type SystemMutationDeleteMemberIdeaArgs = {
  data: SystemDeleteMemberIdeaMutationInputList;
};


export type SystemMutationDeployArgs = {
  data?: InputMaybe<SystemDeployingBuildInput>;
};


export type SystemMutationEnvironmentBackupArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentBranchArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<SystemBranchEnvironmentMode>;
  name: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteAsyncArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentMemberDeleteArgs = {
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentMemberUpdateArgs = {
  data?: InputMaybe<SystemEnvironmentMemberUpdateData>;
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentRestoreArgs = {
  backup: Scalars['String']['input'];
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentSetupArgs = {
  data?: InputMaybe<EnvironmentSetupInput>;
};


export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};


export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};


export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};


export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};


export type SystemMutationFileUploadByUrlArgs = {
  data: SystemFileUploadByUrlInput;
};


export type SystemMutationIdeaImproveArgs = {
  data: SystemIdeaImproveMutationInput;
};


export type SystemMutationIdeaImproveWithAiArgs = {
  data: SystemIdeaImproveWithAiMutationInput;
};


export type SystemMutationIdeaTransferOwnerArgs = {
  data: SystemTransferIdeaOwnerMutationInput;
};


export type SystemMutationIdeaUserCreateArgs = {
  data: SystemIdeaGeneralCreateMutationInput;
};


export type SystemMutationIdeaUserUpdateArgs = {
  data: SystemIdeaGeneralUpdateMutationInput;
};


export type SystemMutationIndexCreateArgs = {
  data: SystemIndexCreateInput;
};


export type SystemMutationIndexDeleteArgs = {
  data: SystemIndexDeleteInput;
};


export type SystemMutationIndexUpdateArgs = {
  data: SystemIndexUpdateInput;
};


export type SystemMutationInvitationIdeaAcceptCancelArgs = {
  data: SystemInvitationIdeaAcceptCancelInput;
};


export type SystemMutationInvitationIdeaResendArgs = {
  data: SystemInvitationIdeaResendlInput;
};


export type SystemMutationInviteMembersArgs = {
  data: SystemInviteMembersInput;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationInviteToIdeaArgs = {
  data: SystemInviteMembersIdeaInput;
};


export type SystemMutationInvokeArgs = {
  data?: InputMaybe<SystemInvokeData>;
};


export type SystemMutationMemberAccountUpsertArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationMemberChangeOrganizationRoleArgs = {
  data: SystemMemberChangeOrganizationRoleInput;
};


export type SystemMutationMemberInvitationAcceptArgs = {
  data: SystemMemberInvitationAcceptInput;
};


export type SystemMutationMemberInvitationCancelArgs = {
  data: SystemMemberInvitationCancelInput;
};


export type SystemMutationMemberInvitationResendArgs = {
  data: SystemMemberInvitationResendInput;
};


export type SystemMutationMemberPaymentDetailsUpdateArgs = {
  data: SystemMemberPaymentDetailsUpdateMutationInput;
};


export type SystemMutationMemberResendVerifyAccountEmailArgs = {
  data: SystemMemberResendVerifyAccountEmaillInput;
};


export type SystemMutationNotificationUpdateArgs = {
  id: Scalars['String']['input'];
  status: NotificationStatusType;
};


export type SystemMutationOnboardingUpdateArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationOrganizationArchieUpgradeArgs = {
  data: SystemOrganizationUpgradeMutationInput;
};


export type SystemMutationOrganizationInviteUserArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  projectRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectWithEnvironmentRolesInput>>>;
  role: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserAcceptArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserCancelArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationMemberInviteArgs = {
  data: SystemMemberOrganizationInviteMutationInput;
};


export type SystemMutationOrganizationMemberResendInviteArgs = {
  data: SystemMemberOrganizationResendInviteMutationInput;
};


export type SystemMutationOrganizationPaymentDetailsUpdateArgs = {
  data: SystemOrganizationPaymentDetailsUpdateMutationInput;
};


export type SystemMutationOrganizationProjectUserRemoveArgs = {
  email: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationProjectUserShareArgs = {
  email: Scalars['String']['input'];
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput>>>;
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemOrganizationTypeEnum>;
};


export type SystemMutationOrganizationUserRemoveArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationUserUpdateArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  role: Scalars['String']['input'];
};


export type SystemMutationPartnerCreateArgs = {
  data: SystemPartnerGeneralCreateMutationInput;
};


export type SystemMutationPostMessageToQueueArgs = {
  data: SystemPostMessageToQueueInput;
};


export type SystemMutationProjectCreateArgs = {
  data: SystemProjectCreateMutationInput;
};


export type SystemMutationProjectDeleteArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectLeaveArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectUpdateArgs = {
  data: SystemProjectUpdateMutationInput;
};


export type SystemMutationRemoveOrganizationSettingsTechArgs = {
  organizationSettingsTechId: Scalars['ID']['input'];
};


export type SystemMutationRolePermissionsCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type SystemMutationSectionResultCreateArgs = {
  data: SystemSectionResultCreateMutationInput;
};


export type SystemMutationSectionResultGenerateArgs = {
  data: SystemSectionResultGenerateMutationInput;
};


export type SystemMutationSectionResultPropagateArgs = {
  data: SystemSectionResultPropagateUpdateMutationInput;
};


export type SystemMutationSectionResultRegenerateArgs = {
  data: SystemGraphQlSectionResultRegenerateMutationInput;
};


export type SystemMutationSectionResultUpdateArgs = {
  data: SystemSectionResultUpdateMutationInput;
};


export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};


export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};


export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};


export type SystemMutationUpdateOrganizationSettingsArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isWhiteLabelActive?: InputMaybe<Scalars['Boolean']['input']>;
  statementOfWork?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};


export type SystemMutationViewUpdateArgs = {
  data: SystemViewUpdateInput;
};


export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};


export type SystemMutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes = {
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type SystemOrganizationArchieBaseItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  isOrganizationOwner: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organizationCreatorRole?: Maybe<Scalars['String']['output']>;
  organizationKind?: Maybe<Scalars['String']['output']>;
  organizationSize?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationBaseItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationInvitation = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  emailFrom: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  firstNameFrom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastNameFrom?: Maybe<Scalars['String']['output']>;
  organization: SystemOrganizationBaseItem;
  role: Scalars['String']['output'];
};

export type SystemOrganizationItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemOrganizationItemImage>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo>>>;
};

export type SystemOrganizationItemImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** OrganizationPaymentDetailsUpdateMutationInput */
export type SystemOrganizationPaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

/** environmentId to add to with roles (array of ids). */
export type SystemOrganizationProjectEnvironmentRolesInput = {
  environmentId: Scalars['String']['input'];
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SystemOrganizationProjectItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

export type SystemOrganizationProjectWithEnvironmentRolesInput = {
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput>>>;
  projectId: Scalars['ID']['input'];
};

/** Representation of a organization settings. */
export type SystemOrganizationSettings = {
  id: Scalars['ID']['output'];
  /** Flag to indicate if white label is active. */
  isWhiteLabelActive?: Maybe<Scalars['Boolean']['output']>;
  /** Statement of work defined by the organization. */
  statementOfWork?: Maybe<Scalars['String']['output']>;
  /** Stack of technologies defined by the organization. */
  techStack: Array<SystemOrganizationSettingsTech>;
  /** White label image defined by the organization. */
  whiteLabelImage?: Maybe<SystemFileBaseInfo>;
};

/** Representation of a organization settings technology. */
export type SystemOrganizationSettingsTech = {
  /** Description of the tech stack. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Name of the given tech stack, example "React". */
  name: Scalars['String']['output'];
};

export enum SystemOrganizationTypeEnum {
  Agency = 'agency',
  Community = 'community',
  Company = 'company',
  Individual = 'individual'
}

/** Organization Upgrade Input */
export type SystemOrganizationUpgradeMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  licenseId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationCreatorRole: Scalars['String']['input'];
  organizationKind: Scalars['String']['input'];
  organizationSize: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type SystemOrganizationUserInfo = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<SystemOrganizationProjectItem>>>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SystemOrganizationWorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

/** SystemOrganizationsListArchieResponse output */
export type SystemOrganizationsListArchieResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationArchieBaseItem>;
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationBaseItem>;
};

export type SystemPartnerGeneralCreateMutationInput = {
  anythingElse?: InputMaybe<Scalars['String']['input']>;
  blueprintUrl: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  location: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SystemPartnerGeneralResponse = {
  AccountId: Scalars['String']['output'];
  anythingElse?: Maybe<Scalars['String']['output']>;
  blueprintUrl: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type SystemPartnerItemRespSingle = {
  AccountId: Scalars['String']['output'];
  anythingElse?: Maybe<Scalars['String']['output']>;
  blueprintUrl: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/** SystemPartnerItemResponse output */
export type SystemPartnerItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemPartnerItemRespSingle>;
};

export type SystemPartnerResponse = {
  partners: SystemPartnerItemResponse;
};

export enum SystemPaymentDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export enum SystemPaymentDetailsOriginProject {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemPaymentDetailsProjectResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<SystemPaymentDetailsOriginProject>;
};

export type SystemPaymentDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemPaymentDetailsOrigin;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput = {
  url?: Maybe<Scalars['String']['output']>;
};

export type SystemPlanForIdeaQueryResponse = {
  id?: Maybe<Scalars['ID']['output']>;
};

export type SystemPlanInfoIdea = {
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  planName?: Maybe<Scalars['String']['output']>;
};

export type SystemPostMessageToQueueInput = {
  message?: InputMaybe<Scalars['JSON']['input']>;
  routingKey?: InputMaybe<Scalars['String']['input']>;
};

/** ProjectCreateMutationInput */
export type SystemProjectCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  billingPlanId?: InputMaybe<Scalars['ID']['input']>;
  cardToken?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  ideaId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemProjectDeploymentsResponse = {
  deploymentsProject?: Maybe<SystemDeploymentProjectListResponse>;
};

export type SystemProjectFrontendResponse = {
  frontendUtilization?: Maybe<SystemFrontendUtilizationResponse>;
  frontendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
};

export type SystemProjectImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectItemRespSingle = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']['output']>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};

/** SystemProjectItemResponse output */
export type SystemProjectItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemProjectItemRespSingle>;
};

export type SystemProjectItemWs = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectPlanResponse = {
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
};

export type SystemProjectQuotasResponse = {
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
};

/** ProjectUpdateMutationInput */
export type SystemProjectUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemProjectUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectUserDetailsResponse = {
  apiHost: Scalars['String']['output'];
  authenticationInfo?: Maybe<Array<Maybe<SystemAuthenticationInfo>>>;
  backendUtilization?: Maybe<SystemBackendUtilizationResponse>;
  backendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  environmentsProject?: Maybe<SystemEnvironmentsProjectListResponse>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind: Scalars['String']['output'];
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<SystemMemberAccountInfo>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']['output']>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};

export type SystemProjectUserResponse = {
  myProjects: SystemProjectItemResponse;
  sharedProjects: SystemProjectItemResponse;
};

export type SystemPromptItemRespSingle = {
  basicSectionConfiguration?: Maybe<Scalars['JSON']['output']>;
  dependsOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  inputVariables: Scalars['JSON']['output'];
  iterableConfig?: Maybe<Scalars['JSON']['output']>;
  modelId: Scalars['ID']['output'];
  modelName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  outputSchema: Scalars['JSON']['output'];
  package: Scalars['String']['output'];
  sectionCategory?: Maybe<Scalars['String']['output']>;
  templateBody: Scalars['String']['output'];
};

/** SystemPromptItemResponse output */
export type SystemPromptItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemPromptItemRespSingle>;
};

export type SystemPromptsResponse = {
  prompts: SystemPromptItemResponse;
};

export type SystemQuery = {
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  asyncSessionStatus?: Maybe<SystemAsyncSessionStatusResponse>;
  basicSectionConfigurationForPromptQuery?: Maybe<SystemBasicSectionConfigurationForPromptExecutionResponse>;
  basicSectionConfigurationQuery?: Maybe<SystemBasicSectionConfigurationResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput>;
  ciGenerateAsync?: Maybe<AsyncSession>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput>;
  ciStatus?: Maybe<SystemCiStatusOutput>;
  deployStatus: SystemDeployStatusResult;
  ensureOrganizationSettings: SystemOrganizationSettings;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse>;
  environmentMember?: Maybe<SystemEnvironmentMember>;
  environmentMembersList?: Maybe<SystemEnvironmentMembersListResponse>;
  environmentSettings?: Maybe<SystemEnvironmentSettings>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse>;
  fileUploadSignInfo?: Maybe<SystemFileUploadSignInfo>;
  functionsList?: Maybe<SystemFunctionListResponse>;
  functionsVersionCheck?: Maybe<SystemFunctionInfoCheck>;
  getCouponQuery?: Maybe<SystemGetCouponResponse>;
  getCurrentPlanForIdeaQuery?: Maybe<SystemPlanForIdeaQueryResponse>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList>>>;
  getInvitationIdeaQuery?: Maybe<SystemGetInvitationIdeaResponse>;
  ideaDetails?: Maybe<SystemIdeaDetailsResponse>;
  ideaMembers?: Maybe<SystemMembersIdeaList>;
  ideaSectionDetails?: Maybe<SystemIdeaDetailsResponse>;
  ideasDemoListQuery?: Maybe<SystemIdeaUserResponse>;
  ideasListQuery?: Maybe<SystemIdeaUserResponse>;
  ideasUserListQuery?: Maybe<SystemIdeaUserResponse>;
  inboxEventsList?: Maybe<SystemInboxEventsListResponse>;
  introspection?: Maybe<IntrospectionQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported. Use `system.logsListFiltered` instead. */
  logsList?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  logsListFiltered?: Maybe<SystemLogsListFilteredResponse>;
  memberAccount?: Maybe<SystemMemberAccountInfo>;
  memberAccountFromEmail?: Maybe<SystemMemberAccountInfo>;
  memberBillingHistory: SystemBillingInvoicesListResponse;
  memberFromOrganization?: Maybe<SystemMemberOrganizationAccountInfo>;
  memberInvitation?: Maybe<SystemMemberInvitation>;
  memberInvitationsList?: Maybe<SystemMemberInvitationsList>;
  memberPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  membersByOrganization?: Maybe<SystemMembersAccountList>;
  organizationBillingHistory: SystemBillingInvoicesListResponse;
  organizationBillingPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  organizationById?: Maybe<SystemOrganizationItem>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation>;
  organizationPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationsListByArchieUser?: Maybe<SystemOrganizationsListArchieResponse>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse>;
  partnerListQuery?: Maybe<SystemPartnerResponse>;
  projectDeployments?: Maybe<SystemProjectDeploymentsResponse>;
  projectFrontend?: Maybe<SystemProjectFrontendResponse>;
  projectInfoDetails?: Maybe<SystemProjectUserDetailsResponse>;
  projectPlan?: Maybe<SystemProjectPlanResponse>;
  projectQuotas?: Maybe<SystemProjectQuotasResponse>;
  projectsUserListQuery?: Maybe<SystemProjectUserResponse>;
  promptListQuery?: Maybe<SystemPromptsResponse>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  userBillingConfigurationArchie: SystemUserBillingConfigurationResponse;
  userInvitationsList?: Maybe<SystemUserInvitationList>;
  viewDryRun?: Maybe<SystemViewDryRunOutput>;
  workspaceName?: Maybe<Scalars['String']['output']>;
  workspacePaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  workspacesFrontendList?: Maybe<SystemWorkspaceListResponse>;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};


export type SystemQueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type SystemQueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<SystemBillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<SystemBillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryCiGenerateArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiGenerateAsyncArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiPlanArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type SystemQueryEnsureOrganizationSettingsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryEnvironmentBackupsListArgs = {
  environmentName?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryEnvironmentMemberArgs = {
  filter?: InputMaybe<SystemEnvironmentMemberFilter>;
};


export type SystemQueryEnvironmentMembersListArgs = {
  environmentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<SystemEnvironmentMembersListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemEnvironmentMembersListSort>>;
};


export type SystemQueryEnvironmentsListArgs = {
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SystemFunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<SystemFunctionInfoOrderBy>>>;
};


export type SystemQueryGetCouponQueryArgs = {
  couponName: Scalars['String']['input'];
};


export type SystemQueryGetEnvironmentRolesArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryGetInvitationIdeaQueryArgs = {
  id: Scalars['ID']['input'];
};


export type SystemQueryIdeaDetailsArgs = {
  demoMode?: InputMaybe<Scalars['Boolean']['input']>;
  ideaId: Scalars['ID']['input'];
};


export type SystemQueryIdeaMembersArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryIdeaSectionDetailsArgs = {
  ideaId: Scalars['ID']['input'];
  packageIdea: Scalars['ID']['input'];
  sectionCategory: Scalars['ID']['input'];
};


export type SystemQueryIdeasUserListQueryArgs = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryInboxEventsListArgs = {
  filter?: InputMaybe<InboxEventsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListFilteredArgs = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryMemberAccountFromEmailArgs = {
  email: Scalars['String']['input'];
};


export type SystemQueryMemberBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideOrganizationInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryMemberFromOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryMemberInvitationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryMembersByOrganizationArgs = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideWorkspaceInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryOrganizationBillingPlanArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryOrganizationByIdArgs = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationInvitationByIdArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationPaymentDetailsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryProjectDeploymentsArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectFrontendArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectInfoDetailsArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectPlanArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectQuotasArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectsUserListQueryArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type SystemQueryTablesListArgs = {
  filter?: InputMaybe<SystemTableListFilter>;
};


export type SystemQueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryUserBillingConfigurationArchieArgs = {
  ideaId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};


export type SystemQueryWorkspacePaymentDetailsArgs = {
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relation */
export type SystemRelation = {
  refField?: Maybe<SystemTableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: SystemTable;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Schema Origin */
export type SystemSchemaOrigin = {
  provider?: Maybe<Scalars['String']['output']>;
  type: SystemSchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

export type SystemSectionResultCreateMutationInput = {
  archieId: Scalars['ID']['input'];
  composedPrompt: Scalars['JSON']['input'];
  content: Scalars['JSON']['input'];
  cost?: InputMaybe<Scalars['Float']['input']>;
  custom?: InputMaybe<Scalars['Boolean']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  failureReason?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isRegenerate?: InputMaybe<Scalars['Boolean']['input']>;
  lLMApiCalls?: InputMaybe<Scalars['Int']['input']>;
  modelId: Scalars['ID']['input'];
  package: Scalars['String']['input'];
  prompt: Scalars['ID']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  sectionCategory: Scalars['String']['input'];
  status?: InputMaybe<SystemStatusIdea>;
  tokensInput?: InputMaybe<Scalars['Int']['input']>;
  tokensOutput?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemSectionResultGenerateMutationInput = {
  archieId: Scalars['ID']['input'];
  contextData?: InputMaybe<Scalars['JSON']['input']>;
  idea: Scalars['ID']['input'];
  iterableID?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  sectionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemSectionResultPropagateUpdateMutationInput = {
  archieId: Scalars['ID']['input'];
  content: Scalars['JSON']['input'];
  package: Scalars['String']['input'];
  sectionCategory: Scalars['String']['input'];
};

export type SystemSectionResultResponse = {
  sectionId: Scalars['ID']['output'];
  sectionResultId: Scalars['ID']['output'];
};

export type SystemSectionResultUpdateMutationInput = {
  archieId: Scalars['ID']['input'];
  overviewId?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  sectionCategories?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes = {
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** StatusIdea */
export enum SystemStatusIdea {
  Completed = 'Completed',
  Locked = 'Locked',
  NeedsAttention = 'NeedsAttention',
  Open = 'Open'
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes = {
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

/** Table */
export type SystemTable = {
  application?: Maybe<SystemApplication>;
  attributes?: Maybe<SystemTableAttributes>;
  dataFeatures: SystemTableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<SystemTableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<SystemTableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<SystemTableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
};

/** Table Attributes */
export type SystemTableAttributes = SystemViewAttributes;

/** Table Create Input */
export type SystemTableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type SystemTableDataFeatures = {
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type SystemTableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type SystemTableField = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  dataFeatures: SystemFieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  relation?: Maybe<SystemRelation>;
  schemaFeatures: SystemFieldSchemaFeatures;
  table: SystemTable;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<SystemFieldType>;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationUpdateInput>;
};

/** Table Index */
export type SystemTableIndex = {
  columns?: Maybe<Array<SystemTableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: SystemTable;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type SystemTableIndexColumn = {
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput = {
  name: Scalars['String']['input'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type SystemTableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<SystemTableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type SystemTableListResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemTable>>>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures = {
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures = {
  computedFields: Scalars['Boolean']['output'];
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures = {
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type SystemTableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Team Invitation Details */
export type SystemTeamInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type SystemTransferIdeaOwnerMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
};

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type SystemUserBillingConfigurationResponse = {
  availablePlans: Array<SystemBillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** User Invitation Details */
export type SystemUserInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type SystemUserInvitationList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemUserInvitationDetails>>>;
};

/** User Type */
export enum SystemUserType {
  Agency = 'Agency',
  Corporation = 'Corporation',
  MyOwn = 'MyOwn',
  Team = 'Team'
}

/** View Attributes */
export type SystemViewAttributes = {
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type SystemViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type SystemViewDryRunOutput = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type SystemViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<SystemWorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemWorkspaceCreateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput = {
  workspaceId: Scalars['ID']['input'];
};

export type SystemWorkspaceImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemWorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<SystemDeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  project?: Maybe<SystemProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<SystemFrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum SystemWorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemWorkspaceItem>;
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWorkspaceUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Table */
export type Table = {
  application?: Maybe<Application>;
  attributes?: Maybe<TableAttributes>;
  dataFeatures: TableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<TableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<TableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<TableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
};

/** Table Attributes */
export type TableAttributes = ViewAttributes;

/** Table Create Input */
export type TableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type TableDataFeatures = {
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type TableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type TableField = {
  computedMode?: Maybe<ComputedFieldMode>;
  dataFeatures: FieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: FieldType;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  relation?: Maybe<Relation>;
  schemaFeatures: FieldSchemaFeatures;
  table: Table;
};

/** Table Field Create Input */
export type TableFieldCreateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type TableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<FieldType>;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationUpdateInput>;
};

/** Table Index */
export type TableIndex = {
  columns?: Maybe<Array<TableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: Table;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type TableIndexColumn = {
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type TableIndexColumnInput = {
  name: Scalars['String']['input'];
};

export enum TableIndexType {
  Index = 'INDEX',
  Unique = 'UNIQUE'
}

/** Table List Application Filter */
export type TableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type TableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<TableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type TableListResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<Table>>>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures = {
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type TableSchemaFeatures = {
  computedFields: Scalars['Boolean']['output'];
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures = {
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type TableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type TrimFunctionArguments = {
  mode?: InputMaybe<StringTrimMode>;
  str: Scalars['String']['input'];
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type UpdateByFilterBooleanSwitchInput = {
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByFilterIntInput = {
  add?: InputMaybe<Scalars['Int']['input']>;
  div?: InputMaybe<Scalars['Int']['input']>;
  mod?: InputMaybe<Scalars['Int']['input']>;
  mult?: InputMaybe<Scalars['Int']['input']>;
  pow?: InputMaybe<Scalars['Int']['input']>;
  prec?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
  sqrt?: InputMaybe<Scalars['Boolean']['input']>;
  sub?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateByFilterJsonInput = {
  set?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateByFilterListStringInput = {
  insert?: InputMaybe<UpdateByFilterListStringInsertOperationInput>;
  push?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  removeValue?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  swap?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unshift?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateByFilterListStringInsertOperationInput = {
  start: Scalars['Int']['input'];
  values: Array<Scalars['String']['input']>;
};

export type UpdateByFilterStringInput = {
  postfix?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByFilterStringSwitchInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter = {
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  every?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadcareSignInfoResponse = {
  expire: Scalars['String']['output'];
  publicKey: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type User = {
  Notifications?: Maybe<NotificationListResponse>;
  Reports?: Maybe<ReportListResponse>;
  SearchCriteria?: Maybe<SearchCriterionListResponse>;
  SubscriptionsApps?: Maybe<SubscriptionsAppListResponse>;
  WorkOrders?: Maybe<WorkOrderListResponse>;
  _description?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<File>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is8base?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<UserPermissionList>;
  roles?: Maybe<RoleListResponse>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<NotificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSort>>;
};


export type UserReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ReportGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ReportOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReportSort>>;
};


export type UserSearchCriteriaArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SearchCriterionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SearchCriterionGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SearchCriterionOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SearchCriterionSort>>;
};


export type UserSubscriptionsAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SubscriptionsAppFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SubscriptionsAppGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SubscriptionsAppOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SubscriptionsAppSort>>;
};


export type UserWorkOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<WorkOrderGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkOrderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkOrderSort>>;
};


export type UserPermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type UserBillingConfigurationResponse = {
  availablePlans: Array<BillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** Users create input */
export type UserCreateInput = {
  Notifications?: InputMaybe<UsersNotificationsRelationInput>;
  Reports?: InputMaybe<UsersReportsRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users create many input */
export type UserCreateManyInput = {
  avatar?: InputMaybe<UsersAvatarManyRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesManyRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users delete input */
export type UserDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  is8base?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFilter = {
  AND?: InputMaybe<Array<UserFilter>>;
  Notifications?: InputMaybe<NotificationRelationFilter>;
  OR?: InputMaybe<Array<UserFilter>>;
  Reports?: InputMaybe<ReportRelationFilter>;
  SearchCriteria?: InputMaybe<SearchCriterionRelationFilter>;
  SubscriptionsApps?: InputMaybe<SubscriptionsAppRelationFilter>;
  WorkOrders?: InputMaybe<WorkOrderRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<FileFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type UserGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: UserGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type UserGroupByQuery = {
  Notifications?: InputMaybe<NotificationGroupByQuery>;
  Reports?: InputMaybe<ReportGroupByQuery>;
  SearchCriteria?: InputMaybe<SearchCriterionGroupByQuery>;
  SubscriptionsApps?: InputMaybe<SubscriptionsAppGroupByQuery>;
  WorkOrders?: InputMaybe<WorkOrderGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  avatar?: InputMaybe<FileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  email?: InputMaybe<Array<GroupByField>>;
  firstName?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  is8base?: InputMaybe<Array<GroupByField>>;
  lastName?: InputMaybe<Array<GroupByField>>;
  origin?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** User Invitation Details */
export type UserInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<InvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type UserInvitationList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
};

export type UserKeyFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserListResponse output */
export type UserListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<User>;
};

/** UserLoginInput */
export type UserLoginInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  fromInvitation?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

/** UserManyResponse output */
export type UserManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<User>;
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Users subscription payload */
export type UserPayload = {
  mutation: MutationType;
  node?: Maybe<User>;
  previousValues?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** User Permission */
export type UserPermission = {
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

/** User Permission List */
export type UserPermissionList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<UserPermission>>;
};

export type UserRelationFilter = {
  every?: InputMaybe<UserFilter>;
  none?: InputMaybe<UserFilter>;
  some?: InputMaybe<UserFilter>;
};

export type UserSort = {
  avatar?: InputMaybe<FileSort>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is8base?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  origin?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Users subscription filter */
export type UserSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<UserFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Users update input */
export type UserUpdateByFilterInput = {
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  firstName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  is8base?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  isOwner?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  lastName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  origin?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  timezone?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Users update input */
export type UserUpdateInput = {
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Reports?: InputMaybe<UsersReportsUpdateRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaUpdateRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsUpdateRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type User_PermissionFilter = {
  AND?: InputMaybe<Array<User_PermissionFilter>>;
  Notifications?: InputMaybe<Notification_PermissionRelationFilter>;
  OR?: InputMaybe<Array<User_PermissionFilter>>;
  Reports?: InputMaybe<Report_PermissionRelationFilter>;
  SearchCriteria?: InputMaybe<SearchCriterion_PermissionRelationFilter>;
  SubscriptionsApps?: InputMaybe<SubscriptionsApp_PermissionRelationFilter>;
  WorkOrders?: InputMaybe<WorkOrder_PermissionRelationFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<File_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type User_PermissionRelationFilter = {
  every?: InputMaybe<User_PermissionFilter>;
  none?: InputMaybe<User_PermissionFilter>;
  some?: InputMaybe<User_PermissionFilter>;
};

/** Notifications create input from user_id */
export type User_Id_NotificationCreateInput = {
  /** Indicates if the notification has been read. */
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  /** The notification message content. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Type of the notification (e.g., compliance, maintenance, update). */
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<NotificationsUser_IdRelationInput>;
};

/** Notifications update input from user_id */
export type User_Id_NotificationUpdateInput = {
  data: NotificationUpdateInput;
  filter?: InputMaybe<NotificationKeyFilter>;
};

/** Reports create input from user_id */
export type User_Id_ReportCreateInput = {
  /** Content of the report in JSON format. */
  content?: InputMaybe<Scalars['JSON']['input']>;
  /** Date when the report was generated. */
  generated_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Title of the report. */
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<ReportsUser_IdRelationInput>;
};

/** Reports update input from user_id */
export type User_Id_ReportUpdateInput = {
  data: ReportUpdateInput;
  filter?: InputMaybe<ReportKeyFilter>;
};

/** SearchCriteria create input from user_id */
export type User_Id_SearchCriterionCreateInput = {
  /** Search criteria details in JSON format. */
  criteria?: InputMaybe<Scalars['JSON']['input']>;
  /** Name of the saved search criteria. */
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<SearchCriteriaUser_IdRelationInput>;
};

/** SearchCriteria update input from user_id */
export type User_Id_SearchCriterionUpdateInput = {
  data: SearchCriterionUpdateInput;
  filter?: InputMaybe<SearchCriterionKeyFilter>;
};

/** SubscriptionsApps create input from user_id */
export type User_Id_SubscriptionsAppCreateInput = {
  /** Description of the subscription tier. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Price of the subscription tier. */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the subscription tier. */
  tier_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<SubscriptionsAppsUser_IdRelationInput>;
};

/** SubscriptionsApps update input from user_id */
export type User_Id_SubscriptionsAppUpdateInput = {
  data: SubscriptionsAppUpdateInput;
  filter?: InputMaybe<SubscriptionsAppKeyFilter>;
};

/** Users relation input */
export type UsersAvatarManyRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
};

/** Users relation input */
export type UsersAvatarRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
  disconnect?: InputMaybe<FileKeyFilter>;
  reconnect?: InputMaybe<FileKeyFilter>;
  update?: InputMaybe<Users_Avatar_FileUpdateInput>;
};

/** Users relation input */
export type UsersNotificationsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<User_Id_NotificationCreateInput>>>;
};

/** Users relation input */
export type UsersNotificationsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<User_Id_NotificationUpdateInput>>>;
};

/** Users relation input */
export type UsersReportsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<User_Id_ReportCreateInput>>>;
};

/** Users relation input */
export type UsersReportsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<User_Id_ReportUpdateInput>>>;
};

/** Users relation input */
export type UsersRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** Users relation input */
export type UsersRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>;
};

/** Users relation input */
export type UsersSearchCriteriaRelationInput = {
  create?: InputMaybe<Array<InputMaybe<User_Id_SearchCriterionCreateInput>>>;
};

/** Users relation input */
export type UsersSearchCriteriaUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<User_Id_SearchCriterionUpdateInput>>>;
};

/** Users relation input */
export type UsersSubscriptionsAppsRelationInput = {
  create?: InputMaybe<Array<InputMaybe<User_Id_SubscriptionsAppCreateInput>>>;
};

/** Users relation input */
export type UsersSubscriptionsAppsUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<User_Id_SubscriptionsAppUpdateInput>>>;
};

/** Users relation input */
export type UsersWorkOrdersRelationInput = {
  create?: InputMaybe<Array<InputMaybe<Vendor_Id_WorkOrderCreateInput>>>;
};

/** Users relation input */
export type UsersWorkOrdersUpdateRelationInput = {
  update?: InputMaybe<Array<InputMaybe<Vendor_Id_WorkOrderUpdateInput>>>;
};

/** Roles create input from users */
export type Users_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

/** WorkOrders create input from vendor_id */
export type Vendor_Id_WorkOrderCreateInput = {
  /** Date when the task was assigned. */
  assigned_date?: InputMaybe<Scalars['DateTime']['input']>;
  building_id?: InputMaybe<WorkOrdersBuilding_IdRelationInput>;
  /** Date when the task was completed. */
  completion_date: Scalars['DateTime']['input'];
  /** Current status of the work order (e.g., pending, completed). */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Description of the maintenance task. */
  task_description?: InputMaybe<Scalars['String']['input']>;
  vendor_id?: InputMaybe<WorkOrdersVendor_IdRelationInput>;
};

/** WorkOrders update input from vendor_id */
export type Vendor_Id_WorkOrderUpdateInput = {
  data: WorkOrderUpdateInput;
  filter?: InputMaybe<WorkOrderKeyFilter>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput = {
  email: Scalars['String']['input'];
};

/** View Attributes */
export type ViewAttributes = {
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type ViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type ViewDryRunOutput = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type ViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** Tracks maintenance tasks assigned to Maintenance Vendors. */
export type WorkOrder = {
  _description?: Maybe<Scalars['String']['output']>;
  /** Date when the task was assigned. */
  assigned_date?: Maybe<Scalars['DateTime']['output']>;
  /** Reference to the building where the task is to be performed. */
  building_id?: Maybe<Building>;
  /** Date when the task was completed. */
  completion_date?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Current status of the work order (e.g., pending, completed). */
  status?: Maybe<Scalars['String']['output']>;
  /** Description of the maintenance task. */
  task_description?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Reference to the maintenance vendor assigned to the task. */
  vendor_id?: Maybe<User>;
};

/** WorkOrders create input */
export type WorkOrderCreateInput = {
  /** Date when the task was assigned. */
  assigned_date?: InputMaybe<Scalars['DateTime']['input']>;
  building_id?: InputMaybe<WorkOrdersBuilding_IdRelationInput>;
  /** Date when the task was completed. */
  completion_date: Scalars['DateTime']['input'];
  /** Current status of the work order (e.g., pending, completed). */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Description of the maintenance task. */
  task_description?: InputMaybe<Scalars['String']['input']>;
  vendor_id?: InputMaybe<WorkOrdersVendor_IdRelationInput>;
};

/** WorkOrders create many input */
export type WorkOrderCreateManyInput = {
  /** Date when the task was assigned. */
  assigned_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when the task was completed. */
  completion_date: Scalars['DateTime']['input'];
  /** Current status of the work order (e.g., pending, completed). */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Description of the maintenance task. */
  task_description?: InputMaybe<Scalars['String']['input']>;
};

/** WorkOrders delete input */
export type WorkOrderDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** WorkOrderFieldsPermissions create input */
export type WorkOrderFieldsPermissions = {
  assigned_date?: InputMaybe<Scalars['Boolean']['input']>;
  completion_date?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  task_description?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkOrderFilter = {
  AND?: InputMaybe<Array<WorkOrderFilter>>;
  OR?: InputMaybe<Array<WorkOrderFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  assigned_date?: InputMaybe<DateTimePredicate>;
  building_id?: InputMaybe<BuildingFilter>;
  completion_date?: InputMaybe<DateTimePredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  status?: InputMaybe<StringPredicate>;
  task_description?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  vendor_id?: InputMaybe<UserFilter>;
};

export type WorkOrderGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: WorkOrderGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type WorkOrderGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  assigned_date?: InputMaybe<Array<GroupByField>>;
  building_id?: InputMaybe<BuildingGroupByQuery>;
  completion_date?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  status?: InputMaybe<Array<GroupByField>>;
  task_description?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  vendor_id?: InputMaybe<UserGroupByQuery>;
};

export type WorkOrderKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** WorkOrderListResponse output */
export type WorkOrderListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<WorkOrder>;
};

/** WorkOrderManyResponse output */
export type WorkOrderManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<WorkOrder>;
};

/** No longer supported. Use `sort` instead. */
export enum WorkOrderOrderBy {
  AssignedDateAsc = 'assigned_date_ASC',
  AssignedDateDesc = 'assigned_date_DESC',
  CompletionDateAsc = 'completion_date_ASC',
  CompletionDateDesc = 'completion_date_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TaskDescriptionAsc = 'task_description_ASC',
  TaskDescriptionDesc = 'task_description_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** WorkOrders subscription payload */
export type WorkOrderPayload = {
  mutation: MutationType;
  node?: Maybe<WorkOrder>;
  previousValues?: Maybe<WorkOrder>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type WorkOrderRelationFilter = {
  every?: InputMaybe<WorkOrderFilter>;
  none?: InputMaybe<WorkOrderFilter>;
  some?: InputMaybe<WorkOrderFilter>;
};

export type WorkOrderSort = {
  assigned_date?: InputMaybe<SortOrder>;
  building_id?: InputMaybe<BuildingSort>;
  completion_date?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  task_description?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vendor_id?: InputMaybe<UserSort>;
};

/** WorkOrders subscription filter */
export type WorkOrderSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<WorkOrderFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** WorkOrders update input */
export type WorkOrderUpdateByFilterInput = {
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  task_description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** WorkOrders update input */
export type WorkOrderUpdateInput = {
  /** Date when the task was assigned. */
  assigned_date?: InputMaybe<Scalars['DateTime']['input']>;
  building_id?: InputMaybe<WorkOrdersBuilding_IdUpdateRelationInput>;
  /** Date when the task was completed. */
  completion_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Current status of the work order (e.g., pending, completed). */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Description of the maintenance task. */
  task_description?: InputMaybe<Scalars['String']['input']>;
  vendor_id?: InputMaybe<WorkOrdersVendor_IdUpdateRelationInput>;
};

export type WorkOrder_PermissionFilter = {
  AND?: InputMaybe<Array<WorkOrder_PermissionFilter>>;
  OR?: InputMaybe<Array<WorkOrder_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  assigned_date?: InputMaybe<DateTimePredicate>;
  building_id?: InputMaybe<Building_PermissionFilter>;
  completion_date?: InputMaybe<DateTimePredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  status?: InputMaybe<StringPredicate>;
  task_description?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  vendor_id?: InputMaybe<User_PermissionFilter>;
};

export type WorkOrder_PermissionRelationFilter = {
  every?: InputMaybe<WorkOrder_PermissionFilter>;
  none?: InputMaybe<WorkOrder_PermissionFilter>;
  some?: InputMaybe<WorkOrder_PermissionFilter>;
};

/** WorkOrders relation input */
export type WorkOrdersBuilding_IdRelationInput = {
  create?: InputMaybe<WorkOrders_BuildingCreateInput>;
};

/** WorkOrders relation input */
export type WorkOrdersBuilding_IdUpdateRelationInput = {
  update?: InputMaybe<WorkOrders_BuildingUpdateInput>;
};

/** WorkOrders relation input */
export type WorkOrdersVendor_IdRelationInput = {
  create?: InputMaybe<WorkOrders_UserCreateInput>;
};

/** WorkOrders relation input */
export type WorkOrdersVendor_IdUpdateRelationInput = {
  update?: InputMaybe<WorkOrders_UserUpdateInput>;
};

/** Buildings create input from WorkOrders */
export type WorkOrders_BuildingCreateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Buildings update input from WorkOrders */
export type WorkOrders_BuildingUpdateInput = {
  AirQuality?: InputMaybe<BuildingsAirQualityUpdateRelationInput>;
  Certifications?: InputMaybe<BuildingsCertificationsUpdateRelationInput>;
  ComplianceRecords?: InputMaybe<BuildingsComplianceRecordsUpdateRelationInput>;
  Documents?: InputMaybe<BuildingsDocumentsUpdateRelationInput>;
  EnergyEfficiency?: InputMaybe<BuildingsEnergyEfficiencyUpdateRelationInput>;
  EnvironmentalData?: InputMaybe<BuildingsEnvironmentalDataUpdateRelationInput>;
  Equipment?: InputMaybe<BuildingsEquipmentUpdateRelationInput>;
  Improvements?: InputMaybe<BuildingsImprovementsUpdateRelationInput>;
  MaintenanceRecords?: InputMaybe<BuildingsMaintenanceRecordsUpdateRelationInput>;
  Permits?: InputMaybe<BuildingsPermitsUpdateRelationInput>;
  WorkOrders?: InputMaybe<BuildingsWorkOrdersUpdateRelationInput>;
  /** The address of the building. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the building is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country where the building is located. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The name of the building. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The state where the building is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the building's location. */
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** Users create input from WorkOrders */
export type WorkOrders_UserCreateInput = {
  Notifications: UsersNotificationsRelationInput;
  Reports: UsersReportsRelationInput;
  SearchCriteria: UsersSearchCriteriaRelationInput;
  SubscriptionsApps: UsersSubscriptionsAppsRelationInput;
  WorkOrders?: InputMaybe<UsersWorkOrdersRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from WorkOrders */
export type WorkOrders_UserUpdateInput = {
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Reports?: InputMaybe<UsersReportsUpdateRelationInput>;
  SearchCriteria?: InputMaybe<UsersSearchCriteriaUpdateRelationInput>;
  SubscriptionsApps?: InputMaybe<UsersSubscriptionsAppsUpdateRelationInput>;
  WorkOrders?: InputMaybe<UsersWorkOrdersUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<WorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkspaceCreateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput = {
  workspaceId: Scalars['ID']['input'];
};

export type WorkspaceImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo = {
  name?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<Scalars['ID']['output']>;
};

export type WorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<DeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<BillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<BillingCurrentPlanResponse>;
  project?: Maybe<ProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<FrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum WorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** WorkspaceListResponse output */
export type WorkspaceListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<WorkspaceItem>;
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IsAllowedCallbackUrlQueryResponse = {
  isEnabled: Scalars['Boolean']['output'];
};

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Behavior = {
  __typename?: 'Behavior';
  id: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['Int'];
  group: Group;
  groupId: Scalars['String'];
  feedback: Array<Maybe<Feedback>>;
};

export type CreateBehaviorInput = {
  name: Scalars['String'];
  value: Scalars['Int'];
  groupId: Scalars['String'];
};

export type CreateEnrollmentByEnrollIdInput = {
  userId: Scalars['String'];
  enrollId: Scalars['String'];
};

export type CreateEnrollmentInput = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
};

export type CreateFeedbackInput = {
  userId: Scalars['String'];
  behaviorId?: Maybe<Scalars['String']>;
  groupId: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['Int'];
};

export type CreateGroupInput = {
  type: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  enrollId?: Maybe<Scalars['String']>;
  ownerId: Scalars['String'];
};

export type CreateRedeemedInput = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
  name: Scalars['String'];
  cost: Scalars['Int'];
  response?: Maybe<Scalars['String']>;
};

export type CreateRewardInput = {
  name: Scalars['String'];
  cost: Scalars['Int'];
  responseRequired: Scalars['Boolean'];
  responsePrompt?: Maybe<Scalars['String']>;
  groupId: Scalars['String'];
};

export type CreateUserInput = {
  uid: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
};

export type CreateUserRoleInput = {
  name: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type CreatedManyReturn = {
  __typename?: 'CreatedManyReturn';
  id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};



export type Email = {
  __typename?: 'Email';
  id?: Maybe<Scalars['String']>;
  studentEmail: Scalars['String'];
  teacherEmail: Scalars['String'];
  groupId: Scalars['String'];
  groupName: Scalars['String'];
  message: Scalars['String'];
  subject: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
};

export type Enrollment = {
  __typename?: 'Enrollment';
  id: Scalars['String'];
  user: User;
  userId: Scalars['String'];
  group: Group;
  groupId: Scalars['String'];
};

export type Feedback = {
  __typename?: 'Feedback';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  value: Scalars['Int'];
  user: User;
  userId: Scalars['String'];
  behavior?: Maybe<Behavior>;
  behaviorId?: Maybe<Scalars['String']>;
  groupId: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  enrollId?: Maybe<Scalars['String']>;
  owner: User;
  ownerId: Scalars['String'];
  archived: Scalars['Boolean'];
  enrollments: Array<Maybe<Enrollment>>;
  behaviors: Array<Maybe<Behavior>>;
  rewards: Array<Maybe<Reward>>;
  feedback: Array<Maybe<Feedback>>;
};



export type Mutation = {
  __typename?: 'Mutation';
  approveRedeemed: Redeemed;
  approveRedeemeds: Array<Redeemed>;
  archiveGroup: Group;
  createAdminUserRole: UserRole;
  createBehavior: Behavior;
  createEnrollment: Enrollment;
  createEnrollmentByEnrollId: Enrollment;
  createFeedback: Feedback;
  createFeedbacks: CreatedManyReturn;
  createGroup: Group;
  createRedeemed: Redeemed;
  createReward: Reward;
  createSuperUserRole: UserRole;
  createUser: User;
  createUserRole: UserRole;
  deleteBehavior: Behavior;
  deleteEnrollment: Enrollment;
  deleteEnrollmentByStudent: Enrollment;
  deleteFeedback: Feedback;
  deleteGroup: Group;
  deleteRedeemed: Redeemed;
  deleteReward: Reward;
  deleteUser: User;
  deleteUserRole: UserRole;
  sendRedeemedNotification: Email;
  updateBehavior: Behavior;
  updateEnrollment: Enrollment;
  updateFeedback: Feedback;
  updateGroup: Group;
  updateRedeemed: Redeemed;
  updateReward: Reward;
  updateUser: User;
  updateUserRole: UserRole;
};


export type MutationApproveRedeemedArgs = {
  id: Scalars['String'];
};


export type MutationApproveRedeemedsArgs = {
  ids: Array<UpdateRedeemedManyInput>;
};


export type MutationArchiveGroupArgs = {
  id: Scalars['String'];
};


export type MutationCreateAdminUserRoleArgs = {
  input: CreateUserRoleInput;
};


export type MutationCreateBehaviorArgs = {
  input: CreateBehaviorInput;
};


export type MutationCreateEnrollmentArgs = {
  input: CreateEnrollmentInput;
};


export type MutationCreateEnrollmentByEnrollIdArgs = {
  input: CreateEnrollmentByEnrollIdInput;
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationCreateFeedbacksArgs = {
  input?: Maybe<Array<CreateFeedbackInput>>;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateRedeemedArgs = {
  input: CreateRedeemedInput;
};


export type MutationCreateRewardArgs = {
  input: CreateRewardInput;
};


export type MutationCreateSuperUserRoleArgs = {
  input: CreateUserRoleInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserRoleArgs = {
  input: CreateUserRoleInput;
};


export type MutationDeleteBehaviorArgs = {
  id: Scalars['String'];
};


export type MutationDeleteEnrollmentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteEnrollmentByStudentArgs = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
};


export type MutationDeleteFeedbackArgs = {
  id: Scalars['String'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRedeemedArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRewardArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserRoleArgs = {
  id: Scalars['String'];
};


export type MutationSendRedeemedNotificationArgs = {
  input: RedeemedNotification;
};


export type MutationUpdateBehaviorArgs = {
  id: Scalars['String'];
  input: UpdateBehaviorInput;
};


export type MutationUpdateEnrollmentArgs = {
  id: Scalars['String'];
  input: UpdateEnrollmentInput;
};


export type MutationUpdateFeedbackArgs = {
  id: Scalars['String'];
  input: UpdateFeedbackInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['String'];
  input: UpdateGroupInput;
};


export type MutationUpdateRedeemedArgs = {
  id: Scalars['String'];
  input: UpdateRedeemedInput;
};


export type MutationUpdateRewardArgs = {
  id: Scalars['String'];
  input: UpdateRewardInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UpdateUserInput;
};


export type MutationUpdateUserRoleArgs = {
  id: Scalars['String'];
  input: UpdateUserRoleInput;
};

export type Query = {
  __typename?: 'Query';
  behavior?: Maybe<Behavior>;
  behaviors: Array<Behavior>;
  behaviorsOfGroup: Array<Behavior>;
  enrollment?: Maybe<Enrollment>;
  enrollments: Array<Enrollment>;
  enrollmentsOfGroup: Array<Enrollment>;
  enrollmentsOfUser: Array<Enrollment>;
  feedback?: Maybe<Feedback>;
  feedbackOfGroup: Array<Feedback>;
  feedbackOfUser: Array<Feedback>;
  feedbackOfUserForGroup: Array<Feedback>;
  feedbacks: Array<Feedback>;
  group?: Maybe<Group>;
  groups: Array<Group>;
  groupsEnrolled: Array<Group>;
  groupsOwned: Array<Group>;
  redeemed?: Maybe<Redeemed>;
  redeemedOfGroup: Array<Redeemed>;
  redeemedOfGroupReviewed: Array<Redeemed>;
  redeemedOfGroupToReview: Array<Redeemed>;
  redeemedOfUser: Array<Redeemed>;
  redeemedOfUserForGroup: Array<Redeemed>;
  redeemeds: Array<Redeemed>;
  redwood?: Maybe<Redwood>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  rewardsOfGroup: Array<Reward>;
  totalUserPoints: Scalars['Int'];
  user?: Maybe<User>;
  userRole?: Maybe<UserRole>;
  userRoles: Array<UserRole>;
  users: Array<User>;
};


export type QueryBehaviorArgs = {
  id: Scalars['String'];
};


export type QueryBehaviorsOfGroupArgs = {
  groupId: Scalars['String'];
};


export type QueryEnrollmentArgs = {
  id: Scalars['String'];
};


export type QueryEnrollmentsOfGroupArgs = {
  groupId: Scalars['String'];
};


export type QueryEnrollmentsOfUserArgs = {
  userId: Scalars['String'];
};


export type QueryFeedbackArgs = {
  id: Scalars['String'];
};


export type QueryFeedbackOfGroupArgs = {
  groupId: Scalars['String'];
};


export type QueryFeedbackOfUserArgs = {
  userId: Scalars['String'];
};


export type QueryFeedbackOfUserForGroupArgs = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
};


export type QueryGroupArgs = {
  id: Scalars['String'];
};


export type QueryGroupsEnrolledArgs = {
  userId: Scalars['String'];
};


export type QueryGroupsOwnedArgs = {
  userId: Scalars['String'];
};


export type QueryRedeemedArgs = {
  id: Scalars['String'];
};


export type QueryRedeemedOfGroupArgs = {
  groupId: Scalars['String'];
};


export type QueryRedeemedOfGroupReviewedArgs = {
  groupId: Scalars['String'];
};


export type QueryRedeemedOfGroupToReviewArgs = {
  groupId: Scalars['String'];
};


export type QueryRedeemedOfUserArgs = {
  userId: Scalars['String'];
};


export type QueryRedeemedOfUserForGroupArgs = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
};


export type QueryRewardArgs = {
  id: Scalars['String'];
};


export type QueryRewardsOfGroupArgs = {
  groupId: Scalars['String'];
};


export type QueryTotalUserPointsArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUserRoleArgs = {
  id: Scalars['String'];
};

export type Redeemed = {
  __typename?: 'Redeemed';
  id: Scalars['String'];
  user: User;
  userId: Scalars['String'];
  name: Scalars['String'];
  cost: Scalars['Int'];
  response?: Maybe<Scalars['String']>;
  reviewed: Scalars['Boolean'];
  reviewedAt?: Maybe<Scalars['DateTime']>;
  group: Group;
  groupId: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type RedeemedNotification = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
  rewardId: Scalars['String'];
  value: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Reward = {
  __typename?: 'Reward';
  id: Scalars['String'];
  name: Scalars['String'];
  cost: Scalars['Int'];
  responseRequired: Scalars['Boolean'];
  responsePrompt?: Maybe<Scalars['String']>;
  group: Group;
  groupId: Scalars['String'];
  redeemed: Array<Maybe<Redeemed>>;
};


export type UpdateBehaviorInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['String']>;
};

export type UpdateEnrollmentInput = {
  userId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
};

export type UpdateFeedbackInput = {
  userId?: Maybe<Scalars['String']>;
  behaviorId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type UpdateGroupInput = {
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enrollId?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type UpdateRedeemedInput = {
  userId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  response?: Maybe<Scalars['String']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  reviewedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateRedeemedManyInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  response?: Maybe<Scalars['String']>;
  reviewed?: Maybe<Scalars['Boolean']>;
  reviewedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
};

export type UpdateRewardInput = {
  name?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  responseRequired?: Maybe<Scalars['Boolean']>;
  responsePrompt?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  uid?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type UpdateUserRoleInput = {
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  uid: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  points: Scalars['Int'];
  roles: Array<Maybe<UserRole>>;
  feedback: Array<Maybe<Feedback>>;
  redeemed: Array<Maybe<Redeemed>>;
  groups: Array<Maybe<Group>>;
  enrollments: Array<Maybe<Enrollment>>;
};

export type UserRole = {
  __typename?: 'UserRole';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Behavior: ResolverTypeWrapper<Behavior>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CreateBehaviorInput: CreateBehaviorInput;
  CreateEnrollmentByEnrollIdInput: CreateEnrollmentByEnrollIdInput;
  CreateEnrollmentInput: CreateEnrollmentInput;
  CreateFeedbackInput: CreateFeedbackInput;
  CreateGroupInput: CreateGroupInput;
  CreateRedeemedInput: CreateRedeemedInput;
  CreateRewardInput: CreateRewardInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateUserInput: CreateUserInput;
  CreateUserRoleInput: CreateUserRoleInput;
  CreatedManyReturn: ResolverTypeWrapper<CreatedManyReturn>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Email: ResolverTypeWrapper<Email>;
  Enrollment: ResolverTypeWrapper<Enrollment>;
  Feedback: ResolverTypeWrapper<Feedback>;
  Group: ResolverTypeWrapper<Group>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Redeemed: ResolverTypeWrapper<Redeemed>;
  RedeemedNotification: RedeemedNotification;
  Redwood: ResolverTypeWrapper<Redwood>;
  Reward: ResolverTypeWrapper<Reward>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateBehaviorInput: UpdateBehaviorInput;
  UpdateEnrollmentInput: UpdateEnrollmentInput;
  UpdateFeedbackInput: UpdateFeedbackInput;
  UpdateGroupInput: UpdateGroupInput;
  UpdateRedeemedInput: UpdateRedeemedInput;
  UpdateRedeemedManyInput: UpdateRedeemedManyInput;
  UpdateRewardInput: UpdateRewardInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserRoleInput: UpdateUserRoleInput;
  User: ResolverTypeWrapper<User>;
  UserRole: ResolverTypeWrapper<UserRole>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Behavior: Behavior;
  String: Scalars['String'];
  Int: Scalars['Int'];
  CreateBehaviorInput: CreateBehaviorInput;
  CreateEnrollmentByEnrollIdInput: CreateEnrollmentByEnrollIdInput;
  CreateEnrollmentInput: CreateEnrollmentInput;
  CreateFeedbackInput: CreateFeedbackInput;
  CreateGroupInput: CreateGroupInput;
  CreateRedeemedInput: CreateRedeemedInput;
  CreateRewardInput: CreateRewardInput;
  Boolean: Scalars['Boolean'];
  CreateUserInput: CreateUserInput;
  CreateUserRoleInput: CreateUserRoleInput;
  CreatedManyReturn: CreatedManyReturn;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Email: Email;
  Enrollment: Enrollment;
  Feedback: Feedback;
  Group: Group;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Query: {};
  Redeemed: Redeemed;
  RedeemedNotification: RedeemedNotification;
  Redwood: Redwood;
  Reward: Reward;
  Time: Scalars['Time'];
  UpdateBehaviorInput: UpdateBehaviorInput;
  UpdateEnrollmentInput: UpdateEnrollmentInput;
  UpdateFeedbackInput: UpdateFeedbackInput;
  UpdateGroupInput: UpdateGroupInput;
  UpdateRedeemedInput: UpdateRedeemedInput;
  UpdateRedeemedManyInput: UpdateRedeemedManyInput;
  UpdateRewardInput: UpdateRewardInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserRoleInput: UpdateUserRoleInput;
  User: User;
  UserRole: UserRole;
};

export type BehaviorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Behavior'] = ResolversParentTypes['Behavior']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  feedback?: Resolver<Array<Maybe<ResolversTypes['Feedback']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatedManyReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatedManyReturn'] = ResolversParentTypes['CreatedManyReturn']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['Email'] = ResolversParentTypes['Email']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  studentEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teacherEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groupName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnrollmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Enrollment'] = ResolversParentTypes['Enrollment']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedbackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feedback'] = ResolversParentTypes['Feedback']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  behavior?: Resolver<Maybe<ResolversTypes['Behavior']>, ParentType, ContextType>;
  behaviorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enrollId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enrollments?: Resolver<Array<Maybe<ResolversTypes['Enrollment']>>, ParentType, ContextType>;
  behaviors?: Resolver<Array<Maybe<ResolversTypes['Behavior']>>, ParentType, ContextType>;
  rewards?: Resolver<Array<Maybe<ResolversTypes['Reward']>>, ParentType, ContextType>;
  feedback?: Resolver<Array<Maybe<ResolversTypes['Feedback']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  approveRedeemed?: Resolver<ResolversTypes['Redeemed'], ParentType, ContextType, RequireFields<MutationApproveRedeemedArgs, 'id'>>;
  approveRedeemeds?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<MutationApproveRedeemedsArgs, 'ids'>>;
  archiveGroup?: Resolver<ResolversTypes['Group'], ParentType, ContextType, RequireFields<MutationArchiveGroupArgs, 'id'>>;
  createAdminUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationCreateAdminUserRoleArgs, 'input'>>;
  createBehavior?: Resolver<ResolversTypes['Behavior'], ParentType, ContextType, RequireFields<MutationCreateBehaviorArgs, 'input'>>;
  createEnrollment?: Resolver<ResolversTypes['Enrollment'], ParentType, ContextType, RequireFields<MutationCreateEnrollmentArgs, 'input'>>;
  createEnrollmentByEnrollId?: Resolver<ResolversTypes['Enrollment'], ParentType, ContextType, RequireFields<MutationCreateEnrollmentByEnrollIdArgs, 'input'>>;
  createFeedback?: Resolver<ResolversTypes['Feedback'], ParentType, ContextType, RequireFields<MutationCreateFeedbackArgs, 'input'>>;
  createFeedbacks?: Resolver<ResolversTypes['CreatedManyReturn'], ParentType, ContextType, RequireFields<MutationCreateFeedbacksArgs, never>>;
  createGroup?: Resolver<ResolversTypes['Group'], ParentType, ContextType, RequireFields<MutationCreateGroupArgs, 'input'>>;
  createRedeemed?: Resolver<ResolversTypes['Redeemed'], ParentType, ContextType, RequireFields<MutationCreateRedeemedArgs, 'input'>>;
  createReward?: Resolver<ResolversTypes['Reward'], ParentType, ContextType, RequireFields<MutationCreateRewardArgs, 'input'>>;
  createSuperUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationCreateSuperUserRoleArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationCreateUserRoleArgs, 'input'>>;
  deleteBehavior?: Resolver<ResolversTypes['Behavior'], ParentType, ContextType, RequireFields<MutationDeleteBehaviorArgs, 'id'>>;
  deleteEnrollment?: Resolver<ResolversTypes['Enrollment'], ParentType, ContextType, RequireFields<MutationDeleteEnrollmentArgs, 'id'>>;
  deleteEnrollmentByStudent?: Resolver<ResolversTypes['Enrollment'], ParentType, ContextType, RequireFields<MutationDeleteEnrollmentByStudentArgs, 'userId' | 'groupId'>>;
  deleteFeedback?: Resolver<ResolversTypes['Feedback'], ParentType, ContextType, RequireFields<MutationDeleteFeedbackArgs, 'id'>>;
  deleteGroup?: Resolver<ResolversTypes['Group'], ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'id'>>;
  deleteRedeemed?: Resolver<ResolversTypes['Redeemed'], ParentType, ContextType, RequireFields<MutationDeleteRedeemedArgs, 'id'>>;
  deleteReward?: Resolver<ResolversTypes['Reward'], ParentType, ContextType, RequireFields<MutationDeleteRewardArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationDeleteUserRoleArgs, 'id'>>;
  sendRedeemedNotification?: Resolver<ResolversTypes['Email'], ParentType, ContextType, RequireFields<MutationSendRedeemedNotificationArgs, 'input'>>;
  updateBehavior?: Resolver<ResolversTypes['Behavior'], ParentType, ContextType, RequireFields<MutationUpdateBehaviorArgs, 'id' | 'input'>>;
  updateEnrollment?: Resolver<ResolversTypes['Enrollment'], ParentType, ContextType, RequireFields<MutationUpdateEnrollmentArgs, 'id' | 'input'>>;
  updateFeedback?: Resolver<ResolversTypes['Feedback'], ParentType, ContextType, RequireFields<MutationUpdateFeedbackArgs, 'id' | 'input'>>;
  updateGroup?: Resolver<ResolversTypes['Group'], ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'id' | 'input'>>;
  updateRedeemed?: Resolver<ResolversTypes['Redeemed'], ParentType, ContextType, RequireFields<MutationUpdateRedeemedArgs, 'id' | 'input'>>;
  updateReward?: Resolver<ResolversTypes['Reward'], ParentType, ContextType, RequireFields<MutationUpdateRewardArgs, 'id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
  updateUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationUpdateUserRoleArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  behavior?: Resolver<Maybe<ResolversTypes['Behavior']>, ParentType, ContextType, RequireFields<QueryBehaviorArgs, 'id'>>;
  behaviors?: Resolver<Array<ResolversTypes['Behavior']>, ParentType, ContextType>;
  behaviorsOfGroup?: Resolver<Array<ResolversTypes['Behavior']>, ParentType, ContextType, RequireFields<QueryBehaviorsOfGroupArgs, 'groupId'>>;
  enrollment?: Resolver<Maybe<ResolversTypes['Enrollment']>, ParentType, ContextType, RequireFields<QueryEnrollmentArgs, 'id'>>;
  enrollments?: Resolver<Array<ResolversTypes['Enrollment']>, ParentType, ContextType>;
  enrollmentsOfGroup?: Resolver<Array<ResolversTypes['Enrollment']>, ParentType, ContextType, RequireFields<QueryEnrollmentsOfGroupArgs, 'groupId'>>;
  enrollmentsOfUser?: Resolver<Array<ResolversTypes['Enrollment']>, ParentType, ContextType, RequireFields<QueryEnrollmentsOfUserArgs, 'userId'>>;
  feedback?: Resolver<Maybe<ResolversTypes['Feedback']>, ParentType, ContextType, RequireFields<QueryFeedbackArgs, 'id'>>;
  feedbackOfGroup?: Resolver<Array<ResolversTypes['Feedback']>, ParentType, ContextType, RequireFields<QueryFeedbackOfGroupArgs, 'groupId'>>;
  feedbackOfUser?: Resolver<Array<ResolversTypes['Feedback']>, ParentType, ContextType, RequireFields<QueryFeedbackOfUserArgs, 'userId'>>;
  feedbackOfUserForGroup?: Resolver<Array<ResolversTypes['Feedback']>, ParentType, ContextType, RequireFields<QueryFeedbackOfUserForGroupArgs, 'userId' | 'groupId'>>;
  feedbacks?: Resolver<Array<ResolversTypes['Feedback']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGroupArgs, 'id'>>;
  groups?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType>;
  groupsEnrolled?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGroupsEnrolledArgs, 'userId'>>;
  groupsOwned?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGroupsOwnedArgs, 'userId'>>;
  redeemed?: Resolver<Maybe<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<QueryRedeemedArgs, 'id'>>;
  redeemedOfGroup?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<QueryRedeemedOfGroupArgs, 'groupId'>>;
  redeemedOfGroupReviewed?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<QueryRedeemedOfGroupReviewedArgs, 'groupId'>>;
  redeemedOfGroupToReview?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<QueryRedeemedOfGroupToReviewArgs, 'groupId'>>;
  redeemedOfUser?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<QueryRedeemedOfUserArgs, 'userId'>>;
  redeemedOfUserForGroup?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<QueryRedeemedOfUserForGroupArgs, 'userId' | 'groupId'>>;
  redeemeds?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  reward?: Resolver<Maybe<ResolversTypes['Reward']>, ParentType, ContextType, RequireFields<QueryRewardArgs, 'id'>>;
  rewards?: Resolver<Array<ResolversTypes['Reward']>, ParentType, ContextType>;
  rewardsOfGroup?: Resolver<Array<ResolversTypes['Reward']>, ParentType, ContextType, RequireFields<QueryRewardsOfGroupArgs, 'groupId'>>;
  totalUserPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryTotalUserPointsArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userRole?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType, RequireFields<QueryUserRoleArgs, 'id'>>;
  userRoles?: Resolver<Array<ResolversTypes['UserRole']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type RedeemedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redeemed'] = ResolversParentTypes['Redeemed']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reviewedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reward'] = ResolversParentTypes['Reward']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  responseRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  responsePrompt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  redeemed?: Resolver<Array<Maybe<ResolversTypes['Redeemed']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roles?: Resolver<Array<Maybe<ResolversTypes['UserRole']>>, ParentType, ContextType>;
  feedback?: Resolver<Array<Maybe<ResolversTypes['Feedback']>>, ParentType, ContextType>;
  redeemed?: Resolver<Array<Maybe<ResolversTypes['Redeemed']>>, ParentType, ContextType>;
  groups?: Resolver<Array<Maybe<ResolversTypes['Group']>>, ParentType, ContextType>;
  enrollments?: Resolver<Array<Maybe<ResolversTypes['Enrollment']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRole'] = ResolversParentTypes['UserRole']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Behavior?: BehaviorResolvers<ContextType>;
  CreatedManyReturn?: CreatedManyReturnResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Email?: EmailResolvers<ContextType>;
  Enrollment?: EnrollmentResolvers<ContextType>;
  Feedback?: FeedbackResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redeemed?: RedeemedResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Reward?: RewardResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserRole?: UserRoleResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

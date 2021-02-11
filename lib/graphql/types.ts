/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetLocalSession
// ====================================================

export interface SetLocalSession {
  setSession: boolean | null;
}

export interface SetLocalSessionVariables {
  session: SessionInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserUploadMedia
// ====================================================

export interface UserUploadMedia_mediaCreate_owner {
  id: string | null;
}

export interface UserUploadMedia_mediaCreate {
  id: string | null;
  /**
   * File location
   */
  fileName: string | null;
  owner: UserUploadMedia_mediaCreate_owner | null;
}

export interface UserUploadMedia {
  mediaCreate: UserUploadMedia_mediaCreate;
}

export interface UserUploadMediaVariables {
  fileName: string;
  url: string;
  ownerId: string;
  size?: number | null;
  mimeType: string;
  workflowJobId?: string | null;
  isProcessing?: number | null;
  orgId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateOrgMediaStatus
// ====================================================

export interface UpdateOrgMediaStatus_orgMediaUpdateByFilter_items {
  id: string | null;
  type: string | null;
  status: string | null;
}

export interface UpdateOrgMediaStatus_orgMediaUpdateByFilter {
  /**
   * List items
   */
  items: UpdateOrgMediaStatus_orgMediaUpdateByFilter_items[];
}

export interface UpdateOrgMediaStatus {
  orgMediaUpdateByFilter: UpdateOrgMediaStatus_orgMediaUpdateByFilter;
}

export interface UpdateOrgMediaStatusVariables {
  id: string;
  status: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserCreateMediaOrg
// ====================================================

export interface UserCreateMediaOrg_orgMediaCreate {
  id: string | null;
  type: string | null;
}

export interface UserCreateMediaOrg {
  orgMediaCreate: UserCreateMediaOrg_orgMediaCreate;
}

export interface UserCreateMediaOrgVariables {
  mediaInput: OrgMediaMediaRelationInput;
  orgId: string;
  taskId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserUploadMediaOfOrg
// ====================================================

export interface UserUploadMediaOfOrg_orgMediaCreate_media {
  id: string | null;
  /**
   * File location
   */
  fileName: string | null;
  url: string | null;
}

export interface UserUploadMediaOfOrg_orgMediaCreate {
  id: string | null;
  media: UserUploadMediaOfOrg_orgMediaCreate_media | null;
}

export interface UserUploadMediaOfOrg {
  orgMediaCreate: UserUploadMediaOfOrg_orgMediaCreate;
}

export interface UserUploadMediaOfOrgVariables {
  fileName: string;
  url: string;
  ownerId: string;
  size?: number | null;
  mimeType: string;
  workflowJobId?: string | null;
  isProcessing?: number | null;
  orgId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_projectCreate_assignedWorkers_items_user {
  firstName: string | null;
  lastName: string | null;
}

export interface CreateProject_projectCreate_assignedWorkers_items {
  user: CreateProject_projectCreate_assignedWorkers_items_user | null;
}

export interface CreateProject_projectCreate_assignedWorkers {
  /**
   * List items
   */
  items: CreateProject_projectCreate_assignedWorkers_items[];
}

export interface CreateProject_projectCreate_template_linkedTaskTemplates_items_taskTemplate {
  id: string | null;
  name: string | null;
}

export interface CreateProject_projectCreate_template_linkedTaskTemplates_items {
  id: string | null;
  quantity: number | null;
  requirement: string | null;
  taskTemplate: CreateProject_projectCreate_template_linkedTaskTemplates_items_taskTemplate | null;
}

export interface CreateProject_projectCreate_template_linkedTaskTemplates {
  /**
   * List items
   */
  items: CreateProject_projectCreate_template_linkedTaskTemplates_items[];
}

export interface CreateProject_projectCreate_template {
  id: string | null;
  linkedTaskTemplates: CreateProject_projectCreate_template_linkedTaskTemplates | null;
}

export interface CreateProject_projectCreate {
  id: string | null;
  name: string | null;
  assignedWorkers: CreateProject_projectCreate_assignedWorkers | null;
  template: CreateProject_projectCreate_template | null;
}

export interface CreateProject {
  projectCreate: CreateProject_projectCreate;
}

export interface CreateProjectVariables {
  templateId: string;
  workerId?: WorkerKeyFilter[] | null;
  orgId: string;
  name?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProjectTask
// ====================================================

export interface CreateProjectTask_taskCreateMany_items_project {
  id: string | null;
  name: string | null;
}

export interface CreateProjectTask_taskCreateMany_items_template_taskTemplate {
  name: string | null;
}

export interface CreateProjectTask_taskCreateMany_items_template {
  taskTemplate: CreateProjectTask_taskCreateMany_items_template_taskTemplate | null;
}

export interface CreateProjectTask_taskCreateMany_items {
  id: string | null;
  status: string | null;
  project: CreateProjectTask_taskCreateMany_items_project | null;
  template: CreateProjectTask_taskCreateMany_items_template | null;
}

export interface CreateProjectTask_taskCreateMany {
  /**
   * List items
   */
  items: CreateProjectTask_taskCreateMany_items[];
}

export interface CreateProjectTask {
  taskCreateMany: CreateProjectTask_taskCreateMany;
}

export interface CreateProjectTaskVariables {
  tasks: (TaskCreateManyInput | null)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TaskUpdateDone
// ====================================================

export interface TaskUpdateDone_taskUpdate {
  status: string | null;
}

export interface TaskUpdateDone {
  taskUpdate: TaskUpdateDone_taskUpdate;
}

export interface TaskUpdateDoneVariables {
  taskId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_userLogin_auth {
  refreshToken: string | null;
  idToken: string | null;
}

export interface Login_userLogin {
  auth: Login_userLogin_auth | null;
}

export interface Login {
  userLogin: Login_userLogin | null;
}

export interface LoginVariables {
  email: string;
  password: string;
  authProfileId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUp
// ====================================================

export interface SignUp_userSignUpWithPassword {
  id: string | null;
  email: string | null;
  createdAt: any | null;
}

export interface SignUp {
  userSignUpWithPassword: SignUp_userSignUpWithPassword;
}

export interface SignUpVariables {
  email: string;
  firstName: string;
  lastName?: string | null;
  password: string;
  authProfileId: string;
  role: string;
  orgId: string;
  agreementID: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserRefreshToken
// ====================================================

export interface UserRefreshToken_userRefreshToken {
  refreshToken: string | null;
  idToken: string | null;
}

export interface UserRefreshToken {
  userRefreshToken: UserRefreshToken_userRefreshToken | null;
}

export interface UserRefreshTokenVariables {
  email?: string | null;
  refreshToken: string;
  authProfileId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFirstAgreement
// ====================================================

export interface GetFirstAgreement_agreementsList_items {
  id: string | null;
  version: number | null;
  type: string | null;
  body: string | null;
  createdAt: any | null;
}

export interface GetFirstAgreement_agreementsList {
  /**
   * List items
   */
  items: GetFirstAgreement_agreementsList_items[];
}

export interface GetFirstAgreement {
  agreementsList: GetFirstAgreement_agreementsList;
}

export interface GetFirstAgreementVariables {
  type: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSession
// ====================================================

export interface getSession_me_avatar {
  public: boolean | null;
  downloadUrl: string | null;
}

export interface getSession_me_roles_items {
  name: string | null;
}

export interface getSession_me_roles {
  /**
   * List items
   */
  items: getSession_me_roles_items[];
}

export interface getSession_me_orgAdmin {
  id: string | null;
  /**
   * Readable name of the company
   */
  name: string | null;
}

export interface getSession_me {
  id: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  avatar: getSession_me_avatar | null;
  roles: getSession_me_roles | null;
  orgAdmin: getSession_me_orgAdmin | null;
}

export interface getSession {
  me: getSession_me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMedias
// ====================================================

export interface GetMedias_mediaList_items_owner {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export interface GetMedias_mediaList_items_tags_items {
  name: string | null;
}

export interface GetMedias_mediaList_items_tags {
  /**
   * List items
   */
  items: GetMedias_mediaList_items_tags_items[];
}

export interface GetMedias_mediaList_items_orgs {
  /**
   * List items count
   */
  count: number;
}

export interface GetMedias_mediaList_items {
  id: string | null;
  createdAt: any | null;
  updatedAt: any | null;
  url: string | null;
  /**
   * File location
   */
  fileName: string | null;
  size: number | null;
  mimeType: string | null;
  status: string | null;
  isProcessing: number | null;
  thumbnailUrl: string | null;
  owner: GetMedias_mediaList_items_owner | null;
  tags: GetMedias_mediaList_items_tags | null;
  /**
   * Organizations that the owner has chosen share this media with
   */
  orgs: GetMedias_mediaList_items_orgs | null;
}

export interface GetMedias_mediaList {
  /**
   * List items
   */
  items: GetMedias_mediaList_items[];
}

export interface GetMedias {
  mediaList: GetMedias_mediaList;
}

export interface GetMediasVariables {
  orgId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrgMedias
// ====================================================

export interface GetOrgMedias_orgMediasList_items_parentTask_project {
  id: string | null;
  name: string | null;
}

export interface GetOrgMedias_orgMediasList_items_parentTask_template_projectTemplate {
  id: string | null;
  name: string | null;
}

export interface GetOrgMedias_orgMediasList_items_parentTask_template_taskTemplate {
  id: string | null;
  name: string | null;
}

export interface GetOrgMedias_orgMediasList_items_parentTask_template {
  projectTemplate: GetOrgMedias_orgMediasList_items_parentTask_template_projectTemplate | null;
  taskTemplate: GetOrgMedias_orgMediasList_items_parentTask_template_taskTemplate | null;
  requirement: string | null;
}

export interface GetOrgMedias_orgMediasList_items_parentTask {
  id: string | null;
  project: GetOrgMedias_orgMediasList_items_parentTask_project | null;
  template: GetOrgMedias_orgMediasList_items_parentTask_template | null;
}

export interface GetOrgMedias_orgMediasList_items_media_tags_items {
  name: string | null;
}

export interface GetOrgMedias_orgMediasList_items_media_tags {
  /**
   * List items
   */
  items: GetOrgMedias_orgMediasList_items_media_tags_items[];
}

export interface GetOrgMedias_orgMediasList_items_media_owner {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export interface GetOrgMedias_orgMediasList_items_media {
  id: string | null;
  /**
   * File location
   */
  fileName: string | null;
  url: string | null;
  size: number | null;
  mimeType: string | null;
  status: string | null;
  isProcessing: number | null;
  thumbnailUrl: string | null;
  tags: GetOrgMedias_orgMediasList_items_media_tags | null;
  owner: GetOrgMedias_orgMediasList_items_media_owner | null;
}

export interface GetOrgMedias_orgMediasList_items {
  status: string | null;
  parentTask: GetOrgMedias_orgMediasList_items_parentTask | null;
  media: GetOrgMedias_orgMediasList_items_media | null;
}

export interface GetOrgMedias_orgMediasList {
  /**
   * List items
   */
  items: GetOrgMedias_orgMediasList_items[];
}

export interface GetOrgMedias {
  orgMediasList: GetOrgMedias_orgMediasList;
}

export interface GetOrgMediasVariables {
  filter?: OrgMediaFilter | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_projectsList_items_tasks_items {
  status: string | null;
}

export interface GetProjects_projectsList_items_tasks {
  /**
   * List items count
   */
  count: number;
  /**
   * List items
   */
  items: GetProjects_projectsList_items_tasks_items[];
}

export interface GetProjects_projectsList_items_createdBy {
  firstName: string | null;
  lastName: string | null;
}

export interface GetProjects_projectsList_items_template_tags_items {
  name: string | null;
}

export interface GetProjects_projectsList_items_template_tags {
  /**
   * List items
   */
  items: GetProjects_projectsList_items_template_tags_items[];
}

export interface GetProjects_projectsList_items_template {
  name: string | null;
  type: string | null;
  tags: GetProjects_projectsList_items_template_tags | null;
}

export interface GetProjects_projectsList_items {
  id: string | null;
  name: string | null;
  tasks: GetProjects_projectsList_items_tasks | null;
  filmingDueDate: any | null;
  createdBy: GetProjects_projectsList_items_createdBy | null;
  template: GetProjects_projectsList_items_template | null;
}

export interface GetProjects_projectsList {
  /**
   * List items
   */
  items: GetProjects_projectsList_items[];
}

export interface GetProjects {
  projectsList: GetProjects_projectsList;
}

export interface GetProjectsVariables {
  filter?: ProjectFilter | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjectDetail
// ====================================================

export interface GetProjectDetail_project_template_deliverables_items {
  id: string | null;
  /**
   * Title of the deliverable
   */
  name: string | null;
  quantity: number | null;
}

export interface GetProjectDetail_project_template_deliverables {
  /**
   * List items count
   */
  count: number;
  /**
   * List items
   */
  items: GetProjectDetail_project_template_deliverables_items[];
}

export interface GetProjectDetail_project_template_taskTab_items_taskTemplate {
  id: string | null;
  name: string | null;
  type: string | null;
  description: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_completedTasks_items_media_items_media_owner {
  firstName: string | null;
  lastName: string | null;
  id: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_completedTasks_items_media_items_media {
  mimeType: string | null;
  size: number | null;
  status: string | null;
  thumbnailUrl: string | null;
  url: string | null;
  /**
   * File location
   */
  fileName: string | null;
  id: string | null;
  owner: GetProjectDetail_project_template_taskTab_items_completedTasks_items_media_items_media_owner | null;
}

export interface GetProjectDetail_project_template_taskTab_items_completedTasks_items_media_items {
  media: GetProjectDetail_project_template_taskTab_items_completedTasks_items_media_items_media | null;
}

export interface GetProjectDetail_project_template_taskTab_items_completedTasks_items_media {
  /**
   * List items
   */
  items: GetProjectDetail_project_template_taskTab_items_completedTasks_items_media_items[];
}

export interface GetProjectDetail_project_template_taskTab_items_completedTasks_items {
  media: GetProjectDetail_project_template_taskTab_items_completedTasks_items_media | null;
}

export interface GetProjectDetail_project_template_taskTab_items_completedTasks {
  /**
   * List items count
   */
  count: number;
  /**
   * List items
   */
  items: GetProjectDetail_project_template_taskTab_items_completedTasks_items[];
}

export interface GetProjectDetail_project_template_taskTab_items_totalTasks {
  /**
   * List items count
   */
  count: number;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_tags_items {
  id: string | null;
  name: string | null;
  type: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_tags {
  /**
   * List items
   */
  items: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_tags_items[];
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_project {
  id: string | null;
  name: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_template_projectTemplate {
  id: string | null;
  name: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_template_taskTemplate {
  id: string | null;
  name: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_template {
  projectTemplate: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_template_projectTemplate | null;
  taskTemplate: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_template_taskTemplate | null;
  requirement: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask {
  id: string | null;
  project: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_project | null;
  template: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask_template | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media_tags_items {
  name: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media_tags {
  /**
   * List items
   */
  items: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media_tags_items[];
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media_owner {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media {
  id: string | null;
  /**
   * File location
   */
  fileName: string | null;
  url: string | null;
  size: number | null;
  mimeType: string | null;
  status: string | null;
  isProcessing: number | null;
  thumbnailUrl: string | null;
  tags: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media_tags | null;
  owner: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media_owner | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media_items {
  id: string | null;
  createdAt: any | null;
  tags: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_tags | null;
  status: string | null;
  type: string | null;
  parentTask: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_parentTask | null;
  media: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items_media | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items_media {
  /**
   * List items
   */
  items: GetProjectDetail_project_template_taskTab_items_tasks_items_media_items[];
}

export interface GetProjectDetail_project_template_taskTab_items_tasks_items {
  id: string | null;
  status: string | null;
  media: GetProjectDetail_project_template_taskTab_items_tasks_items_media | null;
}

export interface GetProjectDetail_project_template_taskTab_items_tasks {
  /**
   * List items
   */
  items: GetProjectDetail_project_template_taskTab_items_tasks_items[];
}

export interface GetProjectDetail_project_template_taskTab_items {
  id: string | null;
  quantity: number | null;
  requirement: string | null;
  taskTemplate: GetProjectDetail_project_template_taskTab_items_taskTemplate | null;
  completedTasks: GetProjectDetail_project_template_taskTab_items_completedTasks | null;
  totalTasks: GetProjectDetail_project_template_taskTab_items_totalTasks | null;
  tasks: GetProjectDetail_project_template_taskTab_items_tasks | null;
}

export interface GetProjectDetail_project_template_taskTab {
  /**
   * List items
   */
  items: GetProjectDetail_project_template_taskTab_items[];
}

export interface GetProjectDetail_project_template {
  id: string | null;
  name: string | null;
  type: string | null;
  deliverables: GetProjectDetail_project_template_deliverables | null;
  taskTab: GetProjectDetail_project_template_taskTab | null;
}

export interface GetProjectDetail_project_peopleTab_items_tags_items {
  id: string | null;
  name: string | null;
  type: string | null;
}

export interface GetProjectDetail_project_peopleTab_items_tags {
  /**
   * List items
   */
  items: GetProjectDetail_project_peopleTab_items_tags_items[];
}

export interface GetProjectDetail_project_peopleTab_items_user_media {
  /**
   * List items count
   */
  count: number;
}

export interface GetProjectDetail_project_peopleTab_items_user_user_project {
  /**
   * List items count
   */
  count: number;
}

export interface GetProjectDetail_project_peopleTab_items_user {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  media: GetProjectDetail_project_peopleTab_items_user_media | null;
  user_project: GetProjectDetail_project_peopleTab_items_user_user_project | null;
}

export interface GetProjectDetail_project_peopleTab_items {
  id: string | null;
  tags: GetProjectDetail_project_peopleTab_items_tags | null;
  user: GetProjectDetail_project_peopleTab_items_user | null;
}

export interface GetProjectDetail_project_peopleTab {
  /**
   * List items
   */
  items: GetProjectDetail_project_peopleTab_items[];
}

export interface GetProjectDetail_project_mediaTab_items_tags_items {
  id: string | null;
  name: string | null;
  type: string | null;
}

export interface GetProjectDetail_project_mediaTab_items_tags {
  /**
   * List items
   */
  items: GetProjectDetail_project_mediaTab_items_tags_items[];
}

export interface GetProjectDetail_project_mediaTab_items_parentTask_project {
  id: string | null;
  name: string | null;
}

export interface GetProjectDetail_project_mediaTab_items_parentTask_template_projectTemplate {
  id: string | null;
  name: string | null;
}

export interface GetProjectDetail_project_mediaTab_items_parentTask_template_taskTemplate {
  id: string | null;
  name: string | null;
}

export interface GetProjectDetail_project_mediaTab_items_parentTask_template {
  projectTemplate: GetProjectDetail_project_mediaTab_items_parentTask_template_projectTemplate | null;
  taskTemplate: GetProjectDetail_project_mediaTab_items_parentTask_template_taskTemplate | null;
  requirement: string | null;
}

export interface GetProjectDetail_project_mediaTab_items_parentTask {
  id: string | null;
  project: GetProjectDetail_project_mediaTab_items_parentTask_project | null;
  template: GetProjectDetail_project_mediaTab_items_parentTask_template | null;
}

export interface GetProjectDetail_project_mediaTab_items_media_tags_items {
  name: string | null;
}

export interface GetProjectDetail_project_mediaTab_items_media_tags {
  /**
   * List items
   */
  items: GetProjectDetail_project_mediaTab_items_media_tags_items[];
}

export interface GetProjectDetail_project_mediaTab_items_media_owner {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export interface GetProjectDetail_project_mediaTab_items_media {
  id: string | null;
  /**
   * File location
   */
  fileName: string | null;
  url: string | null;
  size: number | null;
  mimeType: string | null;
  status: string | null;
  isProcessing: number | null;
  thumbnailUrl: string | null;
  tags: GetProjectDetail_project_mediaTab_items_media_tags | null;
  owner: GetProjectDetail_project_mediaTab_items_media_owner | null;
}

export interface GetProjectDetail_project_mediaTab_items {
  id: string | null;
  tags: GetProjectDetail_project_mediaTab_items_tags | null;
  status: string | null;
  type: string | null;
  parentTask: GetProjectDetail_project_mediaTab_items_parentTask | null;
  media: GetProjectDetail_project_mediaTab_items_media | null;
}

export interface GetProjectDetail_project_mediaTab {
  /**
   * List items
   */
  items: GetProjectDetail_project_mediaTab_items[];
}

export interface GetProjectDetail_project {
  id: string | null;
  name: string | null;
  filmingDueDate: any | null;
  template: GetProjectDetail_project_template | null;
  peopleTab: GetProjectDetail_project_peopleTab | null;
  mediaTab: GetProjectDetail_project_mediaTab | null;
}

export interface GetProjectDetail {
  project: GetProjectDetail_project | null;
}

export interface GetProjectDetailVariables {
  projectId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjectTemPlateList
// ====================================================

export interface GetProjectTemPlateList_projectTemplatesList_items_deliverables_items {
  id: string | null;
  /**
   * Title of the deliverable
   */
  name: string | null;
  quantity: number | null;
}

export interface GetProjectTemPlateList_projectTemplatesList_items_deliverables {
  /**
   * List items
   */
  items: GetProjectTemPlateList_projectTemplatesList_items_deliverables_items[];
  /**
   * List items count
   */
  count: number;
}

export interface GetProjectTemPlateList_projectTemplatesList_items_linkedTaskTemplates_items_taskTemplate {
  name: string | null;
}

export interface GetProjectTemPlateList_projectTemplatesList_items_linkedTaskTemplates_items {
  id: string | null;
  requirement: string | null;
  taskTemplate: GetProjectTemPlateList_projectTemplatesList_items_linkedTaskTemplates_items_taskTemplate | null;
  quantity: number | null;
}

export interface GetProjectTemPlateList_projectTemplatesList_items_linkedTaskTemplates {
  /**
   * List items
   */
  items: GetProjectTemPlateList_projectTemplatesList_items_linkedTaskTemplates_items[];
  /**
   * List items count
   */
  count: number;
}

export interface GetProjectTemPlateList_projectTemplatesList_items_tags_items {
  id: string | null;
  name: string | null;
}

export interface GetProjectTemPlateList_projectTemplatesList_items_tags {
  /**
   * List items
   */
  items: GetProjectTemPlateList_projectTemplatesList_items_tags_items[];
}

export interface GetProjectTemPlateList_projectTemplatesList_items {
  id: string | null;
  name: string | null;
  deliverables: GetProjectTemPlateList_projectTemplatesList_items_deliverables | null;
  linkedTaskTemplates: GetProjectTemPlateList_projectTemplatesList_items_linkedTaskTemplates | null;
  tags: GetProjectTemPlateList_projectTemplatesList_items_tags | null;
  description: string | null;
  tips: string | null;
  uses: string | null;
}

export interface GetProjectTemPlateList_projectTemplatesList {
  /**
   * List items
   */
  items: GetProjectTemPlateList_projectTemplatesList_items[];
}

export interface GetProjectTemPlateList {
  projectTemplatesList: GetProjectTemPlateList_projectTemplatesList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjectTemplatePointers
// ====================================================

export interface GetProjectTemplatePointers_taskTemplate_tags_items_pointers_items {
  _description: string | null;
  category: string | null;
  type: string | null;
  title: string | null;
  id: string | null;
}

export interface GetProjectTemplatePointers_taskTemplate_tags_items_pointers {
  /**
   * List items
   */
  items: GetProjectTemplatePointers_taskTemplate_tags_items_pointers_items[];
}

export interface GetProjectTemplatePointers_taskTemplate_tags_items {
  pointers: GetProjectTemplatePointers_taskTemplate_tags_items_pointers | null;
}

export interface GetProjectTemplatePointers_taskTemplate_tags {
  /**
   * List items
   */
  items: GetProjectTemplatePointers_taskTemplate_tags_items[];
}

export interface GetProjectTemplatePointers_taskTemplate {
  name: string | null;
  description: string | null;
  exampleURL: string | null;
  tags: GetProjectTemplatePointers_taskTemplate_tags | null;
}

export interface GetProjectTemplatePointers {
  taskTemplate: GetProjectTemplatePointers_taskTemplate | null;
}

export interface GetProjectTemplatePointersVariables {
  templateId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTaskDetail
// ====================================================

export interface GetTaskDetail_task_project {
  name: string | null;
}

export interface GetTaskDetail_task_template_taskTemplate_pointers_items {
  id: string | null;
  title: string | null;
  category: string | null;
  type: string | null;
  description: string | null;
}

export interface GetTaskDetail_task_template_taskTemplate_pointers {
  /**
   * List items
   */
  items: GetTaskDetail_task_template_taskTemplate_pointers_items[];
}

export interface GetTaskDetail_task_template_taskTemplate {
  name: string | null;
  description: string | null;
  exampleURL: string | null;
  pointers: GetTaskDetail_task_template_taskTemplate_pointers | null;
}

export interface GetTaskDetail_task_template {
  quantity: number | null;
  requirement: string | null;
  taskTemplate: GetTaskDetail_task_template_taskTemplate | null;
}

export interface GetTaskDetail_task_media_items_media {
  id: string | null;
  /**
   * File location
   */
  fileName: string | null;
  url: string | null;
}

export interface GetTaskDetail_task_media_items {
  id: string | null;
  type: string | null;
  status: string | null;
  media: GetTaskDetail_task_media_items_media | null;
}

export interface GetTaskDetail_task_media {
  /**
   * List items count
   */
  count: number;
  /**
   * List items
   */
  items: GetTaskDetail_task_media_items[];
}

export interface GetTaskDetail_task {
  id: string | null;
  createdAt: any | null;
  status: string | null;
  project: GetTaskDetail_task_project | null;
  template: GetTaskDetail_task_template | null;
  media: GetTaskDetail_task_media | null;
}

export interface GetTaskDetail {
  task: GetTaskDetail_task | null;
}

export interface GetTaskDetailVariables {
  task_id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_user_avatar {
  public: boolean | null;
  downloadUrl: string | null;
}

export interface GetCurrentUser_user_roles_items {
  name: string | null;
}

export interface GetCurrentUser_user_roles {
  /**
   * List items
   */
  items: GetCurrentUser_user_roles_items[];
}

export interface GetCurrentUser_user_orgAdmin {
  id: string | null;
  /**
   * Readable name of the company
   */
  name: string | null;
}

export interface GetCurrentUser_user {
  id: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  createdAt: any | null;
  status: string | null;
  origin: string | null;
  avatar: GetCurrentUser_user_avatar | null;
  roles: GetCurrentUser_user_roles | null;
  orgAdmin: GetCurrentUser_user_orgAdmin | null;
}

export interface GetCurrentUser {
  user: GetCurrentUser_user | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWorkerInfo
// ====================================================

export interface GetWorkerInfo_user_media_items {
  url: string | null;
  /**
   * File location
   */
  fileName: string | null;
}

export interface GetWorkerInfo_user_media {
  /**
   * List items
   */
  items: GetWorkerInfo_user_media_items[];
  /**
   * List items count
   */
  count: number;
}

export interface GetWorkerInfo_user_user_project_items {
  name: string | null;
}

export interface GetWorkerInfo_user_user_project {
  /**
   * List items
   */
  items: GetWorkerInfo_user_user_project_items[];
  /**
   * List items count
   */
  count: number;
}

export interface GetWorkerInfo_user_worker_items_tags_items {
  name: string | null;
}

export interface GetWorkerInfo_user_worker_items_tags {
  /**
   * List items
   */
  items: GetWorkerInfo_user_worker_items_tags_items[];
}

export interface GetWorkerInfo_user_worker_items {
  tags: GetWorkerInfo_user_worker_items_tags | null;
}

export interface GetWorkerInfo_user_worker {
  /**
   * List items
   */
  items: GetWorkerInfo_user_worker_items[];
}

export interface GetWorkerInfo_user {
  firstName: string | null;
  lastName: string | null;
  status: string | null;
  media: GetWorkerInfo_user_media | null;
  user_project: GetWorkerInfo_user_user_project | null;
  worker: GetWorkerInfo_user_worker | null;
}

export interface GetWorkerInfo {
  user: GetWorkerInfo_user | null;
}

export interface GetWorkerInfoVariables {
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWorkers
// ====================================================

export interface GetWorkers_workersList_items_user_media {
  /**
   * List items count
   */
  count: number;
}

export interface GetWorkers_workersList_items_user_user_project {
  /**
   * List items count
   */
  count: number;
}

export interface GetWorkers_workersList_items_user_worker_items_tags_items {
  name: string | null;
}

export interface GetWorkers_workersList_items_user_worker_items_tags {
  /**
   * List items
   */
  items: GetWorkers_workersList_items_user_worker_items_tags_items[];
}

export interface GetWorkers_workersList_items_user_worker_items {
  tags: GetWorkers_workersList_items_user_worker_items_tags | null;
}

export interface GetWorkers_workersList_items_user_worker {
  /**
   * List items
   */
  items: GetWorkers_workersList_items_user_worker_items[];
}

export interface GetWorkers_workersList_items_user {
  lastName: string | null;
  firstName: string | null;
  id: string | null;
  media: GetWorkers_workersList_items_user_media | null;
  user_project: GetWorkers_workersList_items_user_user_project | null;
  status: string | null;
  worker: GetWorkers_workersList_items_user_worker | null;
}

export interface GetWorkers_workersList_items {
  id: string | null;
  user: GetWorkers_workersList_items_user | null;
}

export interface GetWorkers_workersList {
  /**
   * List items
   */
  items: GetWorkers_workersList_items[];
}

export interface GetWorkers {
  workersList: GetWorkers_workersList;
}

export interface GetWorkersVariables {
  orgId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Relative Date Predicate Operation Enum
 */
export enum RelativePredicateOpEnum {
  ADD = "ADD",
  SUB = "SUB",
}

/**
 * Relative Date Predicate Unit Enum
 */
export enum RelativePredicateUnitEnum {
  DAY = "DAY",
  DAY_HOUR = "DAY_HOUR",
  DAY_MICROSECOND = "DAY_MICROSECOND",
  DAY_MINUTE = "DAY_MINUTE",
  DAY_SECOND = "DAY_SECOND",
  HOUR = "HOUR",
  HOUR_MICROSECOND = "HOUR_MICROSECOND",
  HOUR_MINUTE = "HOUR_MINUTE",
  HOUR_SECOND = "HOUR_SECOND",
  MICROSECOND = "MICROSECOND",
  MINUTE = "MINUTE",
  MINUTE_MICROSECOND = "MINUTE_MICROSECOND",
  MINUTE_SECOND = "MINUTE_SECOND",
  MONTH = "MONTH",
  QUARTER = "QUARTER",
  SECOND = "SECOND",
  SECOND_MICROSECOND = "SECOND_MICROSECOND",
  WEEK = "WEEK",
  YEAR = "YEAR",
  YEAR_MONTH = "YEAR_MONTH",
}

/**
 * Orgs create input from admins
 */
export interface Admins_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner?: OrgsOwnerRelationInput | null;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * AgreementFieldsPermissions create input
 */
export interface AgreementFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  version?: boolean | null;
  type?: boolean | null;
  body?: boolean | null;
}

export interface AgreementFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  version?: IntPredicate | null;
  type?: StringPredicate | null;
  body?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  file?: FileFilter | null;
  AND?: AgreementFilter[] | null;
  OR?: AgreementFilter[] | null;
}

export interface AgreementKeyFilter {
  id?: string | null;
  version?: number | null;
}

export interface AgreementRelationFilter {
  some?: AgreementFilter | null;
  every?: AgreementFilter | null;
  none?: AgreementFilter | null;
}

export interface Agreement_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  version?: IntPredicate | null;
  type?: StringPredicate | null;
  body?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  file?: File_PermissionFilter | null;
  AND?: Agreement_PermissionFilter[] | null;
  OR?: Agreement_PermissionFilter[] | null;
}

export interface Agreement_PermissionRelationFilter {
  some?: Agreement_PermissionFilter | null;
  every?: Agreement_PermissionFilter | null;
  none?: Agreement_PermissionFilter | null;
}

/**
 * Agreements relation input
 */
export interface AgreementsFileRelationInput {
  connect?: FileKeyFilter | null;
  create?: Agreements_file_FileCreateInput | null;
}

/**
 * Files create input from agreements_file
 */
export interface Agreements_file_FileCreateInput {
  fileId?: string | null;
  public?: boolean | null;
  filename?: string | null;
  meta?: any | null;
  mods?: any | null;
  users_avatar?: FilesUsers_avatarRelationInput | null;
  teamMembers_avatar?: FilesTeamMembers_avatarRelationInput | null;
  companies_logo?: FilesCompanies_logoRelationInput | null;
  companies_videoLogo?: FilesCompanies_videoLogoRelationInput | null;
  agreements_file?: FilesAgreements_fileRelationInput | null;
}

/**
 * Orgs create input from alumni
 */
export interface Alumni_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner?: OrgsOwnerRelationInput | null;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

export interface ApiTokenFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  _fullText?: string | null;
  token?: StringPredicate | null;
  createdBy?: UserFilter | null;
  roles?: RoleRelationFilter | null;
  AND?: ApiTokenFilter[] | null;
  OR?: ApiTokenFilter[] | null;
}

export interface ApiTokenKeyFilter {
  id?: string | null;
  name?: string | null;
}

export interface ApiTokenRelationFilter {
  some?: ApiTokenFilter | null;
  every?: ApiTokenFilter | null;
  none?: ApiTokenFilter | null;
}

export interface ApiToken_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  _fullText?: string | null;
  token?: StringPredicate | null;
  createdBy?: User_PermissionFilter | null;
  roles?: Role_PermissionRelationFilter | null;
  AND?: ApiToken_PermissionFilter[] | null;
  OR?: ApiToken_PermissionFilter[] | null;
}

export interface ApiToken_PermissionRelationFilter {
  some?: ApiToken_PermissionFilter | null;
  every?: ApiToken_PermissionFilter | null;
  none?: ApiToken_PermissionFilter | null;
}

/**
 * Worker create input from assignedProjects
 */
export interface AssignedProjects_WorkerCreateInput {
  org?: WorkerOrgRelationInput | null;
  user?: WorkerUserRelationInput | null;
  status?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  tags?: WorkerTagsRelationInput | null;
  taggedMedia?: WorkerTaggedMediaRelationInput | null;
  assignedProjects?: WorkerAssignedProjectsRelationInput | null;
  agreementID?: string | null;
}

/**
 * Projects create input from assignedWorkers
 */
export interface AssignedWorkers_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

export interface AuthenticationProfileFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  type?: StringPredicate | null;
  secret?: StringPredicate | null;
  managementDomain?: StringPredicate | null;
  clientId?: StringPredicate | null;
  databaseName?: StringPredicate | null;
  domain?: StringPredicate | null;
  selfSignUpEnabled?: BoolPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  roles?: RoleRelationFilter | null;
  AND?: AuthenticationProfileFilter[] | null;
  OR?: AuthenticationProfileFilter[] | null;
}

export interface AuthenticationProfileKeyFilter {
  id?: string | null;
  name?: string | null;
}

export interface AuthenticationProfileRelationFilter {
  some?: AuthenticationProfileFilter | null;
  every?: AuthenticationProfileFilter | null;
  none?: AuthenticationProfileFilter | null;
}

export interface AuthenticationProfile_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  type?: StringPredicate | null;
  secret?: StringPredicate | null;
  managementDomain?: StringPredicate | null;
  clientId?: StringPredicate | null;
  databaseName?: StringPredicate | null;
  domain?: StringPredicate | null;
  selfSignUpEnabled?: BoolPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  roles?: Role_PermissionRelationFilter | null;
  AND?: AuthenticationProfile_PermissionFilter[] | null;
  OR?: AuthenticationProfile_PermissionFilter[] | null;
}

export interface AuthenticationProfile_PermissionRelationFilter {
  some?: AuthenticationProfile_PermissionFilter | null;
  every?: AuthenticationProfile_PermissionFilter | null;
  none?: AuthenticationProfile_PermissionFilter | null;
}

/**
 * AuthenticationProfiles relation input
 */
export interface AuthenticationProfilesRolesRelationInput {
  connect?: RoleKeyFilter[] | null;
  create?: (AuthenticationProfiles_RoleCreateInput | null)[] | null;
}

/**
 * Roles create input from authenticationProfiles
 */
export interface AuthenticationProfiles_RoleCreateInput {
  name: string;
  description?: string | null;
  users?: RolesUsersRelationInput | null;
  permissions?: PermissionsInput | null;
  apiTokens?: RolesApiTokensRelationInput | null;
  authenticationProfiles?: RolesAuthenticationProfilesRelationInput | null;
  teamMembers?: RolesTeamMembersRelationInput | null;
}

/**
 * Users create input from avatar
 */
export interface Avatar_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

export interface BoolPredicate {
  equals?: boolean | null;
  not_equals?: boolean | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

/**
 * Messages create input from childMessages
 */
export interface ChildMessages_MessageCreateInput {
  body?: string | null;
  visibility?: string | null;
  title?: string | null;
  user?: MessagesUserRelationInput | null;
  project?: MessagesProjectRelationInput | null;
  orgMedia?: MessagesOrgMediaRelationInput | null;
  childMessages?: MessagesChildMessagesRelationInput | null;
  parentMessage?: MessagesParentMessageRelationInput | null;
}

/**
 * Plan create input from companies
 */
export interface Companies_PlanCreateInput {
  companies?: PlanCompaniesRelationInput | null;
}

/**
 * Files create input from companies_logo
 */
export interface Companies_logo_FileCreateInput {
  fileId?: string | null;
  public?: boolean | null;
  filename?: string | null;
  meta?: any | null;
  mods?: any | null;
  users_avatar?: FilesUsers_avatarRelationInput | null;
  teamMembers_avatar?: FilesTeamMembers_avatarRelationInput | null;
  companies_logo?: FilesCompanies_logoRelationInput | null;
  companies_videoLogo?: FilesCompanies_videoLogoRelationInput | null;
  agreements_file?: FilesAgreements_fileRelationInput | null;
}

/**
 * Files create input from companies_videoLogo
 */
export interface Companies_videoLogo_FileCreateInput {
  fileId?: string | null;
  public?: boolean | null;
  filename?: string | null;
  meta?: any | null;
  mods?: any | null;
  users_avatar?: FilesUsers_avatarRelationInput | null;
  teamMembers_avatar?: FilesTeamMembers_avatarRelationInput | null;
  companies_logo?: FilesCompanies_logoRelationInput | null;
  companies_videoLogo?: FilesCompanies_videoLogoRelationInput | null;
  agreements_file?: FilesAgreements_fileRelationInput | null;
}

/**
 * Tags create input from companyMedia
 */
export interface CompanyMedia_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * Tags create input from companyOwner
 */
export interface CompanyOwner_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * Orgs create input from customProjectTemplates
 */
export interface CustomProjectTemplates_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner?: OrgsOwnerRelationInput | null;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

export interface DatePredicate {
  equals?: any | null;
  not_equals?: any | null;
  in?: any[] | null;
  not_in?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
  relative?: DateRelativePredicates | null;
}

export interface DateRelativePredicateType {
  op?: RelativePredicateOpEnum | null;
  unit?: RelativePredicateUnitEnum | null;
  value: string;
}

export interface DateRelativePredicates {
  lt?: DateRelativePredicateType | null;
  lte?: DateRelativePredicateType | null;
  gt?: DateRelativePredicateType | null;
  gte?: DateRelativePredicateType | null;
}

export interface DateTimePredicate {
  equals?: any | null;
  not_equals?: any | null;
  in?: any[] | null;
  not_in?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
  relative?: DateRelativePredicates | null;
}

/**
 * DeliverableFieldsPermissions create input
 */
export interface DeliverableFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  name?: boolean | null;
  description?: boolean | null;
  quantity?: boolean | null;
  duration?: boolean | null;
  fileFormat?: boolean | null;
  height?: boolean | null;
  width?: boolean | null;
  example?: boolean | null;
}

export interface DeliverableFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  description?: StringPredicate | null;
  quantity?: IntPredicate | null;
  duration?: IntPredicate | null;
  fileFormat?: StringPredicate | null;
  height?: IntPredicate | null;
  width?: IntPredicate | null;
  example?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  projectTemplate?: ProjectTemplateFilter | null;
  media?: OrgMediaRelationFilter | null;
  AND?: DeliverableFilter[] | null;
  OR?: DeliverableFilter[] | null;
}

export interface DeliverableKeyFilter {
  id?: string | null;
}

export interface DeliverableRelationFilter {
  some?: DeliverableFilter | null;
  every?: DeliverableFilter | null;
  none?: DeliverableFilter | null;
}

export interface Deliverable_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  description?: StringPredicate | null;
  quantity?: IntPredicate | null;
  duration?: IntPredicate | null;
  fileFormat?: StringPredicate | null;
  height?: IntPredicate | null;
  width?: IntPredicate | null;
  example?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  projectTemplate?: ProjectTemplate_PermissionFilter | null;
  media?: OrgMedia_PermissionRelationFilter | null;
  AND?: Deliverable_PermissionFilter[] | null;
  OR?: Deliverable_PermissionFilter[] | null;
}

export interface Deliverable_PermissionRelationFilter {
  some?: Deliverable_PermissionFilter | null;
  every?: Deliverable_PermissionFilter | null;
  none?: Deliverable_PermissionFilter | null;
}

/**
 * Deliverables relation input
 */
export interface DeliverablesMediaRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (Deliverables_OrgMediaCreateInput | null)[] | null;
}

/**
 * Deliverables relation input
 */
export interface DeliverablesProjectTemplateRelationInput {
  connect?: ProjectTemplateKeyFilter | null;
  create?: Deliverables_ProjectTemplateCreateInput | null;
}

/**
 * OrgMedia create input from deliverables
 */
export interface Deliverables_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

/**
 * ProjectTemplates create input from deliverables
 */
export interface Deliverables_ProjectTemplateCreateInput {
  name?: string | null;
  type?: string | null;
  description?: string | null;
  uses?: string | null;
  tips?: string | null;
  linkedTaskTemplates?: ProjectTemplatesLinkedTaskTemplatesRelationInput | null;
  projects?: ProjectTemplatesProjectsRelationInput | null;
  exampleURL?: string | null;
  deliverables?: ProjectTemplatesDeliverablesRelationInput | null;
  tags?: ProjectTemplatesTagsRelationInput | null;
  orgOwners?: ProjectTemplatesOrgOwnersRelationInput | null;
}

/**
 * EditorFieldsPermissions create input
 */
export interface EditorFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  status?: boolean | null;
  certification?: boolean | null;
}

export interface EditorFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  certification?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  tags?: TagRelationFilter | null;
  user?: UserFilter | null;
  projects?: ProjectRelationFilter | null;
  AND?: EditorFilter[] | null;
  OR?: EditorFilter[] | null;
}

export interface EditorKeyFilter {
  id?: string | null;
}

export interface EditorRelationFilter {
  some?: EditorFilter | null;
  every?: EditorFilter | null;
  none?: EditorFilter | null;
}

export interface Editor_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  certification?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  user?: User_PermissionFilter | null;
  projects?: Project_PermissionRelationFilter | null;
  AND?: Editor_PermissionFilter[] | null;
  OR?: Editor_PermissionFilter[] | null;
}

export interface Editor_PermissionRelationFilter {
  some?: Editor_PermissionFilter | null;
  every?: Editor_PermissionFilter | null;
  none?: Editor_PermissionFilter | null;
}

/**
 * Projects create input from editor
 */
export interface Editor_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

/**
 * Users create input from editor
 */
export interface Editor_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * Editors relation input
 */
export interface EditorsProjectsRelationInput {
  connect?: ProjectKeyFilter[] | null;
  create?: (Editor_ProjectCreateInput | null)[] | null;
}

/**
 * Editors relation input
 */
export interface EditorsTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (Editors_TagCreateInput | null)[] | null;
}

/**
 * Editors relation input
 */
export interface EditorsUserRelationInput {
  connect?: UserKeyFilter | null;
  create?: Editor_UserCreateInput | null;
}

/**
 * Tags create input from editors
 */
export interface Editors_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * EducationFieldsPermissions create input
 */
export interface EducationFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  start?: boolean | null;
  end?: boolean | null;
  degree?: boolean | null;
  field?: boolean | null;
}

export interface EducationFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  start?: IntPredicate | null;
  end?: IntPredicate | null;
  degree?: StringPredicate | null;
  field?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  user?: UserFilter | null;
  school?: OrgFilter | null;
  AND?: EducationFilter[] | null;
  OR?: EducationFilter[] | null;
}

export interface EducationKeyFilter {
  id?: string | null;
}

export interface EducationRelationFilter {
  some?: EducationFilter | null;
  every?: EducationFilter | null;
  none?: EducationFilter | null;
}

/**
 * Education relation input
 */
export interface EducationSchoolRelationInput {
  connect?: OrgKeyFilter | null;
  create?: Alumni_OrgCreateInput | null;
}

/**
 * Education relation input
 */
export interface EducationUserRelationInput {
  connect?: UserKeyFilter | null;
  create?: Education_UserCreateInput | null;
}

export interface Education_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  start?: IntPredicate | null;
  end?: IntPredicate | null;
  degree?: StringPredicate | null;
  field?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  user?: User_PermissionFilter | null;
  school?: Org_PermissionFilter | null;
  AND?: Education_PermissionFilter[] | null;
  OR?: Education_PermissionFilter[] | null;
}

export interface Education_PermissionRelationFilter {
  some?: Education_PermissionFilter | null;
  every?: Education_PermissionFilter | null;
  none?: Education_PermissionFilter | null;
}

/**
 * Users create input from education
 */
export interface Education_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * FileFieldsPermissions create input
 */
export interface FileFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  fileId?: boolean | null;
  downloadUrl?: boolean | null;
  shareUrl?: boolean | null;
  provider?: boolean | null;
  public?: boolean | null;
  uploaded?: boolean | null;
  filename?: boolean | null;
  uploadUrl?: boolean | null;
  fields?: boolean | null;
  meta?: boolean | null;
  mods?: boolean | null;
}

export interface FileFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  fileId?: StringPredicate | null;
  downloadUrl?: StringPredicate | null;
  shareUrl?: StringPredicate | null;
  provider?: StringPredicate | null;
  public?: BoolPredicate | null;
  uploaded?: BoolPredicate | null;
  filename?: StringPredicate | null;
  uploadUrl?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  settings_menuBarLogo?: SettingRelationFilter | null;
  settings_landingPageImage?: SettingRelationFilter | null;
  users_avatar?: UserRelationFilter | null;
  teamMembers_avatar?: TeamMemberRelationFilter | null;
  companies_logo?: OrgRelationFilter | null;
  companies_videoLogo?: OrgRelationFilter | null;
  agreements_file?: AgreementRelationFilter | null;
  AND?: FileFilter[] | null;
  OR?: FileFilter[] | null;
}

export interface FileKeyFilter {
  id?: string | null;
  fileId?: string | null;
}

export interface FileRelationFilter {
  some?: FileFilter | null;
  every?: FileFilter | null;
  none?: FileFilter | null;
}

/**
 * Agreements create input from file
 */
export interface File_AgreementCreateInput {
  type?: string | null;
  body?: string | null;
  file?: AgreementsFileRelationInput | null;
}

export interface File_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  fileId?: StringPredicate | null;
  downloadUrl?: StringPredicate | null;
  shareUrl?: StringPredicate | null;
  provider?: StringPredicate | null;
  public?: BoolPredicate | null;
  uploaded?: BoolPredicate | null;
  filename?: StringPredicate | null;
  uploadUrl?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  settings_menuBarLogo?: Setting_PermissionRelationFilter | null;
  settings_landingPageImage?: Setting_PermissionRelationFilter | null;
  users_avatar?: User_PermissionRelationFilter | null;
  teamMembers_avatar?: TeamMember_PermissionRelationFilter | null;
  companies_logo?: Org_PermissionRelationFilter | null;
  companies_videoLogo?: Org_PermissionRelationFilter | null;
  agreements_file?: Agreement_PermissionRelationFilter | null;
  AND?: File_PermissionFilter[] | null;
  OR?: File_PermissionFilter[] | null;
}

export interface File_PermissionRelationFilter {
  some?: File_PermissionFilter | null;
  every?: File_PermissionFilter | null;
  none?: File_PermissionFilter | null;
}

/**
 * Files relation input
 */
export interface FilesAgreements_fileRelationInput {
  connect?: AgreementKeyFilter[] | null;
  create?: (File_AgreementCreateInput | null)[] | null;
}

/**
 * Files relation input
 */
export interface FilesCompanies_logoRelationInput {
  connect?: OrgKeyFilter[] | null;
  create?: (Logo_OrgCreateInput | null)[] | null;
}

/**
 * Files relation input
 */
export interface FilesCompanies_videoLogoRelationInput {
  connect?: OrgKeyFilter[] | null;
  create?: (VideoLogo_OrgCreateInput | null)[] | null;
}

/**
 * Files relation input
 */
export interface FilesTeamMembers_avatarRelationInput {
  connect?: TeamMemberKeyFilter[] | null;
}

/**
 * Files relation input
 */
export interface FilesUsers_avatarRelationInput {
  connect?: UserKeyFilter[] | null;
  create?: (Avatar_UserCreateInput | null)[] | null;
}

export interface IDPredicate {
  equals?: string | null;
  not_equals?: string | null;
  in?: string[] | null;
  not_in?: string[] | null;
  contains?: string | null;
  not_contains?: string | null;
  starts_with?: string | null;
  not_starts_with?: string | null;
  ends_with?: string | null;
  not_ends_with?: string | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

export interface IntPredicate {
  equals?: number | null;
  not_equals?: number | null;
  in?: number[] | null;
  not_in?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

/**
 * TaskTemplates create input from linkedProjects
 */
export interface LinkedProjects_TaskTemplateCreateInput {
  name?: string | null;
  tags?: TaskTemplatesTagsRelationInput | null;
  description?: string | null;
  linkedProjects?: TaskTemplatesLinkedProjectsRelationInput | null;
  exampleURL?: string | null;
  type?: string | null;
  pointers?: TaskTemplatesPointersRelationInput | null;
}

/**
 * ProjectTemplates create input from linkedTaskTemplates
 */
export interface LinkedTaskTemplates_ProjectTemplateCreateInput {
  name?: string | null;
  type?: string | null;
  description?: string | null;
  uses?: string | null;
  tips?: string | null;
  linkedTaskTemplates?: ProjectTemplatesLinkedTaskTemplatesRelationInput | null;
  projects?: ProjectTemplatesProjectsRelationInput | null;
  exampleURL?: string | null;
  deliverables?: ProjectTemplatesDeliverablesRelationInput | null;
  tags?: ProjectTemplatesTagsRelationInput | null;
  orgOwners?: ProjectTemplatesOrgOwnersRelationInput | null;
}

/**
 * Orgs create input from logo
 */
export interface Logo_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner: OrgsOwnerRelationInput;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * MediaFieldsPermissions create input
 */
export interface MediaFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  fileName?: boolean | null;
  url?: boolean | null;
  status?: boolean | null;
  mimeType?: boolean | null;
  size?: boolean | null;
  key?: boolean | null;
  workflowJobId?: boolean | null;
  originalMediaUrl?: boolean | null;
  isProcessing?: boolean | null;
  thumbnailUrl?: boolean | null;
}

export interface MediaFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  fileName?: StringPredicate | null;
  url?: StringPredicate | null;
  status?: StringPredicate | null;
  mimeType?: StringPredicate | null;
  size?: IntPredicate | null;
  key?: StringPredicate | null;
  workflowJobId?: StringPredicate | null;
  originalMediaUrl?: StringPredicate | null;
  isProcessing?: IntPredicate | null;
  thumbnailUrl?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  owner?: UserFilter | null;
  orgs?: OrgMediaRelationFilter | null;
  tags?: TagRelationFilter | null;
  AND?: MediaFilter[] | null;
  OR?: MediaFilter[] | null;
}

export interface MediaKeyFilter {
  id?: string | null;
}

/**
 * Media relation input
 */
export interface MediaOrgsRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (Media_OrgMediaCreateInput | null)[] | null;
}

/**
 * Media relation input
 */
export interface MediaOwnerRelationInput {
  connect?: UserKeyFilter | null;
  create?: Media_UserCreateInput | null;
}

export interface MediaRelationFilter {
  some?: MediaFilter | null;
  every?: MediaFilter | null;
  none?: MediaFilter | null;
}

/**
 * Media relation input
 */
export interface MediaTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (Media_TagCreateInput | null)[] | null;
}

/**
 * Deliverables create input from media
 */
export interface Media_DeliverableCreateInput {
  name?: string | null;
  description?: string | null;
  quantity?: number | null;
  duration?: number | null;
  fileFormat?: string | null;
  height?: number | null;
  width?: number | null;
  example?: string | null;
  projectTemplate?: DeliverablesProjectTemplateRelationInput | null;
  media?: DeliverablesMediaRelationInput | null;
}

/**
 * Orgs create input from media
 */
export interface Media_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner?: OrgsOwnerRelationInput | null;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * OrgMedia create input from media
 */
export interface Media_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

export interface Media_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  fileName?: StringPredicate | null;
  url?: StringPredicate | null;
  status?: StringPredicate | null;
  mimeType?: StringPredicate | null;
  size?: IntPredicate | null;
  key?: StringPredicate | null;
  workflowJobId?: StringPredicate | null;
  originalMediaUrl?: StringPredicate | null;
  isProcessing?: IntPredicate | null;
  thumbnailUrl?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  owner?: User_PermissionFilter | null;
  orgs?: OrgMedia_PermissionRelationFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  AND?: Media_PermissionFilter[] | null;
  OR?: Media_PermissionFilter[] | null;
}

export interface Media_PermissionRelationFilter {
  some?: Media_PermissionFilter | null;
  every?: Media_PermissionFilter | null;
  none?: Media_PermissionFilter | null;
}

/**
 * Projects create input from media
 */
export interface Media_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

/**
 * Tags create input from media
 */
export interface Media_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * Tasks create input from media
 */
export interface Media_TaskCreateInput {
  project?: TasksProjectRelationInput | null;
  template?: TasksTemplateRelationInput | null;
  status?: string | null;
  media?: TasksMediaRelationInput | null;
}

/**
 * Users create input from media
 */
export interface Media_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * MessageFieldsPermissions create input
 */
export interface MessageFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  body?: boolean | null;
  visibility?: boolean | null;
  title?: boolean | null;
}

export interface MessageFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  body?: StringPredicate | null;
  visibility?: StringPredicate | null;
  title?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  user?: UserFilter | null;
  project?: ProjectFilter | null;
  orgMedia?: OrgMediaRelationFilter | null;
  childMessages?: MessageRelationFilter | null;
  parentMessage?: MessageFilter | null;
  AND?: MessageFilter[] | null;
  OR?: MessageFilter[] | null;
}

export interface MessageKeyFilter {
  id?: string | null;
}

export interface MessageRelationFilter {
  some?: MessageFilter | null;
  every?: MessageFilter | null;
  none?: MessageFilter | null;
}

export interface Message_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  body?: StringPredicate | null;
  visibility?: StringPredicate | null;
  title?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  user?: User_PermissionFilter | null;
  project?: Project_PermissionFilter | null;
  orgMedia?: OrgMedia_PermissionRelationFilter | null;
  childMessages?: Message_PermissionRelationFilter | null;
  parentMessage?: Message_PermissionFilter | null;
  AND?: Message_PermissionFilter[] | null;
  OR?: Message_PermissionFilter[] | null;
}

export interface Message_PermissionRelationFilter {
  some?: Message_PermissionFilter | null;
  every?: Message_PermissionFilter | null;
  none?: Message_PermissionFilter | null;
}

/**
 * Messages relation input
 */
export interface MessagesChildMessagesRelationInput {
  connect?: MessageKeyFilter[] | null;
  create?: (ParentMessage_MessageCreateInput | null)[] | null;
}

/**
 * Messages relation input
 */
export interface MessagesOrgMediaRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (Messages_OrgMediaCreateInput | null)[] | null;
}

/**
 * Messages relation input
 */
export interface MessagesParentMessageRelationInput {
  connect?: MessageKeyFilter | null;
  create?: ChildMessages_MessageCreateInput | null;
}

/**
 * Messages relation input
 */
export interface MessagesProjectRelationInput {
  connect?: ProjectKeyFilter | null;
  create?: Messages_ProjectCreateInput | null;
}

/**
 * Messages relation input
 */
export interface MessagesUserRelationInput {
  connect?: UserKeyFilter | null;
  create?: Messages_UserCreateInput | null;
}

/**
 * OrgMedia create input from messages
 */
export interface Messages_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

/**
 * Projects create input from messages
 */
export interface Messages_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

/**
 * Users create input from messages
 */
export interface Messages_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * Users create input from orgAdmin
 */
export interface OrgAdmin_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * OrgFieldsPermissions create input
 */
export interface OrgFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  name?: boolean | null;
  slug?: boolean | null;
  status?: boolean | null;
  website?: boolean | null;
  facebookURL?: boolean | null;
  linkedinURL?: boolean | null;
  twitterURL?: boolean | null;
  youtubeURL?: boolean | null;
  orgSize?: boolean | null;
  industryID?: boolean | null;
  hQAddress?: boolean | null;
  color1?: boolean | null;
  color2?: boolean | null;
  color3?: boolean | null;
  titleFont?: boolean | null;
  paragraphFont?: boolean | null;
  agreementID?: boolean | null;
}

export interface OrgFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  slug?: StringPredicate | null;
  status?: StringPredicate | null;
  website?: StringPredicate | null;
  facebookURL?: StringPredicate | null;
  linkedinURL?: StringPredicate | null;
  twitterURL?: StringPredicate | null;
  youtubeURL?: StringPredicate | null;
  orgSize?: IntPredicate | null;
  industryID?: StringPredicate | null;
  hQAddress?: SmartAddressPredicate | null;
  color1?: StringPredicate | null;
  color2?: StringPredicate | null;
  color3?: StringPredicate | null;
  titleFont?: StringPredicate | null;
  paragraphFont?: StringPredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  tags?: TagRelationFilter | null;
  ownedTags?: TagRelationFilter | null;
  plan?: PlanFilter | null;
  logo?: FileFilter | null;
  owner?: UserFilter | null;
  projects?: ProjectRelationFilter | null;
  workers?: WorkerRelationFilter | null;
  videoLogo?: FileRelationFilter | null;
  media?: OrgMediaRelationFilter | null;
  alumni?: EducationRelationFilter | null;
  admins?: UserRelationFilter | null;
  customProjectTemplates?: ProjectTemplateRelationFilter | null;
  AND?: OrgFilter[] | null;
  OR?: OrgFilter[] | null;
}

export interface OrgKeyFilter {
  id?: string | null;
  slug?: string | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaDeliverablesRelationInput {
  connect?: DeliverableKeyFilter | null;
  create?: Media_DeliverableCreateInput | null;
}

/**
 * OrgMediaFieldsPermissions create input
 */
export interface OrgMediaFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  type?: boolean | null;
  status?: boolean | null;
  agreementID?: boolean | null;
}

export interface OrgMediaFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  type?: StringPredicate | null;
  status?: StringPredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  org?: OrgFilter | null;
  media?: MediaFilter | null;
  parentTask?: TaskFilter | null;
  projects?: ProjectRelationFilter | null;
  taggedWorkers?: WorkerRelationFilter | null;
  deliverables?: DeliverableFilter | null;
  tags?: TagRelationFilter | null;
  messages?: MessageRelationFilter | null;
  AND?: OrgMediaFilter[] | null;
  OR?: OrgMediaFilter[] | null;
}

export interface OrgMediaKeyFilter {
  id?: string | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaMediaRelationInput {
  connect?: MediaKeyFilter | null;
  create?: Orgs_MediaCreateInput | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaMessagesRelationInput {
  connect?: MessageKeyFilter[] | null;
  create?: (OrgMedia_MessageCreateInput | null)[] | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaOrgRelationInput {
  connect?: OrgKeyFilter | null;
  create?: Media_OrgCreateInput | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaParentTaskRelationInput {
  connect?: TaskKeyFilter | null;
  create?: Media_TaskCreateInput | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaProjectsRelationInput {
  connect?: ProjectKeyFilter[] | null;
  create?: (Media_ProjectCreateInput | null)[] | null;
}

export interface OrgMediaRelationFilter {
  some?: OrgMediaFilter | null;
  every?: OrgMediaFilter | null;
  none?: OrgMediaFilter | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaTaggedWorkersRelationInput {
  connect?: WorkerKeyFilter[] | null;
  create?: (TaggedMedia_WorkerCreateInput | null)[] | null;
}

/**
 * OrgMedia relation input
 */
export interface OrgMediaTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (CompanyMedia_TagCreateInput | null)[] | null;
}

/**
 * Messages create input from orgMedia
 */
export interface OrgMedia_MessageCreateInput {
  body?: string | null;
  visibility?: string | null;
  title?: string | null;
  user?: MessagesUserRelationInput | null;
  project?: MessagesProjectRelationInput | null;
  orgMedia?: MessagesOrgMediaRelationInput | null;
  childMessages?: MessagesChildMessagesRelationInput | null;
  parentMessage?: MessagesParentMessageRelationInput | null;
}

export interface OrgMedia_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  type?: StringPredicate | null;
  status?: StringPredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  org?: Org_PermissionFilter | null;
  media?: Media_PermissionFilter | null;
  parentTask?: Task_PermissionFilter | null;
  projects?: Project_PermissionRelationFilter | null;
  taggedWorkers?: Worker_PermissionRelationFilter | null;
  deliverables?: Deliverable_PermissionFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  messages?: Message_PermissionRelationFilter | null;
  AND?: OrgMedia_PermissionFilter[] | null;
  OR?: OrgMedia_PermissionFilter[] | null;
}

export interface OrgMedia_PermissionRelationFilter {
  some?: OrgMedia_PermissionFilter | null;
  every?: OrgMedia_PermissionFilter | null;
  none?: OrgMedia_PermissionFilter | null;
}

/**
 * ProjectTemplates create input from orgOwners
 */
export interface OrgOwners_ProjectTemplateCreateInput {
  name?: string | null;
  type?: string | null;
  description?: string | null;
  uses?: string | null;
  tips?: string | null;
  linkedTaskTemplates?: ProjectTemplatesLinkedTaskTemplatesRelationInput | null;
  projects?: ProjectTemplatesProjectsRelationInput | null;
  exampleURL?: string | null;
  deliverables?: ProjectTemplatesDeliverablesRelationInput | null;
  tags?: ProjectTemplatesTagsRelationInput | null;
  orgOwners?: ProjectTemplatesOrgOwnersRelationInput | null;
}

export interface OrgRelationFilter {
  some?: OrgFilter | null;
  every?: OrgFilter | null;
  none?: OrgFilter | null;
}

/**
 * OrgMedia create input from org
 */
export interface Org_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

export interface Org_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  slug?: StringPredicate | null;
  status?: StringPredicate | null;
  website?: StringPredicate | null;
  facebookURL?: StringPredicate | null;
  linkedinURL?: StringPredicate | null;
  twitterURL?: StringPredicate | null;
  youtubeURL?: StringPredicate | null;
  orgSize?: IntPredicate | null;
  industryID?: StringPredicate | null;
  hQAddress?: SmartAddressPredicate | null;
  color1?: StringPredicate | null;
  color2?: StringPredicate | null;
  color3?: StringPredicate | null;
  titleFont?: StringPredicate | null;
  paragraphFont?: StringPredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  ownedTags?: Tag_PermissionRelationFilter | null;
  plan?: Plan_PermissionFilter | null;
  logo?: File_PermissionFilter | null;
  owner?: User_PermissionFilter | null;
  projects?: Project_PermissionRelationFilter | null;
  workers?: Worker_PermissionRelationFilter | null;
  videoLogo?: File_PermissionRelationFilter | null;
  media?: OrgMedia_PermissionRelationFilter | null;
  alumni?: Education_PermissionRelationFilter | null;
  admins?: User_PermissionRelationFilter | null;
  customProjectTemplates?: ProjectTemplate_PermissionRelationFilter | null;
  AND?: Org_PermissionFilter[] | null;
  OR?: Org_PermissionFilter[] | null;
}

export interface Org_PermissionRelationFilter {
  some?: Org_PermissionFilter | null;
  every?: Org_PermissionFilter | null;
  none?: Org_PermissionFilter | null;
}

/**
 * Projects create input from org
 */
export interface Org_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

/**
 * Worker create input from org
 */
export interface Org_WorkerCreateInput {
  org?: WorkerOrgRelationInput | null;
  user?: WorkerUserRelationInput | null;
  status?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  tags?: WorkerTagsRelationInput | null;
  taggedMedia?: WorkerTaggedMediaRelationInput | null;
  assignedProjects?: WorkerAssignedProjectsRelationInput | null;
  agreementID?: string | null;
}

/**
 * Orgs relation input
 */
export interface OrgsAdminsRelationInput {
  connect?: UserKeyFilter[] | null;
  create?: (OrgAdmin_UserCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsAlumniRelationInput {
  connect?: EducationKeyFilter[] | null;
  create?: (School_EducationCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsCustomProjectTemplatesRelationInput {
  connect?: ProjectTemplateKeyFilter[] | null;
  create?: (OrgOwners_ProjectTemplateCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsLogoRelationInput {
  connect?: FileKeyFilter | null;
  create?: Companies_logo_FileCreateInput | null;
}

/**
 * Orgs relation input
 */
export interface OrgsMediaRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (Org_OrgMediaCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsOwnedTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (CompanyOwner_TagCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsOwnerRelationInput {
  connect?: UserKeyFilter | null;
  create?: OwnedCompanies_UserCreateInput | null;
}

/**
 * Orgs relation input
 */
export interface OrgsPlanRelationInput {
  connect?: PlanKeyFilter | null;
  create?: Companies_PlanCreateInput | null;
}

/**
 * Orgs relation input
 */
export interface OrgsProjectsRelationInput {
  connect?: ProjectKeyFilter[] | null;
  create?: (Org_ProjectCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (Orgs_TagCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsVideoLogoRelationInput {
  connect?: FileKeyFilter[] | null;
  create?: (Companies_videoLogo_FileCreateInput | null)[] | null;
}

/**
 * Orgs relation input
 */
export interface OrgsWorkersRelationInput {
  connect?: WorkerKeyFilter[] | null;
  create?: (Org_WorkerCreateInput | null)[] | null;
}

/**
 * Media create input from orgs
 */
export interface Orgs_MediaCreateInput {
  fileName: string;
  url?: string | null;
  owner?: MediaOwnerRelationInput | null;
  status?: string | null;
  orgs?: MediaOrgsRelationInput | null;
  mimeType?: string | null;
  size?: number | null;
  key?: string | null;
  tags?: MediaTagsRelationInput | null;
  workflowJobId?: string | null;
  originalMediaUrl?: string | null;
  isProcessing?: number | null;
  thumbnailUrl?: string | null;
}

/**
 * Tags create input from orgs
 */
export interface Orgs_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * Users create input from ownedCompanies
 */
export interface OwnedCompanies_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * Orgs create input from ownedTags
 */
export interface OwnedTags_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner: OrgsOwnerRelationInput;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * Media create input from owner
 */
export interface Owner_MediaCreateInput {
  fileName: string;
  url?: string | null;
  owner?: MediaOwnerRelationInput | null;
  status?: string | null;
  orgs?: MediaOrgsRelationInput | null;
  mimeType?: string | null;
  size?: number | null;
  key?: string | null;
  tags?: MediaTagsRelationInput | null;
  workflowJobId?: string | null;
  originalMediaUrl?: string | null;
  isProcessing?: number | null;
  thumbnailUrl?: string | null;
}

/**
 * Orgs create input from owner
 */
export interface Owner_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner?: OrgsOwnerRelationInput | null;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * Messages create input from parentMessage
 */
export interface ParentMessage_MessageCreateInput {
  body?: string | null;
  visibility?: string | null;
  title?: string | null;
  user?: MessagesUserRelationInput | null;
  project?: MessagesProjectRelationInput | null;
  orgMedia?: MessagesOrgMediaRelationInput | null;
  childMessages?: MessagesChildMessagesRelationInput | null;
  parentMessage?: MessagesParentMessageRelationInput | null;
}

/**
 * OrgMedia create input from parentTask
 */
export interface ParentTask_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

export interface PermissionFilter {
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  appId?: StringPredicate | null;
  resourceType?: StringPredicate | null;
  resource?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  role?: RoleFilter | null;
  AND?: PermissionFilter[] | null;
  OR?: PermissionFilter[] | null;
}

export interface PermissionRelationFilter {
  some?: PermissionFilter | null;
  every?: PermissionFilter | null;
  none?: PermissionFilter | null;
}

export interface Permission_PermissionFilter {
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  appId?: StringPredicate | null;
  resourceType?: StringPredicate | null;
  resource?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  role?: Role_PermissionFilter | null;
  AND?: Permission_PermissionFilter[] | null;
  OR?: Permission_PermissionFilter[] | null;
}

export interface Permission_PermissionRelationFilter {
  some?: Permission_PermissionFilter | null;
  every?: Permission_PermissionFilter | null;
  none?: Permission_PermissionFilter | null;
}

/**
 * custom permissions input
 */
export interface PermissionsCustom {
  data?: PermissionsCustomData | null;
  logic?: PermissionsCustomLogic | null;
  users?: PermissionsCustomUsers | null;
  settings?: PermissionsCustomSettings | null;
}

export interface PermissionsCustomData {
  schemaManagement?: PermissionsCustomDataSchemaManagement | null;
  viewerAccess?: PermissionsCustomDataViewerAccess | null;
}

export interface PermissionsCustomDataSchemaManagement {
  allow: boolean;
}

export interface PermissionsCustomDataViewerAccess {
  allow: boolean;
}

export interface PermissionsCustomLogic {
  view?: PermissionsCustomLogicView | null;
  deploy?: PermissionsCustomLogicDeploy | null;
  invoke?: PermissionsCustomLogicInvoke | null;
  logs?: PermissionsCustomLogicLogs | null;
}

export interface PermissionsCustomLogicDeploy {
  allow: boolean;
}

export interface PermissionsCustomLogicInvoke {
  allow: boolean;
}

export interface PermissionsCustomLogicLogs {
  allow: boolean;
}

export interface PermissionsCustomLogicView {
  allow: boolean;
}

export interface PermissionsCustomSettings {
  workspaceAdministration?: PermissionsCustomSettingsWorkspaceAdministration | null;
}

export interface PermissionsCustomSettingsWorkspaceAdministration {
  allow: boolean;
}

export interface PermissionsCustomUsers {
  teamAdministration?: PermissionsCustomUsersTeamAdministration | null;
}

export interface PermissionsCustomUsersTeamAdministration {
  allow: boolean;
}

/**
 * Schema tables permissions input
 */
export interface PermissionsData {
  Users?: PermissionsDataUsers | null;
  Files?: PermissionsDataFiles | null;
  Roles?: PermissionsDataRoles | null;
  Orgs?: PermissionsDataOrgs | null;
  Tags?: PermissionsDataTags | null;
  Plan?: PermissionsDataPlan | null;
  Editors?: PermissionsDataEditors | null;
  Media?: PermissionsDataMedia | null;
  Projects?: PermissionsDataProjects | null;
  ProjectTemplates?: PermissionsDataProjectTemplates | null;
  Tasks?: PermissionsDataTasks | null;
  TaskTemplates?: PermissionsDataTaskTemplates | null;
  Worker?: PermissionsDataWorker | null;
  ProjectTaskReqs?: PermissionsDataProjectTaskReqs | null;
  Deliverables?: PermissionsDataDeliverables | null;
  OrgMedia?: PermissionsDataOrgMedia | null;
  Education?: PermissionsDataEducation | null;
  Messages?: PermissionsDataMessages | null;
  Pointers?: PermissionsDataPointers | null;
  Agreements?: PermissionsDataAgreements | null;
}

export interface PermissionsDataAgreements {
  create?: PermissionsDataAgreementsCreate | null;
  read?: PermissionsDataAgreementsRead | null;
  update?: PermissionsDataAgreementsUpdate | null;
  delete?: PermissionsDataAgreementsDelete | null;
  destroy?: PermissionsDataAgreementsDestroy | null;
}

export interface PermissionsDataAgreementsCreate {
  allow: boolean;
}

export interface PermissionsDataAgreementsDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataAgreementsDestroy {
  allow: boolean;
}

export interface PermissionsDataAgreementsRead {
  allow: boolean;
  filter?: Agreement_PermissionFilter | null;
  fields?: AgreementFieldsPermissions | null;
}

export interface PermissionsDataAgreementsUpdate {
  allow: boolean;
  filter?: Agreement_PermissionFilter | null;
  fields?: AgreementFieldsPermissions | null;
}

export interface PermissionsDataDeliverables {
  create?: PermissionsDataDeliverablesCreate | null;
  read?: PermissionsDataDeliverablesRead | null;
  update?: PermissionsDataDeliverablesUpdate | null;
  delete?: PermissionsDataDeliverablesDelete | null;
  destroy?: PermissionsDataDeliverablesDestroy | null;
}

export interface PermissionsDataDeliverablesCreate {
  allow: boolean;
}

export interface PermissionsDataDeliverablesDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataDeliverablesDestroy {
  allow: boolean;
}

export interface PermissionsDataDeliverablesRead {
  allow: boolean;
  filter?: Deliverable_PermissionFilter | null;
  fields?: DeliverableFieldsPermissions | null;
}

export interface PermissionsDataDeliverablesUpdate {
  allow: boolean;
  filter?: Deliverable_PermissionFilter | null;
  fields?: DeliverableFieldsPermissions | null;
}

export interface PermissionsDataEditors {
  create?: PermissionsDataEditorsCreate | null;
  read?: PermissionsDataEditorsRead | null;
  update?: PermissionsDataEditorsUpdate | null;
  delete?: PermissionsDataEditorsDelete | null;
  destroy?: PermissionsDataEditorsDestroy | null;
}

export interface PermissionsDataEditorsCreate {
  allow: boolean;
}

export interface PermissionsDataEditorsDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataEditorsDestroy {
  allow: boolean;
}

export interface PermissionsDataEditorsRead {
  allow: boolean;
  filter?: Editor_PermissionFilter | null;
  fields?: EditorFieldsPermissions | null;
}

export interface PermissionsDataEditorsUpdate {
  allow: boolean;
  filter?: Editor_PermissionFilter | null;
  fields?: EditorFieldsPermissions | null;
}

export interface PermissionsDataEducation {
  create?: PermissionsDataEducationCreate | null;
  read?: PermissionsDataEducationRead | null;
  update?: PermissionsDataEducationUpdate | null;
  delete?: PermissionsDataEducationDelete | null;
  destroy?: PermissionsDataEducationDestroy | null;
}

export interface PermissionsDataEducationCreate {
  allow: boolean;
}

export interface PermissionsDataEducationDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataEducationDestroy {
  allow: boolean;
}

export interface PermissionsDataEducationRead {
  allow: boolean;
  filter?: Education_PermissionFilter | null;
  fields?: EducationFieldsPermissions | null;
}

export interface PermissionsDataEducationUpdate {
  allow: boolean;
  filter?: Education_PermissionFilter | null;
  fields?: EducationFieldsPermissions | null;
}

export interface PermissionsDataFiles {
  create?: PermissionsDataFilesCreate | null;
  read?: PermissionsDataFilesRead | null;
  update?: PermissionsDataFilesUpdate | null;
  delete?: PermissionsDataFilesDelete | null;
  destroy?: PermissionsDataFilesDestroy | null;
}

export interface PermissionsDataFilesCreate {
  allow: boolean;
}

export interface PermissionsDataFilesDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataFilesDestroy {
  allow: boolean;
}

export interface PermissionsDataFilesRead {
  allow: boolean;
  filter?: File_PermissionFilter | null;
  fields?: FileFieldsPermissions | null;
}

export interface PermissionsDataFilesUpdate {
  allow: boolean;
  filter?: File_PermissionFilter | null;
  fields?: FileFieldsPermissions | null;
}

export interface PermissionsDataMedia {
  create?: PermissionsDataMediaCreate | null;
  read?: PermissionsDataMediaRead | null;
  update?: PermissionsDataMediaUpdate | null;
  delete?: PermissionsDataMediaDelete | null;
  destroy?: PermissionsDataMediaDestroy | null;
}

export interface PermissionsDataMediaCreate {
  allow: boolean;
}

export interface PermissionsDataMediaDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataMediaDestroy {
  allow: boolean;
}

export interface PermissionsDataMediaRead {
  allow: boolean;
  filter?: Media_PermissionFilter | null;
  fields?: MediaFieldsPermissions | null;
}

export interface PermissionsDataMediaUpdate {
  allow: boolean;
  filter?: Media_PermissionFilter | null;
  fields?: MediaFieldsPermissions | null;
}

export interface PermissionsDataMessages {
  create?: PermissionsDataMessagesCreate | null;
  read?: PermissionsDataMessagesRead | null;
  update?: PermissionsDataMessagesUpdate | null;
  delete?: PermissionsDataMessagesDelete | null;
  destroy?: PermissionsDataMessagesDestroy | null;
}

export interface PermissionsDataMessagesCreate {
  allow: boolean;
}

export interface PermissionsDataMessagesDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataMessagesDestroy {
  allow: boolean;
}

export interface PermissionsDataMessagesRead {
  allow: boolean;
  filter?: Message_PermissionFilter | null;
  fields?: MessageFieldsPermissions | null;
}

export interface PermissionsDataMessagesUpdate {
  allow: boolean;
  filter?: Message_PermissionFilter | null;
  fields?: MessageFieldsPermissions | null;
}

export interface PermissionsDataOrgMedia {
  create?: PermissionsDataOrgMediaCreate | null;
  read?: PermissionsDataOrgMediaRead | null;
  update?: PermissionsDataOrgMediaUpdate | null;
  delete?: PermissionsDataOrgMediaDelete | null;
  destroy?: PermissionsDataOrgMediaDestroy | null;
}

export interface PermissionsDataOrgMediaCreate {
  allow: boolean;
}

export interface PermissionsDataOrgMediaDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataOrgMediaDestroy {
  allow: boolean;
}

export interface PermissionsDataOrgMediaRead {
  allow: boolean;
  filter?: OrgMedia_PermissionFilter | null;
  fields?: OrgMediaFieldsPermissions | null;
}

export interface PermissionsDataOrgMediaUpdate {
  allow: boolean;
  filter?: OrgMedia_PermissionFilter | null;
  fields?: OrgMediaFieldsPermissions | null;
}

export interface PermissionsDataOrgs {
  create?: PermissionsDataOrgsCreate | null;
  read?: PermissionsDataOrgsRead | null;
  update?: PermissionsDataOrgsUpdate | null;
  delete?: PermissionsDataOrgsDelete | null;
  destroy?: PermissionsDataOrgsDestroy | null;
}

export interface PermissionsDataOrgsCreate {
  allow: boolean;
}

export interface PermissionsDataOrgsDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataOrgsDestroy {
  allow: boolean;
}

export interface PermissionsDataOrgsRead {
  allow: boolean;
  filter?: Org_PermissionFilter | null;
  fields?: OrgFieldsPermissions | null;
}

export interface PermissionsDataOrgsUpdate {
  allow: boolean;
  filter?: Org_PermissionFilter | null;
  fields?: OrgFieldsPermissions | null;
}

export interface PermissionsDataPlan {
  create?: PermissionsDataPlanCreate | null;
  read?: PermissionsDataPlanRead | null;
  update?: PermissionsDataPlanUpdate | null;
  delete?: PermissionsDataPlanDelete | null;
  destroy?: PermissionsDataPlanDestroy | null;
}

export interface PermissionsDataPlanCreate {
  allow: boolean;
}

export interface PermissionsDataPlanDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataPlanDestroy {
  allow: boolean;
}

export interface PermissionsDataPlanRead {
  allow: boolean;
  filter?: Plan_PermissionFilter | null;
  fields?: PlanFieldsPermissions | null;
}

export interface PermissionsDataPlanUpdate {
  allow: boolean;
  filter?: Plan_PermissionFilter | null;
  fields?: PlanFieldsPermissions | null;
}

export interface PermissionsDataPointers {
  create?: PermissionsDataPointersCreate | null;
  read?: PermissionsDataPointersRead | null;
  update?: PermissionsDataPointersUpdate | null;
  delete?: PermissionsDataPointersDelete | null;
  destroy?: PermissionsDataPointersDestroy | null;
}

export interface PermissionsDataPointersCreate {
  allow: boolean;
}

export interface PermissionsDataPointersDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataPointersDestroy {
  allow: boolean;
}

export interface PermissionsDataPointersRead {
  allow: boolean;
  filter?: Pointer_PermissionFilter | null;
  fields?: PointerFieldsPermissions | null;
}

export interface PermissionsDataPointersUpdate {
  allow: boolean;
  filter?: Pointer_PermissionFilter | null;
  fields?: PointerFieldsPermissions | null;
}

export interface PermissionsDataProjectTaskReqs {
  create?: PermissionsDataProjectTaskReqsCreate | null;
  read?: PermissionsDataProjectTaskReqsRead | null;
  update?: PermissionsDataProjectTaskReqsUpdate | null;
  delete?: PermissionsDataProjectTaskReqsDelete | null;
  destroy?: PermissionsDataProjectTaskReqsDestroy | null;
}

export interface PermissionsDataProjectTaskReqsCreate {
  allow: boolean;
}

export interface PermissionsDataProjectTaskReqsDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataProjectTaskReqsDestroy {
  allow: boolean;
}

export interface PermissionsDataProjectTaskReqsRead {
  allow: boolean;
  filter?: ProjectTaskReq_PermissionFilter | null;
  fields?: ProjectTaskReqFieldsPermissions | null;
}

export interface PermissionsDataProjectTaskReqsUpdate {
  allow: boolean;
  filter?: ProjectTaskReq_PermissionFilter | null;
  fields?: ProjectTaskReqFieldsPermissions | null;
}

export interface PermissionsDataProjectTemplates {
  create?: PermissionsDataProjectTemplatesCreate | null;
  read?: PermissionsDataProjectTemplatesRead | null;
  update?: PermissionsDataProjectTemplatesUpdate | null;
  delete?: PermissionsDataProjectTemplatesDelete | null;
  destroy?: PermissionsDataProjectTemplatesDestroy | null;
}

export interface PermissionsDataProjectTemplatesCreate {
  allow: boolean;
}

export interface PermissionsDataProjectTemplatesDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataProjectTemplatesDestroy {
  allow: boolean;
}

export interface PermissionsDataProjectTemplatesRead {
  allow: boolean;
  filter?: ProjectTemplate_PermissionFilter | null;
  fields?: ProjectTemplateFieldsPermissions | null;
}

export interface PermissionsDataProjectTemplatesUpdate {
  allow: boolean;
  filter?: ProjectTemplate_PermissionFilter | null;
  fields?: ProjectTemplateFieldsPermissions | null;
}

export interface PermissionsDataProjects {
  create?: PermissionsDataProjectsCreate | null;
  read?: PermissionsDataProjectsRead | null;
  update?: PermissionsDataProjectsUpdate | null;
  delete?: PermissionsDataProjectsDelete | null;
  destroy?: PermissionsDataProjectsDestroy | null;
}

export interface PermissionsDataProjectsCreate {
  allow: boolean;
}

export interface PermissionsDataProjectsDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataProjectsDestroy {
  allow: boolean;
}

export interface PermissionsDataProjectsRead {
  allow: boolean;
  filter?: Project_PermissionFilter | null;
  fields?: ProjectFieldsPermissions | null;
}

export interface PermissionsDataProjectsUpdate {
  allow: boolean;
  filter?: Project_PermissionFilter | null;
  fields?: ProjectFieldsPermissions | null;
}

export interface PermissionsDataRoles {
  create?: PermissionsDataRolesCreate | null;
  read?: PermissionsDataRolesRead | null;
  update?: PermissionsDataRolesUpdate | null;
  delete?: PermissionsDataRolesDelete | null;
  destroy?: PermissionsDataRolesDestroy | null;
}

export interface PermissionsDataRolesCreate {
  allow: boolean;
}

export interface PermissionsDataRolesDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataRolesDestroy {
  allow: boolean;
}

export interface PermissionsDataRolesRead {
  allow: boolean;
  filter?: Role_PermissionFilter | null;
  fields?: RoleFieldsPermissions | null;
}

export interface PermissionsDataRolesUpdate {
  allow: boolean;
  filter?: Role_PermissionFilter | null;
  fields?: RoleFieldsPermissions | null;
}

export interface PermissionsDataTags {
  create?: PermissionsDataTagsCreate | null;
  read?: PermissionsDataTagsRead | null;
  update?: PermissionsDataTagsUpdate | null;
  delete?: PermissionsDataTagsDelete | null;
  destroy?: PermissionsDataTagsDestroy | null;
}

export interface PermissionsDataTagsCreate {
  allow: boolean;
}

export interface PermissionsDataTagsDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataTagsDestroy {
  allow: boolean;
}

export interface PermissionsDataTagsRead {
  allow: boolean;
  filter?: Tag_PermissionFilter | null;
  fields?: TagFieldsPermissions | null;
}

export interface PermissionsDataTagsUpdate {
  allow: boolean;
  filter?: Tag_PermissionFilter | null;
  fields?: TagFieldsPermissions | null;
}

export interface PermissionsDataTaskTemplates {
  create?: PermissionsDataTaskTemplatesCreate | null;
  read?: PermissionsDataTaskTemplatesRead | null;
  update?: PermissionsDataTaskTemplatesUpdate | null;
  delete?: PermissionsDataTaskTemplatesDelete | null;
  destroy?: PermissionsDataTaskTemplatesDestroy | null;
}

export interface PermissionsDataTaskTemplatesCreate {
  allow: boolean;
}

export interface PermissionsDataTaskTemplatesDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataTaskTemplatesDestroy {
  allow: boolean;
}

export interface PermissionsDataTaskTemplatesRead {
  allow: boolean;
  filter?: TaskTemplate_PermissionFilter | null;
  fields?: TaskTemplateFieldsPermissions | null;
}

export interface PermissionsDataTaskTemplatesUpdate {
  allow: boolean;
  filter?: TaskTemplate_PermissionFilter | null;
  fields?: TaskTemplateFieldsPermissions | null;
}

export interface PermissionsDataTasks {
  create?: PermissionsDataTasksCreate | null;
  read?: PermissionsDataTasksRead | null;
  update?: PermissionsDataTasksUpdate | null;
  delete?: PermissionsDataTasksDelete | null;
  destroy?: PermissionsDataTasksDestroy | null;
}

export interface PermissionsDataTasksCreate {
  allow: boolean;
}

export interface PermissionsDataTasksDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataTasksDestroy {
  allow: boolean;
}

export interface PermissionsDataTasksRead {
  allow: boolean;
  filter?: Task_PermissionFilter | null;
  fields?: TaskFieldsPermissions | null;
}

export interface PermissionsDataTasksUpdate {
  allow: boolean;
  filter?: Task_PermissionFilter | null;
  fields?: TaskFieldsPermissions | null;
}

export interface PermissionsDataUsers {
  create?: PermissionsDataUsersCreate | null;
  read?: PermissionsDataUsersRead | null;
  update?: PermissionsDataUsersUpdate | null;
  delete?: PermissionsDataUsersDelete | null;
  destroy?: PermissionsDataUsersDestroy | null;
}

export interface PermissionsDataUsersCreate {
  allow: boolean;
}

export interface PermissionsDataUsersDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataUsersDestroy {
  allow: boolean;
}

export interface PermissionsDataUsersRead {
  allow: boolean;
  filter?: User_PermissionFilter | null;
  fields?: UserFieldsPermissions | null;
}

export interface PermissionsDataUsersUpdate {
  allow: boolean;
  filter?: User_PermissionFilter | null;
  fields?: UserFieldsPermissions | null;
}

export interface PermissionsDataWorker {
  create?: PermissionsDataWorkerCreate | null;
  read?: PermissionsDataWorkerRead | null;
  update?: PermissionsDataWorkerUpdate | null;
  delete?: PermissionsDataWorkerDelete | null;
  destroy?: PermissionsDataWorkerDestroy | null;
}

export interface PermissionsDataWorkerCreate {
  allow: boolean;
}

export interface PermissionsDataWorkerDelete {
  allow: boolean;
  restore?: boolean | null;
  review?: boolean | null;
}

export interface PermissionsDataWorkerDestroy {
  allow: boolean;
}

export interface PermissionsDataWorkerRead {
  allow: boolean;
  filter?: Worker_PermissionFilter | null;
  fields?: WorkerFieldsPermissions | null;
}

export interface PermissionsDataWorkerUpdate {
  allow: boolean;
  filter?: Worker_PermissionFilter | null;
  fields?: WorkerFieldsPermissions | null;
}

/**
 * PermissionsInput create input
 */
export interface PermissionsInput {
  data?: PermissionsData | null;
  custom?: PermissionsCustom | null;
}

/**
 * Plan relation input
 */
export interface PlanCompaniesRelationInput {
  connect?: OrgKeyFilter[] | null;
  create?: (Plan_OrgCreateInput | null)[] | null;
}

/**
 * PlanFieldsPermissions create input
 */
export interface PlanFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
}

export interface PlanFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  companies?: OrgRelationFilter | null;
  AND?: PlanFilter[] | null;
  OR?: PlanFilter[] | null;
}

export interface PlanKeyFilter {
  id?: string | null;
}

/**
 * Orgs create input from plan
 */
export interface Plan_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner: OrgsOwnerRelationInput;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

export interface Plan_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  companies?: Org_PermissionRelationFilter | null;
  AND?: Plan_PermissionFilter[] | null;
  OR?: Plan_PermissionFilter[] | null;
}

/**
 * PointerFieldsPermissions create input
 */
export interface PointerFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  title?: boolean | null;
  category?: boolean | null;
  type?: boolean | null;
  description?: boolean | null;
  video?: boolean | null;
}

export interface PointerFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  title?: StringPredicate | null;
  category?: StringPredicate | null;
  type?: StringPredicate | null;
  description?: StringPredicate | null;
  video?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  taskTemplate?: TaskTemplateRelationFilter | null;
  tags?: TagRelationFilter | null;
  AND?: PointerFilter[] | null;
  OR?: PointerFilter[] | null;
}

export interface PointerKeyFilter {
  id?: string | null;
}

export interface PointerRelationFilter {
  some?: PointerFilter | null;
  every?: PointerFilter | null;
  none?: PointerFilter | null;
}

export interface Pointer_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  title?: StringPredicate | null;
  category?: StringPredicate | null;
  type?: StringPredicate | null;
  description?: StringPredicate | null;
  video?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  taskTemplate?: TaskTemplate_PermissionRelationFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  AND?: Pointer_PermissionFilter[] | null;
  OR?: Pointer_PermissionFilter[] | null;
}

export interface Pointer_PermissionRelationFilter {
  some?: Pointer_PermissionFilter | null;
  every?: Pointer_PermissionFilter | null;
  none?: Pointer_PermissionFilter | null;
}

/**
 * Pointers relation input
 */
export interface PointersTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (Pointers_TagCreateInput | null)[] | null;
}

/**
 * Pointers relation input
 */
export interface PointersTaskTemplateRelationInput {
  connect?: TaskTemplateKeyFilter[] | null;
  create?: (Pointers_TaskTemplateCreateInput | null)[] | null;
}

/**
 * Tags create input from pointers
 */
export interface Pointers_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * TaskTemplates create input from pointers
 */
export interface Pointers_TaskTemplateCreateInput {
  name?: string | null;
  tags?: TaskTemplatesTagsRelationInput | null;
  description?: string | null;
  linkedProjects?: TaskTemplatesLinkedProjectsRelationInput | null;
  exampleURL?: string | null;
  type?: string | null;
  pointers?: TaskTemplatesPointersRelationInput | null;
}

/**
 * ProjectFieldsPermissions create input
 */
export interface ProjectFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  name?: boolean | null;
  status?: boolean | null;
  filmingDueDate?: boolean | null;
  editingDueDate?: boolean | null;
  allWorkers?: boolean | null;
}

export interface ProjectFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  status?: StringPredicate | null;
  filmingDueDate?: DatePredicate | null;
  editingDueDate?: DatePredicate | null;
  allWorkers?: BoolPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  template?: ProjectTemplateFilter | null;
  tasks?: TaskRelationFilter | null;
  editor?: EditorFilter | null;
  org?: OrgFilter | null;
  media?: OrgMediaRelationFilter | null;
  assignedWorkers?: WorkerRelationFilter | null;
  messages?: MessageRelationFilter | null;
  user?: UserFilter | null;
  AND?: ProjectFilter[] | null;
  OR?: ProjectFilter[] | null;
}

export interface ProjectKeyFilter {
  id?: string | null;
}

export interface ProjectRelationFilter {
  some?: ProjectFilter | null;
  every?: ProjectFilter | null;
  none?: ProjectFilter | null;
}

/**
 * ProjectTaskReqFieldsPermissions create input
 */
export interface ProjectTaskReqFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  quantity?: boolean | null;
  requirement?: boolean | null;
  customName?: boolean | null;
  customDescription?: boolean | null;
}

export interface ProjectTaskReqFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  quantity?: IntPredicate | null;
  requirement?: StringPredicate | null;
  customName?: StringPredicate | null;
  customDescription?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  projectTemplate?: ProjectTemplateFilter | null;
  taskTemplate?: TaskTemplateFilter | null;
  tasks?: TaskRelationFilter | null;
  tags?: TagFilter | null;
  AND?: ProjectTaskReqFilter[] | null;
  OR?: ProjectTaskReqFilter[] | null;
}

export interface ProjectTaskReqKeyFilter {
  id?: string | null;
}

export interface ProjectTaskReqRelationFilter {
  some?: ProjectTaskReqFilter | null;
  every?: ProjectTaskReqFilter | null;
  none?: ProjectTaskReqFilter | null;
}

export interface ProjectTaskReq_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  quantity?: IntPredicate | null;
  requirement?: StringPredicate | null;
  customName?: StringPredicate | null;
  customDescription?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  projectTemplate?: ProjectTemplate_PermissionFilter | null;
  taskTemplate?: TaskTemplate_PermissionFilter | null;
  tasks?: Task_PermissionRelationFilter | null;
  tags?: Tag_PermissionFilter | null;
  AND?: ProjectTaskReq_PermissionFilter[] | null;
  OR?: ProjectTaskReq_PermissionFilter[] | null;
}

export interface ProjectTaskReq_PermissionRelationFilter {
  some?: ProjectTaskReq_PermissionFilter | null;
  every?: ProjectTaskReq_PermissionFilter | null;
  none?: ProjectTaskReq_PermissionFilter | null;
}

/**
 * ProjectTaskReqs relation input
 */
export interface ProjectTaskReqsProjectTemplateRelationInput {
  connect?: ProjectTemplateKeyFilter | null;
  create?: LinkedTaskTemplates_ProjectTemplateCreateInput | null;
}

/**
 * ProjectTaskReqs relation input
 */
export interface ProjectTaskReqsTagsRelationInput {
  connect?: TagKeyFilter | null;
  create?: ProjectTaskReqs_TagCreateInput | null;
}

/**
 * ProjectTaskReqs relation input
 */
export interface ProjectTaskReqsTaskTemplateRelationInput {
  connect?: TaskTemplateKeyFilter | null;
  create?: LinkedProjects_TaskTemplateCreateInput | null;
}

/**
 * ProjectTaskReqs relation input
 */
export interface ProjectTaskReqsTasksRelationInput {
  connect?: TaskKeyFilter[] | null;
  create?: (Template_TaskCreateInput | null)[] | null;
}

/**
 * Tags create input from projectTaskReqs
 */
export interface ProjectTaskReqs_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * ProjectTemplateFieldsPermissions create input
 */
export interface ProjectTemplateFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  name?: boolean | null;
  type?: boolean | null;
  description?: boolean | null;
  uses?: boolean | null;
  tips?: boolean | null;
  exampleURL?: boolean | null;
}

export interface ProjectTemplateFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  type?: StringPredicate | null;
  description?: StringPredicate | null;
  uses?: StringPredicate | null;
  tips?: StringPredicate | null;
  exampleURL?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  linkedTaskTemplates?: ProjectTaskReqRelationFilter | null;
  projects?: ProjectRelationFilter | null;
  deliverables?: DeliverableRelationFilter | null;
  tags?: TagRelationFilter | null;
  orgOwners?: OrgFilter | null;
  AND?: ProjectTemplateFilter[] | null;
  OR?: ProjectTemplateFilter[] | null;
}

export interface ProjectTemplateKeyFilter {
  id?: string | null;
}

export interface ProjectTemplateRelationFilter {
  some?: ProjectTemplateFilter | null;
  every?: ProjectTemplateFilter | null;
  none?: ProjectTemplateFilter | null;
}

/**
 * Deliverables create input from projectTemplate
 */
export interface ProjectTemplate_DeliverableCreateInput {
  name?: string | null;
  description?: string | null;
  quantity?: number | null;
  duration?: number | null;
  fileFormat?: string | null;
  height?: number | null;
  width?: number | null;
  example?: string | null;
  projectTemplate?: DeliverablesProjectTemplateRelationInput | null;
  media?: DeliverablesMediaRelationInput | null;
}

export interface ProjectTemplate_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  type?: StringPredicate | null;
  description?: StringPredicate | null;
  uses?: StringPredicate | null;
  tips?: StringPredicate | null;
  exampleURL?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  linkedTaskTemplates?: ProjectTaskReq_PermissionRelationFilter | null;
  projects?: Project_PermissionRelationFilter | null;
  deliverables?: Deliverable_PermissionRelationFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  orgOwners?: Org_PermissionFilter | null;
  AND?: ProjectTemplate_PermissionFilter[] | null;
  OR?: ProjectTemplate_PermissionFilter[] | null;
}

export interface ProjectTemplate_PermissionRelationFilter {
  some?: ProjectTemplate_PermissionFilter | null;
  every?: ProjectTemplate_PermissionFilter | null;
  none?: ProjectTemplate_PermissionFilter | null;
}

/**
 * ProjectTaskReqs create input from projectTemplate
 */
export interface ProjectTemplate_ProjectTaskReqCreateInput {
  projectTemplate?: ProjectTaskReqsProjectTemplateRelationInput | null;
  taskTemplate?: ProjectTaskReqsTaskTemplateRelationInput | null;
  quantity?: number | null;
  requirement?: string | null;
  tasks?: ProjectTaskReqsTasksRelationInput | null;
  customName?: string | null;
  customDescription?: string | null;
  tags?: ProjectTaskReqsTagsRelationInput | null;
}

/**
 * ProjectTemplates relation input
 */
export interface ProjectTemplatesDeliverablesRelationInput {
  connect?: DeliverableKeyFilter[] | null;
  create?: (ProjectTemplate_DeliverableCreateInput | null)[] | null;
}

/**
 * ProjectTemplates relation input
 */
export interface ProjectTemplatesLinkedTaskTemplatesRelationInput {
  connect?: ProjectTaskReqKeyFilter[] | null;
  create?: (ProjectTemplate_ProjectTaskReqCreateInput | null)[] | null;
}

/**
 * ProjectTemplates relation input
 */
export interface ProjectTemplatesOrgOwnersRelationInput {
  connect?: OrgKeyFilter | null;
  create?: CustomProjectTemplates_OrgCreateInput | null;
}

/**
 * ProjectTemplates relation input
 */
export interface ProjectTemplatesProjectsRelationInput {
  connect?: ProjectKeyFilter[] | null;
  create?: (Template_ProjectCreateInput | null)[] | null;
}

/**
 * ProjectTemplates relation input
 */
export interface ProjectTemplatesTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (ProjectTemplates_TagCreateInput | null)[] | null;
}

/**
 * Tags create input from projectTemplates
 */
export interface ProjectTemplates_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

/**
 * Messages create input from project
 */
export interface Project_MessageCreateInput {
  body?: string | null;
  visibility?: string | null;
  title?: string | null;
  user?: MessagesUserRelationInput | null;
  project?: MessagesProjectRelationInput | null;
  orgMedia?: MessagesOrgMediaRelationInput | null;
  childMessages?: MessagesChildMessagesRelationInput | null;
  parentMessage?: MessagesParentMessageRelationInput | null;
}

export interface Project_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  status?: StringPredicate | null;
  filmingDueDate?: DatePredicate | null;
  editingDueDate?: DatePredicate | null;
  allWorkers?: BoolPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  template?: ProjectTemplate_PermissionFilter | null;
  tasks?: Task_PermissionRelationFilter | null;
  editor?: Editor_PermissionFilter | null;
  org?: Org_PermissionFilter | null;
  media?: OrgMedia_PermissionRelationFilter | null;
  assignedWorkers?: Worker_PermissionRelationFilter | null;
  messages?: Message_PermissionRelationFilter | null;
  user?: User_PermissionFilter | null;
  AND?: Project_PermissionFilter[] | null;
  OR?: Project_PermissionFilter[] | null;
}

export interface Project_PermissionRelationFilter {
  some?: Project_PermissionFilter | null;
  every?: Project_PermissionFilter | null;
  none?: Project_PermissionFilter | null;
}

/**
 * Tasks create input from project
 */
export interface Project_TaskCreateInput {
  project?: TasksProjectRelationInput | null;
  template?: TasksTemplateRelationInput | null;
  status?: string | null;
  media?: TasksMediaRelationInput | null;
}

/**
 * Projects relation input
 */
export interface ProjectsAssignedWorkersRelationInput {
  connect?: WorkerKeyFilter[] | null;
  create?: (AssignedProjects_WorkerCreateInput | null)[] | null;
}

/**
 * Projects relation input
 */
export interface ProjectsEditorRelationInput {
  connect?: EditorKeyFilter | null;
  create?: Projects_EditorCreateInput | null;
}

/**
 * Projects relation input
 */
export interface ProjectsMediaRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (Projects_OrgMediaCreateInput | null)[] | null;
}

/**
 * Projects relation input
 */
export interface ProjectsMessagesRelationInput {
  connect?: MessageKeyFilter[] | null;
  create?: (Project_MessageCreateInput | null)[] | null;
}

/**
 * Projects relation input
 */
export interface ProjectsOrgRelationInput {
  connect?: OrgKeyFilter | null;
  create?: Projects_OrgCreateInput | null;
}

/**
 * Projects relation input
 */
export interface ProjectsTasksRelationInput {
  connect?: TaskKeyFilter[] | null;
  create?: (Project_TaskCreateInput | null)[] | null;
}

/**
 * Projects relation input
 */
export interface ProjectsTemplateRelationInput {
  connect?: ProjectTemplateKeyFilter | null;
  create?: Projects_ProjectTemplateCreateInput | null;
}

/**
 * Projects relation input
 */
export interface ProjectsUserRelationInput {
  connect?: UserKeyFilter | null;
  create?: User_project_UserCreateInput | null;
}

/**
 * Editors create input from projects
 */
export interface Projects_EditorCreateInput {
  tags?: EditorsTagsRelationInput | null;
  user: EditorsUserRelationInput;
  projects?: EditorsProjectsRelationInput | null;
  status?: string | null;
  certification?: string | null;
}

/**
 * Orgs create input from projects
 */
export interface Projects_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner?: OrgsOwnerRelationInput | null;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * OrgMedia create input from projects
 */
export interface Projects_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

/**
 * ProjectTemplates create input from projects
 */
export interface Projects_ProjectTemplateCreateInput {
  name?: string | null;
  type?: string | null;
  description?: string | null;
  uses?: string | null;
  tips?: string | null;
  linkedTaskTemplates?: ProjectTemplatesLinkedTaskTemplatesRelationInput | null;
  projects?: ProjectTemplatesProjectsRelationInput | null;
  exampleURL?: string | null;
  deliverables?: ProjectTemplatesDeliverablesRelationInput | null;
  tags?: ProjectTemplatesTagsRelationInput | null;
  orgOwners?: ProjectTemplatesOrgOwnersRelationInput | null;
}

/**
 * RoleFieldsPermissions create input
 */
export interface RoleFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  name?: boolean | null;
  description?: boolean | null;
}

export interface RoleFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  description?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  users?: UserRelationFilter | null;
  permissions?: PermissionRelationFilter | null;
  apiTokens?: ApiTokenRelationFilter | null;
  authenticationProfiles?: AuthenticationProfileRelationFilter | null;
  teamMembers?: TeamMemberRelationFilter | null;
  AND?: RoleFilter[] | null;
  OR?: RoleFilter[] | null;
}

export interface RoleKeyFilter {
  id?: string | null;
  name?: string | null;
}

export interface RoleRelationFilter {
  some?: RoleFilter | null;
  every?: RoleFilter | null;
  none?: RoleFilter | null;
}

export interface Role_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  description?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  users?: User_PermissionRelationFilter | null;
  permissions?: Permission_PermissionRelationFilter | null;
  apiTokens?: ApiToken_PermissionRelationFilter | null;
  authenticationProfiles?: AuthenticationProfile_PermissionRelationFilter | null;
  teamMembers?: TeamMember_PermissionRelationFilter | null;
  AND?: Role_PermissionFilter[] | null;
  OR?: Role_PermissionFilter[] | null;
}

export interface Role_PermissionRelationFilter {
  some?: Role_PermissionFilter | null;
  every?: Role_PermissionFilter | null;
  none?: Role_PermissionFilter | null;
}

/**
 * Roles relation input
 */
export interface RolesApiTokensRelationInput {
  connect?: ApiTokenKeyFilter[] | null;
}

/**
 * Roles relation input
 */
export interface RolesAuthenticationProfilesRelationInput {
  connect?: AuthenticationProfileKeyFilter[] | null;
  create?: (Roles_AuthenticationProfileCreateInput | null)[] | null;
}

/**
 * Roles relation input
 */
export interface RolesTeamMembersRelationInput {
  connect?: TeamMemberKeyFilter[] | null;
}

/**
 * Roles relation input
 */
export interface RolesUsersRelationInput {
  connect?: UserKeyFilter[] | null;
  create?: (Roles_UserCreateInput | null)[] | null;
}

/**
 * AuthenticationProfiles create input from roles
 */
export interface Roles_AuthenticationProfileCreateInput {
  name: string;
  type?: string | null;
  secret?: string | null;
  managementDomain?: string | null;
  clientId?: string | null;
  databaseName?: string | null;
  domain?: string | null;
  selfSignUpEnabled?: boolean | null;
  selfSignUpEmailDomains?: (string | null)[] | null;
  roles?: AuthenticationProfilesRolesRelationInput | null;
  audiences?: (string | null)[] | null;
}

/**
 * Users create input from roles
 */
export interface Roles_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * Education create input from school
 */
export interface School_EducationCreateInput {
  user: EducationUserRelationInput;
  school?: EducationSchoolRelationInput | null;
  start?: number | null;
  end?: number | null;
  degree?: string | null;
  field?: string | null;
}

export interface SessionInput {
  me?: SessionMeInput | null;
}

export interface SessionMeInput {
  id: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  createdAt?: string | null;
  status?: string | null;
  origin?: string | null;
}

export interface SettingFilter {
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  passwordMinLength?: IntPredicate | null;
  passwordRequireNumbers?: BoolPredicate | null;
  passwordRequireSpecial?: BoolPredicate | null;
  passwordRequireUppercase?: BoolPredicate | null;
  passwordRequireLowercase?: BoolPredicate | null;
  passwordUpdateInterval?: IntPredicate | null;
  rememberDevice?: StringPredicate | null;
  language?: StringPredicate | null;
  dateFormat?: StringPredicate | null;
  currency?: StringPredicate | null;
  timezone?: StringPredicate | null;
  vanityUrl?: StringPredicate | null;
  buttonLinkColor?: StringPredicate | null;
  userInterfaceStyle?: StringPredicate | null;
  menuBarBGColor?: StringPredicate | null;
  menuBarIconsColor?: StringPredicate | null;
  bgColor?: StringPredicate | null;
  containerColor?: StringPredicate | null;
  leftNavColor?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  menuBarLogo?: FileFilter | null;
  landingPageImage?: FileFilter | null;
  AND?: SettingFilter[] | null;
  OR?: SettingFilter[] | null;
}

export interface SettingRelationFilter {
  some?: SettingFilter | null;
  every?: SettingFilter | null;
  none?: SettingFilter | null;
}

export interface Setting_PermissionFilter {
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  passwordMinLength?: IntPredicate | null;
  passwordRequireNumbers?: BoolPredicate | null;
  passwordRequireSpecial?: BoolPredicate | null;
  passwordRequireUppercase?: BoolPredicate | null;
  passwordRequireLowercase?: BoolPredicate | null;
  passwordUpdateInterval?: IntPredicate | null;
  rememberDevice?: StringPredicate | null;
  language?: StringPredicate | null;
  dateFormat?: StringPredicate | null;
  currency?: StringPredicate | null;
  timezone?: StringPredicate | null;
  vanityUrl?: StringPredicate | null;
  buttonLinkColor?: StringPredicate | null;
  userInterfaceStyle?: StringPredicate | null;
  menuBarBGColor?: StringPredicate | null;
  menuBarIconsColor?: StringPredicate | null;
  bgColor?: StringPredicate | null;
  containerColor?: StringPredicate | null;
  leftNavColor?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  menuBarLogo?: File_PermissionFilter | null;
  landingPageImage?: File_PermissionFilter | null;
  AND?: Setting_PermissionFilter[] | null;
  OR?: Setting_PermissionFilter[] | null;
}

export interface Setting_PermissionRelationFilter {
  some?: Setting_PermissionFilter | null;
  every?: Setting_PermissionFilter | null;
  none?: Setting_PermissionFilter | null;
}

/**
 * SmartAddressInput create input
 */
export interface SmartAddressInput {
  country?: string | null;
  street1?: string | null;
  street2?: string | null;
  zip?: string | null;
  city?: string | null;
  state?: string | null;
}

export interface SmartAddressPredicate {
  country?: StringPredicate | null;
  street1?: StringPredicate | null;
  street2?: StringPredicate | null;
  zip?: StringPredicate | null;
  city?: StringPredicate | null;
  state?: StringPredicate | null;
}

export interface StringPredicate {
  equals?: string | null;
  not_equals?: string | null;
  in?: string[] | null;
  not_in?: string[] | null;
  contains?: string | null;
  not_contains?: string | null;
  starts_with?: string | null;
  not_starts_with?: string | null;
  ends_with?: string | null;
  not_ends_with?: string | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

/**
 * TagFieldsPermissions create input
 */
export interface TagFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  name?: boolean | null;
  type?: boolean | null;
}

export interface TagFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  type?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  companyOwner?: OrgFilter | null;
  orgs?: OrgRelationFilter | null;
  editors?: EditorRelationFilter | null;
  workers?: WorkerRelationFilter | null;
  media?: MediaRelationFilter | null;
  companyMedia?: OrgMediaRelationFilter | null;
  projectTemplates?: ProjectTemplateRelationFilter | null;
  taskTemplates?: TaskTemplateRelationFilter | null;
  pointers?: PointerRelationFilter | null;
  projectTaskReqs?: ProjectTaskReqRelationFilter | null;
  AND?: TagFilter[] | null;
  OR?: TagFilter[] | null;
}

export interface TagKeyFilter {
  id?: string | null;
}

export interface TagRelationFilter {
  some?: TagFilter | null;
  every?: TagFilter | null;
  none?: TagFilter | null;
}

export interface Tag_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  type?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  companyOwner?: Org_PermissionFilter | null;
  orgs?: Org_PermissionRelationFilter | null;
  editors?: Editor_PermissionRelationFilter | null;
  workers?: Worker_PermissionRelationFilter | null;
  media?: Media_PermissionRelationFilter | null;
  companyMedia?: OrgMedia_PermissionRelationFilter | null;
  projectTemplates?: ProjectTemplate_PermissionRelationFilter | null;
  taskTemplates?: TaskTemplate_PermissionRelationFilter | null;
  pointers?: Pointer_PermissionRelationFilter | null;
  projectTaskReqs?: ProjectTaskReq_PermissionRelationFilter | null;
  AND?: Tag_PermissionFilter[] | null;
  OR?: Tag_PermissionFilter[] | null;
}

export interface Tag_PermissionRelationFilter {
  some?: Tag_PermissionFilter | null;
  every?: Tag_PermissionFilter | null;
  none?: Tag_PermissionFilter | null;
}

/**
 * Worker create input from taggedMedia
 */
export interface TaggedMedia_WorkerCreateInput {
  org?: WorkerOrgRelationInput | null;
  user?: WorkerUserRelationInput | null;
  status?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  tags?: WorkerTagsRelationInput | null;
  taggedMedia?: WorkerTaggedMediaRelationInput | null;
  assignedProjects?: WorkerAssignedProjectsRelationInput | null;
  agreementID?: string | null;
}

/**
 * OrgMedia create input from taggedWorkers
 */
export interface TaggedWorkers_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

/**
 * Tags relation input
 */
export interface TagsCompanyMediaRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (Tags_OrgMediaCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsCompanyOwnerRelationInput {
  connect?: OrgKeyFilter | null;
  create?: OwnedTags_OrgCreateInput | null;
}

/**
 * Tags relation input
 */
export interface TagsEditorsRelationInput {
  connect?: EditorKeyFilter[] | null;
  create?: (Tags_EditorCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsMediaRelationInput {
  connect?: MediaKeyFilter[] | null;
  create?: (Tags_MediaCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsOrgsRelationInput {
  connect?: OrgKeyFilter[] | null;
  create?: (Tags_OrgCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsPointersRelationInput {
  connect?: PointerKeyFilter[] | null;
  create?: (Tags_PointerCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsProjectTaskReqsRelationInput {
  connect?: ProjectTaskReqKeyFilter[] | null;
  create?: (Tags_ProjectTaskReqCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsProjectTemplatesRelationInput {
  connect?: ProjectTemplateKeyFilter[] | null;
  create?: (Tags_ProjectTemplateCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsTaskTemplatesRelationInput {
  connect?: TaskTemplateKeyFilter[] | null;
  create?: (Tags_TaskTemplateCreateInput | null)[] | null;
}

/**
 * Tags relation input
 */
export interface TagsWorkersRelationInput {
  connect?: WorkerKeyFilter[] | null;
  create?: (Tags_WorkerCreateInput | null)[] | null;
}

/**
 * Editors create input from tags
 */
export interface Tags_EditorCreateInput {
  tags?: EditorsTagsRelationInput | null;
  user: EditorsUserRelationInput;
  projects?: EditorsProjectsRelationInput | null;
  status?: string | null;
  certification?: string | null;
}

/**
 * Media create input from tags
 */
export interface Tags_MediaCreateInput {
  fileName: string;
  url?: string | null;
  owner?: MediaOwnerRelationInput | null;
  status?: string | null;
  orgs?: MediaOrgsRelationInput | null;
  mimeType?: string | null;
  size?: number | null;
  key?: string | null;
  tags?: MediaTagsRelationInput | null;
  workflowJobId?: string | null;
  originalMediaUrl?: string | null;
  isProcessing?: number | null;
  thumbnailUrl?: string | null;
}

/**
 * Orgs create input from tags
 */
export interface Tags_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner: OrgsOwnerRelationInput;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * OrgMedia create input from tags
 */
export interface Tags_OrgMediaCreateInput {
  org?: OrgMediaOrgRelationInput | null;
  media?: OrgMediaMediaRelationInput | null;
  type?: string | null;
  status?: string | null;
  parentTask?: OrgMediaParentTaskRelationInput | null;
  projects?: OrgMediaProjectsRelationInput | null;
  taggedWorkers?: OrgMediaTaggedWorkersRelationInput | null;
  deliverables?: OrgMediaDeliverablesRelationInput | null;
  tags?: OrgMediaTagsRelationInput | null;
  messages?: OrgMediaMessagesRelationInput | null;
  agreementID?: string | null;
}

/**
 * Pointers create input from tags
 */
export interface Tags_PointerCreateInput {
  title: string;
  category?: string | null;
  type?: string | null;
  description?: string | null;
  taskTemplate?: PointersTaskTemplateRelationInput | null;
  tags?: PointersTagsRelationInput | null;
  video?: string | null;
}

/**
 * ProjectTaskReqs create input from tags
 */
export interface Tags_ProjectTaskReqCreateInput {
  projectTemplate?: ProjectTaskReqsProjectTemplateRelationInput | null;
  taskTemplate?: ProjectTaskReqsTaskTemplateRelationInput | null;
  quantity?: number | null;
  requirement?: string | null;
  tasks?: ProjectTaskReqsTasksRelationInput | null;
  customName?: string | null;
  customDescription?: string | null;
  tags?: ProjectTaskReqsTagsRelationInput | null;
}

/**
 * ProjectTemplates create input from tags
 */
export interface Tags_ProjectTemplateCreateInput {
  name?: string | null;
  type?: string | null;
  description?: string | null;
  uses?: string | null;
  tips?: string | null;
  linkedTaskTemplates?: ProjectTemplatesLinkedTaskTemplatesRelationInput | null;
  projects?: ProjectTemplatesProjectsRelationInput | null;
  exampleURL?: string | null;
  deliverables?: ProjectTemplatesDeliverablesRelationInput | null;
  tags?: ProjectTemplatesTagsRelationInput | null;
  orgOwners?: ProjectTemplatesOrgOwnersRelationInput | null;
}

/**
 * TaskTemplates create input from tags
 */
export interface Tags_TaskTemplateCreateInput {
  name?: string | null;
  tags?: TaskTemplatesTagsRelationInput | null;
  description?: string | null;
  linkedProjects?: TaskTemplatesLinkedProjectsRelationInput | null;
  exampleURL?: string | null;
  type?: string | null;
  pointers?: TaskTemplatesPointersRelationInput | null;
}

/**
 * Worker create input from tags
 */
export interface Tags_WorkerCreateInput {
  org?: WorkerOrgRelationInput | null;
  user?: WorkerUserRelationInput | null;
  status?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  tags?: WorkerTagsRelationInput | null;
  taggedMedia?: WorkerTaggedMediaRelationInput | null;
  assignedProjects?: WorkerAssignedProjectsRelationInput | null;
  agreementID?: string | null;
}

/**
 * Tasks create many input
 */
export interface TaskCreateManyInput {
  project?: TasksProjectManyRelationInput | null;
  template?: TasksTemplateManyRelationInput | null;
  status?: string | null;
  media?: TasksMediaManyRelationInput | null;
}

/**
 * TaskFieldsPermissions create input
 */
export interface TaskFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  status?: boolean | null;
}

export interface TaskFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  project?: ProjectFilter | null;
  template?: ProjectTaskReqFilter | null;
  media?: OrgMediaRelationFilter | null;
  AND?: TaskFilter[] | null;
  OR?: TaskFilter[] | null;
}

export interface TaskKeyFilter {
  id?: string | null;
}

export interface TaskRelationFilter {
  some?: TaskFilter | null;
  every?: TaskFilter | null;
  none?: TaskFilter | null;
}

/**
 * TaskTemplateFieldsPermissions create input
 */
export interface TaskTemplateFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  name?: boolean | null;
  description?: boolean | null;
  exampleURL?: boolean | null;
  type?: boolean | null;
}

export interface TaskTemplateFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  description?: StringPredicate | null;
  exampleURL?: StringPredicate | null;
  type?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  tags?: TagRelationFilter | null;
  linkedProjects?: ProjectTaskReqRelationFilter | null;
  pointers?: PointerRelationFilter | null;
  AND?: TaskTemplateFilter[] | null;
  OR?: TaskTemplateFilter[] | null;
}

export interface TaskTemplateKeyFilter {
  id?: string | null;
}

export interface TaskTemplateRelationFilter {
  some?: TaskTemplateFilter | null;
  every?: TaskTemplateFilter | null;
  none?: TaskTemplateFilter | null;
}

export interface TaskTemplate_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  description?: StringPredicate | null;
  exampleURL?: StringPredicate | null;
  type?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  linkedProjects?: ProjectTaskReq_PermissionRelationFilter | null;
  pointers?: Pointer_PermissionRelationFilter | null;
  AND?: TaskTemplate_PermissionFilter[] | null;
  OR?: TaskTemplate_PermissionFilter[] | null;
}

export interface TaskTemplate_PermissionRelationFilter {
  some?: TaskTemplate_PermissionFilter | null;
  every?: TaskTemplate_PermissionFilter | null;
  none?: TaskTemplate_PermissionFilter | null;
}

/**
 * Pointers create input from taskTemplate
 */
export interface TaskTemplate_PointerCreateInput {
  title: string;
  category?: string | null;
  type?: string | null;
  description?: string | null;
  taskTemplate?: PointersTaskTemplateRelationInput | null;
  tags?: PointersTagsRelationInput | null;
  video?: string | null;
}

/**
 * ProjectTaskReqs create input from taskTemplate
 */
export interface TaskTemplate_ProjectTaskReqCreateInput {
  projectTemplate?: ProjectTaskReqsProjectTemplateRelationInput | null;
  taskTemplate?: ProjectTaskReqsTaskTemplateRelationInput | null;
  quantity?: number | null;
  requirement?: string | null;
  tasks?: ProjectTaskReqsTasksRelationInput | null;
  customName?: string | null;
  customDescription?: string | null;
  tags?: ProjectTaskReqsTagsRelationInput | null;
}

/**
 * TaskTemplates relation input
 */
export interface TaskTemplatesLinkedProjectsRelationInput {
  connect?: ProjectTaskReqKeyFilter[] | null;
  create?: (TaskTemplate_ProjectTaskReqCreateInput | null)[] | null;
}

/**
 * TaskTemplates relation input
 */
export interface TaskTemplatesPointersRelationInput {
  connect?: PointerKeyFilter[] | null;
  create?: (TaskTemplate_PointerCreateInput | null)[] | null;
}

/**
 * TaskTemplates relation input
 */
export interface TaskTemplatesTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (TaskTemplates_TagCreateInput | null)[] | null;
}

/**
 * Tags create input from taskTemplates
 */
export interface TaskTemplates_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

export interface Task_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  project?: Project_PermissionFilter | null;
  template?: ProjectTaskReq_PermissionFilter | null;
  media?: OrgMedia_PermissionRelationFilter | null;
  AND?: Task_PermissionFilter[] | null;
  OR?: Task_PermissionFilter[] | null;
}

export interface Task_PermissionRelationFilter {
  some?: Task_PermissionFilter | null;
  every?: Task_PermissionFilter | null;
  none?: Task_PermissionFilter | null;
}

/**
 * Tasks relation input
 */
export interface TasksMediaManyRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
}

/**
 * Tasks relation input
 */
export interface TasksMediaRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (ParentTask_OrgMediaCreateInput | null)[] | null;
}

/**
 * Tasks relation input
 */
export interface TasksProjectManyRelationInput {
  connect?: ProjectKeyFilter | null;
}

/**
 * Tasks relation input
 */
export interface TasksProjectRelationInput {
  connect?: ProjectKeyFilter | null;
  create?: Tasks_ProjectCreateInput | null;
}

/**
 * Tasks relation input
 */
export interface TasksTemplateManyRelationInput {
  connect?: ProjectTaskReqKeyFilter | null;
}

/**
 * Tasks relation input
 */
export interface TasksTemplateRelationInput {
  connect?: ProjectTaskReqKeyFilter | null;
  create?: Tasks_ProjectTaskReqCreateInput | null;
}

/**
 * Projects create input from tasks
 */
export interface Tasks_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

/**
 * ProjectTaskReqs create input from tasks
 */
export interface Tasks_ProjectTaskReqCreateInput {
  projectTemplate?: ProjectTaskReqsProjectTemplateRelationInput | null;
  taskTemplate?: ProjectTaskReqsTaskTemplateRelationInput | null;
  quantity?: number | null;
  requirement?: string | null;
  tasks?: ProjectTaskReqsTasksRelationInput | null;
  customName?: string | null;
  customDescription?: string | null;
  tags?: ProjectTaskReqsTagsRelationInput | null;
}

export interface TeamInvitationFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  uuid?: StringPredicate | null;
  email?: StringPredicate | null;
  firstName?: StringPredicate | null;
  lastName?: StringPredicate | null;
  resentOn?: DateTimePredicate | null;
  accepted?: BoolPredicate | null;
  acceptedOn?: DateTimePredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  invitee?: TeamMemberFilter | null;
  invitedBy?: TeamMemberFilter | null;
  AND?: TeamInvitationFilter[] | null;
  OR?: TeamInvitationFilter[] | null;
}

export interface TeamInvitationRelationFilter {
  some?: TeamInvitationFilter | null;
  every?: TeamInvitationFilter | null;
  none?: TeamInvitationFilter | null;
}

export interface TeamInvitation_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  uuid?: StringPredicate | null;
  email?: StringPredicate | null;
  firstName?: StringPredicate | null;
  lastName?: StringPredicate | null;
  resentOn?: DateTimePredicate | null;
  accepted?: BoolPredicate | null;
  acceptedOn?: DateTimePredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  invitee?: TeamMember_PermissionFilter | null;
  invitedBy?: TeamMember_PermissionFilter | null;
  AND?: TeamInvitation_PermissionFilter[] | null;
  OR?: TeamInvitation_PermissionFilter[] | null;
}

export interface TeamInvitation_PermissionRelationFilter {
  some?: TeamInvitation_PermissionFilter | null;
  every?: TeamInvitation_PermissionFilter | null;
  none?: TeamInvitation_PermissionFilter | null;
}

export interface TeamMemberFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  isOwner?: BoolPredicate | null;
  _fullText?: string | null;
  is_self?: boolean | null;
  not_self?: boolean | null;
  createdBy?: UserFilter | null;
  user?: UserFilter | null;
  avatar?: FileFilter | null;
  roles?: RoleRelationFilter | null;
  receivedTeamInvitations?: TeamInvitationRelationFilter | null;
  sentTeamInvitations?: TeamInvitationRelationFilter | null;
  AND?: TeamMemberFilter[] | null;
  OR?: TeamMemberFilter[] | null;
}

export interface TeamMemberKeyFilter {
  id?: string | null;
}

export interface TeamMemberRelationFilter {
  some?: TeamMemberFilter | null;
  every?: TeamMemberFilter | null;
  none?: TeamMemberFilter | null;
}

export interface TeamMember_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  isOwner?: BoolPredicate | null;
  _fullText?: string | null;
  is_self?: boolean | null;
  not_self?: boolean | null;
  createdBy?: User_PermissionFilter | null;
  user?: User_PermissionFilter | null;
  avatar?: File_PermissionFilter | null;
  roles?: Role_PermissionRelationFilter | null;
  receivedTeamInvitations?: TeamInvitation_PermissionRelationFilter | null;
  sentTeamInvitations?: TeamInvitation_PermissionRelationFilter | null;
  AND?: TeamMember_PermissionFilter[] | null;
  OR?: TeamMember_PermissionFilter[] | null;
}

export interface TeamMember_PermissionRelationFilter {
  some?: TeamMember_PermissionFilter | null;
  every?: TeamMember_PermissionFilter | null;
  none?: TeamMember_PermissionFilter | null;
}

/**
 * Projects create input from template
 */
export interface Template_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

/**
 * Tasks create input from template
 */
export interface Template_TaskCreateInput {
  project?: TasksProjectRelationInput | null;
  template?: TasksTemplateRelationInput | null;
  status?: string | null;
  media?: TasksMediaRelationInput | null;
}

/**
 * UserFieldsPermissions create input
 */
export interface UserFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  email?: boolean | null;
  status?: boolean | null;
  origin?: boolean | null;
  is8base?: boolean | null;
  firstName?: boolean | null;
  lastName?: boolean | null;
  timezone?: boolean | null;
  agreementID?: boolean | null;
}

export interface UserFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  email?: StringPredicate | null;
  status?: StringPredicate | null;
  origin?: StringPredicate | null;
  is8base?: BoolPredicate | null;
  firstName?: StringPredicate | null;
  lastName?: StringPredicate | null;
  timezone?: StringPredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  is_self?: boolean | null;
  not_self?: boolean | null;
  createdBy?: UserFilter | null;
  avatar?: FileFilter | null;
  roles?: RoleRelationFilter | null;
  ownedCompanies?: OrgRelationFilter | null;
  editor?: EditorFilter | null;
  media?: MediaRelationFilter | null;
  worker?: WorkerRelationFilter | null;
  education?: EducationRelationFilter | null;
  messages?: MessageRelationFilter | null;
  orgAdmin?: OrgFilter | null;
  user_project?: ProjectRelationFilter | null;
  AND?: UserFilter[] | null;
  OR?: UserFilter[] | null;
}

export interface UserKeyFilter {
  id?: string | null;
  email?: string | null;
}

export interface UserRelationFilter {
  some?: UserFilter | null;
  every?: UserFilter | null;
  none?: UserFilter | null;
}

/**
 * Editors create input from user
 */
export interface User_EditorCreateInput {
  tags?: EditorsTagsRelationInput | null;
  user?: EditorsUserRelationInput | null;
  projects?: EditorsProjectsRelationInput | null;
  status?: string | null;
  certification?: string | null;
}

/**
 * Education create input from user
 */
export interface User_EducationCreateInput {
  user?: EducationUserRelationInput | null;
  school?: EducationSchoolRelationInput | null;
  start?: number | null;
  end?: number | null;
  degree?: string | null;
  field?: string | null;
}

/**
 * Messages create input from user
 */
export interface User_MessageCreateInput {
  body?: string | null;
  visibility?: string | null;
  title?: string | null;
  user?: MessagesUserRelationInput | null;
  project?: MessagesProjectRelationInput | null;
  orgMedia?: MessagesOrgMediaRelationInput | null;
  childMessages?: MessagesChildMessagesRelationInput | null;
  parentMessage?: MessagesParentMessageRelationInput | null;
}

export interface User_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  email?: StringPredicate | null;
  status?: StringPredicate | null;
  origin?: StringPredicate | null;
  is8base?: BoolPredicate | null;
  firstName?: StringPredicate | null;
  lastName?: StringPredicate | null;
  timezone?: StringPredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  is_self?: boolean | null;
  not_self?: boolean | null;
  createdBy?: User_PermissionFilter | null;
  avatar?: File_PermissionFilter | null;
  roles?: Role_PermissionRelationFilter | null;
  ownedCompanies?: Org_PermissionRelationFilter | null;
  editor?: Editor_PermissionFilter | null;
  media?: Media_PermissionRelationFilter | null;
  worker?: Worker_PermissionRelationFilter | null;
  education?: Education_PermissionRelationFilter | null;
  messages?: Message_PermissionRelationFilter | null;
  orgAdmin?: Org_PermissionFilter | null;
  user_project?: Project_PermissionRelationFilter | null;
  AND?: User_PermissionFilter[] | null;
  OR?: User_PermissionFilter[] | null;
}

export interface User_PermissionRelationFilter {
  some?: User_PermissionFilter | null;
  every?: User_PermissionFilter | null;
  none?: User_PermissionFilter | null;
}

/**
 * Projects create input from user
 */
export interface User_ProjectCreateInput {
  name?: string | null;
  status?: string | null;
  template?: ProjectsTemplateRelationInput | null;
  tasks?: ProjectsTasksRelationInput | null;
  filmingDueDate?: any | null;
  editingDueDate?: any | null;
  editor?: ProjectsEditorRelationInput | null;
  org?: ProjectsOrgRelationInput | null;
  media?: ProjectsMediaRelationInput | null;
  assignedWorkers?: ProjectsAssignedWorkersRelationInput | null;
  messages?: ProjectsMessagesRelationInput | null;
  user?: ProjectsUserRelationInput | null;
  allWorkers?: boolean | null;
}

/**
 * Worker create input from user
 */
export interface User_WorkerCreateInput {
  org?: WorkerOrgRelationInput | null;
  user?: WorkerUserRelationInput | null;
  status?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  tags?: WorkerTagsRelationInput | null;
  taggedMedia?: WorkerTaggedMediaRelationInput | null;
  assignedProjects?: WorkerAssignedProjectsRelationInput | null;
  agreementID?: string | null;
}

/**
 * Users create input from user_project
 */
export interface User_project_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * Users relation input
 */
export interface UsersAvatarRelationInput {
  connect?: FileKeyFilter | null;
  create?: Users_avatar_FileCreateInput | null;
}

/**
 * Users relation input
 */
export interface UsersEditorRelationInput {
  connect?: EditorKeyFilter | null;
  create?: User_EditorCreateInput | null;
}

/**
 * Users relation input
 */
export interface UsersEducationRelationInput {
  connect?: EducationKeyFilter[] | null;
  create?: (User_EducationCreateInput | null)[] | null;
}

/**
 * Users relation input
 */
export interface UsersMediaRelationInput {
  connect?: MediaKeyFilter[] | null;
  create?: (Owner_MediaCreateInput | null)[] | null;
}

/**
 * Users relation input
 */
export interface UsersMessagesRelationInput {
  connect?: MessageKeyFilter[] | null;
  create?: (User_MessageCreateInput | null)[] | null;
}

/**
 * Users relation input
 */
export interface UsersOrgAdminRelationInput {
  connect?: OrgKeyFilter | null;
  create?: Admins_OrgCreateInput | null;
}

/**
 * Users relation input
 */
export interface UsersOwnedCompaniesRelationInput {
  connect?: OrgKeyFilter[] | null;
  create?: (Owner_OrgCreateInput | null)[] | null;
}

/**
 * Users relation input
 */
export interface UsersRolesRelationInput {
  connect?: RoleKeyFilter[] | null;
  create?: (Users_RoleCreateInput | null)[] | null;
}

/**
 * Users relation input
 */
export interface UsersUser_projectRelationInput {
  connect?: ProjectKeyFilter[] | null;
  create?: (User_ProjectCreateInput | null)[] | null;
}

/**
 * Users relation input
 */
export interface UsersWorkerRelationInput {
  connect?: WorkerKeyFilter[] | null;
  create?: (User_WorkerCreateInput | null)[] | null;
}

/**
 * Roles create input from users
 */
export interface Users_RoleCreateInput {
  name: string;
  description?: string | null;
  users?: RolesUsersRelationInput | null;
  permissions?: PermissionsInput | null;
  apiTokens?: RolesApiTokensRelationInput | null;
  authenticationProfiles?: RolesAuthenticationProfilesRelationInput | null;
  teamMembers?: RolesTeamMembersRelationInput | null;
}

/**
 * Files create input from users_avatar
 */
export interface Users_avatar_FileCreateInput {
  fileId?: string | null;
  public?: boolean | null;
  filename?: string | null;
  meta?: any | null;
  mods?: any | null;
  users_avatar?: FilesUsers_avatarRelationInput | null;
  teamMembers_avatar?: FilesTeamMembers_avatarRelationInput | null;
  companies_logo?: FilesCompanies_logoRelationInput | null;
  companies_videoLogo?: FilesCompanies_videoLogoRelationInput | null;
  agreements_file?: FilesAgreements_fileRelationInput | null;
}

/**
 * Orgs create input from videoLogo
 */
export interface VideoLogo_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner: OrgsOwnerRelationInput;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * Worker relation input
 */
export interface WorkerAssignedProjectsRelationInput {
  connect?: ProjectKeyFilter[] | null;
  create?: (AssignedWorkers_ProjectCreateInput | null)[] | null;
}

/**
 * WorkerFieldsPermissions create input
 */
export interface WorkerFieldsPermissions {
  createdAt?: boolean | null;
  updatedAt?: boolean | null;
  status?: boolean | null;
  startDate?: boolean | null;
  endDate?: boolean | null;
  agreementID?: boolean | null;
}

export interface WorkerFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  startDate?: DatePredicate | null;
  endDate?: DatePredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  org?: OrgFilter | null;
  user?: UserFilter | null;
  tags?: TagRelationFilter | null;
  taggedMedia?: OrgMediaRelationFilter | null;
  assignedProjects?: ProjectRelationFilter | null;
  AND?: WorkerFilter[] | null;
  OR?: WorkerFilter[] | null;
}

export interface WorkerKeyFilter {
  id?: string | null;
}

/**
 * Worker relation input
 */
export interface WorkerOrgRelationInput {
  connect?: OrgKeyFilter | null;
  create?: Workers_OrgCreateInput | null;
}

export interface WorkerRelationFilter {
  some?: WorkerFilter | null;
  every?: WorkerFilter | null;
  none?: WorkerFilter | null;
}

/**
 * Worker relation input
 */
export interface WorkerTaggedMediaRelationInput {
  connect?: OrgMediaKeyFilter[] | null;
  create?: (TaggedWorkers_OrgMediaCreateInput | null)[] | null;
}

/**
 * Worker relation input
 */
export interface WorkerTagsRelationInput {
  connect?: TagKeyFilter[] | null;
  create?: (Workers_TagCreateInput | null)[] | null;
}

/**
 * Worker relation input
 */
export interface WorkerUserRelationInput {
  connect?: UserKeyFilter | null;
  create?: Worker_UserCreateInput | null;
}

export interface Worker_PermissionFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  startDate?: DatePredicate | null;
  endDate?: DatePredicate | null;
  agreementID?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: User_PermissionFilter | null;
  org?: Org_PermissionFilter | null;
  user?: User_PermissionFilter | null;
  tags?: Tag_PermissionRelationFilter | null;
  taggedMedia?: OrgMedia_PermissionRelationFilter | null;
  assignedProjects?: Project_PermissionRelationFilter | null;
  AND?: Worker_PermissionFilter[] | null;
  OR?: Worker_PermissionFilter[] | null;
}

export interface Worker_PermissionRelationFilter {
  some?: Worker_PermissionFilter | null;
  every?: Worker_PermissionFilter | null;
  none?: Worker_PermissionFilter | null;
}

/**
 * Users create input from worker
 */
export interface Worker_UserCreateInput {
  email: string;
  status?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  timezone?: string | null;
  avatar?: UsersAvatarRelationInput | null;
  roles?: UsersRolesRelationInput | null;
  ownedCompanies?: UsersOwnedCompaniesRelationInput | null;
  editor?: UsersEditorRelationInput | null;
  media?: UsersMediaRelationInput | null;
  worker?: UsersWorkerRelationInput | null;
  education?: UsersEducationRelationInput | null;
  messages?: UsersMessagesRelationInput | null;
  orgAdmin?: UsersOrgAdminRelationInput | null;
  user_project?: UsersUser_projectRelationInput | null;
  agreementID?: string | null;
}

/**
 * Orgs create input from workers
 */
export interface Workers_OrgCreateInput {
  name?: string | null;
  slug?: string | null;
  status?: string | null;
  tags?: OrgsTagsRelationInput | null;
  ownedTags?: OrgsOwnedTagsRelationInput | null;
  plan?: OrgsPlanRelationInput | null;
  logo?: OrgsLogoRelationInput | null;
  owner?: OrgsOwnerRelationInput | null;
  website?: string | null;
  facebookURL?: string | null;
  linkedinURL?: string | null;
  twitterURL?: string | null;
  youtubeURL?: string | null;
  orgSize?: number | null;
  industryID?: string | null;
  hQAddress?: SmartAddressInput | null;
  projects?: OrgsProjectsRelationInput | null;
  workers?: OrgsWorkersRelationInput | null;
  videoLogo?: OrgsVideoLogoRelationInput | null;
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
  titleFont?: string | null;
  paragraphFont?: string | null;
  media?: OrgsMediaRelationInput | null;
  alumni?: OrgsAlumniRelationInput | null;
  admins?: OrgsAdminsRelationInput | null;
  agreementID?: string | null;
  customProjectTemplates?: OrgsCustomProjectTemplatesRelationInput | null;
}

/**
 * Tags create input from workers
 */
export interface Workers_TagCreateInput {
  name?: string | null;
  type?: string | null;
  companyOwner?: TagsCompanyOwnerRelationInput | null;
  orgs?: TagsOrgsRelationInput | null;
  editors?: TagsEditorsRelationInput | null;
  workers?: TagsWorkersRelationInput | null;
  media?: TagsMediaRelationInput | null;
  companyMedia?: TagsCompanyMediaRelationInput | null;
  projectTemplates?: TagsProjectTemplatesRelationInput | null;
  taskTemplates?: TagsTaskTemplatesRelationInput | null;
  pointers?: TagsPointersRelationInput | null;
  projectTaskReqs?: TagsProjectTaskReqsRelationInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

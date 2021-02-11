export const TOKEN_NAME = 'token'
export const REFRESH_TOKEN_NAME = 'refresh_token'

export const AUTH_PROFILE_ID = 'ckj4enqcx004u07l2hyzw7j3o'

// export const FILESTACK_API_KEY = 'A99VRuuxPQ5qQSUrd9ycZz' // kevin's dev environment
export const FILESTACK_API_KEY = 'AeAGk1MyTLuTbs8jE9UWwz' // clients' prod environment

export enum USER_ROLES {
  Admin = 'Administrator',
}

export enum ORG_MEDIA_STATUS {
  Pending = 'pending',
  Approved = 'approved',
  'Not Approved' = 'notApproved',
  Published = 'published',
  Archived = 'archived',
}

export enum TaskStatus {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
}

export enum PointerCategory {
  GetReady = 'prep',
  Filming = 'film',
}

export const workflowId = 'b64675eb-cae1-44b6-9503-f1214695ff69'
export const QuickTimeVideoExt = 'video/quicktime'
export const ALLOWED_ROLES: Record<string, string> = {
  member: 'Worker',
  admin: 'Administrator',
}

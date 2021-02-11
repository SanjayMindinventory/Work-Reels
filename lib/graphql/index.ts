import * as localQueries from './query/local'
import * as userQueries from './query/user'
import * as projectQueries from './query/projects'
import * as mediaQueries from './query/media'
import * as workerQueries from './query/workers'
import * as orgMediaQueries from './query/org-media'
import * as taskQueries from './query/task'
import * as agreementQueries from './query/agreement'

import * as userMutations from './mutation/user'
import * as localMutations from './mutation/local'
import * as mediaMutations from './mutation/media'
import * as orgMediaMutations from './mutation/org-media'
import * as projectMutations from './mutation/project'
import * as taskMutations from './mutation/task'

const QUERY = {
  ...localQueries,
  ...userQueries,
  ...projectQueries,
  ...mediaQueries,
  ...workerQueries,
  ...orgMediaQueries,
  ...taskQueries,
  ...agreementQueries,
}

const MUTATION = {
  ...userMutations,
  ...localMutations,
  ...mediaMutations,
  ...orgMediaMutations,
  ...projectMutations,
  ...taskMutations,
}

export { QUERY, MUTATION }

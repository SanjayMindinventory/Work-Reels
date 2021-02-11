// @ts-ignore
import React, { useCallback, useMemo } from 'react'
import { Head } from 'components/head/head'
import { NextPage } from 'next'
import Layout from 'components/layout/layout'
import dynamic from 'next/dynamic'
import { useMutation, useQuery } from '@apollo/client'
import { MUTATION, QUERY } from 'lib/graphql'
import {
  UserUploadMediaOfOrg,
  UserUploadMediaOfOrgVariables,
} from 'lib/graphql/types'
import { useRouter } from 'next/router'
import { Pages } from 'components/nav/pages'
import { QuickTimeVideoExt, workflowId } from 'lib/constants'
import { useUserSession } from 'utils/hooks'
import { withAuth } from 'utils/with-auth'

const Picker = dynamic(() => import('../../components/picker/picker'), {
  ssr: false,
})
const FileUploadOptions = {
  maxFiles: 1,
  accept: 'video/*',
}

const Videos: NextPage<any> = (props) => {
  const router = useRouter()
  const userInfo = useUserSession()
  const userOrgId = useMemo(() => userInfo?.orgAdmin?.id, [userInfo])

  const [uploadVideo] = useMutation<
    UserUploadMediaOfOrg,
    UserUploadMediaOfOrgVariables
  >(MUTATION.USER_UPLOAD_MEDIA_OF_ORG)

  const onUploadSuccess = useCallback(
    (res: any) => {
      const uploadedItem = res?.filesUploaded?.[0]
      if (uploadedItem && uploadedItem.filename && uploadedItem.url) {
        const {
          filename,
          mimetype,
          size,
          url,
          originalFile,
          workflows,
        } = uploadedItem
        uploadVideo({
          variables: {
            fileName: filename,
            url,
            ownerId: userInfo?.id,
            mimeType: mimetype,
            orgId: userOrgId,
            size,
            workflowJobId: workflows?.[workflowId]?.jobid,
            isProcessing:
              originalFile?.type === QuickTimeVideoExt &&
              workflows?.[workflowId]?.jobid
                ? 1
                : 0,
          },
        }).then(() => router.push(Pages.Video))
      }

      //
    },
    [userInfo, uploadVideo, userOrgId],
  )

  return (
    <Layout>
      <Head title='Create Video | WorkReels' />
      <div className='p-6'>
        <p className='text-center'>Create Videos</p>
        <div className='mt-4 w-1/3 mx-auto'>
          <Picker onSuccess={onUploadSuccess} pickerOptions={FileUploadOptions}>
            <button>Upload button</button>
          </Picker>
        </div>
      </div>
    </Layout>
  )
}

export default withAuth(Videos)

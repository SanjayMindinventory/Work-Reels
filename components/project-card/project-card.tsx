import React from 'react'
import Link from 'next/link'
import { Pages } from 'components/nav/pages'
import { GetProjects_projectsList_items } from 'lib/graphql/types'

interface ProjectCardProps {
  project: GetProjects_projectsList_items
  doneTask?: number
}
export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { project, doneTask } = props

  return (
    <Link href={`${Pages.Project}/${project.id}`} key={project.id as string}>
      <a className='max-w-6xl mx-auto cursor-pointer my-4 px-1 w-full'>
        <div className='px-4 py-4 sm:px-6 rounded-lg shadow-lg hover:bg-gray-100'>
          <div className='flex items-center justify-between'>
            <p className='text-lg font-medium text-black truncate md:text-2xl'>
              {project.name}
            </p>
            {/* <div className='ml-2 flex-shrink-0 flex'>
              <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                Due {project.filmingDueDate}
              </p>
            </div> */}
          </div>
          <div className='mt-2 sm:flex sm:justify-between'>
            <div className='sm:flex'>
              <p className='flex items-center text-sm'>
                {project.template?.tags?.items?.map((tag, idx) => {
                  return (
                    <span
                      key={`${tag.name}-${idx}`}
                      className='inline-flex items-center mx-1 px-3 py-0.5 rounded-full text-sm font-medium bg-green-300 text-gray-800'
                    >
                      {tag.name}
                    </span>
                  )
                })}
              </p>
            </div>
            <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
              <p>
                {doneTask || 0}/{project.tasks?.count} Tasks
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

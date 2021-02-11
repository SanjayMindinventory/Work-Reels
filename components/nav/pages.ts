import { useRouter } from 'next/router'

export enum Pages {
  Project = '/project',
  Video = '/video',
  VideoCreate = '/video/create',
  Worker = '/worker',
  Task = '/task',
  Login = '/login',
}

export enum PageId {
  Home = 'home',
  Register = 'register',
  Videos = 'video',
  Projects = 'project',
}

interface PageItem {
  pathname: string
  id: PageId
  asPath: (...args: string[]) => string
}

export const pages: PageItem[] = [
  {
    pathname: '/',
    id: PageId.Home,
    asPath: () => '/',
  },
  {
    pathname: '/register',
    id: PageId.Register,
    asPath: () => '/register',
  },
  {
    pathname: Pages.Video,
    id: PageId.Videos,
    asPath: () => Pages.Video,
  },
  {
    pathname: Pages.Project,
    id: PageId.Projects,
    asPath: () => Pages.Project,
  },
]

export const findPage = (id: PageId) => pages.find((page) => page.id === id)
export const findPageByPathname = (pathname: string) =>
  pages.find((page) => page.pathname === pathname)

export const useCurrentPageId = () => {
  const { pathname } = useRouter()
  const selectedPage = findPageByPathname(pathname)

  if (selectedPage !== undefined) {
    return selectedPage.id
  } else {
    return undefined
  }
}

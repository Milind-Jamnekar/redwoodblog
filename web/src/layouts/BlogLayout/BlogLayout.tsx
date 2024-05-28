import { Container, Tabs } from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
      </header>
      <Container size="xl">
        <main>
          <Tabs defaultValue="Home" variant="outline" visibleFrom="sm">
            <Tabs.List>
              <Tabs.Tab value={routes.home()}>
                <Link to={routes.home()}>Home</Link>
              </Tabs.Tab>
              <Tabs.Tab value={routes.about()}>
                <Link to={routes.about()}>About</Link>
              </Tabs.Tab>
              <Tabs.Tab value={routes.contact()}>
                <Link to={routes.contact()}>Contact</Link>
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          {children}
        </main>
      </Container>
    </>
  )
}

// const CustomLink = ({ to, ...rest }) => {
//   const matchInfo = useMatch(to)

//   // return <SomeStyledComponent as={Link} to={to} isActive={matchInfo.match} />
//   return (
//     <Tabs.Tab value={routes.about()}>
//       <Link to={routes.about()}>About</Link>
//     </Tabs.Tab>
//   )
// }

export default BlogLayout

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import '@mantine/core/styles.css'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

import './scaffold.css'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <MantineProvider defaultColorScheme="dark">
          <ColorSchemeScript />
          <MantineProvider>
            <RedwoodApolloProvider useAuth={useAuth}>
              <Routes />
            </RedwoodApolloProvider>
          </MantineProvider>
        </MantineProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App

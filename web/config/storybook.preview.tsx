import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import type { GlobalTypes } from '@storybook/csf'
import type { StoryContext, StoryFn } from '@storybook/react'
import theme from 'config/mantine.config'
/** @type { import("@storybook/csf").GlobalTypes } */
export const globalTypes: GlobalTypes = {}
/**
 * An example, no-op storybook decorator. Use a function like this to create decorators.
 * @param { import("@storybook/react").StoryFn} StoryFn
 * @param { import("@storybook/react").StoryContext} context
 */
const _exampleDecorator = (StoryFn: StoryFn, _context: StoryContext) => {
  return <StoryFn />
}
/**
 * @param { import("@storybook/react").StoryFn} StoryFn
 */
const withMantine = (StoryFn: StoryFn) => {
  return (
    <MantineProvider theme={theme}>
      <StoryFn />
    </MantineProvider>
  )
}
export const decorators = [withMantine]

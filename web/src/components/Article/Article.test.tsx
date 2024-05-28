import { render } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Article
          article={{
            id: 1,
            title: 'First post',
            body: 'fakjfkljskfjklalk',
            createdAt: '2020-01-01T12:34:45Z',
          }}
        />
      )
    }).not.toThrow()
  })
})

import { Badge, Card, Image } from '@mantine/core'
import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <Card withBorder radius="md">
      <Card.Section>
        <Link to={routes.article({ id: article.id })}>
          <Image src="https://i.imgur.com/Cij5vdL.png" height={180} />
        </Link>
      </Card.Section>

      <Badge
        style={{ position: 'absolute' }}
        variant="gradient"
        gradient={{ from: 'yellow', to: 'red' }}
      >
        outstanding
      </Badge>

      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </Card>
  )
}

export default Article

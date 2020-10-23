import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Title here',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Link1</a>
        </Link>{' '}
        |{' '}
        <Link href="/">
          <a>Link2</a>
        </Link>{' '}
        |{' '}
        <Link href="/">
          <a>Link3</a>
        </Link>{' '}
        | <a href="/">Link4</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Footer here </span>
    </footer>
  </div>
)

export default Layout

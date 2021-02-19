import Head from 'next/head'
import React from 'react'
import { AirtableBookmarks } from '../src/components/AirtableBookmarks'
import { GitHubStars } from '../src/components/GithubStars'
import { InstapaperUnread } from '../src/components/Instapaper'
import { TwitterLikes } from '../src/components/TwitterLikes'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zander's Feeds - zander.wtf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto my-10 md:grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div>
          <AirtableBookmarks />
        </div>
        <div>
          <TwitterLikes />
        </div>
        <div>
          <InstapaperUnread />
        </div>
        <div>
          <GitHubStars />
        </div>
      </main>
    </div>
  )
}

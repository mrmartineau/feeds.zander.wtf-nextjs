import Head from 'next/head'
import React from 'react'
import { AirtableBookmarks } from '../src/components/AirtableBookmarks'
import { GitHubStars } from '../src/components/GithubStars'
import { InstapaperUnread } from '../src/components/Instapaper'
import { TwitterLikes } from '../src/components/TwitterLikes'

export default function Home() {
  return (
    <div className="grid p-5 md:p-10">
      <Head>
        <title>Zander's Feeds - zander.wtf</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="mx-auto flex gap-5 md:gap-10 overflow-x-auto">
        <div className="w-80 flex-none">
          <AirtableBookmarks />
        </div>
        <div className="w-80 flex-none">
          <TwitterLikes />
        </div>
        <div className="w-80 flex-none">
          <InstapaperUnread />
        </div>
        <div className="w-80 flex-none">
          <GitHubStars />
        </div>
      </main>
    </div>
  )
}

import Head from 'next/head'
import React from 'react'
import { AirtableBookmarks } from '../src/components/AirtableBookmarks'
import { InstapaperUnread } from '../src/components/Instapaper'
import { TwitterLikes } from '../src/components/TwitterLikes'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZM Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto my-10 md:grid grid-flow-row grid-cols-3 gap-4">
        <div className="p-4">
          <AirtableBookmarks />
        </div>
        <div className="p-4">
          <TwitterLikes />
        </div>
        <div className="p-4">
          <InstapaperUnread />
        </div>
      </main>
    </div>
  )
}

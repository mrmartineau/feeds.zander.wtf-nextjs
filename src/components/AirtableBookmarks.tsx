import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { STYLE_LINKS } from '../constants'
import { simpleUrl } from '../simpleUrl'

const COUNT = 50
const FEED_PATH = `/api/airtable?base=${process.env.NEXT_PUBLIC_BOOKMARKS_BASE}&table=bookmarks&count=${COUNT}`

interface AirtableBookmarksProps {}

const fetchBookmarks = () => {
  return axios({
    url: FEED_PATH,
    method: 'GET',
  })
}

export const AirtableBookmarks: FC<AirtableBookmarksProps> = ({ children }) => {
  const { data } = useQuery('bookmarks', fetchBookmarks)

  const records = data?.data?.records

  if (!records?.length) {
    return null
  }

  return (
    <div>
      <h2 className="mb-3 ml-3 text-lg font-medium">Bookmarks</h2>
      <ul>
        {records.map(({ id, fields }) => {
          return (
            <li key={id}>
              <a href={fields.URL} className={STYLE_LINKS}>
                {fields.Title}
                <br />
                <span className="text-sm text-gray-400">
                  {simpleUrl(fields.URL)}
                </span>
              </a>
            </li>
          )
        })}
      </ul>

      {children}
    </div>
  )
}

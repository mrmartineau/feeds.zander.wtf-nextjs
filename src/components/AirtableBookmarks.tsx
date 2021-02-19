import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { STYLE_LINKS } from '../constants'
import { simpleUrl } from '../simpleUrl'
import { ColumnHeading } from './ColumnHeading'
import { Link } from './Link'

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
      <ColumnHeading>Bookmarks</ColumnHeading>
      <ul>
        {records.map(({ id, fields }) => {
          return (
            <li key={id} className="mb-1">
              <Link
                url={fields.URL}
                title={fields.Title}
                subtitle={simpleUrl(fields.URL)}
              />
            </li>
          )
        })}
      </ul>

      {children}
    </div>
  )
}

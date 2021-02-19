import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { STYLE_LINKS } from '../constants'
import { simpleUrl } from '../simpleUrl'
import { ColumnHeading } from './ColumnHeading'
import { Link } from './Link'

const COUNT = 50
const FEED_PATH = `/api/airtable?base=${process.env.NEXT_PUBLIC_TWITTER_LIKES_BASE}&table=Likes&count=${COUNT}`

interface TwitterLikesProps {}

const fetchLikes = () => {
  return axios({
    url: FEED_PATH,
    method: 'GET',
  })
}

export const TwitterLikes: FC<TwitterLikesProps> = ({ children }) => {
  const { data } = useQuery('twitterLikes', fetchLikes)

  const records = data?.data?.records

  if (!records?.length) {
    return null
  }

  return (
    <div>
      <ColumnHeading>Twitter Likes</ColumnHeading>
      <ul>
        {records.map(({ id, fields }) => {
          return (
            <li key={id} className="mb-1">
              <Link url={fields.URL} title={fields.Title} />
            </li>
          )
        })}
      </ul>

      {children}
    </div>
  )
}

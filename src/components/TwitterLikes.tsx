import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { STYLE_LINKS } from '../constants'
import { simpleUrl } from '../simpleUrl'

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
      <h2 className="mb-3 ml-3 text-lg font-medium">Twitter Likes</h2>
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

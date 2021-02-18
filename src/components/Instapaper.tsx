import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { STYLE_LINKS } from '../constants'
import { simpleUrl } from '../simpleUrl'

const FEED_PATH = `https://rsstojson.com/v1/api/?rss_url=https://www.instapaper.com/rss/305104/YzRvSlLTQWV1lz5OjjeEk4Ogl8s`

interface InstapaperUnreadProps {}

const fetchInstapaperUnread = () => {
  return axios({
    url: FEED_PATH,
    method: 'GET',
  })
}

export const InstapaperUnread: FC<InstapaperUnreadProps> = ({ children }) => {
  const { data } = useQuery('instapaper', fetchInstapaperUnread)

  const records = data?.data.rss.channel[0].item

  if (!records?.length) {
    return null
  }

  return (
    <div>
      <h2 className="mb-3 ml-3 text-lg font-medium">Instapaper unread</h2>
      <ul>
        {records.map(({ guid, link, title }) => {
          return (
            <li key={guid}>
              <a href={link} className={STYLE_LINKS}>
                {title}
                <br />
                <span className="text-sm text-gray-400">{simpleUrl(link)}</span>
              </a>
            </li>
          )
        })}
      </ul>

      {children}
    </div>
  )
}

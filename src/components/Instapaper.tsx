import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { STYLE_LINKS } from '../constants'
import { simpleUrl } from '../simpleUrl'
import { ColumnHeading } from './ColumnHeading'
import { Link } from './Link'

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
      <ColumnHeading>Instapaper unread</ColumnHeading>
      <ul>
        {records.map(({ guid, link, title }) => {
          return (
            <li key={guid} className="mb-1">
              <Link url={link} title={title} subtitle={simpleUrl(link)} />
            </li>
          )
        })}
      </ul>

      {children}
    </div>
  )
}

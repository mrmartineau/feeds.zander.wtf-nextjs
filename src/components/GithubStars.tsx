import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { ColumnHeading } from './ColumnHeading'
import { Link } from './Link'

// const COUNT = 50
const FEED_PATH = `/api/github`

interface GitHubStarsProps {}

const fetchGitHubStars = () => {
  return axios({
    url: FEED_PATH,
    method: 'GET',
  })
}

export const GitHubStars: FC<GitHubStarsProps> = ({ children }) => {
  const { data } = useQuery('gh-stars', fetchGitHubStars)

  const stars = data?.data

  if (!stars?.length) {
    return null
  }

  return (
    <div>
      <ColumnHeading>GitHub stars</ColumnHeading>
      <ul>
        {stars.map(({ id, full_name, html_url, description }) => {
          return (
            <li key={id} className="mb-1">
              <Link url={html_url} title={full_name} subtitle={description} />
            </li>
          )
        })}
      </ul>

      {children}
    </div>
  )
}

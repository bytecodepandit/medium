import Layout from '@/components/Layout'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'

type Repo = {
  name: string
  stargazers_count: number
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>

export default function IndexPage({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('repo', repo);
  return (
    <Layout
      title="Reddium – Medium-themed Reddit client"
      token={'asdfiaeifalskdfhaslkdfhasdfhj'}
    >
      <p>{repo.stargazers_count}</p>
      <Link href="/search">Search</Link>
    </Layout>
  )
}
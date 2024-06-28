import React from 'react'
import Link from 'next/link';

type Props = {}

const Topics = (props: Props) => {
  return (
    <>
    <div className='Topics'>
        <h2 className='Topic-title'>Topics</h2>

        <h4 className='content-date txt'>2024.6.21</h4>
        <p className='content-txt txt'>2024年度東北学院大学祭のホームページversion1.0を公開しました</p>
        <p className='viewmore'><Link href="/topicpage">→View More</Link></p>
    </div>
    </>
  )
}

export default Topics
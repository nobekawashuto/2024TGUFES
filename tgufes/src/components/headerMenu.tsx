import React from 'react'
import Link from 'next/link';

type Props = {}

const HeaderMenu = () => {
  return (
    <div className="page-header wrapper">
      <h2>東北学院大学祭公式WEBサイト</h2>
      <nav>
        <ul className="main-nav">
          <li><Link href="/">トップページ</Link></li>
          <li><a href="test2.html">芸能人企画</a></li>
          <li><a href="test3.html">スケジュール</a></li>
          <li><Link href="/forms">お問い合わせ</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMenu

// tsrafce
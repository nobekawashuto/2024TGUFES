import React from 'react'
import Link from 'next/link';

type Props = {}

const HeaderMenu = () => {
  return (
    <div className="page-header wrapper">
      <h2><Link className='mainLink' href="/">東北学院大学祭実行委員会</Link></h2>
      <nav>
        <ul className="main-nav">
          <li><Link className='mainLink' href="/">トップページ</Link></li>
          <li><Link className='mainLink' href="/comedy">芸能人企画</Link></li>
          <li><a className='mainLink' href="test3.html">スケジュール</a></li>
          <li><Link className='mainLink' href="/forms">お問い合わせ</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMenu

// tsrafce
import React from 'react'

type Props = {}

const HeaderMenu = () => {
  return (
    <header className="page-header wrapper">
      <h2>東北学院大学祭公式WEBサイト</h2>
      <nav>
        <ul className="main-nav">
          <li><a href="index.html">トップページ</a></li>
          <li><a href="test2.html">芸能人企画</a></li>
          <li><a href="test3.html">スケジュール</a></li>
          <li><a href="contact.html">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderMenu

// tsrafce
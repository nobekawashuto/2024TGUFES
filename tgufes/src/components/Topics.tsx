import React from 'react'
import Link from 'next/link';

type Props = {}

const Topics = (props: Props) => {
  return (
    <>
    <div className='Topics'>
        <h2 className='Topic-title'>Topics<p className='viewmore'><Link href="/topicpage">→View More</Link></p></h2>

        <h4 className='content-date txt'>2024.10.16　<p className='new'>new!</p></h4>
        <p className='content-txt txt'>六軒丁祭ではうさぎ,ひよこ,モルモット,マイクロミニブタの動物ふれあい企画を実施します！</p>

        <h4 className='content-date txt'>2024.10.01</h4>
        <p className='content-txt txt'><Link href="https://www.tohoku-gakuin.ac.jp/info/top/240927-5.html">わが街マルシェが五橋祭で開催されます！詳細はこちらをクリック！</Link></p>


        <h4 className='content-date txt'>2024.9.24</h4>
        <p className='content-txt txt'><Link href="https://drive.google.com/file/d/1MLt907lZgvjlVJGmpUGlEbfjzDEMrZQt/view?usp=sharing">デジタルパンフレットを公開しました！</Link></p>

        <h4 className='content-date txt'>2024.9.13</h4>
        <p className='content-txt txt'><Link href="/view_comedy">芸能人企画ページを公開しました！</Link></p>
        
        <h4 className='content-date txt'>2024.7.30</h4>
        <p className='content-txt txt'>TGUコンテスト特設ページを公開しました！！</p>

        {/* <h4 className='content-date txt'>2024.7.11</h4>
        <p className='content-txt txt'>あのTVの人気企画｢未成年の主張｣をオマージュした特別イベントBe.Voice開催決定!!参加者も募集中です！！</p> */}


        {/* <h4 className='content-date txt'>2024.6.21</h4>
        <p className='content-txt txt'>2024年度東北学院大学祭のホームページversion1.0を公開しました</p> */}
        
    </div>
    </>
  )
}

export default Topics
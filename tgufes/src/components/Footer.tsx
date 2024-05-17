import React from 'react'
import Link from 'next/link';

type Props = {}

const Footer = () => {
    return (
        <>
            <div className="backtop">
                <h4><Link href="/">トップに戻る</Link></h4>
            </div>
            <footer>
                <div className="wrapper">
                    <p><small>&copy;2024年度東北学院大学祭実行委員会HP制作班</small></p>
                </div>
            </footer>
        </>
    )
}

export default Footer
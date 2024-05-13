import React from 'react'

type Props = {}

const Schedule = (props: Props) => {
    let count = 0
    return (
        <>
            <div className='schedule'>

                <h2 className='date-title'>2024年度開催日時</h2>

                <div className='date'>
                    <ul>10月14日(月・祝)10:00〜:五橋祭 五橋キャンパス</ul>
                    <ul>10月26日(土)10:00〜:六軒丁祭 土樋キャンパス</ul>
                </div>
                <div className='countdown'>
                    <ul>開催まで残り日</ul>
                </div>
            </div >
        </>
    )
};

export default Schedule
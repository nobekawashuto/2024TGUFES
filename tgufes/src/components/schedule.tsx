import React from 'react'

type Props = {}

const Schedule = (props: Props) => {
    let count = 0
    const now = new Date();//現在時刻取得
    const goal = new Date(2024,9,14);//大学祭開催日指定(月は-1)

    const restMillisecond = goal.getTime()-now.getTime();//開催までのミリ秒

    const day = Math.floor(restMillisecond/1000/60/60/24);//日にち換算
    return (
        <>
            <div className='schedule'>

                <h2 className='date-title'>2024年度開催日時</h2>

                <div className='date'>
                    <ul className='date-detail txt'>10月14日(月・祝)11:00〜17:00(予定)：五橋祭<br/>五橋キャンパス</ul>
                    <ul className='date-detail txt'>10月26・27日(土・日)10:00〜17:00(予定)：六軒丁祭<br/>土樋キャンパス</ul>
                </div>
                <div className='countdown'>
                    <ul className='date-detail txt'>開催まで残り{day}日</ul>
                </div>
            </div >
        </>
    )
};

export default Schedule
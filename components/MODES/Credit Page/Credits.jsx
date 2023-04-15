import React from 'react'
import css from './credits.module.css'

export default function Credits(props) {
    return (
        <div className={css.main}>

            <h1 className={css.title}>
                Creators:
            </h1>

            <p className={css.normalText}>call-ofthe-wild</p>
            <p className={css.normalText}>xkurieita</p>

            <h1 className={css.title}>
                Special Thanks:
            </h1>

            <p className={css.normalText}>PePe (DOG)</p>
            <p className={css.normalText}>Sinbad (CAT)</p>
            <div style={{ height: "100px" }}></div>

            <h1 className={css.return} onClick={() => props["data-change"](props["data-pages"].Menu)}>&#60;- Return</h1>

        </div>
    )
}

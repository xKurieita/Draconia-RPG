import React, { useState } from 'react'
import css from './Settings.module.css'

export default function Settings(props) {

    const [volumeLevel, setVolumeLevel] = useState(5);
    const [bloodSplatter, setBloodSplatter] = useState(true);

    return (
        <div className={css.main}>
            <h1 className={css.title}>
                Settings:
            </h1>
            <div className={css.settingsHolder}>
                <h3>Volume</h3>
                <div className={css.settingsChanger} >
                    <button onClick={() => setVolumeLevel(prev => prev == 0 ? prev = 0 : prev - 1)}>&#60;</button>
                    <p>{volumeLevel}</p>
                    <button onClick={() => setVolumeLevel(prev => prev == 10 ? prev = 10 : prev + 1)}>&#62;</button>
                </div>
                <h3>Blood splatter</h3>
                <div className={css.settingsChanger} >
                    <button onClick={() => setBloodSplatter(prev => !prev)}>{bloodSplatter ? "ON" : "OFF"}</button>
                </div>
            </div>

            <h1 className={css.return} onClick={() => props["data-change"](props["data-pages"].Menu)}>&#60;- Return</h1>

        </div>
    )
}

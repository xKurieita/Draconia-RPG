import React from 'react'
import css from './Menu.module.css';

export default function Menu(props) {
    // const page = {
    //     Menu: "menu",
    //     Game: "game",
    //     Settings: "settings",
    //     End: "game-over",
    //     Credits: "credits"
    // }
    const options = [
        { front: "PLAY", ref: props["data-pages"].Game },
        { front: "settings", ref: props["data-pages"].Settings },
        { front: "credits", ref: props["data-pages"].Credits }];

    return (
        <div className={css.background}>
            <div className={css.menu}>

                <span className={css.title}>DRACONIA</span>
                <span className={css.subtitle}>--ACT I--</span>
                <div style={{ flexGrow: 1 }} />
                {options.map((opt, idx) => {

                    return (
                        <div key={idx} className={css.options} onClick={() => { props["data-change"](opt.ref) }}>
                            {opt.front}
                        </div>
                    )
                })}
                <div style={{ height: "200px" }} />
                <p className={css.credits}>
                    <a className={css.githubLink} target='_blank' href="https://github.com/xKurieita"> xkurieita </a>||
                    <a className={css.githubLink} target='_blank' href='https://github.com/call-ofthe-wild'>call-ofthe-wild</a>
                    <a className={css.companyLink} target='_blank' href='https://github.com/Greedy-Pig-Innovations'> @Greedy-pigs-innovations </a></p>
            </div>
            <div className={css.castle}>

            </div>
        </div>
    )
}

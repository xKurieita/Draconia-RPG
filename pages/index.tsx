import Game from "@/components/Game";
import Menu from "@/components/MODES/Main Menu/Menu";
import Credits from "@/components/MODES/Credit Page/Credits";
import Settings from "@/components/MODES/Settings Page/Settings"
import React, { useState } from "react";

export default function Home() {
    const page = {
        Menu: "menu",
        Game: "game",
        Settings: "settings",
        End: "game-over",
        Credits: "credits"
    }
    const [Display, setDisplay] = useState(page.Menu);


    const changeDisplay = (newDisplay: string) => {
        setDisplay(newDisplay);
    }

    // return (
    //     <>
    //         <main>
    //             <Menu data-pages={page} data-change={changeDisplay} />
    //         </main>
    //     </>
    // )

    switch (Display) {
        case page.Menu:
            return (
                <Menu data-pages={page} data-change={changeDisplay} />
            );
            break;
        case page.Credits:
            return (
                <Credits data-pages={page} data-change={changeDisplay} />
            );
            break;
        case page.Game:
            return (
                <Game />
            );
            break;
        case page.Settings:
            return (
                <Settings data-pages={page} data-change={changeDisplay} />
            );
            break;

    }

}

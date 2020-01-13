import React from "react";

import { ButtonsList } from "../../../components/ButtonsList";
import { InputButton } from "../../../components/Inputs/InputButton";
import { ZenZone } from "../../../components/ZenZone";
import { Notice } from "../../../components/Notice";

export type TopControlsProps = {
    paused?: boolean;
    restart: () => void;
    setPaused: (newPaused: boolean) => void;
    toggleZen: () => void;
    zen?: boolean;
};

export const TopControls: React.FC<TopControlsProps> = ({
    paused,
    restart,
    setPaused,
    toggleZen,
    zen,
}) => {
    return (
        <ZenZone zen={zen}>
            <ButtonsList>
                <InputButton
                    onClick={() => setPaused(!paused)}
                    value={paused ? "Go!" : "Pause"}
                />
                <InputButton onClick={restart} value="Restart" />
                <InputButton
                    onClick={toggleZen}
                    value={zen ? "Zen Off" : "Zen On"}
                />
            </ButtonsList>
            <Notice>{paused ? "Your talk will be:" : "You have:"}</Notice>
        </ZenZone>
    );
};

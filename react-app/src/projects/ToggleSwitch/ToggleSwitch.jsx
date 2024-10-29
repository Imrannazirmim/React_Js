
import { useState } from "react"
import "./ToggleSwitch.css"


export const ToggleSwitch = () => {
    const [isON, setIsON] = useState(false);

    const SwitchButton = () => {
        setIsON(!isON)
    }
    const checkBtn = isON ? 'on' : 'off';
    return (
      <div
        className="toggle-switch"
        onClick={SwitchButton}
        style={{ backgroundColor: isON ? "#4caf50" : "#f44336" }}
      >
        <div className={`switch ${checkBtn}`}>
          <span className="switch-state">{checkBtn}</span>
        </div>
      </div>
    );
}
import { memo, useRef} from "react"

const Counts = () => {

    const renderCount = useRef(0)

    return(
        <div>
            <p>Nothing change value but now rendered value:
                
                 <span> {renderCount.current++}</span></p>
        </div>
    );

};

export default memo(Counts)
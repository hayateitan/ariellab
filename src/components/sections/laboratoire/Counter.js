import React from 'react';
import counter from "../../../data/counter.json";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor"; //menu counter 1

function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div style={{padding:40}}>
            <div className="row">
                {/* Data */}
                {counter.map((item, i) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                        <div className="sigma_counter style-5">
                            <span>
                                <CountUp start={focus ? 0 : null} end={item.value} duration={5} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <b ref={countUpRef} className="counter" />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span className="plus">+</span>
                            </span>
                            <p >{item.title}</p>
                        </div>
                    </div>
                ))}
                {/* Data */}
            </div>
        </div>
    );
}

export default Counter;
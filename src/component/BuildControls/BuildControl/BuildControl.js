import React from "react";

const buildControl = (props) => {
    return (
        <div>
            <div>{props.weekday}</div>
            <p>Lunch</p>

            <form>
                {Object.keys(props.meal).map(mealKey => {
                    return (
                        <div className="radio">
                            <label>
                                <input
                                    // name={mealKey}
                                    checked={props.selected[props.weekday]['lunch'] === props.meal[mealKey]}
                                    onChange={() => props.itemSelected(props.weekday, 'lunch', props.meal[mealKey])}
                                    key={props.week + props.meal[mealKey]}
                                    type="radio" value={props.meal[mealKey]}/>
                                {props.meal[mealKey]}
                            </label>
                        </div>);
                })}
            </form>

        </div>
    );

};

export default buildControl;
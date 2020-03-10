import React from "react";
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        weekday: 'monday',
        lunch: {A: 'Mon A' ,B: 'Mon B', C: 'Mon C', soup: 'Mon S'},
        dinner: {A: 'Mon DA', B: 'Mon DB', C: 'Mon DC', soup: 'Mon DS'}
    },
    {
        weekday: 'tuesday',
        lunch: {A: 'Tue A', B: 'Tue B', C: 'Tue C', soup: 'Tue S'},
        dinner: {A: 'Tue DA', B: 'Tue DB', C: 'Tue DC', soup: 'Tue DS'}
    }
];

const buildControls = (props) => {
    return (
        <div>
            {controls.map(ctrl => {
                return (<BuildControl
                    key={ctrl.weekday}
                    weekday={ctrl.weekday}
                    meal={ctrl.lunch}
                    // mealKey={Object.keys(ctrl.fieldName)}
                    selected={props.selected}
                    itemSelected={props.itemSelected}
                />);
            })}
        </div>

    )
};

export default buildControls;
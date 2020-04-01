import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Step, StepButton, Stepper} from '@material-ui/core';
import WeekdaySelected from "./WeekdaySelected/WeekdaySelected";

const userStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1)
    },
    completed: {
        display: 'inline-block',
    },
}));

// This key value pair for converse English weekday to Chinese weekday in meal_menu, MealBuilder
const chineseWeekKeyPair = {
    'monday': '星期一',
    'tuesday': '星期二',
    'wednesday': '星期三',
    'thursday': '星期四',
    'friday': '星期五',
    'saturday': '星期六',
};

const MealsSelected = (props) => {
    const classes = userStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState(new Set());

    // For step button click
    const handleStep = (step) => {
        setActiveStep(step);
    };

    // For reset full form
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    // For handle confirm button click
    const handleCompleted = () => {
        const newCompleted = new Set(completed);
        newCompleted.add(activeStep);
        setCompleted(newCompleted);
        // Handle Next?
        handleNext()
    };

    const isCompleted = (step) => {
        return completed.has(step);
    };

    // Change current step to next step
    const handleNext = () => {
        console.log('To be done');
    };

    const handleCancelled = () => {
        const newCompleted = new Set(completed);
        newCompleted.delete(activeStep);
        setCompleted(newCompleted);
    };

    // CAUTION: BrowserRouter should put in upper level,
    // full url should be:
    // www.ct-catering.com.hk/{UUID of user}/menu/{UUID of weekly menu}?weekday=wednesday
    // The query part is being used by WeekdaySelected component

    // console.log(props.meals, props.menu);

    return (
        <div className={classes.Root}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                {props.menu.map((item, index) => {

                    return (
                        <Step key={'step_' + index}>
                            <StepButton onClick={() => handleStep(index)} completed={isCompleted(index)}>
                                {/*<NavLink to={'/menu/' + index + '?weekday=' + label}>*/}
                                {chineseWeekKeyPair[item.weekday]}
                            </StepButton>

                        </Step>
                    );
                })}
            </Stepper>

            <WeekdaySelected menu={props.menu[activeStep]} meals={props.meals[activeStep]}
                             selectedHandler={props.handleSelected}
                             completedHandler={handleCompleted} // Handler Completed UI state
                             cancelHandler={handleCancelled} // Handler Completed cancel UI state
                             cancelClicked={props.cancelClicked}/>

        </div>
    );
};

export default MealsSelected;


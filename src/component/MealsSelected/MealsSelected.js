import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WeekdaySelected from '../MealsSelected/WeekdaySelected/WeekdaySelected'

const userStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const meal_menu = {
    'monday': {
        lunch: {A: 'Mon A', B: 'Mon B', C: 'Mon C', soup: 'Mon S'},
        dinner: {A: 'Mon DA', B: 'Mon DB', C: 'Mon DC', soup: 'Mon DS'}
    },
    'tuesday': {
        lunch: {A: 'Tue A', B: 'Tue B', C: 'Tue C', soup: 'Tue S'},
        dinner: {A: 'Tue DA', B: 'Tue DB', C: 'Tue DC', soup: 'Tue DS'}
    },
    'wednesday': {
        lunch: {A: 'Mon A', B: 'Mon B', C: 'Mon C', soup: 'Mon S'},
        dinner: {A: 'Mon DA', B: 'Mon DB', C: 'Mon DC', soup: 'Mon DS'}
    },
    'thursday': {
        lunch: {A: 'Tue A', B: 'Tue B', C: 'Tue C', soup: 'Tue S'},
        dinner: {A: 'Tue DA', B: 'Tue DB', C: 'Tue DC', soup: 'Tue DS'}
    },
    'friday': {
        lunch: {A: 'Mon A', B: 'Mon B', C: 'Mon C', soup: 'Mon S'},
        dinner: {A: 'Mon DA', B: 'Mon DB', C: 'Mon DC', soup: 'Mon DS'}
    },
    'saturday': {
        lunch: {A: 'Tue A', B: 'Tue B', C: 'Tue C', soup: 'Tue S'},
        dinner: {A: 'Tue DA', B: 'Tue DB', C: 'Tue DC', soup: 'Tue DS'}
    }
};


const MealsSelected = (props) => {
    const classes = userStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    console.log(props.meals);
    return (

        Object.keys(props.meals).map((weekDay, index) => {
                return (
                    <div className={classes.root} key={'panel' + weekDay}>
                        <ExpansionPanel expanded={expanded === 'panel' + weekDay}
                                        onChange={handleChange('panel' + weekDay)}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1bh-content"
                                                   id="panel1bh-header">
                                <Typography className={classes.heading}>27／2 - {weekDay}</Typography>
                                <Typography className={classes.secondaryHeading}>
                                    午餐: {props.meals[weekDay].lunch}<br/>
                                    晚餐: {props.meals[weekDay].dinner}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <WeekdaySelected menu={meal_menu[weekDay]} selectedHandler={props.handleSelected}/>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>);
            }
        ));
};

export default MealsSelected;


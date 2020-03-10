import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WeekdaySelected from '../MealsSelected/WeekdaySelected/WeekdaySelected'

import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

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


const MealsSelected = (props) => {
    const classes = userStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // console.log(props.meals);
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
                                    午餐: {props.meals[weekDay].lunch == null ? null : props.meals[weekDay].lunch + (props.menu[weekDay].lunch_soup === undefined ? '' : ' + ' + props.menu[weekDay].lunch_soup)}<br/>
                                    晚餐: {props.meals[weekDay].dinner == null ? null : props.meals[weekDay].dinner + (props.menu[weekDay].dinner_soup === undefined ? '' : ' + ' + props.menu[weekDay].dinner_soup)}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <WeekdaySelected meals={props.meals[weekDay]} menu={props.menu[weekDay]} selectedHandler={props.handleSelected}
                                                     weekday={weekDay}/>
                                </Typography>
                            </ExpansionPanelDetails>
                            <Divider/>
                            <ExpansionPanelActions>
                                <Button onClick={() => props.cancelClicked(weekDay)}  size="medium" variant="contained" color="secondary">取消/重新簡過</Button>
                            </ExpansionPanelActions>
                        </ExpansionPanel>
                    </div>);
            }
        ));
};

export default MealsSelected;


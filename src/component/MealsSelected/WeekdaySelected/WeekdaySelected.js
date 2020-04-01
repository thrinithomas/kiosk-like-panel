import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import {red} from "@material-ui/core/colors";
import cssClasses from "./WeekdaySelected.css"

const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    }
}));

const WeekdaySelected = (props) => {

    const classes = useStyles();
    const [value, setValue] = React.useState(false);

    return (
        <Card className={classes.root} style={{margin: "10px"}}>

            <CardContent>
                <div className={cssClasses.OrderSummary}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">午餐</FormLabel>
                        <RadioGroup aria-label="lunch" name="lunch">
                            {Object.keys(props.menu.lunch).map((item, index) => {
                                return <FormControlLabel
                                    key={props.menu.lunch[item] + index}
                                    checked={props.meals.lunch === props.menu.lunch[item]}
                                    onChange={() => {
                                        props.selectedHandler(props.menu.weekday, 'lunch', props.menu.lunch[item]);
                                        props.completedHandler(index);
                                    }}
                                    value={props.menu.lunch[item]}
                                    control={<Radio color="primary"/>}
                                    label={props.menu.lunch[item]}

                                />
                            })}
                        </RadioGroup>
                        {props.menu.lunch_soup}
                    </FormControl>
                </div>
                <br/>
                <div className={cssClasses.OrderSummary}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">晚餐</FormLabel>
                        <RadioGroup aria-label="dinner" name="dinner">
                            {Object.keys(props.menu.dinner).map((item, index) => {
                                return <FormControlLabel
                                    key={props.menu.dinner[item] + index}
                                    checked={props.meals.dinner === props.menu.dinner[item]}
                                    onChange={() => {
                                        props.selectedHandler(props.menu.weekday, 'dinner', props.menu.dinner[item]);
                                        props.completedHandler(index);
                                    }}
                                    value={props.menu.dinner[item]}
                                    control={<Radio color="primary"/>}
                                    label={props.menu.dinner[item]}

                                />
                            })}
                        </RadioGroup>
                        {props.menu.dinner_soup}
                    </FormControl>
                </div>
            </CardContent>

            <CardActions>
                <Button onClick={() => {
                    props.cancelClicked(props.menu.weekday);
                    props.cancelHandler();
                }} className={clsx(classes.expand)}
                        aria-label="submit" variant="contained"
                        color="secondary">取消/重新簡過</Button>

            </CardActions>
        </Card>
    );
};

export default WeekdaySelected;
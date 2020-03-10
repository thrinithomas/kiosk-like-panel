import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

const WeekdaySelected = (props) => {
    console.log(props.menu, props.meals);

    const classes = useStyles();
    const [value, setValue] = React.useState(false);


    return (
        <React.Fragment>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">午餐</FormLabel>
                <RadioGroup aria-label="lunch" name="lunch">
                    {Object.keys(props.menu.lunch).map((item, index) => {
                        return <FormControlLabel
                            // key={props.menu.lunch[item] + index}
                            checked={props.meals.lunch === props.menu.lunch[item]}
                            onChange={() => props.selectedHandler(props.weekday, 'lunch', props.menu.lunch[item])}
                            value={props.menu.lunch[item]}
                            control={<Radio color="primary"/>}
                            label={props.menu.lunch[item]}

                        />
                    })}
                </RadioGroup>
                {props.menu.lunch_soup}
            </FormControl>

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">晚餐</FormLabel>
                <RadioGroup aria-label="dinner" name="dinner">
                    {Object.keys(props.menu.dinner).map((item, index) => {
                        return <FormControlLabel
                            checked={props.meals.dinner === props.menu.dinner[item]}
                            onChange={() => props.selectedHandler(props.weekday, 'dinner', props.menu.dinner[item])}
                            value={props.menu.dinner[item]}
                            control={<Radio color="primary"/>}
                            label={props.menu.dinner[item]}

                        />
                    })}
                </RadioGroup>
                {props.menu.dinner_soup}
            </FormControl>
        </React.Fragment>
    );
};

export default WeekdaySelected;
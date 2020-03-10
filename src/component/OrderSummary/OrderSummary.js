import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    },
}));

const OrderSummary = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log(props.meals)

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        李
                    </Avatar>
                }

                title="李樹仁"
                subheader="2020年 2月"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {Object.keys(props.meals).map((weekDay, index) => {
                        return (
                            <>
                                {props.meals[weekDay].lunch !==null || props.meals[weekDay].dinner !==null ? <strong>{weekDay}</strong> : null}


                                {props.meals[weekDay].lunch == null ? null : <p>午餐: {props.meals[weekDay].lunch + (props.menu[weekDay].lunch_soup === undefined ? '' : ' + ' + props.menu[weekDay].lunch_soup)}</p>}
                                {props.meals[weekDay].dinner == null ? null : <p>晚餐: {props.meals[weekDay].dinner + (props.menu[weekDay].dinner_soup === undefined ? '' : ' + ' + props.menu[weekDay].dinner_soup)}</p>}


                            </>
                        );
                    })}

                    <strong>總數: $ {props.totalPrice}</strong>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>

                <Button
                    className={clsx(classes.expand)}
                    aria-label="submit" variant="contained" color="primary">
                    提交
                </Button>
            </CardActions>

        </Card>
    );
}

export default OrderSummary;
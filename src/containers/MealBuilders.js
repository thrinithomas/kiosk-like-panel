import React, {Component} from 'react'
import MealSelected from '../component/MealsSelected/MealsSelected'
import BuildControls from '../component/BuildControls/BuildControls'

class MealBuilders extends Component {
    state = {
        meals: {
            monday: {
                lunch: "", dinner: ""
            },
            tuesday: {
                lunch: "", dinner: ""
            },
            wednesday: {
                lunch: "", dinner: ""
            },
            thursday: {
                lunch: "", dinner: ""
            },
            friday: {
                lunch: "", dinner: ""
            },
            saturday: {
                lunch: "", dinner: ""
            },
        },
        totalPrice: 0
    };

    handleSelected = (weekday, meal, value) => {
        const updateItem = this.state.meals[weekday][meal];
        // const updateValue = value;
        const updatedMeal = {
            ...this.state.meals
        };
        updatedMeal[weekday][meal] = value;

        this.setState({meals: updatedMeal});

        console.log(this.state.meals)
    };

    render() {
        return (
            <React.Fragment>
                <MealSelected meals={this.state.meals} handleSelected={this.handleSelected}/>
                {/*<BuildControls itemSelected={this.handleSelected} selected={this.state.meals}/>*/}
            </React.Fragment>
        );
    }
}

export default MealBuilders;
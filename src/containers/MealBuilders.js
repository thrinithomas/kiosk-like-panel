import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MealSelected from '../component/MealsSelected/MealsSelected'
import OrderSummary from "../component/OrderSummary/OrderSummary";

const meal_menu = {
    'monday': {
        lunch: {A: '蜜豆炒雞球', B: '紅腰豆燴豬柳(▲少紅腰豆)', C: '珍珠筍燴生根'},
        lunch_soup: '金針黃豆老黃瓜瘦肉湯*',
        dinner: {A: '薑蔥火腿蒸魚柳', B: '西芹炒肉片', C: '雜菜煮粉絲'},
        dinner_soup: '腐竹白果豬肚湯*'
    },
    'tuesday': {
        lunch: {A: '粟米斑塊#*', B: '麻婆豆腐', C: '田園五彩素雞'},
        lunch_soup: '花生眉豆鱆魚排骨湯*',
        dinner: {A: '合掌瓜煮豬扒', B: '葡國雞(免椰汁)#', C: '涼瓜炒蛋'},
        dinner_soup: '陳腎節瓜瘦肉湯*'
    },
    'wednesday': {
        lunch: {A: '紅酒燴牛尾/薯仔紅蘿蔔炆肉片(*少薯仔)(DCC/kc)', B: '椒絲南瓜蒸雞翼(去邊皮)#', C: '本菇雲耳枸杞燴勝瓜'},
        lunch_soup: '芫茜魚片湯*',
        dinner: {A: '香妃雞(去皮)', B: '粟米蒸肉餅', C: '鮮茄玉子豆腐'},
        dinner_soup: '佛手蘋果豬展湯*'
    },
    'thursday': {
        lunch: {A: '蒸時魚/蒸魚柳(DCC/kc)', B: '紅棗雪耳蒸肉丁', C: '茄汁豆蒸豆腐'},
        lunch_soup: '猴頭菇茨實瘦肉湯*',
        dinner: {A: '蘿蔔炆魚崧', B: '腰果百合炒雞丁(▲少腰果)', C: '豆豉炆南瓜(*)@'},
        dinner_soup: '冬瓜粟米雞湯(隔油)(*)',
    },
    'friday': {
        lunch: {A: '蟲草花蒸雞', B: '瑤柱粉絲蒸水蛋(▲少瑤柱)', C: '黃椒腰果炒淮山(▲少腰果)'},
        lunch_soup: '雙杏西洋菜瘦肉湯*',
        dinner: {A: '四季豆甘筍炒雞柳', B: '枝竹冬瓜炆梅肉粒', C: '淡梅菜蒸茄子# @'},
        dinner_soup: '牛蒡赤小豆瘦肉湯*'
    },
    'saturday': {
        lunch: {A: '雞扒燴冬菇(▲少菇)', B: '南瓜蒸肉餅', C: '甘筍竹笙煮麵根'},
        dinner: {A: '豉汁蒸瘦排骨# @', B: '海皇蒸蛋', C: '草菇扒珍珠荀(▲少菇)'},
    }
};

class MealBuilders extends Component {
    state = {
        meals: {
            monday: {
                lunch: null, dinner: null
            },
            tuesday: {
                lunch: null, dinner: null
            },
            wednesday: {
                lunch: null, dinner: null
            },
            thursday: {
                lunch: null, dinner: null
            },
            friday: {
                lunch: null, dinner: null
            },
            saturday: {
                lunch: null, dinner: null
            },
        },
        totalPrice: 0
    };

    handleSelected = (weekday, meal, value) => {
        // const updateItem = this.state.meals[weekday][meal];
        // const updateValue = value;
        const updatedMeal = {
            ...this.state.meals
        };
        updatedMeal[weekday][meal] = value;

        this.setState({meals: updatedMeal});
        this.updateState();
    };

    cancelClicked = (weekday) => {
        const updatedMeal = {
            ...this.state.meals
        };
        updatedMeal[weekday].lunch = null;
        updatedMeal[weekday].dinner = null;

        this.setState({meals: updatedMeal});
        this.updateState();
    }

    updateState() {

        const count = Object.keys(this.state.meals).map((item, index) => {
            return this.state.meals[item];
        }).map(item => {
            return (item.lunch == null ? 0 : 1) + (item.dinner == null ? 0 : 1);
        }).reduce((a, b) => a + b, 0)

        this.setState({totalPrice: count * 18})
    }

    // Make a cardview as a sidebar
    render() {
        console.log(this.state);

        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={8} spacing={3}>
                        <MealSelected meals={this.state.meals} menu={meal_menu} handleSelected={this.handleSelected}
                                      cancelClicked={this.cancelClicked}/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <OrderSummary meals={this.state.meals} menu={meal_menu} totalPrice={this.state.totalPrice}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default MealBuilders;
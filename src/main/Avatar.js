import React, {Component} from 'react';
import { Container, Input, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import '../assets/css/avatar.css';
import '../assets/css/login.css';
import Female from '../assets/img/female.jpg';
import Male from '../assets/img/male_jeans.gif';
import Restr from '../assets/img/rest.png';
import Bottle from '../assets/img/water.svg';

// import api
/*
import {
    API_SERVER_URL,
    GET_INFO,
    SUBMIT_CASH,
    TOPUP_CASH,
    SUBMIT_EXERCISE,
    SUBMIT_FOOD,
    SUBMIT_WATER,
    LOGOUT
} from '../api';
*/

// import components
import Health from './components/Health';

import CashModal from './components/CashModal';
import ExerciseModal from './components/ExerciseModal';
import FoodModal from './components/FoodModal';
import SleepModal from './components/SleepModal';
import WaterModal from './components/WaterModal';

class Avatar extends Component {
    constructor(props){
        super(props);
        this.showCashModal = this.showCashModal.bind(this);
        //this.submitCash = this.submitCash.bind(this);
        //this.topup = this.topup.bind(this);

        this.showExerciseModal = this.showExerciseModal.bind(this);
        //this.submitExercise = this.submitExercise.bind(this);    

        this.showFoodModal = this.showFoodModal.bind(this);
        //this.submitFood = this.submitFood.bind(this); 

        this.showWaterModal = this.showWaterModal.bind(this);
        //this.submitWater = this.submitWater.bind(this);
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);

        this.showSleepModal = this.showSleepModal.bind(this);
        this.setTime1 = this.setTime1.bind(this);
        this.setTime2 = this.setTime2.bind(this);

        this.getGender = this.getGender.bind(this);

        this.toDiscount = this.toDiscount.bind(this);

        this.state = {
            name: this.props.location.state.name,
            gender: this.props.location.state.gender,
            time: this.getDate(),
            cashShow: false,
            transaction: '',
            transactionValue: '',
            transactionType: '',
            exerciseShow: false,
            exerciseType: '',
            exerciseInterval: '',
            foodShow: false,
            foodType: '',
            foodQuantity: '',
            waterShow: false,
            
            time1: '',
            time2: '',
            sleepShow: false
        }
        //this.updateTransactionValue = this.updateTransactionValue.bind(this);        
    }
    toDiscount(){
        this.props.history.push({
            pathname: '/discount', 
            state: { name: this.state.name }
        });
    }

    getGender(g){
        if (g === "male"){
            return Male;
        } else if (g === "female"){
            return Female;
        }
    }

    /*
    // submit transaction
    async submitCash(){
        try {
            let submission = {
                name: this.state.name,
                cash: this.state.cash,
                transaction: this.state.transaction,
                value: this.state.transactionValue
            }
            let result = await this.callPostAPI(SUBMIT_CASH, submission);
            if (result){
                console.log(result);
                this.setState({cash: result.cash, cashShow: false});
            } else {
                this.setState({transaction: "error try again"});
            }            
        } catch (err) {
            console.log(err);
        }

    }

    async topup(){
        try {
            let submission = {
                name: this.state.name,
                cash: this.state.cash,
                transaction: this.state.transaction,
                value: this.state.transactionValue
            }
            let result = await this.callPostAPI(TOPUP_CASH, submission);
            if (result){
                console.log(result);
                this.setState({cash: result.cash, cashShow: false});
            } else {
                this.setState({transaction: "error try again"});
            }            
        } catch (err) {
            console.log(err);
        }

    }    
                                                                                // transaction
    */                                                                                
    showCashModal(){
        this.setState({cashShow: !this.state.cashShow});
    }                                                                                
    updateTransaction(event){
        this.setState({transaction: event.target.value});
        console.log(this.state);
    }
    updateTransactionValue(event){
        const re = /[+-]?([0-9]*[.])?[0-9]+/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({transactionValue: event.target.value})
         }
    } 
                                                                                // exercise
    showExerciseModal(){
        this.setState({exerciseShow: !this.state.exerciseShow});
    }                                                                                  
    updateExerciseType(event){
        this.setState({exerciseType: event.target.value});
        console.log(this.state);
    }
    updateExerciseInterval(event){
        const re = /[+-]?([0-9]*[.]{0,1})?[0-9]+/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({exerciseInterval: event.target.value})
         }
    }
    /*
    async submitExercise(){
        try {
            let submission = {
                name: this.state.name,
                exercise: this.state.exercise,
                type: this.state.exerciseType,
                interval: this.state.exerciseInterval,
                health: this.state.health
            }           
            console.log(submission); 
            let result = await this.callPostAPI(SUBMIT_EXERCISE, submission);
            console.log(result);
            if (result){
                console.log(result);
                this.setState({health: result.health ,exercise: result.exercise, exerciseShow: false});
            }
        } catch (err) {
            console.log(err);
        }
    }     
    */                                                                        // food
    showFoodModal(){
        this.setState({foodShow: !this.state.foodShow});
    }                                                                                 
    updateFoodType(event){
        this.setState({foodType: event.target.value});
    }
    updateFoodQuantity(event){
        const re = /[+-]?([0-9]*[.]{0,1})?[0-9]+/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({foodQuantity : event.target.value})
         }
    } 
    /*
    async submitFood(){
        console.log(this.state);
        let submission = {
            name: this.state.name,
            food: this.state.foodType,
            qty: this.state.foodQuantity,
            totalCal: this.state.food
        }
        try {
            let result = await this.callPostAPI(SUBMIT_FOOD, submission);
            if (result){
                console.log(result);
                if (result.health === 'unhealthy'){
                    this.setState({food:result.food, foodShow: false, health:this.state.health-1});
                } else if (result.health === 'healthy'){
                    this.setState({food:result.food, foodShow: false, health:this.state.health+1});
                }
            } else {
                console.log('no result');
            }
        } catch (err) {
            console.log(err);
        }
    }
    */
                                                                                                                 // watere

    showWaterModal(){
        this.setState({waterShow: !this.state.waterShow});
    }
    /*
    async submitWater(){
        let submission = {
            name: this.state.name,
            water1: this.state.water1,
            water2: this.state.water2,
            health: this.state.health
        }
        let result = await this.callPostAPI(SUBMIT_WATER, submission);

        if (result){
            console.log(result);
            this.setState({health: result.health, waterShow: false, water1: result.water1, water2: result.water2});
        }
    }
    */


    click1(e){
        if (this.state.water1 == null){
            this.setState({water1: 0})
        } else {
            this.setState({water1: this.state.water1-1})
        }

    }
    click2(e){
        if (this.state.water2 == null){
            this.setState({water2: 0})
        } else {
            this.setState({water2: this.state.water2-1})
        }
    }
                                                                                                    // sleep

    showSleepModal(){
        this.setState({sleepShow: !this.state.sleepShow});
    }
    setTime1(){
        let d = new Date();
        let h = `0${d.getHours()}`.slice(-2);
        let m = `0${d.getMinutes()}`.slice(-2);
        let s = `0${d.getSeconds()}`.slice(-2);
        let time =  `${h}:${m}:${s}`;
        this.setState({time1: time});
    }
    setTime2(){
        let d = new Date();
        let h = `0${d.getHours()}`.slice(-2);
        let m = `0${d.getMinutes()}`.slice(-2);
        let s = `0${d.getSeconds()}`.slice(-2);
        let time =  `${h}:${m}:${s}`;
        this.setState({time2: time});
    }
                                                                            // time
    getDate(){
        var d = new Date();
        var h = `0${d.getHours()}`.slice(-2);
        var m = `0${d.getMinutes()}`.slice(-2);
        var s = `0${d.getSeconds()}`.slice(-2);
        return `${h}:${m}:${s}`

    }    
    async componentDidMount() {
        console.log(this.state)
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        // didMount get info here
        //let result = await this.callPostAPI(GET_INFO, {name: this.state.name});
        // temporary result
        var result = {
            cash: 1000,
            gender: "male",
            info: {
                sleep: 10,
                food: 10,
                water1: 4,
                water2: 4,
                exercise: 10,
                health: 5
            }
        }

        
        this.setState({
            cash: result.cash,
            gender: result.gender,
            sleep: result.info.sleep,
            food: result.info.food,
            water1: result.info.water1,
            water2: result.info.water2,
            exercise: result.info.exercise,
            health: result.info.health,
        });

        console.log('This state is:');
        console.log(this.state);
      }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: this.getDate()
        });
    }
    /*                                                             // ggeneric post function
    async callPostAPI(api, body){
        let result = {};
        
        await fetch(API_SERVER_URL + api,{
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            result = responseJson;
        })

        return result;
    }
    */
    increaseHealth(){
        this.setState({health: this.state.health+1})
    }
    decreaseHealth(){
        this.setState({health: this.state.health-1})
    }
    async logout(){
        let submission = {
            name: this.state.name,
            health: this.state.health
        }
    this.props.history.push({
                        pathname: '/', 
                        state: { name: this.state.name }
                    });
        
        /*
        try {
            let result = await this.callPostAPI(LOGOUT, submission);
            if (result.message === "success"){
                this.props.history.push({
                    pathname: '/', 
                    state: { name: this.state.name }
                });
            } else {
                alert("Logout error");
            }
        } catch (err) {
            console.log(err);
        }
        */
    }

    render(){
        return (
            <div className="App">



                <Container fluid>      
                             
                    <div className="avatarContainer">   

                        <div className="standard">
                            <div style={{display:"flex", justifyContent:"space-between"}}> 
                                
                                <button  className="navButton" onClick={this.toDiscount}>$</button>

                            </div>

                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-12px"}}>
                                <p align="left">{this.state.name}</p>
                                <p align="right">{this.state.time}</p>
                            </div>   
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-15px"}}>
                                <span align="left"> </span>
                                <span align="right"><Health health={this.state.health}/></span>
                            </div>                                
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-12px"}}>
                                <span align="left"> </span>
                                <p align="right">${this.state.cash}</p>
                            </div>                                      
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <span align="left"> </span>
                                <Button onClick={this.showCashModal} className="addButton" align="right" style={{backgroundColor: "lawngreen"}}>ADD</Button>
                            </div>                                                              
                            



                            <img className="avatarLogo" 
                            src={this.getGender(this.state.gender)}
                            alt="" style={{height: "100px", marginTop: "0px", marginBottom: "20px"}}/>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                                <Button className="gridButton" align="left" onClick={this.showExerciseModal} style={{backgroundColor: "rgba(63, 252, 74, 1)"}}>
                            
                                    <p>Exercise</p><p>Total Minutes: {this.state.exercise}</p>
                               
                                </Button>
                                <Button className="gridButton" right="left" onClick={this.showFoodModal} style={{backgroundColor: "rgba(191, 251, 70, 1)"}}>
                                
                                    <p>Food</p><p>Calories in: {this.state.food}</p>        
                                
                                </Button>                            
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <Button className="gridButton" align="left" onClick={this.showSleepModal} style={{backgroundColor: "rgba(54, 141, 249, 1)"}}>
                                    <p>Sleep</p>
                                </Button>
                                
                                <Button className="gridButton" right="left" onClick={this.showWaterModal}  style={{backgroundColor: "#3ed8fb"}}>
                                    <p>Water</p><p>Drink More please!</p>
                                </Button>            
                            </div>                                               

                            <p>Drink 8 water of glass daily!</p>
                            <button onClick={this.logout.bind(this)} className="blueButton">Logout</button>
                        </div>        
                    </div>

                    <CashModal show={this.state.cashShow} onClose={this.showCashModal} handleSpend={this.submitCash} handleAdd={this.topup}>
                        <p>My Wallet</p>
                        <p style={{fontSize: "10px"}} align="left">Spending</p>
                        <Input align="left" fluid placeholder="E.g. Top up bus fare" type="text" value={this.state.transaction} onChange={this.updateTransaction.bind(this)}/>
                        <p style={{fontSize: "10px"}} align="left">Value $</p>
                        <Input align="left" fluid placeholder="$" type="text" value={this.state.transactionValue} onChange={this.updateTransactionValue.bind(this)}/>
                    </CashModal>                 

                    <ExerciseModal show={this.state.exerciseShow} onClose={this.showExerciseModal} handleAdd={this.submitExercise}>
                        <p>Lets Get Physical</p>
                        <p style={{fontSize: "10px"}} align="left">Activity</p>
                        <Input align="left" fluid placeholder=" e.g. running" type="text" value={this.state.exerciseType} onChange={this.updateExerciseType.bind(this)}/>
                        <p style={{fontSize: "10px"}} align="left">Time taken:</p>
                        <Input align="left" fluid placeholder="In minutes" type="text" value={this.state.exerciseInterval} onChange={this.updateExerciseInterval.bind(this)}/>
                    </ExerciseModal>    

                    <FoodModal show={this.state.foodShow} onClose={this.showFoodModal} handleAdd={this.submitFood}>
                        <p>Eating Place</p>
                        <p style={{fontSize: "10px"}} align="left">Food: </p>
                        <Input align="left" fluid placeholder=" burger" type="text" value={this.state.foodType} onChange={this.updateFoodType.bind(this)}/>
                        <p style={{fontSize: "10px"}} align="left">Quantity</p>
                        <Input align="left" fluid type="text" value={this.state.foodQuantity} onChange={this.updateFoodQuantity.bind(this)}/>
                        <img className="avatarLogo" src={Restr} alt="" style={{height: "70px", position:"absolute", right:"25px", top:"100px"}}/>
                    </FoodModal>    

                    <SleepModal show={this.state.sleepShow} onClose={this.showSleepModal} handleAdd={this.showSleepModal}>
                        <p>Electric Dreams</p>
                        <div style={{display: "flex", flexDirection:"row", marginBottom:"20px" }}>

                            <button onClick={this.setTime1} className="timeButton" style={{fontSize: "12px", marginRight:"20px", width:"100px",height:"40px"}} align="left">Start:</button>

                            <input style={{backgroundColor:"white",width:"120px",height:"33px"}}></input>
                        </div>    

                        <div style={{display: "flex", flexDirection:"row" }}>

                            <button onClick={this.setTime2} className="timeButton" style={{fontSize: "12px", marginRight:"20px", width:"100px",height:"40px"}} align="left">End:</button>

                                <input style={{backgroundColor:"white",width:"120px",height:"33px"}}></input>
                        </div>                        
                    </SleepModal>                       

                    <WaterModal show={this.state.waterShow} onClose={this.showWaterModal} handleAdd={this.submitWater}>
                        <p>Water Cooler</p><p style={{fontSize:"10px", marginBottom: "20px"}}>Touch to drink</p>
                        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                        {[...Array(this.state.water1)].map((item, index) => {return <img src={Bottle} key={index} onClick={this.click1} alt=""  style={{height: "50px"}}/> })}
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                        {[...Array(this.state.water2)].map((item, index) => {return <img src={Bottle} key={index} onClick={this.click2}  alt=""  style={{height: "50px"}}/> })}
                        </div>                     
                    </WaterModal> 

                <div style={{ position: 'relative',marginTop: '-400px', marginRight: "700px"}}>
                    <button  className="navButton" onClick={this.increaseHealth.bind(this)}>+</button>
                    <button  className="navButton" onClick={this.decreaseHealth.bind(this)}>-</button> 
                </div>

                </Container>

            </div>
        )
    }    
}

export default Avatar;

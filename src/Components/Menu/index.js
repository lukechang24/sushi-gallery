import React, { Component } from "react"
import Tabletop from "tabletop"

import FreshRolls from "./FreshRolls"
import CookedRolls from "./CookedRolls"
import Sushi from "./Sushi"

import S from "./style"

class Menu extends Component {
    state = {
        currentTab: "Fresh Rolls",
        data: {}
    }
    componentDidMount() {
        Tabletop.init(
            {
                key: '1FrbltyDxYZzZ2AH90UZN91dCfjqS-fbHCfbf0vldBkE',
                callback: googleData => {
                    this.setState({
                        data: googleData
                    })
                    console.log("data", googleData)
                },
            }
        )
        this.addHover()
    }
    componentDidUpdate() {
        this.addHover()
    }
    addHover = () => {
        const rolls = document.querySelectorAll(".roll")
        rolls.forEach(roll => {
            roll.addEventListener("mouseover", () => {
                roll.classList.add("show")
            })
            roll.addEventListener("mouseleave", () => {
                roll.classList.remove("show")
            })
        })
    }
    changeTab = (e) => {
        this.setState({
            currentTab: e.target.innerText
        })
    }
    render() {
        return(
            <S.Container1>
                <S.TabContainer>
                    <S.Tab onClick={this.changeTab}>Fresh Rolls</S.Tab>
                    <S.Tab onClick={this.changeTab}>Cooked Rolls</S.Tab>
                    <S.Tab onClick={this.changeTab}>Sushi</S.Tab>
                    <S.Tab onClick={this.changeTab}>Sides</S.Tab>
                </S.TabContainer>
                <S.Title>{this.state.currentTab}</S.Title>
                {
                    this.state.currentTab === "Fresh Rolls" || this.state.currentTab === "Cooked Rolls"
                        ?
                            <S.Message>*hover to see more details</S.Message>
                        :
                            null
                }
                {
                    this.state.currentTab === "Fresh Rolls"
                        ?
                            <FreshRolls freshRolls={this.state.data.freshRolls}/>
                        :
                    this.state.currentTab === "Cooked Rolls"
                        ?
                            <CookedRolls cookedRolls={this.state.data.cookedRolls}/>
                        :
                            <Sushi />
                }
            </S.Container1>
        )
    }
}

export default Menu
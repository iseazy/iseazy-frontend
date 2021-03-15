import React, { useState, useEffect } from 'react'
import arrayCards from '../helpers/CardsData.js'

function Cards() {
    //recogemos la lista de cards
    let list = document.getElementsByClassName("card-item")

    const cardSelected = (card) => {

        for (let item in list) {
            if (item == card) {
                let element = list[item]
                return element.classList.add("selected");
            }
        }
    }
    const showCard = () => {

    }


    return (
        <ul className="card-list">
            {arrayCards?.map((item, index) => <li className={"card-item"} key={index} onClick={() => cardSelected(index)}><span className="span-number">{item.index}</span></li>)}
        </ul>
    );
}

export default Cards;

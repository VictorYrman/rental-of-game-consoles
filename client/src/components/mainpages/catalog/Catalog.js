import React from "react";

import "./catalog.css"

function Catalog() {
    return (
        <div class="wrapper">
        <div class="side-panel">
            <h2>Каталог</h2>
            <p>VR-очки<span>32</span></p>
            <p>Стационарные приставки<span>52</span></p>
            <p>Портативные приставки<span>17</span></p>
        </div>
        <div catalog-and-filters>
            <input class="search-bar" type="text"></input>
            <div class="upper-buttons">
                <select name="" id="">
                    <option value="">Дата аренды</option>
                </select>
                <select name="" id="">
                    <option value="">Сортировка</option>
                </select>
                <select name="" id="">
                    <option value="">Фильтры</option>
                </select>
            </div>
            <div class="bottom-buttons">
                <button>Проверенный прокат</button>
                <button>Без залога</button>
                <button>Мнгновенное подтверждение</button>
                <button>Тест-драйв</button>
                <button>Доставка</button>
            </div>
            <div>

            </div>
            <div class="catalog-wrapper">
                <div>1</div>
                <div>212313</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </div>
            <div class="page-navigation">
                <button>&lt;</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>&gt</button>
            </div>

            <div class="card">
                <img src="images/Rectangle 19.png" alt=""></img>
                <p><span class="name">Steam Deck</span><span class="price">30 BYN</span></p>
                <button class="rent-btn">Аренда</button>
                <button class="more-btn">Узнать больше</button>
            </div>
        </div>
    </div>
    )
}  

export default Catalog
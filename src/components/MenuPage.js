import { useState } from "react";
// import XLSX from 'xlsx'; didn't worked
// import * as XLSX from "xlsx";
import Images from "./Images";
export default function MenuPage() {
    const sortButton = (type) => {
        if (type === 'sort') {
            const op1 = document.getElementById("sortby");
            const op2 = document.getElementById("filterby");
            if (op1.classList.contains('hidden')) {
                op1.classList.remove('hidden');
                op1.style.animation = 'right_appear 1s';

                if (!op2.classList.contains('hidden')) {
                    op2.classList.add('hidden');
                }
            }
            else {
                op1.style.animation = '';
                setTimeout(() => { op1.style.animation = 'right_appear 1s reverse'; }, 1);
                setTimeout(() => { op1.classList.add('hidden'); }, 1000);
            }
        }
        else {
            const op1 = document.getElementById("sortby");
            const op2 = document.getElementById("filterby");
            if (op2.classList.contains('hidden')) {
                op2.classList.remove('hidden');
                op2.style.animation = 'right_appear 1s';
                if (!op1.classList.contains('hidden')) {
                    op1.classList.add('hidden');
                }
            }
            else {
                op2.style.animation = '';
                setTimeout(() => { op2.style.animation = 'right_appear 1s reverse'; }, 1);
                setTimeout(() => { op2.classList.add('hidden'); }, 1000);
            }
        }
    }
    const [filteron, setFilteron] = useState(false);
    const [filterExit, setFilterExit] = useState();
    const [sorton, setSorton] = useState(false);
    const [sortExit, setSortExit] = useState();

    // const wb = XLSX.read("src/components/DataBase.xlsx");
    //     const wsname = wb.SheetNames[0];
    //     const ws = wb.Sheets[wsname];
    //     const arrItems = XLSX.utils.sheet_to_json(ws);
    //     console.log(wb);
    //     console.log(arrItems);
    const arrItems = [
        { ItemName: 'Banana shake', ItemCost: 80, ItemType: 'Shakes', ItemRating: 3.1, SoldRate: 23 },
        { ItemName: 'Chocolate cake', ItemCost: 220, ItemType: 'Cakes', ItemRating: 4.5, SoldRate: 43 },
        { ItemName: 'Chocolate shake', ItemCost: 90, ItemType: 'Shakes', ItemRating: 3.3, SoldRate: 23 },
        { ItemName: 'Coconut cake', ItemCost: 120, ItemType: 'Cakes', ItemRating: 3.4, SoldRate: 7 },
        { ItemName: 'Coffee cake', ItemCost: 250, ItemType: 'Cakes', ItemRating: 3.5, SoldRate: 4 },
        { ItemName: 'Coffee shake', ItemCost: 90, ItemType: 'Shakes', ItemRating: 3.6, SoldRate: 7 },
        { ItemName: 'Cookies and cream shake', ItemCost: 150, ItemType: 'Shakes', ItemRating: 3.7, SoldRate: 10 },
        { ItemName: 'Lemon cake', ItemCost: 150, ItemType: 'Cakes', ItemRating: 3.8, SoldRate: 3 },
        { ItemName: 'Rainbow cake', ItemCost: 190, ItemType: 'Cakes', ItemRating: 3.9, SoldRate: 6 },
        { ItemName: 'Red velvet cake', ItemCost: 220, ItemType: 'Cakes', ItemRating: 4, SoldRate: 24 },
        { ItemName: 'Strawberry cake', ItemCost: 200, ItemType: 'Cakes', ItemRating: 4.1, SoldRate: 19 },
        { ItemName: 'Strawberry shake', ItemCost: 100, ItemType: 'Shakes', ItemRating: 4.2, SoldRate: 25 },
        { ItemName: 'Vanilla cake', ItemCost: 170, ItemType: 'Cakes', ItemRating: 4.3, SoldRate: 15 },
        { ItemName: 'Vanilla shake', ItemCost: 110, ItemType: 'Shakes', ItemRating: 4.4, SoldRate: 8 },
    ];
    const [F, setF] = useState(arrItems);
    const arrItemsCakes = arrItems.filter((a) => { return a.ItemType === 'Cakes'; })
    const arrItemsShakes = arrItems.filter((a) => { return a.ItemType === 'Shakes'; })
    const arrItemsFilter = (FilterName) => {
        setFilterExit(FilterName);
        if (FilterName === 'Cakes') { setF(arrItemsCakes) }
        else if (FilterName === 'Shakes') { setF(arrItemsShakes) }
        else { setF(arrItems) };
    }
    const [S, setS] = useState(arrItems);
    const SortbyBar = (SortName) => {
        setSortExit(SortName);
        if (SortName === 'Price: Low to High') { setS(F.sort(function (a, b) { return a.ItemCost - b.ItemCost; })); }
        if (SortName === 'Price: High to Low') { setS(F.sort(function (a, b) { return b.ItemCost - a.ItemCost; })); }
        if (SortName === 'Top Rating') { setS(F.sort(function (a, b) { return b.ItemRating - a.ItemRating; })); }
        if (SortName === 'Featured') { setS(F.sort(function (a, b) { return b.SoldRate - a.SoldRate; })); }
    }
    return (
        <>
            <div className="w-full h-16 relative">
                <div className="cursor-pointer float-right h-12 w-32 bg-blue-500 border-4 rounded-full mx-1 md:mx-4 my-1 flex justify-evenly items-center p-3 md:hover:scale-125 duration-500"
                    onClick={() => { sortButton('sort') }}
                >
                    <p>Sort By</p><img className="h-full" src="./images/sort.png" alt="" />
                </div>
                <div className="cursor-pointer float-right h-12 w-32 bg-blue-500 border-4 rounded-full mx-1 md:mx-4 my-1 flex justify-evenly items-center p-3 md:hover:scale-125 duration-500"
                    onClick={() => { sortButton('filter') }}
                >
                    <p>Filter By</p><img className="h-full" src="./images/filter.png" alt="" />
                </div>
                {filteron && <div className="cursor-pointer float-right h-12 w-32 bg-white rounded-full mx-1 md:mx-4 my-1 flex justify-evenly items-center p-3 duration-500"
                    onClick={() => { setFilteron(false); setF(arrItems) }}
                >
                    <p>{filterExit}</p><img className="h-full" src="./images/cross.png" alt="" />
                </div>}
                {sorton && <div className="cursor-pointer float-right h-12 w-32 bg-white rounded-full mx-1 md:mx-4 my-1 flex justify-evenly items-center p-3 duration-500"
                    onClick={() => { setSorton(false); setS(arrItems) }}
                >
                    <p>{sortExit}</p><img className="h-full" src="./images/cross.png" alt="" />
                </div>}

                <div className="hidden" id="none"></div>
                <ul id="sortby"
                    className="hidden z-20 absolute border-white border-2 w-48 h-40 p-4 rounded-3xl right-4 top-16 bg-blue-200">
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { SortbyBar(e.currentTarget.innerHTML); setSorton(true) }}
                    >
                        Price: Low to High</li>
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { SortbyBar(e.currentTarget.innerHTML); setSorton(true) }}
                    >
                        Price: High to Low</li>
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { SortbyBar(e.currentTarget.innerHTML); setSorton(true) }}
                    >
                        Featured</li>
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { SortbyBar(e.currentTarget.innerHTML); setSorton(true) }}
                    >
                        Top Rating</li>
                </ul>
                <ul id="filterby"
                    className="hidden z-20 absolute border-white border-2 w-48 h-40 p-4 rounded-3xl right-4 top-16 bg-blue-200">
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { arrItemsFilter(e.currentTarget.innerHTML); setFilteron(true); }}
                    >
                        Cakes</li>
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { arrItemsFilter(e.currentTarget.innerHTML); setFilteron(true); }}
                    >
                        Paistries</li>
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { arrItemsFilter(e.currentTarget.innerHTML); setFilteron(true); }}
                    >
                        Shakes</li>
                    <li className="cursor-pointer text-center hover:bg-white hover:scale-y-125 duration-500 rounded-full my-2"
                        onClick={(e) => { arrItemsFilter(e.currentTarget.innerHTML); setFilteron(true); }}
                    >
                        Edibles</li>
                </ul>
            </div>

            <h2 className="font-cur text-3xl text-center m-3">MenuBar</h2>
            <div id="menubox" className="w-full h-fit flex justify-around flex-wrap">
                {F.map((i, j) => {
                    for (let k in F) { var ordernum = (S[k].ItemName === i.ItemName) ? k : 1; }
                    return (
                        <div key={j} id={`${j}`} className={`card_box group`} style={{ order: ordernum }}>
                            <img className='card_img' src={Images[i.ItemName]} alt="" />
                            <div className='card_info'>
                                <p className='card_name'>{i.ItemName}</p>
                                <p className='card_price'>₹ {i.ItemCost}</p>
                                <button className='add_cart'>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}
/*
 * JEEWAN JOSHI - notes here => {
 * .map() <--- returns an array
 * .map(function(i,j) {}) <--- returns an array items where i = item and j = index
 * .map(function(i,j) {return()}) <--- returns an array items where i = item and j = index and return = data to be displayed
 * .map(function(i,j) {return(<div></div>)}) <--- with the help of div tag, you can return data in json form to display it or do functions with it.
 * .map((i,j)=> {return(<div></div>)}) <--- with the help of div tag, you can return data in json form to display it or do functions with it.
 * .map((i,j)=>(<div></div>)) <--- to return data in json form to display it and not to do functions with it.
 * stateName?.map((i,j)=>(<div></div>)) <--- to return data in json form to display it and not to do functions with it.
* [
    data01:[
        {
        _id: '1',
        name: 'Pizza',
        price: '200',
        image: './images/pizza.jpg',
        category: 'Pizza',
        rating: '4.5',
        },
        {
        _id: '2',
        name: 'Burger',
        price: '150',
        image: './images/burger.jpg',
        category: 'Pizza',
        rating: '4.5',
        },
        {
        _id: '3',
        name: 'Sandwich',
        price: '100',
        image: './images/sandwich.jpg',
        category: 'Pizza',
        rating: '4.5',
        }
    ],
    data01:[
        {
        _id: '1',
        name: 'Pizza',
        price: '200',
        image: './images/pizza.jpg',
        category: 'Pizza',
        rating: '4.5',
        },
        {
        _id: '2',
        name: 'Burger',
        price: '150',
        image: './images/burger.jpg',
        category: 'Pizza',
        rating: '4.5',
        },
        {
        _id: '3',
        name: 'Sandwich',
        price: '100',
        image: './images/sandwich.jpg',
        category: 'Pizza',
        rating: '4.5',
        }
    ],
    data01:[
        {
        _id: '1',
        name: 'Pizza',
        price: '200',
        image: './images/pizza.jpg',
        category: 'Pizza',
        rating: '4.5',
        },
        {
        _id: '2',
        name: 'Burger',
        price: '150',
        image: './images/burger.jpg',
        category: 'Pizza',
        rating: '4.5',
        },
        {
        _id: '3',
        name: 'Sandwich',
        price: '100',
        image: './images/sandwich.jpg',
        category: 'Pizza',
        rating: '4.5',
        }
    ],

] 

for such condition we nests the .map function inside the .map function 
example ----> stateName?.map((i,j)=>{i?.map((k,l)=>(<div></div>))})
how to prevent data from state to be lost when we will call the function again to load more data.
setData(data); [xyz]
// page 1,2,3,4,5
2
setData(data);[xyz,abc]
setData((prev)=>[...Data,data]); // prev function is used to prevent data from being lost. error: Data is not itrable. <--- should be array [] 
now data is [xyz,abc].
}
*/
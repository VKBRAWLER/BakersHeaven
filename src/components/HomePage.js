import React, { useEffect } from 'react'
import { Link} from 'react-router-dom';
export default function HomePage() {

    useEffect(() => {
        const interval = setInterval(() => {
            const slide_box = document.getElementById('slide_box');
            const oldimg = slide_box.lastElementChild;
            const outint = ((parseInt(oldimg.id) === 5) ? 1 : parseInt(oldimg.id) + 1)
            const len = (document.getElementById('11by12').offsetWidth);
            const Sliding = [{ transform: "translate(0px)" }, { transform: `translate(-${len}px)` },];
            const Timing = { duration: 1000, iterations: 1, };
            let img = document.createElement('img');
            img.id = `${outint}`;
            img.className = "w-full min-w-full max-w-md max-h-md duration-1000 enlarge";
            img.src = `./images/temp (${outint}).jpg`;
            slide_box.appendChild(img);
            slide_box.animate(Sliding, Timing);
            document.querySelectorAll(".widthcover")[outint - 1].style.display = '';
            setTimeout(() => {
                document.querySelectorAll(".widthcover")[outint - 1].style.display = 'none';
            }, 1);
            setTimeout(() => {
                slide_box.removeChild(oldimg);
            }, 1000);
            document.querySelectorAll(".widthcover")[outint - 1].style.display = '';
            setTimeout(() => {
                document.querySelectorAll(".widthcover")[outint - 1].style.display = 'block';
            }, 1);
        }, 4000);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="w-full flex justify-evenly flex-wrap items-center" >
                <div id='11by12' className="w-11/12 rounded-3xl border-8 overflow-hidden border-white max-w-md max-h-md bg-blue-300 relative group">
                    <div id='slide_box' className="flex w-full max-w-md max-h-md">
                        <img id='1' className="w-full min-w-full max-w-md max-h-md duration-1000 enlarge" src="./images/temp (1).jpg" alt="img not found" />
                    </div>
                </div>
                <div className="sidebar overflow-hidden border-white max-w-md max-h-md xl:w-96 hidden xl:block">
                    <div className="ml-4 p-1 border-2 m-2 xl:w-88 h-24 rounded-r-full hover:scale-105 cursor-pointer overflow-hidden relative">
                        <div className="hidden w-0 h-full widthcover absolute top-0 left-0 bg-white"></div>
                        <h3 className="text-2xl text-blue-900 font-bold relative z-10">BAKE SALE</h3>
                        <p className="p-1 italic relative z-10">Get up to 70% discount on all products upto 200.</p>
                    </div>
                    <div className="ml-4 p-1 border-2 m-2 xl:w-88 h-24 rounded-r-full hover:scale-105 cursor-pointer overflow-hidden relative">
                        <div className="hidden w-0 h-full widthcover absolute top-0 left-0 bg-white"></div>
                        <h3 className="text-2xl text-blue-900 font-bold relative z-10">OCCATION CAKES</h3>
                        <p className="p-1 italic relative z-10">Get up to 50% discount on Pineapple, Black Forest and Chocolate Cake.</p>
                    </div>
                    <div className="ml-4 p-1 border-2 m-2 xl:w-88 h-24 rounded-r-full hover:scale-105 cursor-pointer overflow-hidden relative">
                        <div className="hidden w-0 h-full widthcover absolute top-0 left-0 bg-white"></div>
                        <h3 className="text-2xl text-blue-900 font-bold relative z-10">BAKE SALE</h3>
                        <p className="p-1 italic relative z-10">Get up to 50% discount, Shop now.</p>
                    </div>
                    <div className="ml-4 p-1 border-2 m-2 xl:w-88 h-24 rounded-r-full hover:scale-105 cursor-pointer overflow-hidden relative">
                        <div className="hidden w-0 h-full widthcover absolute top-0 left-0 bg-white"></div>
                        <h3 className="text-2xl text-blue-900 font-bold relative z-10">LULU BAKERS</h3>
                        <p className="p-1 italic relative z-10">Collabing with lulu's cakes and get 50% off instead.</p>
                    </div>
                    <div className="ml-4 p-1 border-2 m-2 xl:w-88 h-24 rounded-r-full hover:scale-105 cursor-pointer overflow-hidden relative">
                        <div className="hidden w-0 h-full widthcover absolute top-0 left-0 bg-white"></div>
                        <h3 className="text-2xl text-blue-900 font-bold relative z-10">NEW RELEASE</h3>
                        <p className="p-1 italic relative z-10">Goodness in every bite! Big opening get 50% off asap.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-around mt-10 flex-wrap">
                <div className="xl:w-3/12 md-700:w-[30%] w-9/12 max-w-sm max-h-52  md-700:h-auto h-20 aspect-video rounded-3xl bg-bday bg-cover border-2 border-white flex justify-center items-center hover:scale-110 md-700:my-8 my-4 group">
                    <p className="xl:text-4xl md:text-3xl md-700:text-2xl text-4xl group group-hover:scale-110 font-cur">Birthday Items</p>
                </div>
                <div className="relative xl:w-3/12 md-700:w-[30%] w-9/12 max-w-sm max-h-52  md-700:h-auto h-20 aspect-video rounded-3xl bg-menu bg-cover border-2 border-white flex justify-center items-center hover:scale-110 md-700:my-8 my-4 group"><Link className='h-full w-full absolute' to={`/Menu`}>
                    </Link>
                    <p className="xl:text-4xl md:text-3xl md-700:text-2xl text-4xl group group-hover:scale-110 font-cur">Full Menu</p>
                </div>
                <div className="xl:w-3/12 md-700:w-[30%] w-9/12 max-w-sm max-h-52  md-700:h-auto h-20 aspect-video rounded-3xl bg-custom bg-cover border-2 border-white flex justify-center items-center hover:scale-110 md-700:my-8 my-4 group">
                    <p className="xl:text-4xl md:text-3xl md-700:text-2xl text-4xl group group-hover:scale-110 font-cur">Customized Cake</p>
                </div>
            </div>
        </>
    )
}

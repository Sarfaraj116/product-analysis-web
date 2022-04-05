import React from 'react';
import './Home.css'

const Home = () => {


    return (
        <div>
            <div className='home'>
                <div className='text'>
                    <h1 className='text-6xl '>This is BagShop.</h1>
                    <h1 className='text-5xl'>Choose your best bag.</h1>
                    <p className='text-2xl'>It is a virtual shopping Mall.It is developed by me.It is one of the most populer online shop in Bangladesh,what can fulfil your dream.</p>
                    <button className='btn'>Choose</button>
                </div>
                <div className='Image'>
                    <img src="https://images.asos-media.com/products/asos-design-tote-bag-with-laptop-compartment-in-black/201586722-1-black?$n_480w$&wid=476&fit=constrain" alt="" />
                </div>
            </div>
            <div>
                <p className='text-5xl mt-5'>Customer Reviews (3)</p>
                <div className='grid'>
                    <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb5Binv3ZTkcDRcC_WbGYpbS591jDzDuXdg&usqp=CAU" alt="" />

                    <p>Karina Kapur</p>
                    <p>Lovely Bag, Everyone likes it in my famil.</p>
                    <p>Rating: 4.5 star</p>
                    </div>
                    <div>
                    <img src="http://reyebags.xyz/images/shop/17668eaa-5486-469a-a973-2120d8d8d88d.jpg" alt="" />
                    <p>Amina Khatun</p>
                    <p>Feeling Great. This is my best Bag.</p>
                    <p>Rating: 5 stars</p>
                    </div>
                    <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlmjwW3Pa-HraxW56uDlLR7KGTOYx0gA5lA&usqp=CAU" alt="" />
                    <p>Jhorna khatun</p>
                    <p>Loving this Bag. Huge Space.</p>
                    <p>Rating: 5 stars</p>
                    </div>
                    </div>
                <button className='button'>See All Reviews</button>
            </div>
        </div>

    );
};

export default Home;
import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
            <img className='home__image' src='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/192738461_5648660091842456_7842749200486064653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=3VJMc9ME6sAAX-RohqP&_nc_ht=scontent.fccu3-1.fna&oh=00_AT9F1-hayiKcihVu2LSNAuiCpErB4TMLyuyCsHJI5JzX7w&oe=62D08366' alt='' />
            
            <div className='home__row'>
                <Product title='The Dr.Beat Headphones' price= {199.99} image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU' rating={5}/>
                <Product/>
            </div>
            
            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>
            </div>
            
            <div className='home__row'>
                <Product/>
            </div>

       </div>

    </div>  
  )
}

export default Home

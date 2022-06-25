import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
    <div className='home'>
       <div className='home__container'>
            <img className='home__image' src='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/192738461_5648660091842456_7842749200486064653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=3VJMc9ME6sAAX-RohqP&_nc_ht=scontent.fccu3-1.fna&oh=00_AT9F1-hayiKcihVu2LSNAuiCpErB4TMLyuyCsHJI5JzX7w&oe=62D08366' alt='' />
            
            <div className='home__row'>
                <Product title='The Dr.Beat Headphones' price= {199.99} image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU' rating={3} off_rating={2} />
                <Product title='Apple iPad 5.7inch tablet' price={899.99} image='https://images.macrumors.com/t/XEU4SD0_eyFIJ9Em8fmBwFTC8v4=/1600x/article-new/2022/05/ipad-air-mini.jpg' rating={5} off_rating={0}/>
            </div>
            
            <div className='home__row'>
                
                <Product title='Alienware Gaming Monitor' price={3299.99} image='https://c1.neweggimages.com/ProductImage/24-260-555-V06.jpg' rating={5} off_rating={0}/>
                <Product title='Apple Macbook air' price={1599.99} image='https://i.pinimg.com/originals/6e/6d/49/6e6d49ede91ff9787fcab3be6b6fb8e9.jpg' rating={5} off_rating={0}/>
                <Product title='NZXT Gaming Cabinet' price={1299} image='https://www.njkart.com/image/cache/catalog/Images/Product%20Images/nzxt/cabinet/CA-H510E-W1/51jKkkBUTgL._SL1000_-500x515.jpg' rating={4} off_rating={1}/>
            </div>
            
            <div className='home__row'>
                <Product title='Alienware 34" inch Full OLED Gaming Monitor,275Hz,AMD FreeSync Technology' price={4999.99} image='https://cdn.shoplightspeed.com/shops/618208/files/33264623/1000x640x2/alienware-monitor-34-3440-x-1440-4k-120hz-true-2m.jpg' rating={4}/>
            </div>

       </div>

    </div>  
  )
}

export default Home

import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ReportCard = ({report}) => {
    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address , verification, message} = report;
    return (
        <div className='p-4 my-8'>
        <div className="card  bg-white shadow-xl px-4 lg:px-0">
            <figure><img src={picture} className="h-full md:h-[250px] lg:h-[300px] lg:w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=" text-sm lg:text-2xl">
                    {product_name}
                    
                </h2>
                <h2 className=" text-sm lg:text-2xl">
                    {message}
                    
                </h2>
                <p>Use: {age} Month</p>
              
                <p className='inline'>Seller: {seller_name} {verification ==="verified"?   <span><FaCheck className='inline-block text-primary'></FaCheck></span>: ''
                
                
                }</p>
               
               
                <p >Purchase-Price: ${purchase_Price}</p>
                <p >Sell-Price: ${sell_price}</p>
                <p >Address: {address}</p>
                <p >Phone: {phone}</p>
                <p >Post: {time}</p>
                <div className="card-actions justify-between">
                    

                  
                    <button  className='btn bg-primary'>DELETE</button>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default ReportCard;
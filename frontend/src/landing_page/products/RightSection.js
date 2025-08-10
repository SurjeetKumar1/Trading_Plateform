import React from 'react';
function RightSection({imageUrl,productName,description,learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{description}</p>
                    <a href={learnMore}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6'>
                    <img src={imageUrl}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
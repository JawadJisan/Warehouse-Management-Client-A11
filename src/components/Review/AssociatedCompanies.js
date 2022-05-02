import React from 'react';
import './AssociatedCompanies.css'

const AssociatedCompanies = () => {
    return (
        <div id="about" className="container text-light associaleddiv">
            <div class="row ">
                <h1 className="text-center display-2 mt-5 pt-5">Associated Companies</h1>
                <div class="col-md-4 p-1">
                    <div class="card h-100 tomato">
                        <lottie-player
                            src="https://assets6.lottiefiles.com/packages/lf20_e6pyivz1.json" background="transparent"
                            speed="1"
                            loop
                            autoplay>
                        </lottie-player>
                        <div class="card-body text-center">
                            <h5 class="card-title">TESLA</h5>
                            <p class="card-text">Tesla is an electric vehicle manufacturer and clean energy company led by billionaire Elon Musk. Tesla is also the biggest seller of plug-in electric vehicles; its Model 3 sedan, which debuted in 2017, is the world's all-time bestselling plug-in EV, having sold more than 800,000 before the start of 2021.
</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-1">
                    <div class="card h-100 tomato">
                        <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_lozmmhqa.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <div class="card-body text-center">
                            <h5 class="card-title">AMAZON</h5>
                            <p class="card-text">Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It has been referred to as "one of the most influential economic and cultural forces in the world", and is one of the world's most valuable brands.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-1">
                    <div class="card h-100 tomato">
                        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_JKM4wZ.json"
                            background="transparent"
                            speed="3"
                            loop
                            autoplay></lottie-player>
                        <div class="card-body text-center">
                            <h5 class="card-title">APPLE</h5>
                            <p class="card-text">Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AssociatedCompanies;

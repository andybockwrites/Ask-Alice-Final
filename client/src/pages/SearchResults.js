import React from 'react';
import Footer from '../components/footer';
import bunny from "../assets/bunny.jpg";
import images from '../utils/images';

function SearchResults({ currentPage, handlePageChange }) {
    const imageChoice = Math.floor(Math.random() * 5);

    return (
        <div>
            <div class="uk-flex">
                <aside class="uk-width-1-3">
                    <div class="image-container">
                        <img id="image-api" alt="meds" src={images[imageChoice]} />
                            <a id="api-source" href="https://www.pexels.com" class="link">Photos provided by Pexels</a>
                    </div>
                    <div class="recalled" id="recalled">
                        <h4 id="lastRec">Last product recalled:</h4>
                        <p class="text-past" id="text-past"></p>

                    </div>
                </aside>
                <div class="uk-container uk-width-2-3 uk-align-right drug-info ">
                    <div class="uk-width-3-4">

                        <div class="uk-flex-inline uk-flex-between uk-width-1-1">

                            <div class="right">
                                <h4 class="brown font-display" id="place">PA , Chesterbrook</h4>
                                <h3 class="brown font-display-bold" id="status">Status: <span id="spanStatus">"Terminated"</span></h3>
                            </div>
                            <div class="newInfo uk-flex-right">

                                <h4 class="brown font-display">Recall Date: <span id="iniDate">1/1/12</span> </h4>
                                <h3 class="brown font-display-bold" id="">Firm: <span id="firm">Company</span></h3>
                            </div>
                        </div>
                        <div class="comment uk-margin-small right" id="box">
                            <h5 class="uk-text-bold">Product Description:</h5>
                            <p class="product_description" id="product_description:">"Ifosfamide Injection 3g/60 mL, Single dose vial, Rx only, Sterile,
                                For Intravenous Use, Refrigerate at 2-8 degrees celcius, Distributed
                                by Pfizer Labs, Division of Pfizer Inc., New York, NY 10017, NDC
                                0069-4496-22"</p>
                        </div>
                        <div class="comment uk-margin-small right" id="box2">
                            <h5 class="brown uk-text-bold">Reason for recall:</h5>
                            <p class="brown reason" id="reason">"Temperature abuse: Certain vials of Ifosfamide IV products were
                                not refrigerated at certain Amerisource Bergen Drug Corp distribution centers."</p>
                        </div>
                        <div class="nav-container">
                            <button class="uk-link back-button"><a href="./index.html">Back to Search Dates</a></button>
                            <button id="continuebtn" class="uk-link">Continue Down the Rabbit Hole!</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default SearchResults;
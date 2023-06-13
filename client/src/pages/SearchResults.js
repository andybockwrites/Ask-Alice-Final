import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/footer';
import images from '../utils/images';
import enterRabbitHole from '../utils/apiCall';


function SearchResults() {
    const imageChoice = Math.floor(Math.random() * 5);
    const [queryParameters] = useSearchParams();
    const date1 = queryParameters.get('date1');
    const date2 = queryParameters.get('date2');

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        enterRabbitHole(date1, date2).then((data) => {
            setSearchResults(data.results);
            console.log(data.results);
        });
    }, []);

    console.log(date1, date2);

    return (
        <div>
            <div className="uk-flex">
                <aside className="uk-width-1-3">
                    <div className="image-container">
                        <img id="image-api" alt="meds" src={images[imageChoice]} />
                    </div>
                    <br></br>
                    <div className="recalled" id="recalled">
                        <h4 id="lastRec">Last product recalled:</h4>
                        <p className="text-past" id="text-past"></p>
                    </div>
                </aside>
                <div className="uk-container uk-width-2-3 uk-align-right drug-info ">
                    <div className="uk-width-3-4">

                        <div className="uk-flex-inline uk-flex-between uk-width-1-1">

                            <div className="right">
                                <h4 className="brown font-display" id="place">PA , Chesterbrook</h4>
                                <h3 className="brown font-display-bold" id="status">Status: <span id="spanStatus">"Terminated"</span></h3>
                            </div>
                            <div className="newInfo uk-flex-right">

                                <h4 className="brown font-display">Recall Date: <span id="iniDate">1/1/12</span> </h4>
                                <h3 className="brown font-display-bold" id="">Firm: <span id="firm">Company</span></h3>
                            </div>
                        </div>
                        <div className="comment uk-margin-small right" id="box">
                            <h5 className="uk-text-bold">Product Description:</h5>
                            <p className="product_description" id="product_description:">"Ifosfamide Injection 3g/60 mL, Single dose vial, Rx only, Sterile,
                                For Intravenous Use, Refrigerate at 2-8 degrees celcius, Distributed
                                by Pfizer Labs, Division of Pfizer Inc., New York, NY 10017, NDC
                                0069-4496-22"</p>
                        </div>
                        <div className="comment uk-margin-small right" id="box2">
                            <h5 className="brown uk-text-bold">Reason for recall:</h5>
                            <p className="brown reason" id="reason">"Temperature abuse: Certain vials of Ifosfamide IV products were
                                not refrigerated at certain Amerisource Bergen Drug Corp distribution centers."</p>
                        </div>
                        <div className="nav-container">
                            <button className="uk-link back-button"><a href="../">Back to Search Dates</a></button>
                            <button id="continuebtn" className="uk-link">Continue Down the Rabbit Hole!</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default SearchResults;
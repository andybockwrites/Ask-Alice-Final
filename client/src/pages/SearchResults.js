import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/footer';
import images from '../utils/images';
import enterRabbitHole from '../utils/apiCall';
import dayjs from 'dayjs';
import Auth from '../utils/auth';


function SearchResults() {
    const imageChoice = Math.floor(Math.random() * 5);
    const [queryParameters] = useSearchParams();
    const date1 = queryParameters.get('date1');
    const date2 = queryParameters.get('date2');
    const [searchResults, setSearchResults] = useState([]);
    const searchResultsRef = useRef(searchResults);
    searchResultsRef.current = searchResults;
    const [resultPick, setResultPick] = useState({});
    const [previousResultPick, setPreviousResultPick] = useState({});

    const handleContinue = async function () {
        console.log(searchResults);
        const randomResult = Math.floor(Math.random() * searchResults.length);
        if(!!resultPick){
            setPreviousResultPick(resultPick);
        }
        setResultPick(searchResults[randomResult]);
    }

    useLayoutEffect(() => {
        if(searchResults.length > 0){
            handleContinue();
        }
    }, [searchResults]);
    
    useEffect(() => {
        if(date1 && date2){
            enterRabbitHole(date1, date2).then(async (data) => {
                if(data.results){
                    setSearchResults(data.results)
                }
            }).catch((err) => {
                console.log(err);
            });
        }
        setTimeout(async function(){
            if(searchResultsRef.current && searchResultsRef.current.length<=0){
                document.getElementById("Loading").innerHTML = "No results found. Please try again.";
                const returnButton = document.createElement("button");
                returnButton.className = "uk-link back-button";
                returnButton.innerHTML = "<a href='../'>Back to Search Dates</a>";
                console.log('adding button')
                document.getElementById("loadingDiv").appendChild(returnButton);
            }
        }, 3000);
    }, []);

    return ((JSON.stringify(resultPick) === '{}') || (searchResults.length === 0)) ? (
    <div id='loadingDiv' className='uk-container uk-margin-small-left'>
        <h1 id='Loading'>Loading...</h1>
    </div>
    ) : 
    ( 
        <div>
            <div className="uk-flex">
                <aside className="uk-width-1-3">
                    <div className="image-container">
                        <img id="image-api" alt="meds" src={images[imageChoice]} />
                    </div>
                    <br></br>
                    <div className="recalled" id="recalled">
                        <h4 id="lastRec">Last product recalled:</h4>
                        <p className="text-past" id="text-past">{(JSON.stringify(previousResultPick) !== '{}') ? previousResultPick.product_description.split(',')[0] : ''}</p>
                    </div>
                </aside>
                <div className="uk-container uk-width-2-3 uk-align-right drug-info ">
                    <div className="uk-width-3-4">

                        <div className="uk-flex-inline uk-flex-between uk-width-1-1">

                            <div className="right">
                                <h4 className="brown font-display" id="place">{resultPick.state}, {resultPick.city}</h4>
                                <h3 className="brown font-display-bold" id="status">Status: <span id="spanStatus">"{resultPick.status}"</span></h3>
                            </div>
                            <div className="newInfo uk-flex-right">

                                <h4 className="brown font-display">Recall Date: <span id="iniDate">{dayjs(resultPick.recall_initiation_date).format('M/D/YY')}</span> </h4>
                                <h3 className="brown font-display-bold" id="">Parent: <span id="firm">{resultPick.recalling_firm}</span></h3>
                            </div>
                        </div>
                        <div className="comment uk-margin-small right" id="box">
                            <h5 className="uk-text-bold">Product Description:</h5>
                            <p className="product_description" id="product_description:">"{resultPick.product_description}"</p>
                        </div>
                        <div className="comment uk-margin-small right" id="box2">
                            <h5 className="brown uk-text-bold">Reason for recall:</h5>
                            <p className="brown reason" id="reason">"{resultPick.reason_for_recall}"</p>
                        </div>
                        <div className="nav-container">
                            <button className="uk-link back-button"><a href="../">Back to Search Dates</a></button>
                            {Auth.loggedIn() ? (
                                <button id="continuebtn" className="uk-link" onClick={handleContinue}>Continue Down the Rabbit Hole!</button>
                            ) : (
                                <p>Log in to continue down the rabbit hole!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer resultsAmount={searchResults.length} resultName={resultPick.product_description.split(',')[0]} resultParent={resultPick.recalling_firm}/>
        </div>
    )
};

export default SearchResults;
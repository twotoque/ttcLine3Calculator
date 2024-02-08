import React, { useState, useEffect } from 'react';
import { google } from 'googleapis';

const Post = ({ title, content }) => {
  const [valueTotal, setValueTotal] = useState(0);

  useEffect(() => {
    setValueTotal(content.reduce((total, value) => total + parseInt(value, 10) || 0, 0)); //Convert variable "value" from str to int, update variable "valueTotal" when content changes
  }, [content]);

  useEffect(() => {
    let scrollPosition = 0;
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      console.log(newScrollPosition)

      // Delay 200ms
      setTimeout(() => {
        // Move the image to the left if scrolling down
        if (newScrollPosition > scrollPosition && newScrollPosition > 150) {
          document.querySelector('.Line3TrainAnimate').style.left = '-350px'; 
        }
        // Move the image to the right if scrolling up
        else if (newScrollPosition < scrollPosition && newScrollPosition < 150){
          document.querySelector('.Line3TrainAnimate').style.left = '350px'; 
        }

        scrollPosition = newScrollPosition;
      }, 100);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
      
      <div class="secOne">
          <div class="ValueTotalText">
            <h2>Scarboroughians have lost</h2>
            <h1 class="minutesText">{valueTotal} minutes</h1>
            <h2>since the closure of Line 3.</h2>
            <a href="https://www.ttcriders.ca/servicecuts" class="button1">Share your experiences with shuttle buses!</a>
          </div>
          <div>
          <div class="towercontain tower-desktop">
            <img class = "tower left" src="/tower.svg"></img>
            <img class = "tower right" src="/tower.svg"></img>
          </div>
          <div class="towercontain tower-mobile">
            <img class = "tower left" src="/tower-mobile.svg"></img>
            <img class = "tower right" src="/tower-mobile.svg"></img>
          </div>
          <img class="Line3TrainAnimate Line3Train" id ="Line3T//rain" src="/Line3Train.svg"></img>
          <img class="Line3TrainAnimate Line3Train-mobile" id ="Line3T//rain" src="/Line3Train-mobile.svg"></img>
          <div class="Line3Rail"></div>
          <div class="Line3PolePlacement">
            <div class="Line3Pole"></div>
            <div class="Line3Pole"></div>
            <div class="Line3Pole"></div>
            <div class="Line3Pole"></div>
          </div>
          </div>
          
          <div class="GradTrans">
          </div>
          <div class="secTwo">
            
            <div class="ValueTotalText blackPriority">
              <h2>The Line 3 busway will save commuters </h2>
              <h1>10 minutes</h1>
              <h2>in each direction, but the busway is stalled!</h2>
            </div>
            
            <div class="interiorContainerFlexBody">
            <img class="interiorImg" src="/Line3Replacement.png"></img>
            <div class="text">
                <p>Running from Ellesmere Road to Kennedy Station, this busway will benefit all of Scarborough, even after the opening of the Scarborough busway.</p>
                <li>Buses won’t get stuck in traffic and be faster</li>
                <li>Allow more frequent bus service on routes under the Line 3 replacement plan, including the 129 McCowan North and the 939 Finch Express</li>
                <li>An opportunity for green space</li>
                <li>More cycling trails, connecting Gatineau trail</li>
                <li>Reduced traffic in Kennedy Road and Midland Avenue</li>
                <li>Legacy busway projects like the York University busway are still being used today, despite their subway extension counterparts opening</li>
                <a href="https://www.ttcriders.ca/servicecuts" class="button2">Learn more about the benefits</a>
            </div>
            </div>
          </div>
          <div class="secOne">
            <div class="ValueTotalText noHead">
              <h2>Despite countless efforts and TTC recommendation,</h2>
              <h1 class="AdjLineHeight">It still needs final approval.</h1>
              </div>
              <div>

              <div class="interiorContainerFlexBody">
              <div class="textBlue">
                  <p>...and time is running out. The subway extension may open past 2030, forcing Scarborough residents to rely on slow shuttle buses for the next few years!</p>
                  <br></br>
                  <p>Lost time due to shuttle buses effects:</p>
                  <li>University of Toronto Scarborough & Centennial College students, as well as high school and students from other institutes</li>
                  <li>Working class families who can’t afford GO Transit, driving, or other means of transportation</li>
                  <li>People who don't have a car</li>
                  <li>Increased traffic due to more drivers, leading to more greenhouse gases</li>
            </div>
              <img class="interiorImg" src="/bus.jpg"></img>
            </div>
            <div class="secTwo blackPriority">
              <div class="quotePadding">
                <h2 class="TMUquote">“[I’m] upset that Toronto transit is <b>regressing</b> to the point of removing an entire transit line. <b>Scarborough residents are going to be left in the dark for seven years.</b>”</h2>
                <i class="TMUquote">Survey Respondent, Toronto Metropolitan University School of Regional Planning Report, 2023 </i>
                </div>
            </div>
            
            <div class="secOne">
            <div class="ValueTotalText noHead">
              <h1 class="AdjLineHeight">Ask City Councillors to support Scarborough!</h1>
              </div>
              <div>

              <div class="interiorContainerFlexBody">
        
              <img class="interiorImg" src="/Line3Funeral.jpg"></img>
              <div class="textBlue">
                  <p>Since 2021, TTCriders have been fighting endlessly to support Scarborough transit riders.</p>
                  <br></br>
                  <p><b class="pbold">Right now, it’s a critical time to continue fighting, especially since we are so close to the finishing line.</b></p>
                  <br></br>
                  <p>In 2024, Mayor Chow said that she will support the budget. Now it’s time for Councillors to do the same.</p>
                  
                  <a href="https://www.ttcriders.ca/servicecuts" class="button1">Contact your city councillors!</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="footer">
                <img class="interiorImg centre ttcridersLogo" src="/TTCriders.svg"></img>
                <br></br>
                <p class="footerText">Project by Derek Song</p>
                <h3 class="footerText">Learn more about this project here.</h3>
            </div>
          
        </div>
      </div>
  );
};

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
  const sheets = google.sheets({ version: 'v4', auth }); //Sets up Google Shets API

  const {id} = query;
  const range = `B1:B`; // Get range of spreadsheet
  const response = await sheets.spreadsheets.values.batchGet({ //Send request to API w/ sheet id and range
    spreadsheetId: process.env.SHEET_ID, 
    ranges: [range],
  });

  const values = response.data.valueRanges[0]?.values || []; // Collects those values

  return {
    props: {
      title: values[0] || null,
      content: values.flat(),
    },
  };
}



export default Post;
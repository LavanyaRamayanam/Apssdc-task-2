import React from 'react';
import data from "../data.json";
export default function Resume(props) {
    let profile=data.details[props.location.personcard.id];
    console.log(profile);
    return (
        <div>
            <h1>Resume</h1>
            <div class="row">
            <div className="col-sm-10 col-md-2 mr-1" >
              <div className="card">
                  <h1>{profile.Card.name}</h1>
                  <h3 className="text-secondary">{profile.Card.role}</h3>
                  <h4 className="text-primary">{profile.Card.email}</h4>
                </div>
             </div>
            <div className=" card col-sm-10 col-md-9">
                <h2>Carrer Objective:</h2>
                <p>{profile.career}</p>
                <hr/>
              <h2 style={{textAlign:"left"}}>educational detalis:</h2>
                <li style={{textAlign:"left"}}>{profile.education}</li>
                <li style={{textAlign:"left"}}>{profile.intermediate}</li>
                <li style={{textAlign:"left"}}>{profile.graduation}</li>
              <hr/>
              <h2 style={{textAlign:"left"}}>Technicall skills:</h2>
              <li style={{textAlign:"left"}}><b>programming languages:</b>{profile.technical}</li>
              <li style={{textAlign:"left"}}><b>webtechnologies:</b>{profile.web}</li>
              <li style={{textAlign:"left"}}><b>databases:</b>{profile.db}</li>
              <hr/>
              <h2 style={{textAlign:"left"}}>Achievements:</h2>
              <li style={{textAlign:"left"}}>{profile.acheivements}</li>
              <li style={{textAlign:"left"}}>{profile.rank}</li>
              <hr/>
              <h2 style={{textAlign:"left"}}>personal skills:</h2>
              <li style={{textAlign:"left"}}>{profile.personal}</li>
              <li style={{textAlign:"left"}}>{profile.personal1}</li>
              <hr/>
              <h2 style={{textAlign:"left"}}>project:</h2>
              <li style={{textAlign:"left"}}>{profile.project}</li>
            </div>
            </div>   
            
        </div>
    );
}


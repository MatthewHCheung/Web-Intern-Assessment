"use client"
import React from 'react';
import Image from 'next/image';
import googlePlayBadge from './images/google-play-badge.svg'
import appStoreBadge  from './images/app-store-badge.svg';
import './iPhone.css';
import { url } from 'inspector';

export default function Landing() {
  return (
    <main>
      {/* show the logo and slogan over the links to download */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: "430px",marginRight:"430px"}}>
        <div style={{marginTop: "250px", marginLeft: ""}}>
          <h1 style={{fontSize: "3.5em"}}>Lift Card</h1>
          <h2 style={{fontSize: "1.5em" }}>The Social Media Fitness App</h2>
          <div style={{ display: 'flex', justifyContent: 'left', gap: '20px' }}>
              {/* show the links to download */}
            <a href="https://apps.apple.com/us/app/lift-card-social-fitness-app/id6449883528" target="_blank" rel="noopener noreferrer">
              <Image src={appStoreBadge} alt="Apple Icon" width={150} height={150} />
            </a>
            <a href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
              <Image src={googlePlayBadge} alt="Play Icon" width={150} height={150} />
            </a>
          </div>
        </div>

        {/* create iphone template to show lift card app */}
        <div className = 'outside-border' style={{marginTop: "100px"}}>
          <div className="silencer"></div>
          <div className="volume-up"></div>
          <div className="volume-down"></div>
          <div className="button-on"></div>
          
          <div className="inside-border">
            <div className="camera">
                <div className="camera-dot">
                    <div className="camera-dot-2"></div>
                    <div className="camera-dot-3"></div>
                </div>
                <div className="camera-speaker">
                </div>
            </div>
          </div>
        </div>
          
      </div>
        {/* create second iphone template */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',marginRight:'12em'}}>
        <div className = 'outside-border-alternate' style={{marginTop: "100px", marginLeft:'430px'}}>
          <div className="silencer"></div>
          <div className="volume-up"></div>
          <div className="volume-down"></div>
          <div className="button-on"></div>
          
          <div className="inside-border">
            <div className="camera">
                <div className="camera-dot">
                    <div className="camera-dot-2"></div>
                    <div className="camera-dot-3"></div>
                </div>
                <div className="camera-speaker">
                </div>
            </div>
          </div>
        </div>
        {/* show info on the  */}
        <div style={{marginTop: "250px"}}>
          <h1 style={{ fontSize: "3.5em" }}>
            <span>Bringing you closer</span>
            <br />
            <span>to your fitness goals</span>
          </h1>
          <h2 style={{fontSize: "1.5em" }}>
            <span>• Connect with fellow fitness enthusiasts</span>
            <br />
            <span>• log your workouts, and track your progress</span>
            <br />
            <span>• share your journey from the first rep to the last</span>
            <br />
            <span>• exchange tips and celebrate milestones together</span>
          </h2>
        </div>

      
      </div>

    <div style={{blockSize:'100px'}}></div>
    </main>

  );
}
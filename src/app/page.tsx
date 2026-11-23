import React from 'react';
import './globals.css';
import './dashboard/dashboard.css';
import logo from '/public/Logo-Main.png';
import Image, { StaticImageData } from "next/image";
import { House } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { Book } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Bell } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import { ArrowDown } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="parentDiv">
      <div className="topNavBarDiv">   {/**At some point this whole element should become a react component, maybe in a later version */}
        <Image className="navBarLogo" src={logo as StaticImageData} alt='logo' />
        <button className="dashboardButton"><House size={30} /> Dashboard</button>
        <button className="analysisButton"><ChartNoAxesCombined /> Analysis</button>
        <button className="openingsButton"><Book /> Openings</button>
        <button className="trainingButton"><Target /> Training</button>
        <button className="progressButton"><TrendingUp size={30} /> Progress</button>
        <button className="notifButton"><Bell size={35} /></button>
        <button className="profileButton"><CircleUserRound size={55} /></button>
      </div>
      <div className="cardContainerParent">
        <div className="cardContainerDivRow1">

          <div className="winrateCard">
            <div className="headerContainer">
              <span className="row1Icon"><ChartLine size={40} /> </span>
              <span className="row1Title">Win Rate</span>
            </div>
            <span className="row1Stat">XX.X%</span>
            <div className="improvementInfoContainer">
              <span className="row1ImprovementStat"><ArrowUp /> +XX.X%</span>
              <span className="row1ImprovementText">vs. last month </span>
            </div>
            <div className = "winrateGraph"></div>
          </div>

          <div className="accuracyCard"></div>

          <div className="gamesAnalyzedCard"></div>
          
        </div>
        <div className="cardContainerDivRow2">
          <div className="recommendedPracticeCard"></div>
          <div className="performanceCard"></div>
        </div>
        <div className="cardContainerDivRow3">
          <div className="latestGamesCard"></div>
          <div className="recentInsightsCard"></div>
          <div className="statsCard"></div>
        </div>
      </div>
      <div > </div>
    </div>
  );
}


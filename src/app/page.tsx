import Image from "next/image";
import './globals.css';
import { House } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { GitFork } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Settings } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className = "parentDiv" style= {{display: "grid"}}>
      <div className ="Top-bar" style={{display: "flex"}}>
          <div className = "logoDash" style= {{width: "18vw", height: "30vh", position: "relative"}}>
            <Image 
              className="logo" 
              src="/Logo-Main.png" 
              alt="Site logo" 
              fill
              style= {{objectFit: "contain"}}
            />
          </div>
          <button className = "dashButton"><House size={40}/></button> {/** Home/dashboard */}
          <button className = "analysisButton"><ChartNoAxesCombined size={40}/> </button> {/** Previous game analysis */}
          <button className = "openingButton" ><GitFork size={40}/> </button> {/** Opening explorer */}
          <button className = "trainButton"><Target size={40}/> </button> {/** Insights & Training center */}
          <button className = "progButton"><TrendingUp size={40}/> </button> {/** Progress tracker*/}
          <button className = "profileButton"><UserRound size={40}/> </button> {/** Profile */}
          <button className = "settingsButton"><Settings size={40}/> </button> {/** Settings*/}
      </div>

        <div className = "analyticsParentDiv" style={{display: "grid" }}>
          <div className = "analytic1"></div>  {/** Analytic 1 - Winrate carousel. all of the pages of the carousel will have like an analytic, maybe a graph or something, then a link to one of the other pages where we would dive deeper on it */}
          <div className = "analytic2"></div> {/** Analytic 2 - Recommended puzzle or game review. similar to the winrate carousel, will feature a snapshot of a game or a puzzle and then a link to the corresponding page */}
          <div className = "analytic3"></div> {/** Analytic 3 - Misc stat carousel. buncha random stats */}
          <div className = "analytic4"></div> {/** Analytic 4 - Recommended areas of improvement. Brief recommendation then a link to the training center page */}
        </div>
    </div>
  );
}


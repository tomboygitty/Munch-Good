import React from 'react'

import Radial from './shared/Radial'
import Footer from './shared/Footer'
import MainNav from './shared/MainNav'
import Chime from './play/Chime'
import FoodButtons from './play/FoodButtons'
import FoodEffect from './play/FoodEffect'
import FoodStats from './play/FoodStats'

class Play extends React.Component {
  
  render() {    
    return (
      <div>      
        <Radial /> {/* -- COMPONENT - Animated Radial background ------------------------------------------------------------------------ */}
        <div className="container-fluid appBody welcomeBkgrd">
          <MainNav /> {/* -- COMPONENT - Shared Navigation across application ----------------------------------------------------------- */}
          <div className="container-fluid">
            <div className="row">
              <FoodButtons /> {/* -- COMPONENT - Clickable Food Buttons (Populated via JSON map within FoodList.js in data directory ) -- */}
              <FoodEffect /> {/* -- COMPONENT - Center component displaying how last eaten food affects Allison ------------------------- */}
              <FoodStats /> {/* -- COMPONENT - Bar Graphs displaying current Macro balance based on food selections --------------------- */}
            </div>
          </div>
        </div>
        <Footer /> {/* -- COMPONENT - 75px Footer bar (blue) with Team and Repo links --------------------------------------------------- */}
        <Chime /> {/* -- COMPONENT - Audio file triggered when FoodButtons are clicked -------------------------------------------------- */}
      </div>
    );
  }
}

export default Play
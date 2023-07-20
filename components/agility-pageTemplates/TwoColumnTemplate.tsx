import React from 'react';
import { ContentZone } from '@agility/nextjs'; 
import { getModule } from '../agility-pageModules';

const TwoColumnTemplate = (props:any) => {
  return (
    <div className="container grid grid-cols-4 mx-auto">
        <div className="col-span-3">
          <ContentZone name="MainContentZone" {...props} getModule={getModule} />
        </div>
        <div className="col-span-1">
          <ContentZone name="SidebarContentZone" {...props} getModule={getModule} />
        </div>
    </div>
  );
}

export default TwoColumnTemplate;
import React from 'react'

import './mission.css';

export default function Mission() {
  return (
    <div className='mission container mx-auto'>
      <h1 className='text-center pt-3'>Our Mission</h1> 
        <p className='pb-3'>Most Coldwater residents likely do not realize the extent of our reach into the community and the high volume of animals 
            that we care for. For example: </p>
        <ul className='list-disc'>
            <li className='pb-3'>Coldwater Rescue aids anywhere from 7,000-8,000 animals or more on any given year.</li>
            <li className='pb-3'>Sometimes we have over 400 animals under our care</li>
            <li className='pb-3'>We employ 40 full and part-time people to care for these animals</li>
        </ul>
        <h2 className='text-center pt-3'>Funding</h2>
        <p className='pb-3'>Coldwater Rescue is supported 100 percent by the community. We survive solely off of donations 
            from the generous and caring citizens of Coldwater Pennsylvania and those in surrounding communities. </p>
        <ul className='list-disc'>
            <li className='pb-3'>We do not receive any national or state support. </li>
            <li className='pb-3'>We are not a government agency.</li>
            <li className='pb-3'>We are not affiliated with organizations such as the Humane Society of the United States or American 
                Prevention of Cruelty to Animals.</li>
            <li className='pb-3'>Coldwater Rescue contracts with local municipalities to take in stray animals from those municipalities.  
                The contract goes only towards covering our operating costs in retrieving and caring for these animals. </li>
        </ul>
        <h2 className='text-center pt-3'>Services</h2>
        <p className='pb-3'>Coldwater Rescue not assists the animals of the area, but also people via various programs. Each program is targeted towards specific 
        in-need groups. Others are focused on the animals under our care.</p>
        <ul className='list-disc'>
            <li className='pb-3'><b>Animal Resources Hub:</b> We offer affordable vaccinations, microchipping, spaying and neutering for dogs and cats. We also 
            provide health assessment and treatment options, diagnostic capabilities, dental services, surgical services, and x-rays.</li>
            <li className='pb-3'><b>Cruelty Investigations:</b> When appropriate, police remove animals that are being abused and prosecutes those responsible.</li>
            <li className='pb-3'><b>Humane Programs:</b> By educating our community, we can work towards a brighter future for animals tomorrow. Staff members tour 
            schools, day cares and other groups to teach the young about healthy and happy pet relationships.</li>
        </ul>
    </div>
  )
}

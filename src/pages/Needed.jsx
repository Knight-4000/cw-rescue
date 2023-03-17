import './needed.css';
import CatsAccordion from '../components/CatsAccordion';
import DogsAccordion from '../components/DogsAccordion';
import RabbitAccordion from '../components/RabbitAccordion';

export default function Needed() {
  return (
    <>
      <div className='needed'>
        <div class="relative">
         <img className="object-fill h-50 w-full" alt="" src="https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/needed.jpg?alt=media&token=4365747e-d3b8-4a38-8f71-575358dd3fe5"/>
         <h1 className='text-6xl text-center absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Needed Items</h1>   
        </div>
        <div className='container'>
          <p>CSHA relies on the generosity and charity from the community to help every single animal. On the list below you will find items that 
           are always in need. And while some are quite mundane such as brooms and cleaning supplies, they are still vital to our continuing service to
           in-need animals.</p>
        </div>
      </div>
      <CatsAccordion />
      <DogsAccordion />
      <RabbitAccordion />
    </>
  )
}

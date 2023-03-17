import Accordion from "./Accordion";
import './accordion.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { GiCat } from 'react-icons/gi';

export default function CatsAccordion() {
  return (
    <>
     <Accordion>
        <Accordion.Item
          title={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
        <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 container mx-auto px-4">
           <div className="flex justify-center p-6">
             <p className='footer-contact'>Cats</p>
           </div>
           <div className="flex justify-center p-6 text-right">
            <p className='footer-contact'><AiFillPlusCircle /></p>
          </div>
         </div>
       </div> 
      }
    >
    <div className="container">
      <ul className="donations">
        <li>
          <GiCat className="accordion-icon" /><p>Cat Litter</p>
        </li>
        <li>
          <GiCat className="accordion-icon" /><p>Dry Cat Food</p> 
        </li>
        <li>
          <GiCat className="accordion-icon" /><p>Dry Kitten Food</p>
        </li>
        <li>
          <GiCat className="accordion-icon" /><p>Cat Treats</p>
        </li>
        <li>
          <GiCat className="accordion-icon" /><p>Small Animal Chew Toys</p> 
        </li>
       </ul>
      </div>
    </Accordion.Item>
   </Accordion>
  </>
  )
}
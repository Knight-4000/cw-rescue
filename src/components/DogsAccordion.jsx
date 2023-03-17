import Accordion from './Accordion';
import { GiSittingDog } from 'react-icons/gi';
import { AiFillPlusCircle } from 'react-icons/ai';
import './accordion.css';

export default function DogsAccordion() {
  return (
    <>
      <div>
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
                    <p className='footer-contact'>Dogs</p>
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
                    <GiSittingDog className="accordion-icon" /><p>Nylabones</p>
                  </li>
                  <li>
                    <GiSittingDog className="accordion-icon" />  <p>Kongs</p>
                  </li>
                  <li>
                   <GiSittingDog className="accordion-icon" />  <p>Benebones Wishbones</p>
                  </li>
                  <li>
                   <GiSittingDog className="accordion-icon" />  <p>Durable Dog Toys</p>
                  </li>
                  <li>
                   <GiSittingDog className="accordion-icon" />  <p>Canned Dog Food</p> 
                  </li>
                  <li>
                   <GiSittingDog className="accordion-icon" />  <p>Peanut Butter</p> 
                  </li>
                </ul>
              </div>
             </Accordion.Item>
            </Accordion>
          </div>
         </>
       )
     }

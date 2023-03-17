import Accordion from './Accordion';
import './accordion.css';
import { GiRabbit } from 'react-icons/gi';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function RabbitAccordion() {
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
                  <p className='footer-contact'>Other</p>
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
                <GiRabbit className="accordion-icon" /> <p>Small toys and treats</p>
              </li>
              <li>
                <GiRabbit className="accordion-icon" />  <p>Timothy Hay</p>
              </li>
              <li>
                <GiRabbit className="accordion-icon" />  <p>Rabbit Food</p>
              </li>
            </ul>
          </div>
        </Accordion.Item>
      </Accordion>
     </div>
    </>
  )
}

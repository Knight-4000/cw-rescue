import { useState, React } from "react"; 
import Accordion from "../components/Accordion";
import { useLocation, useNavigate } from "react-router-dom";
import './accordion.css';

export default function AdoptAccordion() {
    const location = useLocation();
    const navigate = useNavigate();
    document.addEventListener('click', function(e) {
      setShowMessage(!showMessage);
    });
    const [showMessage, setShowMessage] = useState(false);
    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return true;
        }
      }
  return (
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
              <div>
                <button>Adopt</button>
              </div>
            </div>
          }
        >
        <h1 className='cursor-pointer text-center accordion-link'><a href="/cats">Cats</a></h1>
        <h1 className='cursor-pointer text-center accordion-link'><a href="/dogs">Dogs</a></h1>
        <h1 className='cursor-pointer text-center accordion-link'><a href="/others">Others</a></h1>
        </Accordion.Item>
      </Accordion>

    </div>
  )
}

import { useState, Children, cloneElement } from "react";
import CollapsiblePanelBasic from "./CollapsiblePanelBasic";

const Accordion = ({ children }) => {
  const [activeIntex, setActiveIndex] = useState(null);
  const items = Children.toArray(children)
    .filter((child) => child.type === CollapsiblePanelBasic)
    .map((child, index) =>
      cloneElement(child, {
        isCollapsed: index !== activeIntex,
        onClick: () => {
          index === activeIntex ? setActiveIndex(null) : setActiveIndex(index);
        }
      })
    );
  return <>{items}</>;
};

Accordion.Item = CollapsiblePanelBasic;

export default Accordion;
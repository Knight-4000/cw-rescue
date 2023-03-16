import { useRef, useState } from "react";
import { Transition } from "react-transition-group";

const COLLAPSED_HEIGHT = "0";
const EXPANDED_HEIGHT = "auto";

const defaultStyle = {
  overflow: "hidden",
  transition: "height 0.8s ease"
};

const CollapsiblePanelBasic = ({ children, title, isCollapsed, onClick }) => {
  const [height, setHeight] = useState(
    isCollapsed ? COLLAPSED_HEIGHT : EXPANDED_HEIGHT
  );
  const ref = useRef();

  const setAutoHeight = () => setHeight(EXPANDED_HEIGHT);
  const setZeroHeight = () => setHeight(COLLAPSED_HEIGHT);
  const setScrollHeight = () =>
    ref.current && setHeight(`${ref.current.scrollHeight}px`);

  return (
    <Transition
      nodeRef={ref}
      in={!isCollapsed}
      onEnter={setScrollHeight}
      onEntered={setAutoHeight}
      onExit={setScrollHeight}
      onExiting={setZeroHeight}
      addEndListener={(done) => {
        ref.current.addEventListener(
          "transitionend",
          function _done() {
            done();
            ref.current.removeEventListener("transitionend", _done, false);
          },
          false
        );
      }}
    >
      <div>
        <div onClick={onClick}>{title}</div>
        <div
          style={{
            ...defaultStyle,
            height
          }}
          ref={ref}
        >
          {children}
        </div>
      </div>
    </Transition>
  );
};

export default CollapsiblePanelBasic;
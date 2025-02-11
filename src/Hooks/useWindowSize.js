import { useState, useEffect } from "react";
import { throttle } from "lodash.throttle";
export default function useWindowSize() {
  const [deviceType, setDeviceType] = useState("desktop");
  const handleResize = throttle(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setDeviceType("mobile");
    } else if (window.matchMedia("(max-width: 1199px)").matches) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  }, 5000);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return deviceType;
}

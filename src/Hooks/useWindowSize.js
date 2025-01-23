import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const handleResize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setDeviceType("mobile");
    } else if (window.matchMedia("(max-width: 1199px)").matches) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return deviceType;
};

export default useWindowSize;

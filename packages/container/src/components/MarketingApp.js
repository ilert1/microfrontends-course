import React, { useEffect, useRef } from "react";
import { mount as mountMarketing } from "marketing/MarketingApp";

export const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketing(ref.current);
  }, []);

  return <div ref={ref} />;
};

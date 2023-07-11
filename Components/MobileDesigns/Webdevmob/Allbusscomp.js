import Ascand from "@/Components/Webdev/Ascand";
import Solutions from "@/Components/Webdev/Solutions";
import React from "react";
import Bloackchain from "../Itdevmob/Bloackchain";

function Allbusscomp() {
  return (
    <div>
      {/* mobile  */}
      <div className="col-md-12 display_pc px-0">{/* <Ascand /> */}</div>
      <div className="col-md-12 display_pc px-0">
        <Bloackchain />
      </div>
      <div className="col-md-12 display_pc px-0">{/* <Solutions /> */}</div>
    </div>
  );
}

export default Allbusscomp;

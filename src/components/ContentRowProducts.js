import React from "react";
import SmallCard from "./SmallCard";
import SmallCardCategorias from "./SmallCardCategorias";

function ContentRowGeneral() {
    return (
        <React.Fragment>
            <div className="row">
                <SmallCard />
            </div>

            <div className="row">
                <SmallCardCategorias />
            </div>
        </React.Fragment>
    );
}
export default ContentRowGeneral;

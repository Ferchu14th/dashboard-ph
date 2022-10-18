import React from "react";
import SmallCard from "./SmallCard";
import SmallCardCategorias from "./SmallCardCategorias";

function ContentRowProducts() {
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
export default ContentRowProducts;

import tatooine from "../../assets/planets/Tatooine.jpg";
import alderaan from "../../assets/planets/Alderaan.jpeg";
import yarvin from "../../assets/planets/yarvin2.jpeg";
import bespin from "../../assets/planets/bespin2.png";
import endor from "../../assets/planets/endor.jpg";
import naboo from "../../assets/planets/naboo2.png";
import coruscant from "../../assets/planets/coruscant.jpg";
import hoth from "../../assets/planets/hoth2.png";
import kamino from "../../assets/planets/kamino.jpg";
import dagobah from "../../assets/planets/dagobah2.png";
import {PLANET_PICTURES} from "../actions/actionTypes";

const initialState = {
    planets: [tatooine, alderaan, yarvin, hoth, dagobah, bespin,
        endor, naboo, coruscant, kamino]
}

export const planetsPictures = (state = initialState, action) => {
    switch (action.type) {
        case PLANET_PICTURES:
            return {
                planets: state
            };
        default:
            return {
                planets: state
            };
    }
}
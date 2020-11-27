import tatooine from "../../assets/planets/Tatooine.jpg";
import alderaan from "../../assets/planets/Alderaan.jpeg";
import yarvin from "../../assets/planets/Yarvin.webp";
import bespin from "../../assets/planets/bespin.webp";
import endor from "../../assets/planets/endor.jpg";
import naboo from "../../assets/planets/naboo.webp";
import coruscant from "../../assets/planets/coruscant.jpg";
import hoth from "../../assets/planets/hoth.webp";
import kamino from "../../assets/planets/kamino.jpg";
import dagobah from "../../assets/planets/Dagobah.webp";
import {PLANET_PICTURES} from "../actions/actionTypes";

const initialState = {
    planets: [tatooine, alderaan, yarvin, bespin, endor, naboo,
        coruscant, hoth, kamino, dagobah]
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

import * as fetchAllKitty from '../../components/CatsList/action';
import * as fetchByColour from '../../components/CatsList/action';
import * as fetchByCharacter from '../../components/CatsList/action';
import * as addToCard from '../../components/Card/actions';
import * as fetchCard from '../../components/Card/actions';

const actions = {
    ...fetchAllKitty,
    ...fetchByColour,
    ...fetchByCharacter,
    ...addToCard,
    ...fetchCard
}

export default actions;
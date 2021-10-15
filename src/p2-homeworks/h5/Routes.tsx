import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    ERROR_404: '/error-404',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>

                <Route path={'/'} exact render={() => <Redirect to={PATH. JUNIOR}/>}/>

                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>

                <Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR_PLUS}/>}/>

                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>

                {/*<Route path={'/'} exact render={() => <Redirect to={PATH.ERROR_404}/>}/>*/}

                {/*<Route path={PATH.ERROR_404} render={() => <Error404/>}/>*/}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes

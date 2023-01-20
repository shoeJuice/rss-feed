import {RouterProvider, createMemoryRouter, MemoryRouter} from 'react-router-dom'
import { routes } from '../../../router'

function RouterContext({children}: any): any{
    const testMemRouter =  createMemoryRouter(routes, {initialEntries: ['/']})
    return(
        <div>
            {children}
        </div>
    )
}

export {RouterContext}
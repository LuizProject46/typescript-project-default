import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
    return response.json({ message: "Welcome to API selling"})
})

export default routes
import { Route, Routes } from 'react-router-dom'
import Details from '../pages/details'
import Homepage from '../pages/homepage'
import NotFound from '../pages/notFound'

export default function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

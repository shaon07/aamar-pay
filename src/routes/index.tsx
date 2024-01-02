import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Details from '../pages/details'
import Homepage from '../pages/homepage'
import NotFound from '../pages/notFound'

export default function RouterContainer() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/details" element={<Details />} />
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    )
}

import { useState } from 'react'
// import Login from './components/Login'
import Navigation from './nav_bar'
import Education from './main_pages/education'
import Projects from './main_pages/project_list'
import Intro from './main_pages/introduction'
// import Navigation from './components/homeComponents/Navigation'
// import NearMe from './components/NearMe'
// import Calendar from './components/Calendar'
// import Messages from './components/Messages'

function App() {
	const [pageIndex, setPageIndex] = useState(0)

	const pages = {
		// 1: <NearMe />,
		// 2: <Calendar />,
		// 3: <Messages />,
		1: <Education />,
		2: <Projects />,
		default: <Intro />,
	}

	const auto = <Navigation setPageIndex={setPageIndex} pageIndex={pageIndex} />
	const renderPage = pages[pageIndex] || pages.default

	return (
		<div className="grid grid-cols-[max-content_4fr]">
			{auto}
			{renderPage}
		</div>
	)
}

export default App

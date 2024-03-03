import { FrappeProvider } from "frappe-react-sdk";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import TrackBoard from "./components/TrackBoard";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { CreateIssueTracker } from "./components/CreateIssueTracker";


const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/todo" element={<TrackBoard />} />
			<Route path="/todo/create" element={<CreateIssueTracker />} />
		</>
	), {
	basename: ''
}
)


function App() {



	return (

		<div>
			<Theme
				appearance="dark"
				accentColor="grass"
				panelBackground="translucent"
			>
				<FrappeProvider
					socketPort={import.meta.env.VITE_SOCKET_PORT}
					siteName={import.meta.env.VITE_SITE_NAME}
				>
					{/* Main File */}
					<RouterProvider router={router} fallbackElement={<></>} />

				</FrappeProvider>
			</Theme>
		</div >
	);
}

export default App;

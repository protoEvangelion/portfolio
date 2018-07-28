import { HomePage, NotFoundPage, UtilityPage } from '~/components'
import App from '~/components/App'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'

// NOTE: Main site stuff
// import Home from './components/Main/Home'
// import About from './components/Main/About'
// import NotFound from './components/Main/NotFound'
// import Layout from './components/Main/Layout'
// import AllProjects from './components/Main/Projects/AllProjects'
// import APIProjects from './components/Main/Projects/APIProjects'
// import UtilityProjects from './components/Main/Projects/UtilityProjects'
// import VizProjects from './components/Main/Projects/VizProjects'
// import Contact from './components/Main/Contact'
// import Privacy from './components/Main/Privacy'

// NOTE: API Projects
// import Wiki from './components/APIProjects/Wiki'
// import Quote from './components/APIProjects/Quote'
// import Weather from './components/APIProjects/Weather'
// import Twitch from './components/APIProjects/Twitch'
// import Leaderboard from './components/APIProjects/Leaderboard'
// import RecipeBox from './components/APIProjects/RecipeBox'
// import YoutubeViewer from './components/APIProjects/YoutubeViewer'

// NOTE: Utility and Gaming Projects
// import Tic from './components/UtilityProjects/Tic'
// import Calc from './components/UtilityProjects/Calc'
// import Pomodoro from './components/UtilityProjects/Pomodoro'
// import Simon from './components/UtilityProjects/Simon'
// import Markdown from './components/UtilityProjects/Markdown'
// import GameOfLife from './components/UtilityProjects/GameOfLife'

// NOTE: Data Visualization Projects
// import GDP from './components/DataVizProjects/GDP'
// import ScatterPlot from './components/DataVizProjects/ScatterPlot'
// import Heatmap from './components/DataVizProjects/Heatmap'
// import ForceGraph from './components/DataVizProjects/Force'

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/utilityApps',
    exact: true,
    component: UtilityPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
]

const AppRoutes = () => (
  <App>
    <Switch>{renderRoutes(routes)}</Switch>
  </App>
)

// const AppRoutes = () => {
//   return (
//     <div>
//       <Layout>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/projects" component={AllProjects} />
//           <Route path="/apiProjects" component={APIProjects} />
//           <Route path="/utilityProjects" component={UtilityProjects} />
//           <Route path="/vizProjects" component={VizProjects} />
//           <Route path="/contact" component={Contact} />

//           <Route path="/weather" component={Weather} />
//           <Route path="/wikiViewer" component={Wiki} />
//           <Route path="/quotepump" component={Quote} />
//           <Route path="/twitch" component={Twitch} />
//           <Route path="/leaderboard" component={Leaderboard} />
//           <Route path="/recipebox" component={RecipeBox} />
//           <Route path="/youtube-viewer" component={YoutubeViewer} />

//           <Route path="/game-of-life" component={GameOfLife} />
//           <Route path="/tictactoe" component={Tic} />
//           <Route path="/calc" component={Calc} />
//           <Route path="/pomodoro" component={Pomodoro} />
//           <Route path="/simon" component={Simon} />
//           <Route path="/markdown" component={Markdown} />

//           <Route path="/GDP" component={GDP} />
//           <Route path="/scatterplot_doping_olympian_cyclists" component={ScatterPlot} />
//           <Route path="/heatmap" component={Heatmap} />
//           <Route path="/world-force-graph" component={ForceGraph} />

//           <Route path="/privacy-policy" component={Privacy} />
//           <Route component={NotFound} />
//         </Switch>
//       </Layout>
//     </div>
//   )
// }

export default AppRoutes

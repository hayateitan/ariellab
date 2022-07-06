import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import i18n from 'i18next';

// Accueil
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// Nos Services
const ProthesesConjointes = React.lazy(() => import("./components/pages/ProthesesConjointes"));
const ProthesesAdjointes = React.lazy(() => import("./components/pages/ProthesesAdjointes"));
const Gouttiere = React.lazy(() => import("./components/pages/Gouttiere"));
const Rayplicker = React.lazy(() => import("./components/pages/Rayplicker"));
// Laboratoire
const Laboratoire = React.lazy(() => import("./components/pages/Laboratoire"))
// PandaScan
const PandaScan = React.lazy(() => import("./components/pages/PandaScan"))
// Contact
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Contact_remerciement = React.lazy(() => import("./components/pages/Contact_remerciement"));

// Ariel Aligner
const Ariel_aligner = React.lazy(() => import("./components/pages/Ariel_aligner"));
const A2LabRequest = React.lazy(() => import("./components/pages/A2LabRequest"));

// Extra
const Errorpage = React.lazy(() => import("./components/pages/Errorpage"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);   
  }, [pathname])

  return children || null
})


function App() {
  (localStorage.getItem('language') === 'en') ? i18n.changeLanguage("en") : i18n.changeLanguage("fr");
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Switch>
            {/* Home */}
            <Route exact path="/" component={Hometwo} />
            {/* Laboratoire */}
            <Route exact path="/laboratoire" component={Laboratoire} />
             {/* PandaScan */}
             <Route exact path="/pandascan" component={PandaScan} />
            {/* Nos solutions */}
            <Route exact path="/protheses-conjointes" component={ProthesesConjointes} />
            <Route exact path="/protheses-adjointes" component={ProthesesAdjointes} />
            <Route exact path="/gouttiere" component={Gouttiere} />
            <Route exact path="/rayplicker" component={Rayplicker} />
            {/* Contact */}
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contact-remerciement" component={Contact_remerciement} />
            {/* Ariel aligner */}
            <Route exact path="/ariel-aligner" component={Ariel_aligner} />
            <Route exact path="/a2lab-request" component={A2LabRequest} />
            {/* Extra */}
            <Route exact path="/error-page" component={Errorpage} />
            <Route exact component={Errorpage} />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;

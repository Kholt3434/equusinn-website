import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Meetings from "./pages/Meetings";
import Groups from "./pages/Groups";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import ThingsToDo from "./pages/ThingsToDo";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/rooms"} component={Rooms} />
      <Route path={"/amenities"} component={Amenities} />
      <Route path={"/location"} component={Location} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/meetings"} component={Meetings} />
      <Route path={"/groups"} component={Groups} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/reviews"} component={Reviews} />
      <Route path={"/things-to-do"} component={ThingsToDo} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

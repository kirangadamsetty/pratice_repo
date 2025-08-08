import { createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import ScrollToTop from "./utils/ScrollToTop.jsx"
import {ProtectedRoute} from "./components/SignIn.jsx"; // the route guard
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import { Outlet } from "react-router-dom";
import {lazy , Suspense} from "react"
import EcommerceContextProvider from "./utils/ecommerceContext.jsx"
import store from "./utils/Store.jsx"
import {Provider} from "react-redux"

const DropDown = lazy(()=>import("./components/DropDown.jsx"))
const ProgressBar = lazy(()=>import("./components/ProgressBar.jsx"))
const SearchFilter = lazy(()=>import("./components/SearchFilter.jsx"))
const Counter = lazy(()=>import("./components/Counter.jsx"))
const StateAndCapital = lazy(()=>import("./components/StatesAndCapital.jsx"))
const InputChips = lazy(()=>import("./components/InputChips.jsx"))
const TodoList = lazy(()=>import("./components/TodoList.jsx"))
const Product = lazy(()=>import("./components/Product.jsx"))
const InfiniteScroll = lazy(()=>import("./components/InfiniteScroll.jsx"))
const StopWatch = lazy(()=>import("./components/StopWatch.jsx"))
const OtpReceiver = lazy(()=>import("./components/OtpReceiver.jsx"))
const DetailProductPage = lazy(()=>import("./components/DetailProductPage.jsx"))
const PromiseExample = lazy(()=>import("./components/PromiseExample.jsx"))
const Notesmain = lazy(()=>import("./components/Notesmain.jsx"))
const CheckoutStepper = lazy(()=>import("./components/CheckoutStepper.jsx"))
const UsersList = lazy(()=>import("./components/UsersList.jsx"))
const UsersData = lazy(()=>import("./components/usersData.jsx"))
const SelectColours = lazy(()=>import("./components/SelectColours.jsx"))
const TicTacToe = lazy(()=>import("./components/TicTacToe.jsx"))
const EcommerceDetailPage = lazy(()=>import("./components/EcommerceDetailPage.jsx"))
const Home = lazy(()=>import("./components/Home.jsx"))
const PaginationWithUrl = lazy(()=>import("./components/PaginationWithUrl.jsx"))
const EcommerceStore  = lazy(()=>import("./components/EcommerceStore.jsx"))
const InfiniteScrollUrl  = lazy(()=> import("./components/InfiniteScrollUrl.jsx"))
const CartPage = lazy(()=>import("./components/CartPage.jsx"))
function AppLayout() {
  return (
    <>
    <EcommerceContextProvider>
    <Provider store = {store}>
    <ScrollToTop/>
      <Header />
      <Suspense fallback = {<div>Loading.....</div>}><Outlet /></Suspense>
      <Footer />
      </Provider>
      </EcommerceContextProvider>
    </>
  );
}

const appRouter = createBrowserRouter([
 
  {
    path: "/",
    element: <AppLayout />, // 🔒 Protected Route Wrapper
    children: [
      
          { path: "", element: <Home /> },
          { path: "dropdown", element: <DropDown /> },
          { path: "progressbar", element: <ProgressBar /> },
          { path: "search", element: <SearchFilter /> },
          { path: "counter", element: <Counter /> },
          { path: "statescapitals", element: <StateAndCapital /> },
          { path: "inputchips", element: <InputChips /> },
          { path: "todo", element: <TodoList /> },
          {path : "products", element  : <Product/>},
          {path : "infinitescroll", element : <InfiniteScroll/>},
          {path : "stopwatch", element : <StopWatch/>},
          {path : "otp", element : <OtpReceiver/>},
          {path : "detailproductInfo/:id", element : <DetailProductPage/>} ,
          {path : "promise", element : <PromiseExample/>},
           {path : "notes", element : <Notesmain/>},
          {path : "stepper", element : <CheckoutStepper/>},
          {path : "userlist", element : <UsersList/>},
          {path : "selectcolours", element : <SelectColours/>},
          {path : "tictactoe", element : <TicTacToe/>},
          {path : "urlpagination", element  :<PaginationWithUrl/>},
          {path : "urlInfiniteScroll", element : <InfiniteScrollUrl/>},
          {path :"usersData", element : <UsersData/>},
          {path : "ecommerce", element : <EcommerceStore/>},
          {path:"cart", element : <CartPage/>},
          {path : "ecommerceDetail/:id", element : <EcommerceDetailPage/>}
        ],
  
  },
]);

export default appRouter;

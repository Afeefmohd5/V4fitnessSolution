import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import UserDashboard from './user/UserDashboard.jsx'
import EditProfile from './user/EditProfile.jsx'
import ConfigureBroker from './user/ConfigureBroker.jsx'
import AccessTrading from './user/AccessTrading.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import AdminNavbar from './admin/AdminNavbar.jsx'
import AdminProfile from './admin/AdminProfile.jsx'
import UserManagement from './admin/UserManagement.jsx'
import MainTradingPortal from './admin/MainTradingPortal.jsx'
import UserHome from './user/UserHome.jsx'
import CreateUpdateSubscription from './admin/CreateUpdateSubscription.jsx'
import SegmentCreation from './admin/SegmentCreation.jsx'
import AddUserSegment from './admin/AddUserSegment.jsx'
import SeeAllUsers from './admin/SeeAllUsers.jsx'
import CurrentTradeLogs from './admin/CurrentTradeLogs.jsx'
import PastTradeLogs from './admin/PastTradeLogs.jsx'
import TradeExecution from './admin/TradeExecution.jsx'
import OptionChain from './admin/OptionChain.jsx'
import SelectUserSegment from './admin/SelectUserSegment.jsx'
import Quantity from './admin/Quantity.jsx'
import Market from './admin/Market.jsx'
import PlaceOrder from './admin/PlaceOrder.jsx'
import ManageSubscriptions from './admin/ManageSubscriptions.jsx'
import Invoice from './admin/Invoice.jsx'
import { SubscriptionProvider } from './admin/SubscriptionContext'
import { SegmentCategoryProvider } from './admin/SegmentCategoryContext'
import './App.css'

function App() {
  return (
    <SubscriptionProvider>
      <SegmentCategoryProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<UserDashboard />}>
              <Route index element={<UserHome />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="configure-broker" element={<ConfigureBroker />} />
              <Route path="access-trading" element={<AccessTrading />} />
            </Route>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/create-update-subscription" element={<CreateUpdateSubscription />} />
            <Route path="/admin/manage-subscriptions" element={<ManageSubscriptions />} />
            <Route path="/admin/invoice" element={<Invoice />} />
            <Route path="/admin/segment-creation" element={<SegmentCreation />} />
            <Route path="/admin/add-user-segment" element={<AddUserSegment />} />
            <Route path="/admin/see-all-users" element={<SeeAllUsers />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/trading-portal" element={<MainTradingPortal />} />
            <Route path="/admin/current-trade-logs" element={<CurrentTradeLogs />} />
            <Route path="/admin/past-trade-logs" element={<PastTradeLogs />} />
            <Route path="/admin/trade-execution" element={<TradeExecution />}>
              <Route index element={<OptionChain />} />
              <Route path="option-chain" element={<OptionChain />} />
              <Route path="select-user-segment" element={<SelectUserSegment />} />
              <Route path="quantity" element={<Quantity />} />
              <Route path="market" element={<Market />} />
              <Route path="place-order" element={<PlaceOrder />} />
            </Route>
          </Routes>
        </Router>
      </SegmentCategoryProvider>
    </SubscriptionProvider>
  )
}

export default App

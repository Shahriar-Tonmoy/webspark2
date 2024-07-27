import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
// import App from './pages/App';
import LoginPage from './pages/Login';
import Registration from './pages/Registration';
import AccountInfo from './pages/AccountInfo';
import ActivateAccountPage from './pages/ActivateAccount';
// import HomepageUpdated from './pages/HomepageUpdated';
import Forgotpass from './pages/Forgotpass';
import Artboard from './pages/ArtBoard';
import HistoryPreview from './pages/HistoryPreview';
import GAuth from './pages/ReactGoogle/pages/GAuth';
import BuyServices from './pages/BuyServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PaymentSuccess from './pages/sslcoomerz/pages/paymentsuccess';
import PaymentFailed from './pages/sslcoomerz/pages/Paymentfailed';
import PaymentCancelled from './pages/sslcoomerz/pages/PaymentCanceled';
import Checkout from './pages/Checkout';
import NotFound404 from './pages/NotFound404';
import RefundPolicy from './pages/RefoundPolicy';
import DeliveryPolicy from './pages/DeleveryPolicy';
// import Aboutus from './pages/Aboutus';
import Payment from './pages/stripe/Payment';
import Completion from './pages/stripe/Completion';
// import HomepageParallax from './pages/HomepageParalax';

import PreviewPage from './pages/PreviewPage';
import PreviewTest from './pages/PreviewTest';
import Aboutusv2 from './pages/Aboutusv2';
import TempAppPage from './pages/TempAppPage';
import LandingPage from './V2Updates/pages/LandingPage';

// import T1dev1 from './templates/pages/T1dev1';
// import T1Prod1 from './templates/pages/T1Prod1';
// import Starter from './pages/Starter';


export default function AppRoutes() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/'  element={<TempAppPage />} /> */}
                    {/* <Route path='/' index={true} element={<HomepageParallax />} /> */}
                    <Route path='/' index={true} element={<LandingPage />} />
                    <Route path='/forgot' element={<Forgotpass />} />
                    {/* <Route path='/about' element={<Aboutus />} /> */}
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<Registration />} />
                    {/* <Route path='/template' element={<T1dev1 />} /> 
                    <Route path='/start' element={<Starter />} /> */}
                    {/* <Route path="/code" element={<App />} /> */}
                    <Route path="/code" element={<TempAppPage />} />
                    <Route path='/about' element={<Aboutusv2 />} />
                    <Route path='/account' element={<AccountInfo />} />
                    <Route path='/activate' element={<ActivateAccountPage />} />
                    <Route path='/artboard' element={<Artboard />} />
                    <Route path='/history' element={<HistoryPreview />} />
                    <Route path='/services' element={<BuyServices />} />
                    <Route path='/gauth' element={<GAuth />} />
                    <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                    <Route path='/refundpolicy' element={<RefundPolicy />} />
                    <Route path='/deliverypolicy' element={<DeliveryPolicy />} />
                    <Route path='/success' element={<PaymentSuccess />} />
                    <Route path='/fail' element={<PaymentFailed />} />
                    <Route path='/cancel' element={<PaymentCancelled />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/completion' element={<Completion />} />
                    {/* <Route path='/site/:user/:siteid' element={<T1Prod1/>} /> */}
                    <Route path='*' element={<NotFound404 />} />
                    <Route path={'/previewsite'} element={<PreviewPage />} />
                    <Route path={'/prevtest'} element={<PreviewTest />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

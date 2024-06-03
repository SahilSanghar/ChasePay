import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './View/Personal/Home.jsx'
import Business from './View/Business/Business.jsx';
import Commercial from './View/Commercial/Commercial';
import Global from './View/Global/Global';
import CheckingAcc from './Interactor/Description/CheckingAcc/CheckingAcc';
import ChaseTotCheck from './Interactor/Description/CheckingAcc/ChaseTotCheck';
import SavingAcc from './Interactor/Description/SavingsAcc/SavingAcc';
import InterestRate from './Interactor/Description/SavingsAcc/InterestRate';
import CreditCards from './Interactor/Description/CreditCards/CreditCards';
import OfferRewards from './Interactor/Description/CreditCards/OfferRewards';
import Cashback from './Interactor/Description/CreditCards/Cashback';
import Travel from './Interactor/Description/CreditCards/Travel';
import FreeCreditScore from './Interactor/Description/CreditCards/FreeCreditScore';
import Mortgages from './Interactor/Description/Mortgages/Mortgages'
import RefMort from './Interactor/Description/Mortgages/RefMort';
import MortRates from './Interactor/Description/Mortgages/MortRates';
import MortCalc from './Interactor/Description/Mortgages/MortCalc';
import EduCen from './Interactor/Description/Mortgages/EduCen';
import ChAuto from './Interactor/Description/Auto/ChAuto';
import AutoFin from './Interactor/Description/Auto/AutoFin';
import PayCal from './Interactor/Description/Auto/PayCal';
import AutoEdu from './Interactor/Description/Auto/AutoEdu';
import Checking from './Interactor/Description/Business/Checking'
import SmallLoans from './Interactor/Description/Business/SmallLoans'
import BCCards from './Interactor/Description/Business/BCCards'
import MerSer from './Interactor/Description/Business/MerSer'
import ResCent from './Interactor/Description/Business/ResCent'
import FinAdv from './Interactor/Description/Investing/FinAdv'
import InvOnl from './Interactor/Description/Investing/InvOnl'
import InvEdu from './Interactor/Description/Investing/InvEdu'
import WeaManBran from './Interactor/Description/Investing/WeaManBran'
import OffProCou from './Interactor/Description/Investing/OffProCou'
import NoEveryday from './Interactor/Description/PrivClient/NoEveryday'
import DediTeam from './Interactor/Description/PrivClient/DediTeam'
import SpPerBen from './Interactor/Description/PrivClient/SpPerBen'
import ChBranch from './Interactor/Description/PrivClient/ChBranch'
import BankEduCen from './Interactor/Description/AboutChasepay/BankEduCen'
import CustSer from './Interactor/Description/AboutChasepay/CustSer'
import CompFeed from './Interactor/Description/AboutChasepay/CompFeed'
import Act from './Interactor/Description/AboutChasepay/Act'
import Experience from './Interactor/Description/Sport&Entertainment/Experience'
import usOpen from './Interactor/Description/Sport&Entertainment/usOpen'
import MSG from './Interactor/Description/Sport&Entertainment/MSG'
import Center from './Interactor/Description/Sport&Entertainment/Center'
import SecFeat from './Interactor/Description/SecurityCenter/SecFeat'
import Protect from './Interactor/Description/SecurityCenter/Protect'
import PYou from './Interactor/Description/SecurityCenter/PYou'
import FinAbuse from './Interactor/Description/SecurityCenter/FinAbuse'
import Scammers from './Interactor/Description/SecurityCenter/Scammers'
import Report from './Interactor/Description/SecurityCenter/Report'

function App() {

  return (
    <Routes>
      
      {/* Main */}
      <Route path="/" element={<Home />} />
      <Route path="/business" element={<Business />} />
      <Route path="/commercial-banking" element={<Commercial />} />
      <Route path="/global" element={<Global />} />

      {/* Checking Account */}
      <Route path="/personal/checking" element={<CheckingAcc />} />
      <Route path="/consumer/banking/seo" element={<ChaseTotCheck />} />
      
      {/* Savings Account */}
      <Route path="/personal/savings" element={<SavingAcc />} />
      <Route path="/personal/savings/bank-cd" element={<InterestRate />} />
      
      {/* Credit Card */}
      <Route path="/creditcards.chasepay.com" element={<CreditCards />} />
      <Route path="/creditcards.chasepay.com/rewards-credit-cards" element={<OfferRewards />} />
      <Route path="/creditcards.chasepay.com/cash-back-credit-cards" element={<Cashback />} />
      <Route path="/creditcards.chasepay.com/travel-credit-cards" element={<Travel />} />
      <Route path="/personal/credit-cards/free-credit-score" element={<FreeCreditScore />} />
      
      {/* Mortgages */}
      <Route path="/personal/mortgage" element={<Mortgages />} />
      <Route path="/personal/mortgage/mortgage-refinance" element={<RefMort />} />
      <Route path="/personal/mortgage/mortgage-rates" element={<MortRates />} />
      <Route path="/personal/mortgage/calculators-resources/mortgage-calculator" element={<MortCalc />} />
      <Route path="/personal/mortgage/education" element={<EduCen />} />
      
      {/* Auto */}
      <Route path="/autofinance.chase.com" element={<ChAuto />} />
      <Route path="/auto-finance/auto-loans" element={<AutoFin />} />
      <Route path="/autopreferred.chase.com/garage/auto-loan-calculator" element={<PayCal />} />
      <Route path="/personal/auto/education" element={<AutoEdu />} />

      {/* Chase for Buisness */}
      <Route path="/business/banking/checking" element={<Checking />} />
      <Route path="/business/banking/loans" element={<SmallLoans />} />
      <Route path="/creditcards.chase.com/business-credit-cards" element={<BCCards />} />
      <Route path="/business/payments" element={<MerSer />} />
      <Route path="/business/knowledge-center" element={<ResCent />} />

      {/* Investing */}
      <Route path="/personal/investments/advisor-services" element={<FinAdv />} />
      <Route path="/personal/investments/online-investing" element={<InvOnl />} />
      <Route path="/personal/investments/learning-and-insights" element={<InvEdu />} />
      <Route path="/WesleyPBrewerwealthmanagement.chase.com/advisor" element={<WeaManBran />} />
      <Route path="/investing/self-directedoffer" element={<OffProCou />} />

      {/* Chase Private Client */}
      <Route path="/personal/checking/private-client#personalized-financial-relationship" element={<NoEveryday />} />
      <Route path="/personal/checking/private-client/team" element={<DediTeam />} />
      <Route path="/personal/checking/private-client/perks" element={<SpPerBen />} />
      <Route path="/investing/self-directedoffer" element={<ChBranch />} />

      {/* About Chasepay */}
      <Route path="/personal/banking/education" element={<BankEduCen />} />
      <Route path="/digital/customer-service" element={<CustSer />} />
      <Route path="/digital/resources/complaints-feedback" element={<CompFeed />} />
      <Route path="/digital/resources/about-chase/cra-public-file" element={<Act />} />

      {/* Sports & Entertainment */}
      <Route path="/personal/events/experiences" element={<Experience />} />
      <Route path="/personal/events/us-open" element={<usOpen />} />
      <Route path="/www.msg.com/madison-square-garden" element={<MSG />} />
      <Route path="/personal/events/chase-center" element={<Center />} />

      {/* Chase Security Center */}
      <Route path="/digital/resources/privacy-security" element={<SecFeat />} />
      <Route path="/digital/resources/privacy-security/security/how-you-can-protect" element={<Protect />} />
      <Route path="/digital/resources/privacy-security/security/how-we-protect-you" element={<PYou />} />
      <Route path="/digital/resources/privacy-security/financial-abuse" element={<FinAbuse />} />
      <Route path="/digital/resources/privacy-security/security/how-to-spot-scams" element={<Scammers />} />
      <Route path="/digital/resources/privacy-security/security/report-fraud" element={<Report />} />
      {/* <Route path="/settings" element={<Settings />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App

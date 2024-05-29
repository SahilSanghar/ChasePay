import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './View/Personal/Home.jsx'
import Business from './View/Business/Business.jsx';
import Commercial from './View/Commercial/Commercial';
import Global from './View/Global/Global';
import CheckingAcc from './Interactor/CheckingAcc/CheckingAcc';
import ChaseTotCheck from './Interactor/CheckingAcc/ChaseTotCheck';
import SavingAcc from './Interactor/SavingsAcc/SavingAcc';
import InterestRate from './Interactor/SavingsAcc/InterestRate';
import CreditCards from './Interactor/CreditCards/CreditCards';
import OfferRewards from './Interactor/CreditCards/OfferRewards';
import Cashback from './Interactor/CreditCards/Cashback';
import Travel from './Interactor/CreditCards/Travel';
import FreeCreditScore from './Interactor/CreditCards/FreeCreditScore';
import Mortgages from './Interactor/Mortgages/Mortgages'
import RefMort from './Interactor/Mortgages/RefMort';
import MortRates from './Interactor/Mortgages/MortRates';
import MortCalc from './Interactor/Mortgages/MortCalc';
import EduCen from './Interactor/Mortgages/EduCen';
import ChAuto from './Interactor/Auto/ChAuto';
import AutoFin from './Interactor/Auto/AutoFin';
import PayCal from './Interactor/Auto/PayCal';
import AutoEdu from './Interactor/Auto/AutoEdu';
import Checking from './Interactor/Business/Checking'
import SmallLoans from './Interactor/Business/SmallLoans'
import BCCards from './Interactor/Business/BCCards'
import MerSer from './Interactor/Business/MerSer'
import ResCent from './Interactor/Business/ResCent'
import FinAdv from './Interactor/Investing/FinAdv'
import InvOnl from './Interactor/Investing/InvOnl'
import InvEdu from './Interactor/Investing/InvEdu'
import WeaManBran from './Interactor/Investing/WeaManBran'
import OffProCou from './Interactor/Investing/OffProCou'
import NoEveryday from './Interactor/PrivClient/NoEveryday'
import DediTeam from './Interactor/PrivClient/DediTeam'
import SpPerBen from './Interactor/PrivClient/SpPerBen'
import ChBranch from './Interactor/PrivClient/ChBranch'

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

      {/* <Route path="/settings" element={<Settings />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App

import { useState } from 'react';
import CalcForm from './components/CalcForm';
import Header from './components/Header';
import ResultTable from './components/ResultTable';

function App() {
  const [dataList, setDataList] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState(0);

  const calculateHandler = (formData) => {
    let currentSavings = +formData.currentSavings;
    const yearlyContribution = +formData.yearlySavings;
    const expectedReturn = +formData.expectedInterest / 100;
    const duration = +formData.investmentDuration;

    // The below code calculates yearly results (total savings, interest etc)
    const yearlyData = [];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setInitialInvestment(+formData.currentSavings);
    setDataList(yearlyData);
  };

  return (
    <div>
      <Header />
      <CalcForm calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {dataList.length > 0 ? (
        <ResultTable dataList={dataList} initialInvestment={initialInvestment} />
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}

export default App;

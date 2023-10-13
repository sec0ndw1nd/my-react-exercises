import styled from 'styled-components';

const StyledTable = styled.table`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;

  & thead {
    font-size: 0.7rem;
    color: #83e6c0;
  }

  & tbody {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.85rem;
    color: #c2e9e0;
  }
`;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ResultTable({ dataList, initialInvestment }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((data) => (
          <tr key={`year-${data.year}`}>
            <td>{data.year}</td>
            <td>{formatter.format(data.savingsEndOfYear)}</td>
            <td>{formatter.format(data.yearlyInterest)}</td>
            <td>
              {formatter.format(
                data.savingsEndOfYear - initialInvestment - data.yearlyContribution * data.year,
              )}
            </td>
            <td>{formatter.format(initialInvestment + data.yearlyContribution * data.year)}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

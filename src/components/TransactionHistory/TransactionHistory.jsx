import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableHeadCell,
  TransactionTableRow,
  TransactionTableCell,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable border="1">
      <TransactionTableHead>
        <TransactionTableRow>
          <TransactionTableHeadCell>Type</TransactionTableHeadCell>
          <TransactionTableHeadCell>Amount</TransactionTableHeadCell>
          <TransactionTableHeadCell>Currency</TransactionTableHeadCell>
        </TransactionTableRow>
      </TransactionTableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTableRow key={id}>
            <TransactionTableCell>{type}</TransactionTableCell>
            <TransactionTableCell>{amount}</TransactionTableCell>
            <TransactionTableCell>{currency}</TransactionTableCell>
          </TransactionTableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

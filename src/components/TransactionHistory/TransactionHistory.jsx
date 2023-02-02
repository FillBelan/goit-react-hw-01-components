import PropTypes from 'prop-types';
import {
  TransactionHistoryStyle,
  TableHeadStyle,
  TableRowStyle,
  TableBodyRowStyle,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryStyle>
      <TableHeadStyle>
        <tr>
          <TableRowStyle>Type</TableRowStyle>
          <TableRowStyle>Amount</TableRowStyle>
          <TableRowStyle>Currency</TableRowStyle>
        </tr>
      </TableHeadStyle>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableBodyRowStyle>{item.type}</TableBodyRowStyle>
            <TableBodyRowStyle>{item.amount}</TableBodyRowStyle>
            <TableBodyRowStyle>{item.currency}</TableBodyRowStyle>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryStyle>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

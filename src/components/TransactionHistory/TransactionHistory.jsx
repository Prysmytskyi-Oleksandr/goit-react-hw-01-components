import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  const listTransaction = items.map(item => (
    <tr key={item.id} className={styles.string}>
      <td className={styles.table_cell}>{item.type}</td>
      <td className={styles.table_cell}>{item.amount}</td>
      <td className={styles.table_cell}>{item.currency}</td>
    </tr>
  ));

  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr className={styles.table_header}>
          <th className={styles.header_cell}>TYPT</th>
          <th className={styles.header_cell}>AMOUNT</th>
          <th className={styles.header_cell}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>{listTransaction}</tbody>
    </table>
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


import Table from 'react-bootstrap/Table';

function HostelUserPaymentData() {
  const UserPaymentsTableHeadings = ['Room Number', 'Name', 'Phone', 'due_date'];

  const UserPaymentsData = [
    {
      'Room Number': '201',
      'Name': 'Ahmad Pasha',
      'Phone': '999999999',
      'due_date': '02-05-24'
    },
    {
      'Room Number': '201',
      'Name': 'Vikram',
      'Phone': '999992299',
      'due_date': '05-05-24'
    }
  ];

  return (
    <Table responsive >
      <thead>
        <tr>
          <th>#</th>
          {UserPaymentsTableHeadings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {UserPaymentsData.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {UserPaymentsTableHeadings.map((heading, cellIndex) => (
              <td key={cellIndex}>{rowData[heading]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default HostelUserPaymentData;

import Table from 'react-bootstrap/Table';

function PaymentData() {


  const UserPaymentsTableHeadings= [
    'Room Number',
    'Name',
    'Phone',
     'due_date'

]

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {UserPaymentsTableHeadings.map((e, index) => (
            <th key={index}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {UserPaymentsTableHeadings.map((e, index) => (
            <td key={index}>{e}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {UserPaymentsTableHeadings.map((e, index) => (
            <td key={index}>{e}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default PaymentData;
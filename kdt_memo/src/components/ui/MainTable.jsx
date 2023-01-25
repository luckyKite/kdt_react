import Table from 'react-bootstrap/Table';
import Forms from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function MainTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>check</th>
          <th>english</th>
          <th>korean</th>
          <th>controller</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <Forms>
              <Forms.Check type="checkbox" />
            </Forms>
          </td>
          <td>apple</td>
          <td>사과</td>
          <td>
            <Button variant="primary">답 보기</Button>{' '}
            <Button variant="secondary">삭제</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MainTable;
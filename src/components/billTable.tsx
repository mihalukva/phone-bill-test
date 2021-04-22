export default function Table(props: any) {
  let newTable;
  if (props.list.length > 0) {
    newTable = props.list.map((oneTotalCall: any, index: number) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{oneTotalCall.number}</td>
        <td>{oneTotalCall.duration}</td>
        <td>{oneTotalCall.cost}</td>
      </tr>
    ));
  } else {
    newTable = <tr></tr>;
  }
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Number</th>
          <th scope="col">Duration</th>
          <th scope="col">Cost</th>
        </tr>
      </thead>
      <tbody>{newTable}</tbody>
    </table>
  );
}

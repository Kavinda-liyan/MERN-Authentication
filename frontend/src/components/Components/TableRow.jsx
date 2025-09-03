const TableRow = ({ title, data }) => {
  return (
    <>
      <tr className="my-2">
        <th>{title}</th>
        <td>{data}</td>
      </tr>
    </>
  );
};

export default TableRow;

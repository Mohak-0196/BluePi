import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import CustomTable from "./CustomTable";
import makeData from "./makeData";

function TableComponent() {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          { Header: "First Name", accessor: "firstName" },
          { Header: "Last Name", accessor: "lastName" },
        ],
      },
      {
        Header: "Info",
        columns: [
          { Header: "Age", accessor: "age" },
          { Header: "Visits", accessor: "visits" },
          { Header: "Status", accessor: "status" },
          { Header: "Profile Progress", accessor: "progress" },
        ],
      },
    ],
    []
  );

  const data = useMemo(() => makeData(50), []);

  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <>
      <CustomTable
        columns={columns}
        data={data}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        pageSize={pageSize}
        setPageSize={setPageSize}
        gotoPage={gotoPage}
        pageIndex={pageIndex}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageCount={pageCount}
        pageOptions={pageOptions}
      />
    </>
  );
}

export default TableComponent;

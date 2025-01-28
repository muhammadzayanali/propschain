import React, { act, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Swal from "sweetalert2";

const handleerror = () => {
  Swal.fire({
    title: "Warning",
    text: "Are you sure you want to delete this user?",
    icon: "warning",
    confirmButtonText: "Yes,delete it!",
    cancelButtonText: "No, cancel!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

const DataTableTemp = ({ data, columns, hrf }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const addimg = (img) => {
    return (
      <div className="">
        <button
          className="flex justify-center items-center"
          onClick={handleerror}
        >
          <img
            src={img}
            alt="Action"
            className="image border p-1 rounded-full bg-[#F5F6FA]"
          />
        </button>
      </div>
    );
  };

  const adimg = (img) => {
    return (
      <div className="flex justify-center gap-5 items-center flex-row">
        <img src="/Component 18.png" alt="Rating" className="image" />
        <span>{img}</span>
      </div>
    );
  };

  const paginatedData = data.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );
  const setpri = (pri) => {
    switch (pri) {
      case "High":
        return (
          <div className="flex flex-row items-center">
            <img src="arrows-up.png" alt="Priority Icon" className="mr-2" />
            <span>{pri}</span>
          </div>
        );
      case "Low":
        return (
          <div className="flex flex-row items-center">
            <img src="arrow-down.png" alt="Priority Icon" className="mr-2" />
            <span>{pri}</span>
          </div>
        );
      case "Medium":
        return (
          <div className="flex flex-row items-center">
            <img src="arrow-up2.png" alt="Priority Icon" className="mr-2" />
            <span>{pri}</span>
          </div>
        );
      default:
        return "";
    }
  };
  const getStatusClass = (status) => {
    switch (status) {
      case "Solved":
      case "Completed":
        return "bg-green-200 text-green-400";
      case "Failed":
        return "bg-red-100 text-red-400";
      case "Pending":
        return "bg-orange-100 text-orange-400";
      default:
        return "";
    }
  };

  const handleRowClick = (rowData) => {
    navigate(hrf, { state: rowData });
  };

  return (
    <div className="mt-6">
      <div className="rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white">
        <DataTable value={paginatedData}>
          {columns.map((col, index) => (
            <Column
              key={index}
              field={col.field}
              header={col.header}
              sortable
              headerStyle={{
                backgroundColor: "#f9fafb",
                fontWeight: "bold",
                textAlign: "left",
                borderBottom: "2px solid #e5e7eb",
                padding: "10px",
              }}
              bodyStyle={{
                padding: "10px 8px",
                textAlign: "left",
                borderBottom: "1px solid #e5e7eb",
              }}
              body={(rowData) => {
                if (col.field === "Status") {
                  return (
                    <div
                      className={`py-1 px-1 rounded-md text-center ${getStatusClass(
                        rowData.Status
                      )}`}
                    >
                      {rowData.Status}
                    </div>
                  );
                } else if (col.field === "Ticket") {
                  return (
                    <button onClick={() => handleRowClick(rowData)}>
                      {rowData.Ticket}
                    </button>
                  );
                } else if (col.field == "Priority") {
                  return <>{setpri(rowData.Priority)}</>;
                } else if (col.field === "action") {
                  return <>{addimg(rowData.action)}</>;
                } else if (col.field === "rating") {
                  return <>{adimg(rowData.rating)}</>;
                }
                return rowData[col.field];
              }}
            />
          ))}
        </DataTable>
      </div>
      <div className="flex justify-center items-center mt-4 gap-5">
        <div>
          <button
            onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-4 py-2 text-sm bg-white rounded-md border border-gray-300 hover:bg-gray-300 disabled:bg-white disabled:text-gray-300 disabled:cursor-not-allowed transition-all"
          >
            <div className="flex flex-row gap-4 justify-center items-center">
              <svg
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1.16699L1 7.00033L6 12.8337"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Previous</span>
            </div>
          </button>
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-3 py-2 text-sm rounded-md border ${
                index === currentPage
                  ? "bg-[#002C6B] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition-all`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages - 1, currentPage + 1))
          }
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 text-sm bg-[#002C6B] rounded-md border text-white border-gray-300 hover:bg-blue-700 disabled:bg-[#002C6B] disabled:text-gray-300 disabled:cursor-not-allowed transition-all"
        >
          <div className="flex flex-row gap-4">
            <span>Next</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4.16699L13 10.0003L8 15.8337"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DataTableTemp;

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useNavigate } from "react-router-dom";
import { PrimeIcons } from "primereact/api"; 
import "primereact/resources/themes/saga-blue/theme.css";  
import "primereact/resources/primereact.min.css";         
import "primeicons/primeicons.css";                      

const Data = () => {
  const [customData, setCustomData] = useState([
    { userId: 2143566435434, id: "SheldonDJ@jourrapide.com", title: "Sheldon D.", body: "15 Feb, 2024", body1: "$1,499,000 USD", body2: "Failed"},
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Failed" },
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Complete" },
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Failed" },
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Pending" },
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Failed" },
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Pending" },
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Failed" },
    { userId: 2143566435434, id: "JohnSmith@jourrapide.com", title: "Sheldon D.", body: "20 Jan, 2024", body1: "$1,499,000 USD", body2: "Pending" },
    
  ]);

  const navigate = useNavigate(); 

  const statusTemplate = (rowData) => {
    return (
      <button
        onClick={() => navigate("/records")}
        className={`px-4 py-2  rounded-lg ${
          rowData.body2 === "Failed" || rowData.body2 === "Pending" ? "bg-[#FEE9EA] text-red-400" : "bg-[#E9F9F1] text-green-600"
        }`}
      >
        {rowData.body2}
      </button>
    );
  };

  return (
    <div>
      <DataTable value={customData} paginator rows={10} sortMode="multiple">
        <Column
          field="userId"
          header="Transaction ID"
          sortable
          sortIcon={PrimeIcons.SORT_ALT}
        />
        <Column
          field="id"
          header="Email Address"
          sortable
          sortIcon={PrimeIcons.SORT_ALT}
        />
        <Column
          field="title"
          header="Full Name"
          sortable
          sortIcon={PrimeIcons.SORT_ALT}
        />
        <Column
          field="body"
          header="Transaction Date"
          sortable
          sortIcon={PrimeIcons.SORT_ALT}
        />
        <Column
          field="body1"
          header="Amount"
          sortable
          sortIcon={PrimeIcons.SORT_ALT}
        />
        <Column
          header="Status"
          body={statusTemplate} 
        />
      </DataTable>
    </div>
  );
};

export default Data;

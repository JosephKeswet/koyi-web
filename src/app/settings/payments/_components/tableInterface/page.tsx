'use client'

import React from "react";
import { GenericTable } from "./DataTable";
import { OVERVIEWTABLE_ITEMS } from "@/constants/Tableitems";
import { columns } from "./Column";

const OverviewTable = () => {
  // Since the data is static and imported, no need to use state or useEffect
  return (
    <div className="h-[600px] pb-4 bg-white rounded-lg">
      {OVERVIEWTABLE_ITEMS.length > 0 ? (
        <GenericTable columns={columns} data={OVERVIEWTABLE_ITEMS} />
      ) : (
        <p>No data available.</p>  // You might want to change this message since data is static
      )}
    </div>
  );
};

export default OverviewTable;

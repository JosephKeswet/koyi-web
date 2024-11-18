import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

export default function CustomDialog({ button, activeDialog, setActiveDialog }) {
    const [charges, setCharges] = useState([{ title: "", amount: "" }]);

  const handleAddCharge = () => {
    setCharges([...charges, { title: "", amount: "" }]);
  };

  const handleRemoveCharge = (index: number) => {
    setCharges(charges.filter((_, i) => i !== index));
  };

  return (
    <Dialog onOpenChange={(open) => setActiveDialog(open ? button.id : null)}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-full"
          style={{ display: activeDialog === button.id ? "none" : "flex" }}
        >
          {button.icon}
          {button.label}
        </button>
      </DialogTrigger>
      <DialogContent className='h-[500px] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>{button.label}</DialogTitle>
        </DialogHeader>
         <div className="space-y-4">
          {button.id === "scopeOfWork" && (
            <>
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                  Name of project
                </label>
                <input
                  type="text"
                  id="projectName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700">
                  Describe the scope of the task
                </label>
                <textarea
                  id="taskDescription"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </>
          )}
          {button.id === "invoice" && (
            <>
              <div>
                <label htmlFor="invoiceTitle" className="block text-sm font-medium text-gray-700">
                  Invoice Title
                </label>
                <input
                  type="text"
                  id="invoiceTitle"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="serviceFee" className="block text-sm font-medium text-gray-700">
                  Service Fee
                </label>
                <input
                  type="number"
                  id="serviceFee"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              {charges.map((charge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Charge {index + 1}</label>
                    <input
                      type="text"
                      placeholder="Title"
                      value={charge.title}
                      onChange={(e) => {
                        const updatedCharges = [...charges];
                        updatedCharges[index].title = e.target.value;
                        setCharges(updatedCharges);
                      }}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <input
                      type="number"
                      placeholder="₦ 0.00"
                      value={charge.amount}
                      onChange={(e) => {
                        const updatedCharges = [...charges];
                        updatedCharges[index].amount = e.target.value;
                        setCharges(updatedCharges);
                      }}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <button onClick={() => handleRemoveCharge(index)} className="text-red-500">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button onClick={handleAddCharge} className="flex items-center gap-2 mt-2 text-blue-500">
                <Plus className="w-4 h-4" /> Add another charge
              </button>
            </>
          )}
           {button.id === "timeline" && (
            <>
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                  Name of project
                </label>
                <input
                  type="text"
                  id="projectName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start date
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  End date
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </>
             )}
        </div>
        <DialogFooter className='flex flex-col justify-between items-center'>
          <Button variant="secondary" onClick={() => setActiveDialog(null)}>Cancel</Button>
          <Button variant="primary" onClick={() => setActiveDialog(null)}>Save and Share</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
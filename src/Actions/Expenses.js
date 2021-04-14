
import { v4 as uuid } from "uuid";

// ADD EXPENSE
export const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    CreatedAt = 0,
  }) => ({
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      CreatedAt,
    },
  });
  
  // DELETE_EXPENSE
 export  const removeExpense = ({ id } = {}) => ({
    type: "DELETE_EXPENSE",
    id,
  });
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates,
  });
  
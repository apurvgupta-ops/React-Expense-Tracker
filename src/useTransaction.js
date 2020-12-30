import { useContext } from "react";
import { incomeCategories,expenseCategories , resetCategories } from "./constants/categories"
import { ExpenseTrackerContext } from "./Contaxt/Contaxt";

const useTransaction = (title)=>{
    resetCategories();
    const {transaction} =useContext(ExpenseTrackerContext);
    const transactionPerType = transaction.filter((t)=>t.type===title);
    const total = transactionPerType.reduce((acc,currval)=>acc+=currval.amount, 0)
    const categories = title==='Income' ?incomeCategories:expenseCategories;
    console.log({transactionPerType,total,categories});


    transactionPerType.forEach((t)=>{
        const category = categories.find((c)=>c.type===t.category)

        if(category) category.amount+=t.amount;
    });

    const filteredCategories = categories.filter((c)=>c.amount>0);
    const chartData={
        datasets:[{
            data : filteredCategories.map((c)=>c.amount),
            backgroundColor: filteredCategories.map((c)=>c.color)
        }],
        labels: filteredCategories.map((c)=>c.type)
    }


    return{ total ,chartData}
}


export default useTransaction;
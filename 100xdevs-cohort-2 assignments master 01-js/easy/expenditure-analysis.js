/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

 
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If the category already exists, add the price to the total
      if (categoryTotals[category]) {
          categoryTotals[category] += price;
      } else {
          // If the category does not exist, initialize it with the price
          categoryTotals[category] = price;
      }
  });

  // Convert the categoryTotals object into an array of objects
  return Object.keys(categoryTotals).map(category => {
      return {
          category: category,
          totalSpent: categoryTotals[category]
      };
  });
 
}

module.exports = calculateTotalSpentByCategory;

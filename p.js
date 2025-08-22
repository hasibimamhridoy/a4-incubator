function calculateCost(cost) {
  if (typeof cost !== "number" || cost < 0) {
    return "Invalid";
  }
  return cost + cost * 0.2; // Adding 20% tax
}

// console.log(calculateCost(100)); // Output: 20

function removeCommaFromString(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      result += str[i];
    }
  }

  return result.toUpperCase();
}
// console.log(removeCommaFromString("hello,world")); // Output: "helloworld"

function bestProductReview(firstObject, secondObject) {
  if (typeof firstObject !== "object" || typeof secondObject !== "object") {
    return "Invalid";
  }

  const firstReview = firstObject.review || 0;
  const secondReview = secondObject.review || 0;
  const firstRating = firstObject.rating || 0;
  const secondRating = secondObject.rating || 0;
  const firstTotalCount = firstReview + firstRating;
  const secondTotalCount = secondReview + secondRating;

  if (firstTotalCount > secondTotalCount) {
    return {
      product: firstObject.product,
      totalCount: firstTotalCount,
    };
  } else if (secondTotalCount > firstTotalCount) {
    return {
      product: secondObject.product,
      totalCount: secondTotalCount,
    };
  } else {
    return "Both reviews are of equal length";
  }
}
// console.log(
//   bestProductReview(
//     { product: "A", review: 8, rating: 10 },
//     { product: "B", review: 3, rating: 12 }
//   )
// );

function isSameResult(resultObject) {
  const firstData = resultObject.firstData || [];
  const secondData = resultObject.secondData || [];
  if (!Array.isArray(firstData) || !Array.isArray(secondData)) {
    return "Invalid";
  }
  for (let index = 0; index < firstData.length; index++) {
    const firstElement = firstData[index];
    const secondElement = secondData[index];
    if (firstElement !== secondElement) {
      return false;
    }
  }
  return true;
}

// console.log(isSameResult({ firstData: [1, 2, "3"], secondData: [1, 2, 3] })); // Output: true
